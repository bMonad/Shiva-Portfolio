import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function SEO({
  description,
  url,
  image,
  keywords,
  author,
  noIndex = false,
}) {
  const siteName = 'SHIVANSH SINGH — Software Engineer'
  const canonical = url || 'https://me-shivansh-singh.web.app/'
  const metaTitle = siteName
  const metaDescription = description || 'SHIVANSH SINGH — Software Engineer portfolio'
  const metaImage = image || 'https://me-shivansh-singh.web.app/default-og.png'
  const metaKeywords = (keywords || 'software,engineer,frontend,developer,react,portfolio,javascript,web,website').split(',').map(s => s.trim()).join(', ')
  const robotsContent = noIndex ? 'noindex, nofollow' : 'index, follow'

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": canonical + "#person",
        "name": author || "SHIVANSH SINGH",
        "url": canonical,
        "sameAs": [
          "https://github.com/bMonad",
          "https://www.linkedin.com/in/shivanshsingh1706/"
        ]
      },
      {
        "@type": "WebSite",
        "@id": canonical + "#website",
        "url": canonical,
        "name": siteName,
        "publisher": {
          "@id": canonical + "#person"
        }
      }
    ]
  }

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <link rel="canonical" href={canonical} />
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content={author || 'SHIVANSH SINGH'} />
      <meta name="robots" content={robotsContent} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={metaImage} />

      <meta property="og:locale" content="en_US" />
      <meta property="og:image:alt" content={`${siteName} — ${metaDescription}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="article:author" content={canonical + '#person'} />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>

    </Helmet>
  )
}