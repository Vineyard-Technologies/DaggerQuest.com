// Shared news posts data
// This file serves as the single source of truth for news posts

export const newsPosts = [
  {
    href: "/news/patch-notes-045",
    img: "/images/045.webp",
    alt: "DaggerQuest 0.4.5",
    headline: "0.4.5 Patch Notes",
    description: "Latest updates and improvements to DaggerQuest gameplay and mechanics."
  },
  {
    href: "/news/test-realm", 
    img: "/images/new-test-realm.webp",
    alt: "DaggerQuest News Post",
    headline: "New Test Realm",
    description: "Explore the latest experimental features and upcoming content in our new test environment."
  },
  {
    href: "/news/patch-notes-044",
    img: "/images/044.webp", 
    alt: "DaggerQuest 0.4.4",
    headline: "0.4.4 Patch Notes",
    description: "Bug fixes, balance improvements, and new quality of life features for better gameplay."
  },
  {
    href: "/news/patch-notes-043",
    img: "/images/043.webp",
    alt: "DaggerQuest 0.4.3", 
    headline: "0.4.3 Patch Notes",
    description: "Performance optimizations and critical bug fixes for enhanced game stability."
  },
  {
    href: "/news/patch-notes-042",
    img: "/images/042.webp",
    alt: "DaggerQuest 0.4.2",
    headline: "0.4.2 Patch Notes",
    description: "New content additions, equipment balancing, and player experience improvements."
  },
  {
    href: "/news/patch-notes-041",
    img: "/images/041.webp",
    alt: "DaggerQuest 0.4.1",
    headline: "0.4.1 Patch Notes",
    description: "Combat system refinements and user interface enhancements for smoother gameplay."
  },
  {
    href: "/news/patch-notes-040",
    img: "/images/040.webp",
    alt: "DaggerQuest 0.4.0",
    headline: "0.4.0 Patch Notes",
    description: "Major update featuring new areas, abilities, and significant gameplay improvements."
  },
  {
    href: "/news/patch-notes-039", 
    img: "/images/039.webp",
    alt: "DaggerQuest 0.3.9",
    headline: "0.3.9 Patch Notes",
    description: "Quality of life updates and bug fixes based on community feedback and reports."
  },
  {
    href: "/news/patch-notes-038",
    img: "/images/038.webp",
    alt: "DaggerQuest 0.3.8",
    headline: "0.3.8 Patch Notes",
    description: "Security improvements and performance optimizations for a better gaming experience."
  },
  {
    href: "/news/patch-notes-037",
    img: "/images/037.webp",
    alt: "DaggerQuest 0.3.7", 
    headline: "0.3.7 Patch Notes",
    description: "Equipment system overhaul and new character progression features added."
  },
  {
    href: "/news/patch-notes-036",
    img: "/images/036.webp",
    alt: "DaggerQuest 0.3.6",
    headline: "0.3.6 Patch Notes",
    description: "Audio improvements, visual enhancements, and gameplay balance adjustments."
  },
  {
    href: "/news/patch-notes-035",
    img: "/images/035.webp",
    alt: "DaggerQuest 0.3.5",
    headline: "0.3.5 Patch Notes",
    description: "Network stability improvements and various bug fixes for better connectivity."
  },
  {
    href: "/news/patch-notes-034",
    img: "/images/034.webp",
    alt: "DaggerQuest 0.3.4",
    headline: "0.3.4 Patch Notes",
    description: "Initial release improvements and foundational updates to core game systems."
  }
];

// Simple caching for news data
let cachedPosts = null
let cacheTime = 0
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

export const getNewsPosts = () => {
  const now = Date.now()
  if (cachedPosts && (now - cacheTime) < CACHE_DURATION) {
    return cachedPosts
  }
  
  cachedPosts = newsPosts
  cacheTime = now
  return cachedPosts
}

// Get latest posts for dropdown display
export const getLatestPosts = (count = 3) => {
  return getNewsPosts().slice(0, count);
}