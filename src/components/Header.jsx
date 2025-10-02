import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getLatestPosts } from '../data/newsData'

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [newsDropdownOpen, setNewsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)
  const latestPosts = getLatestPosts(3)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setNewsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const openDropdown = () => {
    setNewsDropdownOpen(true)
  }

  const closeDropdown = () => {
    setNewsDropdownOpen(false)
  }

  return (
    <header id="header">
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="navbar-top-bar">
          <Link to="/" className="navbar-logo-link" aria-label="DaggerQuest Home">
            <img id="header-logo" src="/images/logo.webp" alt="DaggerQuest Logo" />
          </Link>
          <div className="navbar-content">
          <ul className="navbar-links desktop-only" role="list">
            <li><Link to="/">home</Link></li>
            <li 
              className="navbar-dropdown-container"
              ref={dropdownRef}
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
              <Link to="/news">news</Link>
              <div className={`navbar-dropdown ${newsDropdownOpen ? 'navbar-dropdown-open' : ''}`}>
                <div className="navbar-dropdown-header">Latest News</div>
                {latestPosts.map((post, index) => (
                  <div 
                    key={index}
                    className="navbar-dropdown-item"
                    onClick={() => {
                      closeDropdown()
                      window.location.href = post.href
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="navbar-dropdown-title">{post.headline}</div>
                    <div className="navbar-dropdown-description">{post.description}</div>
                  </div>
                ))}
                <div 
                  className="navbar-dropdown-footer"
                  onClick={() => {
                    closeDropdown()
                    window.location.href = '/news'
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  view all news →
                </div>
              </div>
            </li>
            <li><Link to="/guide">guide</Link></li>
            <li><Link to="/media">media</Link></li>
            <li><Link to="/support">support</Link></li>
          </ul>
          <button 
            className="navbar-hamburger mobile-only" 
            aria-label="Open menu" 
            aria-expanded={mobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            <span className="navbar-hamburger-bar"></span>
            <span className="navbar-hamburger-bar"></span>
            <span className="navbar-hamburger-bar"></span>
          </button>
          </div>
        </div>
        <ul className={`navbar-menu mobile-only ${mobileMenuOpen ? 'open' : ''}`} role="list">
          <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>home</Link></li>
          <li><Link to="/news" onClick={() => setMobileMenuOpen(false)}>news</Link></li>
          <li><Link to="/guide" onClick={() => setMobileMenuOpen(false)}>guide</Link></li>
          <li><Link to="/media" onClick={() => setMobileMenuOpen(false)}>media</Link></li>
          <li><Link to="/support" onClick={() => setMobileMenuOpen(false)}>support</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header