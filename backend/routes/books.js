const express = require('express')
const Book = require('../models/Book')
const User = require('../models/User')
const { protect } = require('../middleware/auth')

const router = express.Router()

// @route   GET /api/books
// @desc    Get all published books
// @access  Public
router.get('/', async (req, res) => {
  const { genre, search, page = 1, limit = 12 } = req.query
  const query = { status: 'published' }
  if (genre && genre !== 'All') query.genre = genre
  if (search) query.$text = { $search: search }

  const books = await Book.find(query)
    .populate('author', 'name avatar')
    .sort({ createdAt: -1 })
    .limit(limit * 1).skip((page - 1) * limit)

  const count = await Book.countDocuments(query)
  res.json({ success: true, books, totalPages: Math.ceil(count / limit), currentPage: page })
})

// @route   GET /api/books/:id
// @desc    Get single book
// @access  Public
router.get('/:id', async (req, res) => {
  const book = await Book.findById(req.params.id).populate('author', 'name avatar bio followers')
  if (!book) return res.status(404).json({ success: false, message: 'Book not found' })
  res.json({ success: true, book })
})

// @route   POST /api/books
// @desc    Create new book
// @access  Private
router.post('/', protect, async (req, res) => {
  const book = await Book.create({ ...req.body, author: req.user._id })
  await User.findByIdAndUpdate(req.user._id, { $inc: { booksCount: 1 } })
  res.status(201).json({ success: true, book })
})

// @route   PUT /api/books/:id
// @desc    Update book
// @access  Private
router.put('/:id', protect, async (req, res) => {
  const book = await Book.findOneAndUpdate(
    { _id: req.params.id, author: req.user._id },
    req.body,
    { new: true }
  )
  if (!book) return res.status(404).json({ success: false, message: 'Book not found' })
  res.json({ success: true, book })
})

// @route   DELETE /api/books/:id
// @desc    Delete book
// @access  Private
router.delete('/:id', protect, async (req, res) => {
  const book = await Book.findOneAndDelete({ _id: req.params.id, author: req.user._id })
  if (!book) return res.status(404).json({ success: false, message: 'Book not found' })
  await User.findByIdAndUpdate(req.user._id, { $inc: { booksCount: -1 } })
  res.json({ success: true, message: 'Book deleted' })
})

// @route   POST /api/books/:id/reviews
// @desc    Add review
// @access  Private
router.post('/:id/reviews', protect, async (req, res) => {
  const book = await Book.findById(req.params.id)
  if (!book) return res.status(404).json({ success: false, message: 'Book not found' })

  book.reviews.push({ user: req.user._id, ...req.body })
  book.calculateRating()
  await book.save()
  res.json({ success: true, book })
})

module.exports = router
