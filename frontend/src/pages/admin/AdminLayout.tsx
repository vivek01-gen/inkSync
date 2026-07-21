import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  LayoutDashboard, BookOpen, Upload, Palette, BarChart3, Settings, 
  LogOut, Menu, X, ChevronRight 
} from 'lucide-react'
import { useState } from 'react'
import { useAuthStore, useUIStore } from '../../store'
import toast from 'react-hot-toast'

const sidebarItems = [
  { path: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/admin/books', label: 'My Books', icon: BookOpen },
  { path: '/admin/upload', label: 'Upload Work', icon: Upload },
  { path: '/admin/artworks', label: 'Artworks', icon: Palette },
  { path: '/admin/analytics', label: 'Analytics', icon: BarChart3 },
  { path: '/admin/settings', label: 'Settings', icon: Settings },
]

export default function AdminLayout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { sidebarOpen } = useUIStore()
  const { user, logout } = useAuthStore()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    toast.success('Signed out successfully')
    navigate('/')
  }

  return (
    <div className="pt-20 min-h-screen flex">
      {/* Mobile Overlay */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        className={`fixed lg:sticky top-20 left-0 h-[calc(100vh-80px)] bg-ink-800 border-r border-white/5 z-50 transition-all duration-300 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } ${sidebarOpen ? 'w-72' : 'w-0 lg:w-72'} overflow-hidden`}
      >
        <div className="p-6 h-full flex flex-col">
          {/* User Profile */}
          <div className="text-center pb-6 mb-6 border-b border-white/5">
            <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-2xl mx-auto mb-3 flex items-center justify-center text-2xl shadow-lg shadow-gold/10">
              👤
            </div>
            <h3 className="text-white font-bold">{user?.name || 'Author'}</h3>
            <p className="text-gold text-xs mt-1">Author Account</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1">
            {sidebarItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/admin'}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-gold/15 text-gold'
                      : 'text-white/50 hover:bg-white/5 hover:text-white'
                  }`
                }
              >
                <item.icon size={18} />
                {item.label}
                {({ isActive }: { isActive: boolean }) => 
                  isActive && <ChevronRight size={14} className="ml-auto" />
                }
              </NavLink>
            ))}
          </nav>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-400/70 hover:bg-red-500/10 hover:text-red-400 transition-all"
          >
            <LogOut size={18} />
            Sign Out
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0">
        {/* Mobile Header */}
        <div className="lg:hidden flex items-center gap-4 px-6 py-4 border-b border-white/5">
          <button onClick={() => setMobileOpen(true)} className="text-white p-2">
            <Menu size={24} />
          </button>
          <span className="text-white font-semibold">Author Panel</span>
        </div>

        <div className="p-6 lg:p-10">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
