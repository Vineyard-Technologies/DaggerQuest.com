import React from 'react'
import SEO from '../components/SEO'

function Support() {
  return (
    <>
      <SEO 
        title="Support | DaggerQuest | Browser ARPG"
        description="DaggerQuest Support: Get help, report bugs, and find answers to common questions about the browser ARPG."
        url="https://DaggerQuest.com/support"
      />
      <main className="container">
        <section className="support-form-container">
          <h1 className="sr-only">Support Contact Form</h1>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSct_8rqX4eF7Ywc7g3vUTC7zPbinfNSAgE7xwR8ShdZ-__-gA/viewform?embedded=true"
            title="DaggerQuest Support Contact Form"
            loading="lazy"
          >
            Loading…
          </iframe>
        </section>
      </main>
    </>
  )
}

export default Support