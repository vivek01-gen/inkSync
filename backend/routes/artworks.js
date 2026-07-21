const express = require('express')
const Artwork = require('../models/Artwork')
const { protect } = require('../middleware/auth')

const router = express.Router()

// @route   GET /api/artworks
// @desc    Get all artworks
// @access  Public
router.get('/', async (req, res) => {
  const { category, page = 1, limit = 12 } = req.query
  const query = {}
  if (category) query.category = category

  const artworks = await Artwork.find(query)
    .populate('artist', 'name avatar')
    .sort({ createdAt: -1 })
    .limit(limit * 1).skip((page - 1) * limit)

  res.json({ success: true, artworks })
})

// @route   POST /api/artworks
// @desc    Create artwork
// @access  Private
router.post('/', protect, async (req, res) => {
  const artwork = await Artwork.create({ ...req.body, artist: req.user._id })
  res.status(201).json({ success: true, artwork })
})

// @route   DELETE /api/artworks/:id
// @desc    Delete artwork
// @access  Private
router.delete('/:id', protect, async (req, res) => {
  const artwork = await Artwork.findOneAndDelete({ _id: req.params.id, artist: req.user._id })
  if (!artwork) return res.status(404).json({ success: false, message: 'Artwork not found' })
  res.json({ success: true, message: 'Artwork deleted' })
})

module.exports = router
