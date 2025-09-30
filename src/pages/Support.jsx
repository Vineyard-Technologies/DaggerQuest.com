import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import SEO from '../components/SEO'

function ContactForm() {
  const [state, handleSubmit] = useForm("xpwydban")
  
  if (state.succeeded) {
    return (
      <div className="success-message">
        <h2>Thank you for contacting us!</h2>
        <p>We've received your message and will get back to you soon.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <label htmlFor="email">Email Address *</label>
        <input
          id="email"
          type="email" 
          name="email"
          required
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
      </div>

      <div className="form-group">
        <label htmlFor="subject">Subject</label>
        <input
          id="subject"
          type="text" 
          name="subject"
          placeholder="Brief description of your issue"
        />
        <ValidationError 
          prefix="Subject" 
          field="subject"
          errors={state.errors}
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          rows="6"
          placeholder="Please describe your issue or question in detail..."
          required
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
      </div>

      <button type="submit" disabled={state.submitting} className="submit-btn">
        {state.submitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}

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
          <h1>Contact Support</h1>
          <p>Having trouble with DaggerQuest? Need help or want to report a bug? Send us a message and we'll get back to you as soon as possible.</p>
          <ContactForm />
        </section>
      </main>
    </>
  )
}

export default Support