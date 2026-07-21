import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BookOpen, Users, Star, Calendar, MapPin, Link as LinkIcon, ChevronLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import BookCard from '../components/BookCard'

export default function AuthorDetail() {
  const { id } = useParams()

  const author = {
    id,
    name: 'Eleanor Vance',
    role: 'Fantasy Author',
    bio: 'Eleanor Vance is an award-winning fantasy author known for her intricate world-building and compelling characters. With over a decade of storytelling experience, she has captivated readers worldwide with her unique blend of magic, mystery, and heart.',
    avatar: '',
    location: 'Portland, Oregon',
    website: 'eleanorvance.com',
    joined: 'March 2024',
    followers: 45200,
    books: 12,
    totalReads: 1250000,
    rating: 4.9,
    booksList: [
      { id: '1', title: 'The Golden Quill', author: 'Eleanor Vance', genre: 'Fantasy', rating: 4.9, pages: 342, description: 'A mesmerizing tale of a writer who discovers her words can alter reality itself...', badge: 'Bestseller' },
      { id: '3', title: 'Starlight Drifter', author: 'Eleanor Vance', genre: 'Sci-Fi', rating: 4.8, pages: 412, description: 'Across the void between galaxies, a lone pilot carries the last hope of humanity...' },
      { id: '8', title: 'Whispers of Dawn', author: 'Eleanor Vance', genre: 'Poetry', rating: 4.7, pages: 124, description: 'A collection of poems that capture the fleeting beauty of dawn and dusk.' },
    ]
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-28 pb-20 min-h-screen"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <Link to="/authors" className="inline-flex items-center gap-2 text-white/40 hover:text-gold transition-colors mb-8">
          <ChevronLeft size={18} />
          Back to Authors
        </Link>

        {/* Author Header */}
        <div className="glass-panel p-8 md:p-12 mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-28 h-28 bg-gradient-to-br from-gold to-gold-light rounded-2xl flex items-center justify-center text-4xl shadow-xl shadow-gold/20 flex-shrink-0">
              👤
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h1 className="text-3xl md:text-4xl font-bold text-white">{author.name}</h1>
                <span className="px-3 py-1 bg-gold/10 text-gold text-xs font-bold rounded-full border border-gold/20">{author.role}</span>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-white/40 text-sm mb-4">
                <span className="flex items-center gap-1"><MapPin size={14} /> {author.location}</span>
                <span className="flex items-center gap-1"><Calendar size={14} /> Joined {author.joined}</span>
                <span className="flex items-center gap-1"><LinkIcon size={14} /> {author.website}</span>
              </div>

              <p className="text-white/50 leading-relaxed mb-6 max-w-2xl">{author.bio}</p>

              <div className="flex flex-wrap gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold">{author.books}</div>
                  <div className="text-white/40 text-xs">Books</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold">{author.followers.toLocaleString()}</div>
                  <div className="text-white/40 text-xs">Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold">{(author.totalReads / 1000000).toFixed(1)}M</div>
                  <div className="text-white/40 text-xs">Total Reads</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold">{author.rating}</div>
                  <div className="text-white/40 text-xs">Avg Rating</div>
                </div>
              </div>
            </div>

            <button className="px-6 py-3 bg-gold text-ink-900 rounded-full font-bold hover:bg-gold-light transition-colors">
              Follow
            </button>
          </div>
        </div>

        {/* Author's Books */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-8">Published Works</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {author.booksList.map((book, i) => (
              <BookCard key={book.id} {...book} index={i} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
