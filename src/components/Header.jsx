import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getLatestPosts } from '../data/newsData'

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const latestPosts = getLatestPosts(3)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header id="header">
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <Link to="/" className="navbar-logo-link" aria-label="DaggerQuest Home">
          <img id="header-logo" src="/images/logo.webp" alt="DaggerQuest Logo" />
        </Link>
        <div className="navbar-content">
          <ul className="navbar-links desktop-only" role="list">
            <li><Link to="/">home</Link></li>
            <li className="navbar-dropdown-container">
              <Link to="/news">news</Link>
              <div className="navbar-dropdown">
                <div className="navbar-dropdown-header">Latest News</div>
                {latestPosts.map((post, index) => (
                  <Link 
                    key={index} 
                    to={post.href} 
                    className="navbar-dropdown-item"
                  >
                    <div className="navbar-dropdown-title">{post.headline}</div>
                    <div className="navbar-dropdown-description">{post.description}</div>
                  </Link>
                ))}
                <Link to="/news" className="navbar-dropdown-footer">
                  view all news →
                </Link>
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