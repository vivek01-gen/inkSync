import { motion } from 'framer-motion'
import AuthorCard from '../components/AuthorCard'

const allAuthors = [
  { id: '1', name: 'Eleanor Vance', role: 'Fantasy Author', bio: 'Award-winning author crafting worlds where magic and reality intertwine.', books: 12, followers: '45K', color: '#ffd700' },
  { id: '2', name: 'Marcus Chen', role: 'Mystery Writer', bio: 'Master of suspense and psychological thrillers. Every page turns into an obsession.', books: 8, followers: '32K', color: '#ff6b9d' },
  { id: '3', name: 'Aria Nakamura', role: 'Sci-Fi Author', bio: 'Exploring the boundaries of science and imagination. Future worlds, present dreams.', books: 15, followers: '67K', color: '#00d4ff' },
  { id: '4', name: 'Oliver Green', role: 'Nature Writer', bio: 'Finding the extraordinary in the ordinary. Nature is the greatest storyteller.', books: 6, followers: '18K', color: '#52b788' },
  { id: '5', name: 'Sophia Laurent', role: 'Historical Fiction', bio: 'Breathing life into forgotten eras. History is a story waiting to be told.', books: 9, followers: '28K', color: '#d4a373' },
  { id: '6', name: 'Mira Blackwood', role: 'Fantasy Author', bio: 'Weaving tales of ancient magic and modern courage. The pen is mightier than the sword.', books: 11, followers: '41K', color: '#7b2cbf' },
]

export default function Authors() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-28 pb-20 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Authors</h1>
          <p className="text-white/40 text-lg">Meet the brilliant minds behind the stories</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allAuthors.map((author, i) => (
            <AuthorCard key={author.id} {...author} index={i} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
