const mongoose = require('mongoose')

const artworkSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [200, 'Title cannot exceed 200 characters']
  },
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  description: {
    type: String,
    maxlength: [1000, 'Description cannot exceed 1000 characters'],
    default: ''
  },
  category: {
    type: String,
    required: true,
    enum: ['Digital Art', 'Illustration', 'Concept Art', 'Watercolor', 'Oil Painting', 'Sketch', 'Photography', '3D Art', 'Mixed Media', 'Other']
  },
  imageUrl: {
    type: String,
    required: [true, 'Image URL is required']
  },
  thumbnailUrl: {
    type: String,
    default: ''
  },
  tags: [String],
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  views: {
    type: Number,
    default: 0
  },
  comments: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    text: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
  }],
  isFeatured: {
    type: Boolean,
    default: false
  },
  dimensions: {
    width: Number,
    height: Number
  },
  medium: {
    type: String,
    default: ''
  }
}, {
  timestamps: true
})

artworkSchema.index({ category: 1 })
artworkSchema.index({ artist: 1 })
artworkSchema.index({ createdAt: -1 })
artworkSchema.index({ title: 'text', description: 'text', tags: 'text' })

module.exports = mongoose.model('Artwork', artworkSchema)
