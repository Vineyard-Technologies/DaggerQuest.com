import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

function Sitemap() {
  return (
    <>
      <SEO 
        title="Sitemap | DaggerQuest | Browser ARPG"
        description="DaggerQuest Sitemap: Explore all pages and sections of the browser-based ARPG website for easy navigation."
        url="https://DaggerQuest.com/sitemap"
      />
      <main className="container">
        <h1>sitemap</h1>
        <nav aria-label="Site navigation">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/guide">Guide</Link></li>
            <li><Link to="/media">Media</Link></li>
            <li><Link to="/support">Support</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-of-use">Terms of Service</Link></li>
            <li><Link to="/sitemap">Sitemap</Link></li>
          </ul>
        </nav>
      </main>
    </>
  )
}

export default Sitemap