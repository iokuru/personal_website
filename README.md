# personal website

Portfolio and engineering notes built with Astro.

Live: [krishnakatiyar.netlify.app](https://krishnakatiyar.netlify.app/)

## Structure

```
public/
  fonts/
    SundayInspiredScript.otf
src/
  components/
    Card.astro
    Footer.astro
    Sidebar.astro
    StatsBar.astro
  layouts/
    Base.astro
  pages/
    index.astro
    blogs.astro
  scripts/
    namecycler.js
  styles/
    base.css
    blogs.css
    cards.css
    layout.css
    stats.css
astro.config.mjs
netlify.toml
package.json
tsconfig.json
```

## Stack

- [Astro](https://astro.build/)
- Vanilla CSS with CSS custom properties
- Zero heavy client-side runtime dependencies

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
