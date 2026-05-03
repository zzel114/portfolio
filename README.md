# Muhammad Zelot Zoha — Portfolio Website

A personal portfolio for an instrument engineer. Single HTML file, no frameworks, no build tools. Works by opening `index.html` in any browser.

Live at: **https://zzel114.github.io/portfolio/**

---

## Table of Contents

1. [Project Structure](#project-structure)
2. [How to Run Locally](#how-to-run-locally)
3. [How the Site Works — Big Picture](#how-the-site-works--big-picture)
4. [Dual-Theme System (Light / Dark)](#dual-theme-system-light--dark)
5. [CSS Design Tokens](#css-design-tokens)
6. [Sections Explained](#sections-explained)
7. [JavaScript — Three Features](#javascript--three-features)
8. [Images & Assets](#images--assets)
9. [How to Update Content](#how-to-update-content)
10. [Responsive Breakpoints](#responsive-breakpoints)
11. [Deploying to GitHub Pages](#deploying-to-github-pages)
12. [Portfolio Deck (Pending)](#portfolio-deck-pending)
13. [Version History](#version-history)

---

## Project Structure

```
portfolio/
├── index.html              ← The entire website (HTML + CSS + JS, all in one file)
├── assets/
│   ├── images/
│   │   ├── foto_zelot.jpg          ← Avatar photo (hero card)
│   │   ├── wtp/                    ← Water Treatment Plant project images
│   │   ├── geodipa/                ← Geo Dipa Energy project images
│   │   ├── ugm_plc/                ← UGM PLC teaching project images
│   │   ├── jgc/                    ← PT JGC Indonesia internship images
│   │   ├── gamaforce/              ← GAMAFORCE UAV project images
│   │   ├── kamalogis/              ← KAMALOGIS water level project images
│   │   └── lpkta/                  ← LPKTA robot & IoT project images
│   └── css/
│       └── style.css               ← (legacy, not used by index.html)
├── Portfolio Deck.html     ← 10-slide presentation (pending deployment)
├── deck-stage.js           ← Deck runtime (pending deployment)
├── portfolio_zelot_v1/     ← Original version, kept as backup
└── portfolio_zelot_v2/     ← Development copy, source of truth for content edits
```

> **Note:** All styles and scripts for `index.html` are written **inline inside the file itself** — there are no external `.css` or `.js` files that `index.html` depends on. The `assets/css/style.css` is a legacy file from v1 and is not loaded.

---

## How to Run Locally

You can open the file directly in a browser (double-click `index.html`), but some browsers block local font loading. A simple local server is better:

```bash
# Option 1 — Python (built into most computers)
python -m http.server 8080
# then open http://localhost:8080

# Option 2 — Node.js
npx serve .
# then open the URL it prints

# Option 3 — Just double-click index.html
# Works fine for viewing. Fonts load from Google Fonts (needs internet).
```

---

## How the Site Works — Big Picture

The entire site is one file: `index.html`. It contains three things in order:

1. **`<style>` block** — all the CSS (visual design, layout, animations, both themes)
2. **`<body>` block** — the HTML structure (all sections, content, images)
3. **`<script>` block** — a small amount of JavaScript at the bottom (theme toggle, scroll reveal, nav highlight)

When a visitor opens the page:
1. The browser reads the HTML top to bottom
2. Before any paint happens, a tiny inline `<script>` in `<head>` checks `localStorage` and applies the saved theme — this prevents a white flash on dark-theme users
3. CSS loads and renders the layout
4. JavaScript at the bottom adds interactivity

No React, no Vue, no build step — just standard browser technology.

---

## Dual-Theme System (Light / Dark)

This is one of the most important design decisions in the project. Here is exactly how it works.

### Step 1 — CSS Variables define all colors

At the top of the `<style>` block, every color in the site is defined as a CSS variable (also called a "custom property") inside `:root`:

```css
:root {
  --bg:     #f4f1ea;   /* warm off-white background */
  --accent: #e85a2a;   /* burnt orange accent color */
  --text:   #141218;   /* near-black text */
  /* ...more variables... */
}
```

Every element in the site uses these variables instead of hardcoded colors. For example:

```css
body { background: var(--bg); color: var(--text); }
.btn-primary { background: var(--accent); }
```

### Step 2 — Dark theme overrides the same variables

A second CSS block redefines the same variables, but only when the `<html>` element has `data-theme="dark"` on it:

```css
[data-theme="dark"] {
  --bg:     #0b0b10;   /* very dark navy */
  --accent: #6c63ff;   /* violet accent */
  --text:   #e8e8f0;   /* light text */
  /* ...same variable names, different values... */
}
```

Because every element already uses `var(--accent)` etc., they all automatically switch colors. No JavaScript changes any element styles — JS only adds/removes the `data-theme="dark"` attribute on `<html>`.

### Step 3 — Anti-flash script

If a user previously chose dark mode, saved in `localStorage`, the page must apply dark mode *before the browser paints anything* — otherwise there is a brief white flash.

This small script runs synchronously before CSS even loads:

```html
<!-- In <head>, before the <style> block -->
<script>
  (function(){
    var t = localStorage.getItem('porto-theme');
    if (t === 'dark') document.documentElement.setAttribute('data-theme','dark');
  })();
</script>
```

It is wrapped in an IIFE (`function(){ ... }()`) so it does not pollute the global scope.

### Step 4 — Theme toggle button

The moon/sun button in the nav:

```html
<button class="theme-toggle" id="themeToggle">
  <svg class="icon-moon">...</svg>   <!-- shown in light mode -->
  <svg class="icon-sun">...</svg>    <!-- shown in dark mode -->
</button>
```

Which icon is visible is controlled purely by CSS — no JavaScript changes `display`:

```css
.icon-sun  { display: none; }    /* hidden by default (light mode) */
.icon-moon { display: block; }   /* visible by default (light mode) */

[data-theme="dark"] .icon-sun  { display: block; }  /* show sun in dark mode */
[data-theme="dark"] .icon-moon { display: none; }   /* hide moon in dark mode */
```

The JavaScript just toggles the attribute and saves to storage:

```js
document.getElementById('themeToggle').addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('porto-theme', next);
});
```

### Why this approach is good

- **No flash** — theme is applied before first paint
- **No JS for styling** — CSS handles all visual changes, JS only flips one attribute
- **Persistent** — survives page refresh and browser restarts via `localStorage`
- **One source of truth** — all color decisions live in the `:root` block

---

## CSS Design Tokens

"Design tokens" is just a name for the CSS variables that define the visual system. Here is what each one does:

| Variable | Light value | Dark value | Purpose |
|---|---|---|---|
| `--bg` | `#f4f1ea` | `#0b0b10` | Page background |
| `--bg2` | `#ece8df` | `#101018` | Slightly darker background, used for card backgrounds |
| `--surface` | `#ffffff` | `#16161f` | Card / panel background |
| `--surface2` | `#f7f4ee` | `#1e1e2a` | Hover state for cards |
| `--text` | `#141218` | `#e8e8f0` | Primary text color |
| `--muted` | `#6b6456` | `#7a7a8e` | Secondary/subdued text |
| `--accent` | `#e85a2a` | `#6c63ff` | Brand color — buttons, highlights, dots |
| `--accent2` | `#c9431a` | `#8b84ff` | Hover state for accent |
| `--glow` | orange/20% | violet/22% | Drop shadow on accent buttons |
| `--border` | dark/8% | white/7% | Subtle dividers |
| `--border2` | dark/13% | white/12% | Slightly stronger borders on cards |
| `--heading` | Fraunces, serif | Inter, sans-serif | Display font — switches personality between themes |
| `--sans` | Inter | Inter | Body text font (same in both themes) |
| `--mono` | JetBrains Mono | JetBrains Mono | Code/label font (same in both themes) |
| `--container` | `min(1200px, 92vw)` | same | Max width, with 4% padding on small screens |
| `--nav-h` | `66px` | same | Fixed nav height, used for scroll offset |
| `--radius` | `14px` | same | Standard border radius |
| `--radius-lg` | `22px` | same | Larger radius for hero card, featured cards |
| `--ease` | cubic-bezier | same | Smooth easing curve for all transitions |

The fonts are loaded from Google Fonts (see the `<link>` tags in `<head>`):
- **Fraunces** — high-contrast serif, gives the editorial/magazine feel in light mode
- **Inter** — clean geometric sans-serif, used for body and as heading font in dark mode
- **JetBrains Mono** — monospace font for labels, dates, tags, and the brand name in nav

---

## Sections Explained

The page has seven sections, each with `id` attributes used for anchor links.

### `#hero`
The first thing visitors see. A full-viewport height section with:
- A grid pattern background (CSS `background-image` with two linear-gradients)
- A soft radial glow aura in the corner
- Left column: pill badge, name, tagline, three call-to-action buttons
- Right column: a "hero card" with avatar photo, name, stats, and mini skill chips

The hero card disappears on mobile (`display: none` at 900px breakpoint) to keep the hero clean on small screens.

### `#about`
Two-column layout. Left has paragraphs about background. Right has four stat cards (years active, projects, institutions, countries) in a 2×2 grid.

### `#skills`
Skills grouped by category (e.g. Instrumentation, Automation, Software). Each group has a monospace label header and a row of `.chip` elements. Chips with class `.prime` are highlighted — these are primary/core skills.

### `#featured` (Projects — main)
Three full-width featured projects, each as a `.feat-card`. Every other card has class `.flip` which reverses the grid column order (image left, text right) to create visual variety.

Each card has:
- Left/right: project metadata (number, title, description, role/outcome details, tags)
- Right/left: `.feat-visual` — a container with `aspect-ratio: 4/5` and `overflow: hidden`. The image sits `position: absolute; inset: 0` to fill the container completely via `object-fit: cover`.
- An accent bar (thin gradient line) at the top of the visual
- A caption overlay at the bottom

### `#more-projects`
A 3-column grid of `.mini-card` elements for smaller/supporting projects. Each has:
- `.thumb` (160px tall image area)
- `.body` (title, description, tags)

### `#experience`
A timeline with six entries. Structure:

```
[vertical line]
date ──●── Job title
           Organization
           Description
           [tags]
```

The vertical line is a CSS `::before` pseudo-element on the `.tl` container. The dot (●) is a CSS `::after` pseudo-element on each `.tl-item`. Both are purely decorative CSS — no HTML elements needed.

Each entry shows dates as a range with an en-dash: `Jan 2024 – Present`.

On mobile, the vertical line and dot are hidden (`display: none`) and the date moves above the job title.

### `#contact`
Two-column layout. Left: large heading, subtitle, email and LinkedIn buttons. Right: three `.channel` cards (email, LinkedIn, GitHub) with icons, labels, and handles.

---

## JavaScript — Three Features

All JavaScript is at the very bottom of `<body>`, inside one `<script>` tag. It is 27 lines total.

### 1. Theme Toggle

```js
const html = document.documentElement;
document.getElementById('themeToggle').addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('porto-theme', next);
});
```

- `document.documentElement` is the `<html>` element
- Reads current theme, flips it, sets the attribute, saves to storage
- `localStorage` is a browser key-value store that persists across sessions

### 2. Scroll Reveal

Elements with class `reveal` start invisible and slide up into view when they scroll into the viewport.

**CSS sets the initial hidden state:**

```css
.reveal {
  opacity: 0;
  transform: translateY(28px);          /* shifted 28px down */
  transition: opacity 600ms, transform 600ms;
}
.reveal.visible {
  opacity: 1;
  transform: none;                      /* back to normal position */
}
```

**JavaScript observes when elements enter the screen:**

```js
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');  // triggers the CSS transition
      obs.unobserve(e.target);            // stop watching (animation plays once)
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = (i % 4) * 80 + 'ms';  // stagger: 0, 80, 160, 240ms
  obs.observe(el);
});
```

- `IntersectionObserver` is a browser API that fires a callback when an element enters or leaves the viewport — much more efficient than listening to `scroll` events
- `threshold: 0.12` means the callback fires when 12% of the element is visible
- `rootMargin: '0px 0px -40px 0px'` shrinks the detection zone 40px from the bottom (so elements trigger slightly before hitting the very bottom edge)
- The stagger delay (every 4th element resets to 0) creates a cascading wave effect within groups

### 3. Nav Active Highlight

As the user scrolls, the nav link for the current section is highlighted in accent color.

```js
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {
  let cur = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) cur = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + cur ? 'var(--accent)' : '';
  });
}, { passive: true });
```

- Loops through all sections on every scroll event
- `s.offsetTop - 120` accounts for the fixed nav height (66px) plus a small buffer
- The last section whose top edge has been passed wins (so `cur` ends up as the deepest visible section)
- `{ passive: true }` tells the browser this listener never calls `preventDefault()`, allowing the browser to optimize scroll performance

---

## Images & Assets

All images are real photographs of the actual projects. They are stored in subfolders under `assets/images/` named after the project.

| Folder | Used in |
|---|---|
| `foto_zelot.jpg` | Hero card avatar |
| `wtp/wtp_1.jpg` | Featured card — Water Treatment Plant |
| `geodipa/geodipa_1.jpg` | Featured card — Geo Dipa Energy |
| `ugm_plc/plc_1.png` | Featured card — UGM PLC Teaching |
| `jgc/jgc_1.jpg` | Mini card — PT JGC Internship |
| `gamaforce/gamaforce_1.jpg` | Mini card — GAMAFORCE UAV |
| `kamalogis/kamalogis_1.png` | Mini card — KAMALOGIS Water Level |
| `lpkta/robot_1.jpg` | Mini card — Telepresence Robot |
| `lpkta/lpkta_1.jpg` | Mini card — IoT Agriculture |

Images are displayed using `object-fit: cover` inside fixed-dimension containers. This means:
- The image always fills the container completely
- No stretching or squishing
- The center of the image is shown; edges may be cropped

To replace a project image, just swap the file at the same path. No code changes needed.

---

## How to Update Content

### Change personal info (name, tagline, availability status)
Edit these lines directly in `index.html`:
- Hero name: look for `class="hero-name"` (~line 394)
- Hero tagline: look for `class="hero-tagline"` (~line 395)
- Availability pill: look for `class="pill"` in the hero section (~line 393)

### Add or edit a featured project
Find the `#featured` section in `index.html`. Each project is a `.feat-card` block. Copy an existing one and edit:
- The `<h3>` for the title
- The `.desc` paragraph for description
- The `.psr` grid rows for Role / Outcome / Scope
- The `<img src="...">` for the photo
- The `.tag` spans for technology tags

### Add or edit a mini project card
Find the `#more-projects` section. Each card is a `.mini-card` block inside `.proj-grid`.

### Add an experience entry
Find the `#experience` section. Each entry is a `.tl-item` block. Copy an existing one and update the date range, title, org, description, and tags.

### Change skills
Find the `#skills` section. Add `.chip` elements inside a `.chips` div. Use class `.chip.prime` for highlighted skills.

### Change colors or fonts
Edit the CSS variables at the top of the `<style>` block under `:root` (light theme) and `[data-theme="dark"]` (dark theme).

---

## Responsive Breakpoints

| Breakpoint | Changes |
|---|---|
| `max-width: 900px` | Hero card hidden; hero, about, featured, contact become single-column; timeline loses the vertical line and dot; timeline date moves to left-aligned above title |
| `max-width: 600px` | Mini project grid becomes 1-column; nav links hidden (only theme toggle + contact CTA remain visible) |

---

## Deploying to GitHub Pages

The site deploys automatically from the `main` branch root.

1. Push changes: `git push origin main`
2. GitHub Pages rebuilds automatically (takes ~1–2 minutes)
3. Live at `https://zzel114.github.io/portfolio/`

Settings: **Repository → Settings → Pages → Source: Deploy from branch → Branch: main → / (root)**

No CI, no build step, no `gh-pages` branch needed.

---

## Portfolio Deck (Pending)

`Portfolio Deck.html` and `deck-stage.js` are a separate 10-slide interactive presentation with three switchable themes (Dark Violet, Editorial Orange, Blueprint). They are not yet deployed.

When ready to deploy:
1. Copy both files into the repo root (`D:\PORTO\`)
2. `git add "Portfolio Deck.html" deck-stage.js`
3. `git commit -m "Add portfolio deck"` and push
4. The nav "Deck" link and hero "View deck" button will start working immediately — they already point to `Portfolio Deck.html`

---

## Version History

| Version | Description |
|---|---|
| v1 (`portfolio_zelot_v1/`) | Original portfolio — separate CSS/JS files, dynamic card rendering from `data/projects.js` |
| v2 (`portfolio_zelot_v2/` → root) | Full redesign — single self-contained HTML file, dual-theme editorial/dark system, real project photos, experience timeline, portfolio deck integration |
