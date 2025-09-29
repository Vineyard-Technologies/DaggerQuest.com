import React from 'react'
import SEO from '../components/SEO'

function Home() {
  return (
    <>
      <SEO 
        title="DaggerQuest | Browser ARPG"
        description="Play DaggerQuest, a browser-based action RPG. Dive into adventure, battle monsters, and collect loot in this free online game."
        image="https://DaggerQuest.com/images/logo.webp"
        url="https://DaggerQuest.com/"
        schemaType="VideoGame"
        schemaData={{
          name: "DaggerQuest",
          url: "https://DaggerQuest.com/",
          image: "https://DaggerQuest.com/images/logo.webp",
          description: "Play DaggerQuest, a browser-based action RPG. Dive into adventure, battle monsters, and collect loot in this free online game.",
          author: {
            "@type": "Organization",
            name: "Vineyard Technologies"
          },
          applicationCategory: "Game",
          operatingSystem: "All",
          genre: ["Action", "RPG", "Browser Game"],
          inLanguage: "en",
          offers: {
            "@type": "Offer",
            price: "0.00",
            priceCurrency: "USD"
          }
        }}
      />
      <main className="container flex-ads">
        <aside className="ad-slot left-ad desktop-only">
          {/* DaggerQuest Left Ad */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                if (location.hostname === "daggerquest.com") {
                  document.write('<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2087729758302145" crossorigin="anonymous"><\\/script>');
                }
              `
            }}
          />
          <ins
            className="adsbygoogle"
            style={{ display: 'inline-block', width: '200px', height: '720px' }}
            data-ad-client="ca-pub-2087729758302145"
            data-ad-slot="2524300910"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                if (location.hostname === "daggerquest.com") {
                  (adsbygoogle = window.adsbygoogle || []).push({});
                }
              `
            }}
          />
        </aside>
        <section className="center-content">
          <iframe 
            className="game-frame desktop-only" 
            src="/game/index.html" 
            allowFullScreen 
            loading="lazy" 
            title="DaggerQuest Game"
          />
          <div id="mobile-message" className="mobile-only">
            DaggerQuest is not yet available for mobile devices. Check back soon!
          </div>
          <footer id="footer"></footer>
        </section>
        <aside className="ad-slot right-ad desktop-only">
          {/* DaggerQuest Right Ad */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                if (location.hostname === "daggerquest.com") {
                  document.write('<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2087729758302145" crossorigin="anonymous"><\\/script>');
                }
              `
            }}
          />
          <ins
            className="adsbygoogle"
            style={{ display: 'inline-block', width: '200px', height: '720px' }}
            data-ad-client="ca-pub-2087729758302145"
            data-ad-slot="2524300910"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                if (location.hostname === "daggerquest.com") {
                  (adsbygoogle = window.adsbygoogle || []).push({});
                }
              `
            }}
          />
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-2087729758302145"
            data-ad-slot="2524300910"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                if (location.hostname === "daggerquest.com") {
                  (adsbygoogle = window.adsbygoogle || []).push({});
                }
              `
            }}
          />
        </aside>
      </main>
    </>
  )
}

export default Home