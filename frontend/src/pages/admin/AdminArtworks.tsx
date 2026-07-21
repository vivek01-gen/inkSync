import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Trash2, Eye, Edit3 } from 'lucide-react'
import toast from 'react-hot-toast'

const artworks = [
  { id: '1', title: 'Ethereal Dreams', category: 'Digital Art', color: 'from-ink-700 via-ink-600 to-accent-blue/30' },
  { id: '2', title: 'Midnight Garden', category: 'Illustration', color: 'from-ink-700 via-accent-pink/20 to-accent-pink/40' },
  { id: '3', title: 'Cosmic Voyage', category: 'Concept Art', color: 'from-ink-700 via-accent-blue/20 to-accent-purple/40' },
  { id: '4', title: 'Morning Mist', category: 'Watercolor', color: 'from-ink-700 via-accent-green/20 to-accent-green/40' },
]

export default function AdminArtworks() {
  const [artList, setArtList] = useState(artworks)

  const handleDelete = (id: string) => {
    setArtList(prev => prev.filter(a => a.id !== id))
    toast.success('Artwork removed')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-white">My Artworks</h1>
        <button className="btn-primary text-sm py-3 px-6 flex items-center gap-2">
          <Plus size={18} />
          Add Artwork
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {artList.map((art, i) => (
          <motion.div
            key={art.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="group relative"
          >
            <div className="bg-ink-700 rounded-2xl overflow-hidden border border-white/5 hover:border-gold/30 transition-all">
              <div className={`h-48 bg-gradient-to-br ${art.color} flex items-center justify-center relative`}>
                <span className="text-4xl opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">🎨</span>
                <div className="absolute bottom-3 left-3 px-2 py-1 bg-black/50 backdrop-blur-sm rounded text-white text-xs">
                  {art.category}
                </div>

                {/* Hover Actions */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <button className="p-2.5 bg-white/10 rounded-full text-white hover:bg-gold/20 hover:text-gold transition-all">
                    <Eye size={18} />
                  </button>
                  <button className="p-2.5 bg-white/10 rounded-full text-white hover:bg-gold/20 hover:text-gold transition-all">
                    <Edit3 size={18} />
                  </button>
                  <button 
                    onClick={() => handleDelete(art.id)}
                    className="p-2.5 bg-white/10 rounded-full text-white hover:bg-red-500/20 hover:text-red-400 transition-all"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h4 className="text-white font-semibold">{art.title}</h4>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Add New Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: artList.length * 0.1 }}
          className="border-2 border-dashed border-gold/20 rounded-2xl flex items-center justify-center min-h-[280px] cursor-pointer hover:border-gold/50 hover:bg-gold/5 transition-all group"
        >
          <div className="text-center">
            <Plus size={40} className="text-gold/40 mx-auto mb-2 group-hover:text-gold transition-colors" />
            <span className="text-gold/60 font-semibold group-hover:text-gold transition-colors">Add New Artwork</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
