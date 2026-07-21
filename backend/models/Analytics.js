const mongoose = require('mongoose')

const analyticsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book'
  },
  type: {
    type: String,
    enum: ['read', 'like', 'share', 'download', 'review', 'follow'],
    required: true
  },
  metadata: {
    ip: String,
    userAgent: String,
    referrer: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

analyticsSchema.index({ user: 1, createdAt: -1 })
analyticsSchema.index({ book: 1, type: 1 })
analyticsSchema.index({ createdAt: -1 })

module.exports = mongoose.model('Analytics', analyticsSchema)
