# Hassan Mehmood — Personal Portfolio Website

A single-page portfolio site built with plain HTML5, CSS3 and vanilla JavaScript — no frameworks, no page builders. Built for **Project 01 (Beginner) — The Sky Gen Web Development track**.

**Live site:** _add your deployed URL here_
**Repository:** https://github.com/hasssan0777

## Features

- Fixed navigation bar with smooth-scroll links and scroll-based active-section highlighting
- Hero section with name, tagline, photo/illustration area and a call-to-action button
- About section with an 80–120 word bio and a downloadable CV
- Skills section with six skills shown as labelled progress bars
- Projects section with three project cards (image, title, description, link)
- Contact section with a name / email / message form and client-side JavaScript validation
- Footer with copyright line and social links
- Fully responsive from 360px to 1440px+ with no horizontal scrolling
- Interactions: animated nav underline, button hover states, project card hover states, a mobile menu toggle, and a scroll-to-top button

## Tech stack

HTML5 · CSS3 (Flexbox & Grid) · JavaScript (ES6) · Google Fonts (Fraunces, IBM Plex Mono)

## Project structure

```
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   └── hassan-mehmood-cv.pdf
└── README.md
```

## Setup / running locally

No build step is required.

1. Download or clone the project folder.
2. Open `index.html` directly in a browser, **or** serve it locally for the best experience:
   ```bash
   npx serve .
   # or
   python3 -m http.server 8080
   ```
3. Visit `http://localhost:8080` (or the port shown).

## Notes for further customisation

- **Project links:** Jarvis and the Uber Backend currently link to the GitHub profile (no dedicated public repos yet) — update `.project-link` hrefs once those repos are public. The Student Management System card has no link since that repo is private; add one back in if it's ever made public.
- **Project screenshots:** each `.project-shot` currently uses a custom inline SVG icon rather than a real screenshot. Swap these for actual app screenshots once available.
- **CV:** `assets/hassan-mehmood-cv.pdf` is generated from the CV content on this site (Summary, Skills, Project Experience, Education). Regenerate or replace it if the content changes.
- **Contact form:** validates input in the browser but has no backend. Connect it to a service like Formspree or Netlify Forms, or wire up your own endpoint, inside the `submit` handler in `js/script.js`.
- **Colours & type:** all design tokens (colours, fonts, spacing) are CSS custom properties at the top of `css/style.css` under `:root`.

## Deployment

Any static host works. Two straightforward options:

- **GitHub Pages:** push this folder to a GitHub repo, then enable Pages on the `main` branch in the repo settings.
- **Netlify / Vercel:** drag-and-drop the folder into Netlify's dashboard, or connect the GitHub repo for automatic deploys.

## Credits

- Fonts: [Fraunces](https://fonts.google.com/specimen/Fraunces) and [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono), both via Google Fonts, both open-licensed.
- All illustrations are original inline SVG — no third-party images used.
