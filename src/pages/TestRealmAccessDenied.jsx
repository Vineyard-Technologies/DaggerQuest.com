import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function TestRealmAccessDenied() {
  const titleRef = useScrollAnimation()
  const contentRef = useScrollAnimation()

  return (
    <>
      <SEO 
        title="Test Realm Access Denied | DaggerQuest"
        description="Access to the DaggerQuest test realm is restricted. Please contact support if you believe this is an error."
        url="https://DaggerQuest.com/test-realm-access-denied"
      />
      <main className="container">
        <div className="access-denied-page">
          <h1 ref={titleRef} className="title fade-in-element">access denied</h1>
          <div ref={contentRef} className="access-denied-content fade-in-element">
            <p className="access-denied-message">
              Sorry, you don't have permission to access the test realm.
            </p>
            <p className="access-denied-description">
              The test realm is restricted to authorized users only. If you believe you should have access, 
              please contact our support team for assistance.
            </p>
            <div className="access-denied-actions">
              <Link to="/support" className="access-denied-button primary">
                contact support
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default TestRealmAccessDenied