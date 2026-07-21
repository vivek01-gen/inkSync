import { motion } from 'framer-motion'
import ArtCard from '../components/ArtCard'

const artworks = [
  { id: '1', title: 'Ethereal Dreams', artist: 'Elena Voss', category: 'Digital Art' },
  { id: '2', title: 'Crimson Garden', artist: 'Marcus Chen', category: 'Illustration' },
  { id: '3', title: 'Nebula Drift', artist: 'Aria Nakamura', category: 'Concept Art' },
  { id: '4', title: 'Forest Whispers', artist: 'Oliver Green', category: 'Watercolor' },
  { id: '5', title: 'Urban Symphony', artist: 'Kai Tanaka', category: 'Digital Art' },
  { id: '6', title: 'Midnight Bloom', artist: 'Luna Reyes', category: 'Illustration' },
  { id: '7', title: 'Cosmic Voyage', artist: 'Mira Blackwood', category: 'Concept Art' },
  { id: '8', title: 'Morning Mist', artist: 'Sophia Laurent', category: 'Watercolor' },
]

export default function Art() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-28 pb-20 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Art & Illustrations</h1>
          <p className="text-white/40 text-lg">Visual storytelling at its finest</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {artworks.map((art, i) => (
            <ArtCard key={art.id} {...art} index={i} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
