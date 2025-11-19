
const fs = require('fs')
const path = require('path')
const { exit } = require('process')

/* CONFIG - set your site URL here (must be absolute) */
const siteRoot = 'https://me-shivansh-singh.web.app' // <-- REPLACE with your site URL, no trailing slash

/* Try to load routes from JSON files (optional) */
function loadRoutes() {
  const candidates = [
    path.join(process.cwd(), 'scripts', 'routes.json'),
    path.join(process.cwd(), 'src', 'routes.json'),
    path.join(process.cwd(), 'routes.json')
  ]
  for (const p of candidates) {
    if (fs.existsSync(p)) {
      try {
        const data = JSON.parse(fs.readFileSync(p, 'utf8'))
        if (Array.isArray(data)) return data
        if (Array.isArray(data.routes)) return data.routes
      } catch (err) {
        console.warn('Warning: failed to parse routes file:', p, err.message)
      }
    }
  }

  // FALLBACK: edit this array to add public routes if you don't have a JSON routes file
  return [
    "/",
    "/about",
    "/skills",
    "/portfolio",
    "/contact"
  ]
  // add more absolute-path routes (leading slash). Do NOT include full siteRoot here.
}

/* normalize route: ensure leading slash, no trailing slash (except root) */
function normalizeRoute(r) {
  if (!r) return '/'
  let s = String(r)
  if (!s.startsWith('/')) s = '/' + s
  if (s.length > 1 && s.endsWith('/')) s = s.slice(0, -1)
  return s
}

function buildSitemap(siteRoot, routes) {
  const seen = new Set()
  const urlEntries = routes.map(raw => {
    const route = normalizeRoute(raw)
    if (seen.has(route)) return null
    seen.add(route)
    const loc = siteRoot.replace(/\/$/, '') + route
    // customize changefreq/priority per-route if needed
    return `  <url>
    <loc>${loc}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`
  }).filter(Boolean).join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`
  return xml
}

function writeSitemap(xml) {
  const outDir = path.join(process.cwd(), 'dist')
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })
  const outPath = path.join(outDir, 'sitemap.xml')
  fs.writeFileSync(outPath, xml, 'utf8')
  return outPath
}

function main() {
  if (!/^https?:\/\//.test(siteRoot)) {
    console.error('ERROR: siteRoot must be an absolute URL starting with http:// or https://. Edit scripts/generate-sitemap.js')
    exit(2)
  }

  const routes = loadRoutes()
  if (!routes || routes.length === 0) {
    console.error('ERROR: no routes found. Add routes to scripts/routes.json or edit the fallback routes array in this file.')
    exit(3)
  }

  const xml = buildSitemap(siteRoot, routes)
  const outPath = writeSitemap(xml)
  console.log('sitemap written to:', outPath)
  console.log('routes included:', routes.length)
}

if (require.main === module) main()