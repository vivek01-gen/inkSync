import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Star, BookOpen, Calendar, Eye, Heart, Share2, ChevronLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function BookDetail() {
  const { id } = useParams()

  // Mock data - in real app, fetch from API
  const book = {
    id,
    title: 'The Golden Quill',
    author: 'Eleanor Vance',
    genre: 'Fantasy',
    rating: 4.9,
    pages: 342,
    published: 'January 2026',
    reads: 45200,
    likes: 3890,
    description: 'In a world where words hold power beyond imagination, a young scribe named Elara discovers an ancient quill that brings her writings to life. As she navigates the dangerous politics of the Ink Kingdom, she must learn to control her newfound abilities before they consume everything she loves.',
    chapters: [
      { number: 1, title: 'The Discovery', pages: 24 },
      { number: 2, title: 'Whispers in the Wind', pages: 28 },
      { number: 3, title: 'The Ink Kingdom', pages: 32 },
      { number: 4, title: 'First Words', pages: 26 },
      { number: 5, title: 'Shadows Rising', pages: 30 },
    ],
    reviews: [
      { user: 'Sarah M.', rating: 5, text: 'Absolutely mesmerizing! The world-building is incredible.', date: '2 days ago' },
      { user: 'James K.', rating: 5, text: 'Could not put it down. Eleanor Vance is a master storyteller.', date: '1 week ago' },
      { user: 'Emily R.', rating: 4, text: 'Beautiful prose and captivating characters. Highly recommend!', date: '2 weeks ago' },
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
        <Link to="/books" className="inline-flex items-center gap-2 text-white/40 hover:text-gold transition-colors mb-8">
          <ChevronLeft size={18} />
          Back to Library
        </Link>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Book Info */}
          <div className="lg:col-span-2">
            <div className="flex flex-col md:flex-row gap-8 mb-10">
              {/* Cover */}
              <div className="w-48 h-64 bg-gradient-to-br from-gold to-gold-light rounded-xl shadow-2xl shadow-gold/20 flex items-center justify-center text-5xl flex-shrink-0">
                📖
              </div>

              {/* Details */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-gold/10 text-gold text-xs font-bold rounded-full border border-gold/20">{book.genre}</span>
                  <span className="px-3 py-1 bg-white/5 text-white/50 text-xs rounded-full">{book.pages} pages</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{book.title}</h1>
                <p className="text-white/40 mb-4">by <span className="text-gold">{book.author}</span></p>

                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center gap-1">
                    <Star size={18} className="text-gold fill-gold" />
                    <span className="text-white font-bold">{book.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-white/40">
                    <Eye size={16} />
                    <span className="text-sm">{book.reads.toLocaleString()} reads</span>
                  </div>
                  <div className="flex items-center gap-1 text-white/40">
                    <Calendar size={16} />
                    <span className="text-sm">{book.published}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="btn-primary text-sm py-3 px-6">Start Reading</button>
                  <button className="p-3 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-red-400 hover:border-red-400/30 transition-all">
                    <Heart size={20} />
                  </button>
                  <button className="p-3 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-gold hover:border-gold/30 transition-all">
                    <Share2 size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="glass-panel p-8 mb-10">
              <h3 className="text-xl font-bold text-white mb-4">About this Book</h3>
              <p className="text-white/60 leading-relaxed">{book.description}</p>
            </div>

            {/* Chapters */}
            <div className="glass-panel p-8 mb-10">
              <h3 className="text-xl font-bold text-white mb-6">Chapters</h3>
              <div className="space-y-3">
                {book.chapters.map((chapter) => (
                  <div key={chapter.number} className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-4">
                      <span className="w-8 h-8 bg-gold/10 text-gold rounded-lg flex items-center justify-center text-sm font-bold">{chapter.number}</span>
                      <span className="text-white group-hover:text-gold transition-colors">{chapter.title}</span>
                    </div>
                    <span className="text-white/30 text-sm">{chapter.pages} pages</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="glass-panel p-8">
              <h3 className="text-xl font-bold text-white mb-6">Reviews</h3>
              <div className="space-y-6">
                {book.reviews.map((review, i) => (
                  <div key={i} className="border-b border-white/5 pb-6 last:border-0">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-semibold">{review.user}</span>
                      <span className="text-white/30 text-sm">{review.date}</span>
                    </div>
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} size={14} className={j < review.rating ? 'text-gold fill-gold' : 'text-white/20'} />
                      ))}
                    </div>
                    <p className="text-white/50 text-sm">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            <div className="glass-panel p-6">
              <h4 className="text-white font-semibold mb-4">About the Author</h4>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center text-xl">👤</div>
                <div>
                  <div className="text-white font-medium">{book.author}</div>
                  <div className="text-white/40 text-sm">Fantasy Author</div>
                </div>
              </div>
              <p className="text-white/40 text-sm leading-relaxed mb-4">Award-winning author with 12 published books and over 45K followers.</p>
              <button className="w-full py-2.5 bg-gold/10 text-gold rounded-lg text-sm font-semibold hover:bg-gold/20 transition-colors">Follow Author</button>
            </div>

            <div className="glass-panel p-6">
              <h4 className="text-white font-semibold mb-4">More by {book.author}</h4>
              <div className="space-y-3">
                {['Starlight Drifter', 'The Green Manuscript', 'Whispers of Dawn'].map((title) => (
                  <div key={title} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                    <div className="w-10 h-14 bg-gradient-to-br from-ink-600 to-ink-700 rounded flex items-center justify-center text-xs">📖</div>
                    <span className="text-white/70 text-sm">{title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
