import React from 'react'
import SEO from '../components/SEO'

function Media() {
  return (
    <>
      <SEO 
        title="Media | DaggerQuest | Browser ARPG"
        description="DaggerQuest Media: View screenshots, videos, and artwork from the browser-based ARPG adventure."
        url="https://DaggerQuest.com/media"
      />
      <main className="container news-container">
        <h1 className="title">media</h1>
        <section className="media-reel" id="media-reel" aria-label="Media gallery">
          {/* Media posts will be loaded here */}
          <p>Media loading...</p>
        </section>
      </main>
    </>
  )
}

export default Media