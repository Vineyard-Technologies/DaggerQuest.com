import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-main">
        <span>&copy; 2025</span>
        <a href="https://VineyardTechnologies.org" className="footer-brand">Vineyard Technologies</a>
        <a href="https://VineyardTechnologies.org" className="footer-logo-link" aria-label="Vineyard Technologies Website">
          <img src="/images/VineyardTechnologiesLogo.webp" alt="Vineyard Technologies Logo" className="footer-logo-img" />
        </a>
      </div>
      <nav className="footer-links footer-desktop" aria-label="Footer navigation">
        <span>Licensed and distributed under </span>
        <a href="https://www.gnu.org/licenses/agpl-3.0.html.en" rel="license">AGPL-3.0</a>
        <span className="footer-sep">|</span>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <span className="footer-sep">|</span>
        <Link to="/terms-of-use">Terms of Service</Link>
        <span className="footer-sep">|</span>
        <Link to="/sitemap">Sitemap</Link>
      </nav>
      <nav className="footer-links footer-mobile" aria-label="Footer navigation mobile">
        <span>Licensed and distributed under </span>
        <a href="https://www.gnu.org/licenses/agpl-3.0.html.en" rel="license">AGPL-3.0</a><br />
        <Link to="/privacy-policy">Privacy Policy</Link> |
        <Link to="/terms-of-use">Terms of Service</Link> |
        <Link to="/sitemap">Sitemap</Link>
      </nav>
    </footer>
  )
}

export default Footer