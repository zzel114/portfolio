# My Portfolio Website

A personal portfolio website that is mobile-friendly, works on desktop and phone, and can be deployed for free on GitHub Pages. No installation or coding tools required — everything runs directly in a web browser.
https://zzel114.github.io/portfolio/

---

## Table of Contents

1. [What This Website Does](#1-what-this-website-does)
2. [File Structure — What Each File Does](#2-file-structure--what-each-file-does)
3. [How to Open the Website Locally](#3-how-to-open-the-website-locally)
4. [How to Edit Your Personal Information](#4-how-to-edit-your-personal-information)
5. [How to Add or Edit Projects](#5-how-to-add-or-edit-projects)
6. [How to Add Images](#6-how-to-add-images)
7. [How to Change Colors and Fonts](#7-how-to-change-colors-and-fonts)
8. [How to Deploy on GitHub Pages (Free Hosting)](#8-how-to-deploy-on-github-pages-free-hosting)
9. [Frequently Asked Questions](#9-frequently-asked-questions)

---

## 1. What This Website Does

This portfolio website has four main sections:

| Section | What it shows |
|---|---|
| **Home (Hero)** | Your name, title, a short tagline, and your photo |
| **About** | A paragraph about you, your skills, and your stats (years of experience, etc.) |
| **Portfolio** | A grid of your projects. Each project card can be clicked to open a detailed view with a larger image and full description |
| **Contact** | Your email address, social media links, and a contact form |

**Features:**
- Works on both desktop and mobile screens
- Dark mode and light mode toggle (top-right button)
- Click any project card to open a pop-up with bigger images and details
- Multiple images per project with a gallery and thumbnail strip
- Smooth scroll animations

---

## 2. File Structure — What Each File Does

```
PORTO/
│
├── index.html              ← The main webpage file (structure/layout)
│
├── data/
│   └── projects.js         ← ⭐ YOUR MAIN CONTENT FILE — edit this to update the site
│
├── assets/
│   ├── css/
│   │   └── style.css       ← Controls all colors, fonts, spacing, and visual design
│   ├── js/
│   │   └── main.js         ← Controls all interactive behavior (do not edit unless needed)
│   └── images/
│       ├── avatar.jpg      ← Your profile photo (replace with your own)
│       ├── placeholder.svg ← Default image shown when a project has no image
│       └── (your images)   ← Add your project screenshots here
│
└── README.md               ← This documentation file
```

**The most important rule:**
> You only need to edit **`data/projects.js`** and **`index.html`** to customize the entire website. Everything else updates automatically.

---

## 3. How to Open the Website Locally

"Locally" means viewing the website on your own computer, before publishing it online.

**Method 1 — Double-click (simplest):**
1. Open the `PORTO` folder on your computer
2. Double-click `index.html`
3. It will open in your default web browser

> ⚠️ Note: Some features (like images) may not load correctly when opened by double-clicking. Use Method 2 for best results.

**Method 2 — Using a local server (recommended):**

If you have Node.js installed:
1. Open a terminal (Command Prompt or PowerShell) inside the `PORTO` folder
2. Run this command:
   ```
   npx serve .
   ```
3. Open the link it gives you (usually `http://localhost:3000`) in your browser

If you have Python installed:
```
python -m http.server 8080
```
Then open `http://localhost:8080` in your browser.

---

## 4. How to Edit Your Personal Information

Open the file: **`data/projects.js`**

Scroll to the bottom of the file where you see the `PROFILE` section. It looks like this:

```js
const PROFILE = {
  name: "Muhammad Zelot Zoha",
  title: "Instrument Engineer and Problem Solver",
  tagline: "I engineered solutions to a problem",
  about: `Your description here...`,
  avatar: "assets/images/avatar.jpg",
  email: "hello@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: ""
};
```

**What each field means:**

| Field | What to put | Example |
|---|---|---|
| `name` | Your full name | `"Jane Doe"` |
| `title` | Your job title or role | `"Electrical Engineer"` |
| `tagline` | A short punchy phrase | `"I build things that last"` |
| `about` | A paragraph about yourself | `"I am a..."` |
| `avatar` | Path to your profile photo | `"assets/images/myphoto.jpg"` |
| `email` | Your email address | `"jane@gmail.com"` |
| `github` | Your GitHub profile URL | `"https://github.com/jane"` |
| `linkedin` | Your LinkedIn profile URL | `"https://linkedin.com/in/jane"` |
| `twitter` | Your Twitter/X URL (leave `""` to hide) | `""` |

**How to edit:**
1. Open `data/projects.js` in a text editor (Notepad, VS Code, etc.)
2. Change the text between the quote marks `"..."` for each field
3. Save the file
4. Refresh your browser — the changes appear instantly

> ⚠️ Important: Always keep the quote marks `"` around text values. Only change the text inside them.

---

## 5. How to Add or Edit Projects

Open the file: **`data/projects.js`**

At the top of the file is the `PROJECTS` list. Each project looks like this:

```js
{
  title: "My Project Name",
  category: "Web",
  description: "A short sentence shown on the card.",
  details: "A longer explanation shown in the pop-up when clicked.\n\nYou can write multiple paragraphs by putting \\n\\n between them.",
  image: "assets/images/my-project-cover.png",
  images: [
    "assets/images/my-project-cover.png",
    "assets/images/my-project-screenshot2.png",
    "assets/images/my-project-screenshot3.png"
  ],
  tags: ["AutoCAD", "Python", "Excel"],
  link: "https://my-live-website.com",
  repo: "https://github.com/myusername/myrepo"
},
```

**What each field means:**

| Field | What to put | Notes |
|---|---|---|
| `title` | Project name | Required |
| `category` | A category label | Used for the filter buttons. Use consistent names like `"Web"`, `"Design"`, `"Engineering"` |
| `description` | Short summary (1–2 sentences) | Shown on the project card |
| `details` | Full description | Shown in the pop-up modal. Use `\n\n` to create a new paragraph |
| `image` | Cover image path | Shown on the card thumbnail |
| `images` | List of image paths | All images shown in the pop-up gallery |
| `tags` | List of tools/skills used | Shown as small labels |
| `link` | URL to live project | Set to `""` to hide the button |
| `repo` | URL to GitHub repository | Set to `""` to hide the button |

### To add a new project:

Copy an existing project block (from `{` to `},`) and paste it after the last project. Then change the values.

**Example — adding a new project:**
```js
{
  title: "Instrument Calibration Tool",
  category: "Engineering",
  description: "A Python tool to automate instrument calibration reports.",
  details: "This tool was built to reduce manual calibration report time by 80%.\n\nIt reads sensor data from Excel, calculates deviation, and generates a formatted PDF report automatically.",
  image: "assets/images/calibration-tool.png",
  images: [
    "assets/images/calibration-tool.png",
    "assets/images/calibration-report.png"
  ],
  tags: ["Python", "Excel", "Automation"],
  link: "",
  repo: "https://github.com/yourusername/calibration-tool"
},
```

### To remove a project:

Delete the entire block from `{` to `},` (including the comma at the end).

### To reorder projects:

Cut and paste the project blocks into the order you want.

---

## 6. How to Add Images

All images are stored in the **`assets/images/`** folder.

### Adding your profile photo:
1. Copy your photo into `assets/images/`
2. Rename it to `avatar.jpg` (or keep your filename and update `avatar:` in `PROFILE`)

### Adding project images:
1. Copy your screenshot or image into `assets/images/`
2. Use the filename in the `image` or `images` field in `data/projects.js`

**Example:**
```
assets/images/my-project.png
```
In `projects.js`:
```js
image: "assets/images/my-project.png",
images: ["assets/images/my-project.png"]
```

### Recommended image sizes:
| Use | Recommended size |
|---|---|
| Profile photo (`avatar`) | 400×400 px (square) |
| Project cover (`image`) | 1280×720 px (16:9 ratio) |
| Extra gallery images | 1280×720 px or larger |

### Supported formats:
- `.jpg` / `.jpeg` — best for photos
- `.png` — best for screenshots with text
- `.webp` — smallest file size, modern browsers

---

## 7. How to Change Colors and Fonts

Open the file: **`assets/css/style.css`**

At the very top of the file, you will see a section called `:root { ... }`. This is where all the colors and font settings are stored.

```css
:root {
  --color-bg:      #0f0f13;   /* Page background (very dark) */
  --color-accent:  #6c63ff;   /* Main purple accent color */
  --color-text:    #e8e8f0;   /* Main text color */
  --color-muted:   #888899;   /* Dimmed/secondary text */
  ...
}
```

**To change the accent color** (the purple used for buttons, highlights, and links):
1. Find the line `--color-accent: #6c63ff;`
2. Replace `#6c63ff` with any color code you want

Color code examples:
| Color | Code |
|---|---|
| Blue | `#3b82f6` |
| Green | `#22c55e` |
| Orange | `#f97316` |
| Red | `#ef4444` |
| Pink | `#ec4899` |

> You can find color codes at [coolors.co](https://coolors.co) or [htmlcolorcodes.com](https://htmlcolorcodes.com)

---

## 8. How to Deploy on GitHub Pages (Free Hosting)

GitHub Pages lets you host this website for free at a URL like:
`https://yourusername.github.io/portfolio/`

### Step-by-step:

**Step 1 — Create a GitHub account**
Go to [github.com](https://github.com) and sign up (free).

**Step 2 — Create a new repository**
1. Click the `+` button → `New repository`
2. Name it `portfolio` (or anything you like)
3. Set it to **Public**
4. Click `Create repository`

**Step 3 — Upload your files**
1. In your new repository, click `uploading an existing file`
2. Drag and drop ALL files and folders from your `PORTO` folder:
   - `index.html`
   - `data/` folder
   - `assets/` folder
3. Scroll down, click `Commit changes`

**Step 4 — Enable GitHub Pages**
1. Go to your repository's **Settings** tab
2. In the left sidebar, click **Pages**
3. Under **Source**, select `Deploy from a branch`
4. Under **Branch**, choose `main` and folder `/  (root)`
5. Click **Save**

**Step 5 — Wait and visit your site**
- After 1–2 minutes, your site will be live
- The URL will appear at the top of the Pages settings page
- It will look like: `https://yourusername.github.io/portfolio/`

### Updating your site after deployment:
Whenever you make changes locally:
1. Go to your GitHub repository
2. Click the file you want to update → click the pencil (edit) icon
3. Make your changes and click `Commit changes`

Or re-upload the changed files using the drag-and-drop method above.

---

## 9. Frequently Asked Questions

**Q: I changed something in `projects.js` but nothing changed on the website.**
> Make sure you saved the file, then hard-refresh your browser with `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac).

**Q: My image isn't showing up.**
> Check that:
> 1. The image file is inside the `assets/images/` folder
> 2. The filename in `projects.js` exactly matches the actual filename (including uppercase/lowercase)
> 3. Example: `"assets/images/MyProject.PNG"` will not work if the file is named `myproject.png`

**Q: The pop-up modal isn't opening when I click a project.**
> Make sure you are viewing the site through a local server (Method 2 in Section 3), not by double-clicking the file.

**Q: How do I add a new filter category button?**
> Just use a new `category` name in a project in `data/projects.js`. The filter button is created automatically.
> For example, adding `category: "Engineering"` to a project will create an "Engineering" filter tab.

**Q: Can I add more sections to the website?**
> Yes. Open `index.html` and copy the structure of an existing `<section>` block. Paste it where you want the new section. Add a matching link in the `<nav>` at the top.

**Q: How do I hide the Twitter/social button?**
> In `data/projects.js`, set the field to an empty string:
> ```js
> twitter: ""
> ```

**Q: The website looks different on my phone.**
> This is expected — the layout automatically adjusts for smaller screens (this is called "responsive design"). The navigation turns into a hamburger menu, and columns stack vertically.
