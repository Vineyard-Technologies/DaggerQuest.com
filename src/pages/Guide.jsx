import React, { useState } from 'react'
import SEO from '../components/SEO'

function Guide() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <>
      <SEO 
        title="Guide | DaggerQuest | Browser ARPG"
        description="DaggerQuest Guide: Learn how to play, master mechanics, and discover tips for success in this browser-based ARPG."
        url="https://DaggerQuest.com/guide"
      />
      <main className="container guide-container">
        <h1 className="title">guide</h1>
        <div className="guide-columns">
          <aside className="guide-col guide-col-left">
            <label htmlFor="guide-search" className="sr-only">Search the guide</label>
            <input 
              id="guide-search" 
              className="guide-search-box" 
              type="search" 
              placeholder="Search the guide..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </aside>
          <section className="guide-col">
            <article className="guide-box">
              <div className="guide-box-content">
                This guide will help you get started and master the world of <span className="name">DaggerQuest</span>. Use the search box to quickly find topics, or start with our Beginner's Guide.
              </div>
            </article>
            <article className="guide-box">
              <h2 className="guide-box-title">featured article</h2>
              <div className="guide-box-content">
                Coming soon!
              </div>
            </article>
          </section>
        </div>
      </main>
    </>
  )
}

export default Guide