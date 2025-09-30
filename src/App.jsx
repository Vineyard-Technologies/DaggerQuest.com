import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Analytics from './components/Analytics'
import Home from './pages/Home'
import News from './pages/News'
import Guide from './pages/Guide'
import Media from './pages/Media'
import Support from './pages/Support'
import Sitemap from './pages/Sitemap'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfUse from './pages/TermsOfUse'
import NewsPost from './pages/NewsPost'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <Analytics />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:slug" element={<NewsPost />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/media" element={<Media />} />
        <Route path="/support" element={<Support />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App