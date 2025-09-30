import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SEO from '../components/SEO'

function NewsPost() {
  const { slug } = useParams()
  const [newsData, setNewsData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadNewsContent = async () => {
      try {
        setLoading(true)
        // Fetch the HTML file from the news folder
        const response = await fetch(`/news/${slug}.html`)
        
        if (!response.ok) {
          throw new Error(`News post not found: ${slug}`)
        }
        
        const htmlContent = await response.text()
        
        // Parse the HTML content
        const parser = new DOMParser()
        const doc = parser.parseFromString(htmlContent, 'text/html')
        
        // Extract the relevant content
        const titleElement = doc.querySelector('.news-title')
        const bodyElement = doc.querySelector('.news-body')
        const imageElement = doc.querySelector('.news-thumb')
        
        // Extract meta information for SEO
        const metaDescription = doc.querySelector('meta[name="description"]')?.getAttribute('content')
        const ogImage = doc.querySelector('meta[property="og:image"]')?.getAttribute('content')
        const pageTitle = doc.querySelector('title')?.textContent

        setNewsData({
          title: titleElement?.textContent || slug,
          body: bodyElement?.innerHTML || '',
          image: imageElement?.getAttribute('src')?.replace('../', '/') || '',
          imageAlt: imageElement?.getAttribute('alt') || '',
          description: metaDescription || `Read the latest DaggerQuest news post: ${slug}`,
          ogImage: ogImage || '',
          pageTitle: pageTitle || `News: ${slug} | DaggerQuest | Browser ARPG`
        })
      } catch (err) {
        console.error('Error loading news content:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    if (slug) {
      loadNewsContent()
    }
  }, [slug])

  if (loading) {
    return (
      <>
        <SEO 
          title={`News: ${slug} | DaggerQuest | Browser ARPG`}
          description={`Read the latest DaggerQuest news post: ${slug}`}
          url={`https://DaggerQuest.com/news/${slug}`}
        />
        <main className="container news-container">
          <article className="news-post-detail">
            <h1 className="news-title">Loading...</h1>
            <section className="news-body">
              <p>Loading news content...</p>
            </section>
          </article>
        </main>
      </>
    )
  }

  if (error) {
    const isDisabled = DISABLED_POSTS.includes(slug)
    const title = isDisabled ? `Coming Soon | DaggerQuest | Browser ARPG` : `News Post Not Found | DaggerQuest | Browser ARPG`
    const heading = isDisabled ? 'Coming Soon' : 'News Post Not Found'
    
    return (
      <>
        <SEO 
          title={title}
          description={isDisabled ? 'This news post is not available yet. Please check back later!' : 'The requested news post could not be found'}
          url={`https://DaggerQuest.com/news/${slug}`}
        />
        <main className="container news-container">
          <article className="news-post-detail">
            <h1 className="news-title">{heading}</h1>
            <section className="news-body">
              {isDisabled ? (
                <>
                  <p>This news post is not available yet. Please check back later!</p>
                  <p><a href="/news">← Back to News</a></p>
                </>
              ) : (
                <>
                  <p>Sorry, we couldn't find the news post you're looking for.</p>
                  <p>Error: {error}</p>
                  <p><a href="/news">← Back to News</a></p>
                </>
              )}
            </section>
          </article>
        </main>
      </>
    )
  }

  return (
    <>
      <SEO 
        title={newsData.pageTitle}
        description={newsData.description}
        url={`https://DaggerQuest.com/news/${slug}`}
        image={newsData.ogImage}
      />
      <main className="container news-container">
        <article className="news-post-detail">
          {newsData.image && (
            <img 
              src={newsData.image} 
              alt={newsData.imageAlt} 
              className="news-thumb"
            />
          )}
          <h1 className="news-title">{newsData.title}</h1>
          <div 
            className="news-body"
            dangerouslySetInnerHTML={{ __html: newsData.body }}
          />
          <div className="news-divider"></div>
        </article>
      </main>
    </>
  )
}

export default NewsPost