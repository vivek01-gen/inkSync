import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Upload, FileText, Image, X, Check, Loader2 } from 'lucide-react'
import { useDropzone } from 'react-dropzone'
import toast from 'react-hot-toast'

const categories = ['Novel', 'Short Story', 'Poetry', 'Art Book', 'Illustration', 'Comic']

export default function AdminUpload() {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('Novel')
  const [description, setDescription] = useState('')
  const [files, setFiles] = useState<File[]>([])
  const [coverImage, setCoverImage] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(prev => [...prev, ...acceptedFiles])
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/epub+zip': ['.epub'],
      'text/plain': ['.txt'],
    }
  })

  const onCoverDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles[0]) setCoverImage(acceptedFiles[0])
  }, [])

  const { getRootProps: getCoverProps, getInputProps: getCoverInput } = useDropzone({
    onDrop: onCoverDrop,
    accept: { 'image/*': ['.png', '.jpg', '.jpeg'] },
    maxFiles: 1
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!title || !description) {
      toast.error('Please fill in all required fields')
      return
    }

    setUploading(true)
    // Simulate upload
    setTimeout(() => {
      toast.success('Work published successfully!')
      setUploading(false)
      setTitle('')
      setDescription('')
      setFiles([])
      setCoverImage(null)
    }, 2000)
  }

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index))
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="text-3xl font-bold text-white mb-8">Upload New Work</h1>

      <form onSubmit={handleSubmit} className="max-w-3xl">
        <div className="glass-panel p-8 space-y-8">
          {/* Title */}
          <div>
            <label className="block text-white/60 text-sm mb-2">Work Title *</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter your book or artwork title"
              className="input-field"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-white/60 text-sm mb-2">Category</label>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    category === cat
                      ? 'bg-gold text-ink-900'
                      : 'bg-white/5 text-white/50 border border-white/10 hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-white/60 text-sm mb-2">Description *</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Tell readers about your work..."
              rows={5}
              className="input-field resize-none"
              required
            />
          </div>

          {/* Cover Image */}
          <div>
            <label className="block text-white/60 text-sm mb-2">Cover Image</label>
            <div
              {...getCoverProps()}
              className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all ${
                isDragActive ? 'border-gold bg-gold/5' : 'border-white/10 hover:border-gold/30'
              }`}
            >
              <input {...getCoverInput()} />
              {coverImage ? (
                <div className="flex items-center justify-center gap-3">
                  <Image size={24} className="text-gold" />
                  <span className="text-white">{coverImage.name}</span>
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); setCoverImage(null) }}
                    className="text-red-400 hover:text-red-300"
                  >
                    <X size={16} />
                  </button>
                </div>
              ) : (
                <>
                  <Upload size={32} className="text-gold/50 mx-auto mb-3" />
                  <p className="text-gold font-semibold">Drop cover image here</p>
                  <p className="text-white/30 text-sm mt-1">or click to browse (JPG, PNG)</p>
                </>
              )}
            </div>
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-white/60 text-sm mb-2">Upload Files</label>
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all ${
                isDragActive ? 'border-gold bg-gold/5' : 'border-white/10 hover:border-gold/30'
              }`}
            >
              <input {...getInputProps()} />
              <FileText size={32} className="text-gold/50 mx-auto mb-3" />
              <p className="text-gold font-semibold">Drop manuscript files here</p>
              <p className="text-white/30 text-sm mt-1">Supports PDF, EPUB, TXT</p>
            </div>

            {/* File List */}
            {files.length > 0 && (
              <div className="mt-4 space-y-2">
                {files.map((file, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText size={16} className="text-gold" />
                      <span className="text-white text-sm">{file.name}</span>
                      <span className="text-white/30 text-xs">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFile(i)}
                      className="text-red-400 hover:text-red-300"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              disabled={uploading}
              className="flex-1 py-4 bg-gradient-to-r from-gold to-gold-light text-ink-900 font-bold rounded-xl hover:shadow-lg hover:shadow-gold/20 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {uploading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Publishing...
                </>
              ) : (
                <>
                  <Check size={18} />
                  Publish Work
                </>
              )}
            </button>
            <button
              type="button"
              className="px-8 py-4 bg-white/5 text-white/60 border border-white/10 rounded-xl font-semibold hover:bg-white/10 transition-all"
            >
              Save Draft
            </button>
          </div>
        </div>
      </form>
    </motion.div>
  )
}
