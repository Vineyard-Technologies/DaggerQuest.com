import React from 'react'
import SEO from '../components/SEO'

// Media data (from media-loader.js) 
const wallpapers = [
  {
    name: "splash screen",
    thumb: "/images/splashScreen.webp",
    full: "/images/wallpapers/splashScreen.png"
  },
  {
    name: "screenshot", 
    thumb: "/images/screenshot.webp",
    full: "/images/wallpapers/screenshot.png"
  },
  {
    name: "main menu",
    thumb: "/images/mainMenu.webp", 
    full: "/images/wallpapers/mainMenu.png"
  },
  {
    name: "loading screen",
    thumb: "/images/loadingScreen.webp",
    full: "/images/wallpapers/loadingScreen.png"
  }
];

function Media() {
  return (
    <>
      <SEO 
        title="Media | DaggerQuest | Browser ARPG"
        description="DaggerQuest Media: View screenshots, videos, and artwork from the browser-based ARPG adventure."
        url="https://DaggerQuest.com/media"
      />
      <main className="container news-container">
        <h1 className="title">media</h1>
        <section className="media-reel" id="media-reel" aria-label="Media gallery">
          {wallpapers.map((wallpaper, index) => (
            <div key={index} className="news-post media-post">
              <div className="media-thumb-container">
                <a href={wallpaper.full} target="_blank" rel="noopener noreferrer">
                  <img className="media-thumb" src={wallpaper.thumb} alt={wallpaper.name} />
                </a>
              </div>
              <div className="media-title">{wallpaper.name}</div>
            </div>
          ))}
        </section>
      </main>
    </>
  )
}

export default Media