import { motion } from 'framer-motion'

interface ArtCardProps {
  id: string
  title: string
  artist: string
  category: string
  index?: number
}

const categoryGradients: Record<string, string> = {
  'Digital Art': 'from-ink-700 via-ink-600 to-accent-blue/30',
  'Illustration': 'from-ink-700 via-accent-pink/20 to-accent-pink/40',
  'Concept Art': 'from-ink-700 via-accent-blue/20 to-accent-purple/40',
  'Watercolor': 'from-ink-700 via-accent-green/20 to-accent-green/40',
}

export default function ArtCard({ title, artist, category, index = 0 }: ArtCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group cursor-pointer"
    >
      <div className="bg-ink-700 rounded-2xl overflow-hidden border border-white/5 hover:border-gold/40 transition-all duration-500 hover:scale-[1.03]">
        <div className={`h-56 bg-gradient-to-br ${categoryGradients[category] || 'from-ink-700 to-ink-600'} flex items-center justify-center relative`}>
          <span className="text-5xl opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
            🎨
          </span>
          <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-lg text-white text-xs font-medium">
            {category}
          </div>
        </div>
        <div className="p-4">
          <h4 className="text-white font-semibold mb-1">{title}</h4>
          <p className="text-white/40 text-sm">by {artist}</p>
        </div>
      </div>
    </motion.div>
  )
}
