const express = require('express')
const Analytics = require('../models/Analytics')
const { protect } = require('../middleware/auth')

const router = express.Router()

// @route   GET /api/analytics/dashboard
// @desc    Get author analytics
// @access  Private
router.get('/dashboard', protect, async (req, res) => {
  const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)

  const [reads, likes, followers] = await Promise.all([
    Analytics.countDocuments({ user: req.user._id, type: 'read', createdAt: { $gte: thirtyDaysAgo } }),
    Analytics.countDocuments({ user: req.user._id, type: 'like', createdAt: { $gte: thirtyDaysAgo } }),
    Analytics.countDocuments({ user: req.user._id, type: 'follow', createdAt: { $gte: thirtyDaysAgo } })
  ])

  const monthlyData = await Analytics.aggregate([
    { $match: { user: req.user._id, createdAt: { $gte: thirtyDaysAgo } } },
    { $group: { _id: { $dateToString: { format: '%Y-%m', date: '$createdAt' } }, count: { $sum: 1 } } },
    { $sort: { _id: 1 } }
  ])

  res.json({ success: true, stats: { reads, likes, followers }, monthlyData })
})

// @route   POST /api/analytics/track
// @desc    Track analytics event
// @access  Public
router.post('/track', async (req, res) => {
  const { type, bookId } = req.body
  await Analytics.create({
    type,
    book: bookId,
    user: req.user?._id,
    metadata: { ip: req.ip, userAgent: req.headers['user-agent'] }
  })
  res.json({ success: true })
})

module.exports = router
