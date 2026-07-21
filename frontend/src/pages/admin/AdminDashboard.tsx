import { motion } from 'framer-motion'
import { BookOpen, Eye, TrendingUp, DollarSign, Clock, MessageSquare, Star, ArrowUpRight } from 'lucide-react'

const stats = [
  { label: 'Published Books', value: '12', icon: BookOpen, color: 'from-accent-blue/20 to-accent-blue/5', textColor: 'text-accent-blue', borderColor: 'border-accent-blue/20' },
  { label: 'Total Reads', value: '45.2K', icon: Eye, color: 'from-accent-pink/20 to-accent-pink/5', textColor: 'text-accent-pink', borderColor: 'border-accent-pink/20' },
  { label: 'New This Month', value: '1.2K', icon: TrendingUp, color: 'from-accent-green/20 to-accent-green/5', textColor: 'text-accent-green', borderColor: 'border-accent-green/20' },
  { label: 'Earnings', value: '$3,420', icon: DollarSign, color: 'from-gold/20 to-gold/5', textColor: 'text-gold', borderColor: 'border-gold/20' },
]

const activities = [
  { icon: BookOpen, color: 'bg-gold/15 text-gold', title: 'New chapter published', detail: 'The Golden Quill - Chapter 12', time: '2 hours ago' },
  { icon: Eye, color: 'bg-accent-blue/15 text-accent-blue', title: '1,240 new readers', detail: 'Starlight Drifter', time: '5 hours ago' },
  { icon: Star, color: 'bg-accent-pink/15 text-accent-pink', title: 'New review received', detail: '★★★★★ "Absolutely stunning..."', time: '1 day ago' },
  { icon: MessageSquare, color: 'bg-accent-green/15 text-accent-green', title: 'Comment on artwork', detail: 'Ethereal Dreams - "Beautiful!"', time: '2 days ago' },
]

const recentBooks = [
  { title: 'The Golden Quill', progress: 85, status: 'Published', color: 'bg-gold' },
  { title: 'Starlight Drifter', progress: 100, status: 'Published', color: 'bg-accent-blue' },
  { title: 'The Green Manuscript', progress: 45, status: 'Draft', color: 'bg-accent-green' },
]

export default function AdminDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="text-3xl font-bold text-white mb-8">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`bg-gradient-to-br ${stat.color} rounded-2xl p-6 border ${stat.borderColor}`}
          >
            <div className="flex items-center justify-between mb-4">
              <stat.icon size={20} className={stat.textColor} />
              <ArrowUpRight size={16} className="text-white/20" />
            </div>
            <div className={`text-3xl font-black ${stat.textColor} mb-1`}>{stat.value}</div>
            <div className="text-white/40 text-sm">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2 glass-panel p-8">
          <h3 className="text-xl font-bold text-white mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {activities.map((activity, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
              >
                <div className={`w-10 h-10 ${activity.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <activity.icon size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white font-medium text-sm">{activity.title}</div>
                  <div className="text-white/40 text-xs">{activity.detail}</div>
                </div>
                <div className="text-white/30 text-xs flex items-center gap-1 flex-shrink-0">
                  <Clock size={12} />
                  {activity.time}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Book Progress */}
        <div className="glass-panel p-8">
          <h3 className="text-xl font-bold text-white mb-6">Your Works</h3>
          <div className="space-y-6">
            {recentBooks.map((book, i) => (
              <div key={i}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white text-sm font-medium">{book.title}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${book.status === 'Published' ? 'bg-accent-green/15 text-accent-green' : 'bg-white/10 text-white/50'}`}>
                    {book.status}
                  </span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${book.progress}%` }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
                    className={`h-full ${book.color} rounded-full`}
                  />
                </div>
                <div className="text-white/30 text-xs mt-1">{book.progress}% complete</div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/5">
            <div className="text-center">
              <div className="text-3xl font-black gold-gradient-text mb-1">4.8</div>
              <div className="text-white/40 text-sm">Average Rating</div>
              <div className="flex justify-center gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-gold fill-gold" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
