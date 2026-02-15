import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const isActive = (path) => location.pathname === path

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="pixel-cursor" />
          Juan Margitic
        </Link>
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/research" className={isActive('/research') ? 'active' : ''}>Research</Link></li>
          <li><Link to="/teaching" className={isActive('/teaching') ? 'active' : ''}>Teaching</Link></li>
          <li><Link to="/about" className={isActive('/about') ? 'active' : ''}>About Me</Link></li>
        </ul>
        <div className="nav-actions">
          <ThemeToggle />
          <button
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  )
}
