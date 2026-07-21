const mongoose = require('mongoose')

const chapterSchema = new mongoose.Schema({
  number: { type: Number, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  pages: { type: Number, default: 0 },
  isPublished: { type: Boolean, default: true }
})

const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
})

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [200, 'Title cannot exceed 200 characters']
  },
  slug: {
    type: String,
    unique: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    maxlength: [2000, 'Description cannot exceed 2000 characters']
  },
  genre: {
    type: String,
    required: true,
    enum: ['Fantasy', 'Sci-Fi', 'Mystery', 'Romance', 'Poetry', 'Nature', 'Art Book', 'Short Story', 'Comic', 'Other']
  },
  coverImage: {
    type: String,
    default: ''
  },
  pages: {
    type: Number,
    default: 0
  },
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'draft'
  },
  chapters: [chapterSchema],
  reviews: [reviewSchema],
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  ratingCount: {
    type: Number,
    default: 0
  },
  reads: {
    type: Number,
    default: 0
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  tags: [String],
  language: {
    type: String,
    default: 'en'
  },
  isPremium: {
    type: Boolean,
    default: false
  },
  price: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
})

// Index for search
bookSchema.index({ title: 'text', description: 'text', tags: 'text' })
bookSchema.index({ genre: 1, status: 1 })
bookSchema.index({ rating: -1 })
bookSchema.index({ createdAt: -1 })

// Pre-save middleware to create slug
bookSchema.pre('save', function(next) {
  if (this.isModified('title')) {
    this.slug = this.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  }
  next()
})

// Method to calculate average rating
bookSchema.methods.calculateRating = function() {
  if (this.reviews.length === 0) {
    this.rating = 0
    this.ratingCount = 0
    return
  }
  const sum = this.reviews.reduce((acc, review) => acc + review.rating, 0)
  this.rating = Math.round((sum / this.reviews.length) * 10) / 10
  this.ratingCount = this.reviews.length
}

module.exports = mongoose.model('Book', bookSchema)
