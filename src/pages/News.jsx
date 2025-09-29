import React from 'react'
import SEO from '../components/SEO'

function News() {
  return (
    <>
      <SEO 
        title="News | DaggerQuest | Browser ARPG"
        description="DaggerQuest News: Stay updated with the latest announcements, patch notes, and events for the browser ARPG."
        url="https://DaggerQuest.com/news"
      />
      <main className="container news-container">
        <h1 className="title">news</h1>
        <section className="news-reel" id="news-reel" aria-label="News articles">
          {/* News posts will be loaded here */}
          <p>News loading...</p>
        </section>
      </main>
    </>
  )
}

export default News