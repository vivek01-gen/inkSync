import { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Mail, Globe, FileText, Camera, Save, Loader2 } from 'lucide-react'
import { useAuthStore } from '../../store'
import toast from 'react-hot-toast'

export default function AdminSettings() {
  const { user } = useAuthStore()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    bio: 'Award-winning author crafting worlds where magic and reality intertwine.',
    website: 'eleanorvance.com',
    location: 'Portland, Oregon',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      toast.success('Profile updated successfully')
      setLoading(false)
    }, 1500)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="text-3xl font-bold text-white mb-8">Settings</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Profile Settings */}
        <div className="lg:col-span-2 space-y-8">
          {/* Profile Picture */}
          <div className="glass-panel p-8">
            <h3 className="text-xl font-bold text-white mb-6">Profile Picture</h3>
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 bg-gradient-to-br from-gold to-gold-light rounded-2xl flex items-center justify-center text-4xl shadow-lg shadow-gold/10">
                👤
              </div>
              <div>
                <button className="px-5 py-2.5 bg-gold/10 text-gold rounded-xl text-sm font-semibold hover:bg-gold/20 transition-colors flex items-center gap-2 mb-2">
                  <Camera size={16} />
                  Change Photo
                </button>
                <p className="text-white/30 text-xs">JPG, PNG. Max 2MB.</p>
              </div>
            </div>
          </div>

          {/* Account Info */}
          <form onSubmit={handleSubmit} className="glass-panel p-8 space-y-6">
            <h3 className="text-xl font-bold text-white mb-2">Account Information</h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white/60 text-sm mb-2">Display Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input-field pl-12"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/60 text-sm mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-field pl-12"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-white/60 text-sm mb-2">Bio</label>
              <div className="relative">
                <FileText className="absolute left-4 top-4 text-white/30" size={18} />
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  rows={4}
                  className="input-field pl-12 resize-none"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white/60 text-sm mb-2">Website</label>
                <div className="relative">
                  <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="input-field pl-12"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/60 text-sm mb-2">Location</label>
                <div className="relative">
                  <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="input-field pl-12"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 bg-gradient-to-r from-gold to-gold-light text-ink-900 font-bold rounded-xl hover:shadow-lg hover:shadow-gold/20 transition-all disabled:opacity-50 flex items-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save size={18} />
                  Save Changes
                </>
              )}
            </button>
          </form>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="glass-panel p-6">
            <h4 className="text-white font-semibold mb-4">Account Status</h4>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-white/40">Plan</span>
                <span className="text-gold font-semibold">Pro Author</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/40">Member Since</span>
                <span className="text-white">March 2024</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/40">Storage Used</span>
                <span className="text-white">2.4 GB / 10 GB</span>
              </div>
            </div>
            <div className="mt-4 h-2 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full w-1/4 bg-gold rounded-full" />
            </div>
          </div>

          <div className="glass-panel p-6">
            <h4 className="text-white font-semibold mb-4">Danger Zone</h4>
            <button className="w-full py-3 border border-red-500/30 text-red-400 rounded-xl text-sm font-semibold hover:bg-red-500/10 transition-colors">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
