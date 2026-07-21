const express = require('express')
const User = require('../models/User')

const router = express.Router()

// @route   GET /api/authors
// @desc    Get all authors
// @access  Public
router.get('/', async (req, res) => {
  const authors = await User.find({ role: 'author' })
    .select('name avatar bio followers booksCount totalReads')
    .sort({ followers: -1 })
  res.json({ success: true, authors })
})

// @route   GET /api/authors/:id
// @desc    Get single author with books
// @access  Public
router.get('/:id', async (req, res) => {
  const author = await User.findById(req.params.id)
    .select('-password -email')
    .populate('books', 'title genre rating reads coverImage status')
  if (!author) return res.status(404).json({ success: false, message: 'Author not found' })
  res.json({ success: true, author })
})

module.exports = router
