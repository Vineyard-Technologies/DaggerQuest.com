import React from 'react'
import { useParams } from 'react-router-dom'
import SEO from '../components/SEO'

function NewsPost() {
  const { slug } = useParams()

  return (
    <>
      <SEO 
        title={`News: ${slug} | DaggerQuest | Browser ARPG`}
        description={`Read the latest DaggerQuest news post: ${slug}`}
        url={`https://DaggerQuest.com/news/${slug}`}
      />
      <main className="container news-container">
        <article className="news-post-detail">
          <h1 className="news-title">{slug}</h1>
          <section className="news-body">
            <p>News post content for {slug} coming soon...</p>
          </section>
        </article>
      </main>
    </>
  )
}

export default NewsPost