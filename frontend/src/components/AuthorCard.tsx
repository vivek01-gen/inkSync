import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BookOpen, Users } from 'lucide-react'

interface AuthorCardProps {
  id: string
  name: string
  role: string
  bio: string
  books: number
  followers: number
  color: string
  index?: number
}

export default function AuthorCard({ id, name, role, bio, books, followers, color, index = 0 }: AuthorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/authors/${id}`}>
        <div className="group bg-gradient-to-b from-ink-700 to-ink-800 rounded-2xl p-8 text-center border border-white/5 hover:border-gold/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/5">
          {/* Avatar */}
          <div 
            className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl shadow-lg"
            style={{ background: `linear-gradient(135deg, ${color}, ${color}88)` }}
          >
            👤
          </div>

          <h3 className="text-white font-bold text-lg mb-1">{name}</h3>
          <p className="text-sm mb-4" style={{ color }}>{role}</p>
          <p className="text-white/40 text-sm leading-relaxed mb-6">{bio}</p>

          <div className="flex justify-center gap-4">
            <div className="px-4 py-2 rounded-full bg-white/5">
              <span className="text-gold font-bold text-sm">{books}</span>
              <span className="text-white/40 text-xs ml-1">Books</span>
            </div>
            <div className="px-4 py-2 rounded-full bg-white/5">
              <span className="text-gold font-bold text-sm">{followers}</span>
              <span className="text-white/40 text-xs ml-1">Followers</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
