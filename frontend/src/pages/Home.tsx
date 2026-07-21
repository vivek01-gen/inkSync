import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, BookOpen, Palette, Users } from 'lucide-react'
import BookScene from '../components/Book3D'
import BookCard from '../components/BookCard'
import AuthorCard from '../components/AuthorCard'
import ArtCard from '../components/ArtCard'

const featuredBooks = [
  {
    id: '1',
    title: 'The Golden Quill',
    author: 'Eleanor Vance',
    cover: '',
    genre: 'Fantasy',
    rating: 4.9,
    pages: 342,
    description: 'A mesmerizing tale of a writer who discovers her words can alter reality itself...',
    badge: 'Bestseller',
  },
  {
    id: '2',
    title: 'Crimson Petals',
    author: 'Marcus Chen',
    cover: '',
    genre: 'Mystery',
    rating: 4.7,
    pages: 278,
    description: 'In a garden where flowers hold memories, one botanist uncovers a century-old secret...',
    badge: 'New',
  },
  {
    id: '3',
    title: 'Starlight Drifter',
    author: 'Aria Nakamura',
    cover: '',
    genre: 'Sci-Fi',
    rating: 4.8,
    pages: 412,
    description: 'Across the void between galaxies, a lone pilot carries the last hope of humanity...',
  },
]

const featuredAuthors = [
  {
    id: '1',
    name: 'Eleanor Vance',
    role: 'Fantasy Author',
    bio: 'Award-winning author crafting worlds where magic and reality intertwine.',
    books: 12,
    followers: '45K',
    color: '#ffd700',
  },
  {
    id: '2',
    name: 'Marcus Chen',
    role: 'Mystery Writer',
    bio: 'Master of suspense and psychological thrillers. Every page turns into an obsession.',
    books: 8,
    followers: '32K',
    color: '#ff6b9d',
  },
  {
    id: '3',
    name: 'Aria Nakamura',
    role: 'Sci-Fi Author',
    bio: 'Exploring the boundaries of science and imagination. Future worlds, present dreams.',
    books: 15,
    followers: '67K',
    color: '#00d4ff',
  },
]

const featuredArt = [
  { id: '1', title: 'Ethereal Dreams', artist: 'Elena Voss', category: 'Digital Art' },
  { id: '2', title: 'Crimson Garden', artist: 'Marcus Chen', category: 'Illustration' },
  { id: '3', title: 'Nebula Drift', artist: 'Aria Nakamura', category: 'Concept Art' },
  { id: '4', title: 'Forest Whispers', artist: 'Oliver Green', category: 'Watercolor' },
]

const stats = [
  { value: '12K+', label: 'Published Books' },
  { value: '3.5K', label: 'Active Authors' },
  { value: '1M+', label: 'Monthly Readers' },
  { value: '50K', label: 'Artworks' },
]

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/20 rounded-full text-gold text-xs font-bold tracking-widest uppercase mb-8"
              >
                <Sparkles size={14} />
                Premium Author Platform
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-black leading-tight mb-6"
              >
                Where Stories
                <br />
                <span className="gold-gradient-text">Come to Life</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-white/50 text-lg leading-relaxed mb-10 max-w-lg"
              >
                Publish your books, novels, art, and illustrations in a stunning 3D space. 
                Connect with readers who crave immersive storytelling.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/books" className="btn-primary flex items-center gap-2">
                  Explore Books
                  <ArrowRight size={18} />
                </Link>
                <Link to="/register" className="btn-secondary">
                  Become an Author
                </Link>
              </motion.div>
            </div>

            {/* 3D Scene */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <BookScene />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-transparent via-gold/5 to-transparent border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-black gold-gradient-text mb-2">{stat.value}</div>
                <div className="text-white/40 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Featured Works</h2>
              <p className="text-white/40">Discover extraordinary stories from talented authors</p>
            </div>
            <Link to="/books" className="hidden md:flex items-center gap-2 text-gold hover:text-gold-light transition-colors">
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBooks.map((book, i) => (
              <BookCard key={book.id} {...book} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Authors */}
      <section className="py-24 bg-ink-800/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Our Authors</h2>
            <p className="text-white/40">Meet the brilliant minds behind the stories</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredAuthors.map((author, i) => (
              <AuthorCard key={author.id} {...author} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Art */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Art & Illustrations</h2>
              <p className="text-white/40">Visual storytelling at its finest</p>
            </div>
            <Link to="/art" className="hidden md:flex items-center gap-2 text-gold hover:text-gold-light transition-colors">
              View Gallery <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredArt.map((art, i) => (
              <ArtCard key={art.id} {...art} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-accent-blue/5" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Ready to Share Your
              <span className="gold-gradient-text"> Story?</span>
            </h2>
            <p className="text-white/40 text-lg mb-10 max-w-2xl mx-auto">
              Join thousands of authors who have found their audience on inkSync. 
              Your story deserves a beautiful home.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/register" className="btn-primary">
                Start Publishing Free
              </Link>
              <Link to="/books" className="btn-secondary">
                Browse Library
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
