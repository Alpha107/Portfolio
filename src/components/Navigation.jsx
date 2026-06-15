import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import '../styles/navigation.css'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const scrollToSection = (sectionId, e) => {
    e.preventDefault()
    setMenuOpen(false)
    if (location.pathname === '/') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
      }, 150)
    }
  }

  return (
    <>
      <nav className={`${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
        <Link to="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
          Abashesh <span>Ranabhat</span>
        </Link>

        <button
          className={`nav-hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#about" onClick={(e) => scrollToSection('about', e)}>About</a>
          <a href="#experience" onClick={(e) => scrollToSection('experience', e)}>Experience</a>
          <a href="#projects" onClick={(e) => scrollToSection('projects', e)}>Projects</a>
          <a href="#education" onClick={(e) => scrollToSection('education', e)}>Education</a>
          <Link to="/photography">Photography</Link>
          <a href="#contact" className="nav-contact-btn" onClick={(e) => scrollToSection('contact', e)}>
            Contact
          </a>
        </div>
      </nav>
    </>
  )
}
