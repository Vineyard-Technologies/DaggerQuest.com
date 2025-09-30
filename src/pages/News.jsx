import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

// News posts data (from news-loader.js)
const newsPosts = [
  // {
  //   href: "/news/patch-notes-045",
  //   img: "/images/045.webp",
  //   alt: "DaggerQuest 0.4.5",
  //   headline: "0.4.5 Patch Notes"
  // },
  {
    href: "/news/test-realm", 
    img: "/images/test-realm.webp",
    alt: "DaggerQuest News Post",
    headline: "new logo and test realm"
  },
  {
    href: "/news/patch-notes-044",
    img: "/images/044.webp", 
    alt: "DaggerQuest 0.4.4",
    headline: "0.4.4 Patch Notes"
  },
  {
    href: "/news/patch-notes-043",
    img: "/images/043.webp",
    alt: "DaggerQuest 0.4.3", 
    headline: "0.4.3 Patch Notes"
  },
  {
    href: "/news/patch-notes-042",
    img: "/images/042.webp",
    alt: "DaggerQuest 0.4.2",
    headline: "0.4.2 Patch Notes"
  },
  {
    href: "/news/patch-notes-041",
    img: "/images/041.webp",
    alt: "DaggerQuest 0.4.1",
    headline: "0.4.1 Patch Notes"
  },
  {
    href: "/news/patch-notes-040",
    img: "/images/040.webp",
    alt: "DaggerQuest 0.4.0",
    headline: "0.4.0 Patch Notes"
  },
  {
    href: "/news/patch-notes-039", 
    img: "/images/039.webp",
    alt: "DaggerQuest 0.3.9",
    headline: "0.3.9 Patch Notes"
  },
  {
    href: "/news/patch-notes-038",
    img: "/images/038.webp",
    alt: "DaggerQuest 0.3.8",
    headline: "0.3.8 Patch Notes"
  },
  {
    href: "/news/patch-notes-037",
    img: "/images/037.webp",
    alt: "DaggerQuest 0.3.7", 
    headline: "0.3.7 Patch Notes"
  },
  {
    href: "/news/patch-notes-036",
    img: "/images/036.webp",
    alt: "DaggerQuest 0.3.6",
    headline: "0.3.6 Patch Notes"
  },
  {
    href: "/news/patch-notes-035",
    img: "/images/035.webp",
    alt: "DaggerQuest 0.3.5",
    headline: "0.3.5 Patch Notes"
  },
  {
    href: "/news/patch-notes-034",
    img: "/images/034.webp",
    alt: "DaggerQuest 0.3.4",
    headline: "0.3.4 Patch Notes"
  }
];

const postsPerPage = 6;

function News() {
  const [visiblePosts, setVisiblePosts] = useState(postsPerPage)

  const loadMore = () => {
    setVisiblePosts(prev => Math.min(prev + postsPerPage, newsPosts.length))
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
        <h1 className="title">news</h1>
        <section className="news-reel" id="news-reel" aria-label="News articles">
          {newsPosts.slice(0, visiblePosts).map((post, index) => (
            <Link key={index} to={post.href} className="news-post">
              <img src={post.img} alt={post.alt} className="news-thumb" />
              <div className="news-headline">{post.headline}</div>
            </Link>
          ))}
        </section>
        {showMoreButton && (
          <button 
            id="show-more-btn" 
            className="show-more-btn" 
            aria-label="Load more news articles"
            onClick={loadMore}
          >
            show more
          </button>
        )}
      </main>
    </>
  )
}

export default News