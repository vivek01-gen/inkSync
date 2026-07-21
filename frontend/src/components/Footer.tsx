import { Link } from 'react-router-dom'
import { BookOpen, Mail, Twitter, Instagram, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-ink-800 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-gold to-gold-light rounded-lg flex items-center justify-center">
                <span className="text-ink-900 font-black text-sm">i</span>
              </div>
              <span className="text-xl font-black gold-gradient-text">inkSync</span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed">
              Where stories come to life. A premium 3D publishing platform for authors and artists worldwide.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-3">
              <li><Link to="/books" className="text-white/40 hover:text-gold text-sm transition-colors">Books</Link></li>
              <li><Link to="/authors" className="text-white/40 hover:text-gold text-sm transition-colors">Authors</Link></li>
              <li><Link to="/art" className="text-white/40 hover:text-gold text-sm transition-colors">Artworks</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">For Authors</h4>
            <ul className="space-y-3">
              <li><Link to="/register" className="text-white/40 hover:text-gold text-sm transition-colors">Get Started</Link></li>
              <li><Link to="/admin" className="text-white/40 hover:text-gold text-sm transition-colors">Author Panel</Link></li>
              <li><span className="text-white/40 text-sm">Pricing</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-white/40 hover:text-gold transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-white/40 hover:text-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-white/40 hover:text-gold transition-colors"><Github size={20} /></a>
              <a href="#" className="text-white/40 hover:text-gold transition-colors"><Mail size={20} /></a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">© 2026 inkSync. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="text-white/30 text-sm hover:text-white/50 cursor-pointer transition-colors">Privacy</span>
            <span className="text-white/30 text-sm hover:text-white/50 cursor-pointer transition-colors">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
