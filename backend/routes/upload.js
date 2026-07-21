const express = require('express')
const upload = require('../middleware/upload')
const { protect } = require('../middleware/auth')

const router = express.Router()

// @route   POST /api/upload/image
// @desc    Upload image
// @access  Private
router.post('/image', protect, upload.single('image'), (req, res) => {
  if (!req.file) return res.status(400).json({ success: false, message: 'No file uploaded' })
  const url = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`
  res.json({ success: true, url })
})

// @route   POST /api/upload/document
// @desc    Upload document
// @access  Private
router.post('/document', protect, upload.single('document'), (req, res) => {
  if (!req.file) return res.status(400).json({ success: false, message: 'No file uploaded' })
  const url = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`
  res.json({ success: true, url })
})

module.exports = router
