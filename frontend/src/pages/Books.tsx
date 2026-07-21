import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter } from 'lucide-react'
import BookCard from '../components/BookCard'

const categories = ['All', 'Novels', 'Poetry', 'Art Books', 'Short Stories', 'Sci-Fi', 'Fantasy', 'Mystery']

const allBooks = [
  { id: '1', title: 'Echoes of Eternity', author: 'James Holloway', genre: 'Fantasy', rating: 4.8, pages: 356, description: 'A timeless journey through parallel dimensions where every choice echoes across eternity.' },
  { id: '2', title: 'Velvet Shadows', author: 'Luna Reyes', genre: 'Mystery', rating: 4.6, pages: 289, description: 'In the shadows of an old mansion, secrets unravel one thread at a time.' },
  { id: '3', title: 'Nebula\'s Edge', author: 'Kai Tanaka', genre: 'Sci-Fi', rating: 4.9, pages: 445, description: 'At the edge of the known universe, humanity makes its final stand.' },
  { id: '4', title: 'The Green Manuscript', author: 'Oliver Green', genre: 'Nature', rating: 4.5, pages: 198, description: 'Nature speaks in whispers. One botanist learns to listen.' },
  { id: '5', title: 'Ancient Codes', author: 'Sophia Laurent', genre: 'Mystery', rating: 4.7, pages: 312, description: 'Deciphering the past to save the future. A race against time.' },
  { id: '6', title: 'Crystal Prophecies', author: 'Mira Blackwood', genre: 'Fantasy', rating: 4.8, pages: 378, description: 'When crystals begin to sing, the prophecy awakens.' },
  { id: '7', title: 'Digital Soul', author: 'Alex Rivera', genre: 'Sci-Fi', rating: 4.6, pages: 290, description: 'What happens when AI develops a conscience? A gripping exploration.' },
  { id: '8', title: 'Whispers of Dawn', author: 'Isabella Moon', genre: 'Poetry', rating: 4.9, pages: 124, description: 'A collection of poems that capture the fleeting beauty of dawn.' },
]

export default function Books() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredBooks = allBooks.filter(book => {
    const matchesCategory = activeCategory === 'All' || book.genre === activeCategory
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         book.author.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-28 pb-20 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Library</h1>
          <p className="text-white/40 text-lg">Browse our collection of published works</p>
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={20} />
            <input
              type="text"
              placeholder="Search books or authors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-field pl-12"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gold text-ink-900'
                  : 'bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Books Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBooks.map((book, i) => (
            <BookCard key={book.id} {...book} index={i} />
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/30 text-lg">No books found matching your criteria.</p>
          </div>
        )}
      </div>
    </motion.div>
  )
}
