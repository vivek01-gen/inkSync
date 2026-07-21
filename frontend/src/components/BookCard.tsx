import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Star, BookOpen } from 'lucide-react'

interface BookCardProps {
  id: string
  title: string
  author: string
  cover: string
  genre: string
  rating: number
  pages: number
  description: string
  badge?: string
  index?: number
}

export default function BookCard({ id, title, author, genre, rating, pages, description, badge, index = 0 }: BookCardProps) {
  const genreColors: Record<string, string> = {
    Fantasy: 'text-gold',
    Mystery: 'text-accent-pink',
    'Sci-Fi': 'text-accent-blue',
    Nature: 'text-accent-green',
    Poetry: 'text-accent-purple',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/books/${id}`}>
        <div className="group bg-gradient-to-b from-ink-700 to-ink-800 rounded-2xl overflow-hidden border border-white/5 hover:border-gold/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/5">
          {/* Cover */}
          <div className="h-52 bg-gradient-to-br from-ink-700 to-ink-600 flex items-center justify-center relative overflow-hidden">
            <div className="w-20 h-28 bg-gradient-to-br from-gold to-gold-light rounded-md shadow-xl shadow-gold/20 flex items-center justify-center text-3xl transform group-hover:scale-110 transition-transform duration-500">
              📖
            </div>

            {badge && (
              <div className="absolute top-4 right-4 px-3 py-1 bg-gold/20 backdrop-blur-sm rounded-full text-gold text-xs font-bold border border-gold/30">
                {badge}
              </div>
            )}

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Content */}
          <div className="p-5">
            <h3 className="text-white font-bold text-lg mb-1 group-hover:text-gold transition-colors">{title}</h3>
            <p className="text-white/40 text-sm mb-3">by {author}</p>
            <p className="text-white/50 text-sm leading-relaxed mb-4 line-clamp-2">{description}</p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Star size={14} className="text-gold fill-gold" />
                <span className="text-gold font-bold text-sm">{rating}</span>
              </div>
              <span className={`text-xs font-medium ${genreColors[genre] || 'text-white/50'}`}>
                {genre} · {pages} pages
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
