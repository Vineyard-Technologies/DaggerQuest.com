import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function Analytics() {
  const location = useLocation()

  useEffect(() => {
    // Only load analytics on the production domain
    if (window.location.hostname === "daggerquest.com") {
      // Load Google Analytics if not already loaded
      if (!document.getElementById('google-gtag')) {
        // Add the gtag.js script
        const gaScript = document.createElement('script')
        gaScript.async = true
        gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-C5SY437DMY'
        gaScript.id = 'google-gtag'
        document.head.appendChild(gaScript)

        // Add the inline config script
        const inlineScript = document.createElement('script')
        inlineScript.innerHTML = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-C5SY437DMY');`
        document.head.appendChild(inlineScript)
      }
    } else {
      console.warn('Not running on DaggerQuest.com, skipping analytics')
    }
  }, [])

  // Track page views
  useEffect(() => {
    if (window.gtag && window.location.hostname === "daggerquest.com") {
      window.gtag('config', 'G-C5SY437DMY', {
        page_path: location.pathname,
      })
    }
  }, [location])

  return null // This component doesn't render anything
}

export default Analytics