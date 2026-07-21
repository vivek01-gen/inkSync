import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, Mail, Lock, User, ArrowRight } from 'lucide-react'
import { useAuthStore } from '../store'
import toast from 'react-hot-toast'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { setAuth } = useAuthStore()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Mock register - replace with actual API call
    setTimeout(() => {
      setAuth(
        { _id: '1', name, email, role: 'author', followers: 0, booksCount: 0 },
        'mock-token-123'
      )
      toast.success('Welcome to inkSync!')
      navigate('/admin')
      setLoading(false)
    }, 1000)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center pt-20 px-6"
    >
      <div className="w-full max-w-md">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-10"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-gold/20">
            <span className="text-ink-900 font-black text-2xl">i</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Join inkSync</h1>
          <p className="text-white/40">Start your publishing journey today</p>
        </motion.div>

        <motion.form
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          onSubmit={handleSubmit}
          className="glass-panel p-8 space-y-6"
        >
          <div>
            <label className="block text-white/60 text-sm mb-2">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="input-field pl-12"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-white/60 text-sm mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="input-field pl-12"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-white/60 text-sm mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Min 8 characters"
                className="input-field pl-12 pr-12"
                required
                minLength={8}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="text-sm text-white/40">
            By signing up, you agree to our{' '}
            <span className="text-gold cursor-pointer">Terms of Service</span> and{' '}
            <span className="text-gold cursor-pointer">Privacy Policy</span>.
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-gradient-to-r from-gold to-gold-light text-ink-900 font-bold rounded-xl hover:shadow-lg hover:shadow-gold/20 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? 'Creating account...' : (
              <>
                Create Account <ArrowRight size={18} />
              </>
            )}
          </button>
        </motion.form>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8 text-white/40"
        >
          Already have an account?{' '}
          <Link to="/login" className="text-gold hover:text-gold-light font-semibold">Sign In</Link>
        </motion.p>
      </div>
    </motion.div>
  )
}
