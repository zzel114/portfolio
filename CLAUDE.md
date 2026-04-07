# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Static portfolio website — no build step, no framework, no dependencies. Open `index.html` in a browser and it works.

## How to run locally

```bash
# Any of these work:
npx serve .          # Node http-server
python -m http.server 8080
# Or just open index.html directly in a browser
```

## File structure & what each piece does

```
index.html          — single-page shell; all sections live here
data/projects.js    — ALL content data (projects + personal info); edit this to update the site
assets/css/style.css — all styles; design tokens (colors, fonts, spacing) are CSS variables at the top of :root
assets/js/main.js   — reads data/projects.js, renders cards, handles nav, theme, filter tabs, scroll reveal
assets/images/      — drop project screenshots and avatar here
```

## How to update content

**Add a project:** append an object to the `PROJECTS` array in `data/projects.js`.
**Change personal info:** edit the `PROFILE` object in `data/projects.js`.
**Change skills/stats:** edit the hardcoded badges and numbers in `index.html` (About section).
**Change colors/fonts:** edit CSS variables under `:root` in `assets/css/style.css`.

## Architecture decisions

- `data/projects.js` is loaded as a plain `<script>` tag before `main.js`; it sets `window.PROJECTS` and `window.PROFILE`.
- `main.js` queries the DOM after `DOMContentLoaded` and dynamically renders project cards and filter tabs from those globals — no build pipeline needed.
- Theme (dark/light) is stored in `localStorage` under key `porto-theme` and applied via `data-theme` on `<html>`.
- Filter tabs are generated automatically from the unique `category` values in `PROJECTS`.
- Scroll-reveal uses `IntersectionObserver` on elements with class `reveal`.

## Deploying to GitHub Pages

1. Push the repo to GitHub (e.g. `yourusername/portfolio`).
2. Go to **Settings → Pages → Source** and pick the `main` branch, `/ (root)`.
3. The site will be live at `https://yourusername.github.io/portfolio/`.

No `gh-pages` branch or CI needed — everything is static.
