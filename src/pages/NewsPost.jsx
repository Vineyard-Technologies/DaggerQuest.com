import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { marked } from 'marked'
import SEO from '../components/SEO'

// Simple frontmatter parser for browser use
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/
  const match = content.match(frontmatterRegex)
  
  if (!match) {
    return { data: {}, content }
  }
  
  const [, frontmatterText, markdownContent] = match
  const data = {}
  
  // Parse YAML-like frontmatter
  const lines = frontmatterText.split('\n')
  for (const line of lines) {
    const colonIndex = line.indexOf(':')
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim()
      let value = line.slice(colonIndex + 1).trim()
      
      // Remove quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1)
      }
      
      data[key] = value
    }
  }
  
  return { data, content: markdownContent }
}

function NewsPost() {
  const { slug } = useParams()
  const [newsData, setNewsData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadNewsContent = async () => {
      try {
        setLoading(true)
        
        // Try to fetch Markdown file first, fallback to HTML
        let response = await fetch(`/news/${slug}.md`)
        let isMarkdown = true
        
        if (!response.ok) {
          // Fallback to HTML file
          response = await fetch(`/news/${slug}.html`)
          isMarkdown = false
          
          if (!response.ok) {
            throw new Error(`News post not found: ${slug}`)
          }
        }
        
        const content = await response.text()
        
        if (isMarkdown) {
          // Parse Markdown with frontmatter
          const { data: frontmatter, content: markdownContent } = parseFrontmatter(content)
          
          // Convert Markdown to HTML
          const htmlContent = marked(markdownContent)
          
          setNewsData({
            title: frontmatter.version ? `Release ${frontmatter.version}` : frontmatter.title,
            body: htmlContent,
            image: frontmatter.image || '',
            imageAlt: frontmatter.imageAlt || `DaggerQuest ${frontmatter.version || slug}`,
            description: frontmatter.description || `Read the latest DaggerQuest news post: ${slug}`,
            pageTitle: frontmatter.title || `News: ${slug} | DaggerQuest | Browser ARPG`,
            version: frontmatter.version
          })
        } else {
          // Legacy HTML parsing (keep existing logic for backward compatibility)
          const parser = new DOMParser()
          const doc = parser.parseFromString(content, 'text/html')
          
          const titleElement = doc.querySelector('.news-title')
          const bodyElement = doc.querySelector('.news-body')
          const imageElement = doc.querySelector('.news-thumb')
          
          const metaDescription = doc.querySelector('meta[name="description"]')?.getAttribute('content')
          const pageTitle = doc.querySelector('title')?.textContent

          setNewsData({
            title: titleElement?.textContent || slug,
            body: bodyElement?.innerHTML || '',
            image: imageElement?.getAttribute('src')?.replace('../', '/') || '',
            imageAlt: imageElement?.getAttribute('alt') || '',
            description: metaDescription || `Read the latest DaggerQuest news post: ${slug}`,
            pageTitle: pageTitle || `News: ${slug} | DaggerQuest | Browser ARPG`
          })
        }
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
        image={newsData.image}
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
          <div 
            className="news-body markdown-content"
            dangerouslySetInnerHTML={{ __html: newsData.body }}
          />
        </article>
      </main>
    </>
  )
}

export default NewsPost