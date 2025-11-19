
const fs = require('fs')
const path = require('path')

function exists(p) { return fs.existsSync(path.join(process.cwd(), p)) }

const checks = [
  { ok: exists('package.json'), name: 'package.json' },
  { ok: exists('index.html') || exists('public/index.html'), name: 'index.html (root or public)' },
  { ok: exists('public/robots.txt'), name: 'public/robots.txt' },
  { ok: exists('public/default-og.png') || exists('public/og-image.png'), name: 'public/default-og.png (recommended)' },
  { ok: exists('scripts/generate-sitemap.js'), name: 'scripts/generate-sitemap.js' },
  { ok: exists('dist/sitemap.xml'), name: 'dist/sitemap.xml (exists after build)' }
]

console.log('SEO validation checks:')
let failed = 0
checks.forEach(c => {
  if (c.ok) console.log('  ✔', c.name)
  else {
    console.log('  ✖', c.name)
    failed++
  }
})

if (!exists('scripts/generate-sitemap.js')) {
  console.log('\nAction: create scripts/generate-sitemap.js (see scripts/generate-sitemap.js template).')
} else {
  // quick heuristic: check siteRoot inside script
  const script = fs.readFileSync(path.join(process.cwd(), 'scripts', 'generate-sitemap.js'), 'utf8')
  const match = script.match(/const siteRoot\s*=\s*['"`](.+?)['"`]/)
  if (match) {
    const url = match[1]
    if (!/^https:\/\//.test(url)) {
      console.log('\nWarning: siteRoot is not https:// — edit scripts/generate-sitemap.js and set siteRoot to your production URL (https://your-site.com)')
      failed++
    } else {
      console.log('  ✔ siteRoot looks valid:', url)
    }
  } else {
    console.log('  ✖ Could not detect siteRoot in scripts/generate-sitemap.js — open the file and set siteRoot = "https://your-site.com"')
    failed++
  }
}

if (failed === 0) {
  console.log('\nAll minimal checks passed. Next steps:')
  console.log(' - Add or confirm your routes (scripts/routes.json or inline in generate-sitemap.js).')
  console.log(' - Run `npm run build` and verify dist/sitemap.xml and dist/robots.txt are present.')
  process.exit(0)
} else {
  console.log(`\n${failed} checks failed. Fix the issues above and re-run this script.`)
  process.exit(1)
}
// ...existing code...