import { motion } from 'framer-motion'
import { TrendingUp, Users, BookOpen, Eye, ArrowUpRight, ArrowDownRight } from 'lucide-react'

const monthlyData = [
  { month: 'Jan', reads: 3200, revenue: 420 },
  { month: 'Feb', reads: 4500, revenue: 580 },
  { month: 'Mar', reads: 3800, revenue: 490 },
  { month: 'Apr', reads: 5200, revenue: 680 },
  { month: 'May', reads: 6100, revenue: 820 },
  { month: 'Jun', reads: 7400, revenue: 980 },
]

const topBooks = [
  { title: 'The Golden Quill', reads: 45200, growth: 12.5 },
  { title: 'Starlight Drifter', reads: 38900, growth: 8.3 },
  { title: 'Whispers of Dawn', reads: 15600, growth: -2.1 },
]

export default function AdminAnalytics() {
  const maxReads = Math.max(...monthlyData.map(d => d.reads))
  const maxRevenue = Math.max(...monthlyData.map(d => d.revenue))

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="text-3xl font-bold text-white mb-8">Analytics</h1>

      {/* Overview Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {[
          { label: 'Total Reads', value: '125.4K', change: '+15.3%', up: true, icon: Eye },
          { label: 'New Followers', value: '2.4K', change: '+8.7%', up: true, icon: Users },
          { label: 'Books Sold', value: '892', change: '+22.1%', up: true, icon: BookOpen },
          { label: 'Revenue', value: '$3,420', change: '+18.5%', up: true, icon: TrendingUp },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-panel p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <stat.icon size={20} className="text-white/30" />
              <div className={`flex items-center gap-1 text-xs font-medium ${stat.up ? 'text-accent-green' : 'text-red-400'}`}>
                {stat.up ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {stat.change}
              </div>
            </div>
            <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
            <div className="text-white/40 text-sm">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Reads Chart */}
        <div className="glass-panel p-8">
          <h3 className="text-xl font-bold text-white mb-6">Monthly Reads</h3>
          <div className="h-64 flex items-end gap-4">
            {monthlyData.map((data, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${(data.reads / maxReads) * 100}%` }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="w-full bg-gradient-to-t from-gold/40 to-gold rounded-t-lg min-h-[20px] relative group"
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-ink-800 px-2 py-1 rounded text-xs text-gold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gold/20">
                    {data.reads.toLocaleString()}
                  </div>
                </motion.div>
                <span className="text-white/30 text-xs">{data.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Chart */}
        <div className="glass-panel p-8">
          <h3 className="text-xl font-bold text-white mb-6">Monthly Revenue</h3>
          <div className="h-64 flex items-end gap-4">
            {monthlyData.map((data, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${(data.revenue / maxRevenue) * 100}%` }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="w-full bg-gradient-to-t from-accent-green/40 to-accent-green rounded-t-lg min-h-[20px] relative group"
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-ink-800 px-2 py-1 rounded text-xs text-accent-green opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-accent-green/20">
                    ${data.revenue}
                  </div>
                </motion.div>
                <span className="text-white/30 text-xs">{data.month}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Books */}
      <div className="glass-panel p-8 mt-8">
        <h3 className="text-xl font-bold text-white mb-6">Top Performing Books</h3>
        <div className="space-y-4">
          {topBooks.map((book, i) => (
            <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
              <div className="w-10 h-10 bg-gold/10 text-gold rounded-lg flex items-center justify-center font-bold">
                {i + 1}
              </div>
              <div className="flex-1">
                <div className="text-white font-medium">{book.title}</div>
                <div className="text-white/30 text-sm">{book.reads.toLocaleString()} reads</div>
              </div>
              <div className={`flex items-center gap-1 text-sm font-medium ${book.growth > 0 ? 'text-accent-green' : 'text-red-400'}`}>
                {book.growth > 0 ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                {Math.abs(book.growth)}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
