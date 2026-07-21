import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Edit3, BarChart3, Eye, Trash2, MoreVertical } from 'lucide-react'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'

const books = [
  { id: '1', title: 'The Golden Quill', genre: 'Fantasy', pages: 342, status: 'Published', reads: 45200, rating: 4.9, color: 'from-gold/20 to-gold/5' },
  { id: '2', title: 'Starlight Drifter', genre: 'Sci-Fi', pages: 412, status: 'Published', reads: 38900, rating: 4.8, color: 'from-accent-blue/20 to-accent-blue/5' },
  { id: '3', title: 'The Green Manuscript', genre: 'Nature', pages: 198, status: 'Draft', reads: 0, rating: 0, color: 'from-accent-green/20 to-accent-green/5' },
  { id: '4', title: 'Whispers of Dawn', genre: 'Poetry', pages: 124, status: 'Published', reads: 15600, rating: 4.7, color: 'from-accent-pink/20 to-accent-pink/5' },
]

export default function AdminBooks() {
  const [bookList, setBookList] = useState(books)

  const handleDelete = (id: string) => {
    setBookList(prev => prev.filter(b => b.id !== id))
    toast.success('Book removed')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-white">My Books</h1>
        <Link to="/admin/upload" className="btn-primary text-sm py-3 px-6 flex items-center gap-2">
          <Plus size={18} />
          New Book
        </Link>
      </div>

      <div className="space-y-4">
        {bookList.map((book, i) => (
          <motion.div
            key={book.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-panel p-6 flex flex-col md:flex-row items-start md:items-center gap-6 hover:border-gold/20 transition-all"
          >
            {/* Cover */}
            <div className={`w-14 h-20 bg-gradient-to-br ${book.color} rounded-lg flex items-center justify-center text-xl flex-shrink-0`}>
              📖
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-white font-bold text-lg">{book.title}</h3>
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                  book.status === 'Published' ? 'bg-accent-green/15 text-accent-green' : 'bg-white/10 text-white/50'
                }`}>
                  {book.status}
                </span>
              </div>
              <p className="text-white/40 text-sm">{book.genre} · {book.pages} pages</p>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 text-sm">
              <div className="text-center">
                <div className="text-white font-bold">{book.reads.toLocaleString()}</div>
                <div className="text-white/30 text-xs">Reads</div>
              </div>
              <div className="text-center">
                <div className="text-gold font-bold">{book.rating || '-'}</div>
                <div className="text-white/30 text-xs">Rating</div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button className="p-2.5 rounded-lg bg-white/5 text-white/50 hover:bg-gold/15 hover:text-gold transition-all" title="Edit">
                <Edit3 size={16} />
              </button>
              <button className="p-2.5 rounded-lg bg-white/5 text-white/50 hover:bg-accent-blue/15 hover:text-accent-blue transition-all" title="Stats">
                <BarChart3 size={16} />
              </button>
              <button className="p-2.5 rounded-lg bg-white/5 text-white/50 hover:bg-accent-pink/15 hover:text-accent-pink transition-all" title="Preview">
                <Eye size={16} />
              </button>
              <button 
                onClick={() => handleDelete(book.id)}
                className="p-2.5 rounded-lg bg-white/5 text-white/50 hover:bg-red-500/15 hover:text-red-400 transition-all" 
                title="Delete"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
