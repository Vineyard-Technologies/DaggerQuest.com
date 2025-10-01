import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { getNewsPosts } from '../data/newsData'

// Using shared news data from newsData.js

const postsPerPage = 6;

function News() {
  const [visiblePosts, setVisiblePosts] = useState(postsPerPage)
  const [isLoading, setIsLoading] = useState(false)
  const titleRef = useScrollAnimation()
  const newsReelRef = useScrollAnimation()
  const newPostsRef = useRef(null)
  
  // Get news posts using cached function
  const newsPosts = getNewsPosts()

  const loadMore = async () => {
    setIsLoading(true)
    const previousPostCount = visiblePosts
    
    // Add a small delay for smooth animation
    setTimeout(() => {
      setVisiblePosts(prev => Math.min(prev + postsPerPage, newsPosts.length))
      setIsLoading(false)
      
      // Scroll to center the new posts after they're rendered
      setTimeout(() => {
        if (newPostsRef.current) {
          const newPostsElement = document.querySelector(`.news-post:nth-child(${previousPostCount + 1})`)
          if (newPostsElement) {
            newPostsElement.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'center' 
            })
          }
        }
      }, 100)
    }, 200)
  }

  const showMoreButton = visiblePosts < newsPosts.length

  return (
    <>
      <SEO 
        title="News | DaggerQuest | Browser ARPG"
        description="DaggerQuest News: Stay updated with the latest announcements, patch notes, and events for the browser ARPG."
        url="https://DaggerQuest.com/news"
      />
      <main className="container news-container">
        <h1 ref={titleRef} className="title fade-in-element">news</h1>
        <section ref={newsReelRef} className="news-reel fade-in-element" id="news-reel" aria-label="News articles">
          {newsPosts.slice(0, visiblePosts).map((post, index) => {
            const isNewPost = index >= postsPerPage && index < visiblePosts
            return (
              <Link 
                key={index} 
                to={post.href} 
                className={`news-post ${isNewPost ? 'news-post-new' : ''}`}
                ref={index === postsPerPage ? newPostsRef : null}
              >
                <img 
                  src={post.img} 
                  alt={`${post.headline} - DaggerQuest News`} 
                  className="news-thumb"
                  loading="lazy"
                  decoding="async"
                />
                <div className="news-headline">{post.headline}</div>
              </Link>
            )
          })}
        </section>
        {showMoreButton && (
          <button 
            id="show-more-btn" 
            className={`show-more-btn ${isLoading ? 'loading' : ''}`}
            aria-label="Load more news articles"
            onClick={loadMore}
            disabled={isLoading}
          >
            {isLoading ? 'loading...' : 'show more'}
          </button>
        )}
      </main>
    </>
  )
}

export default News