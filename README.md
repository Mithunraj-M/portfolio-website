# Mithunraj M — Portfolio

A single-page personal portfolio for **Mithunraj M** (AI/ML Engineer). Modern
dark theme with a light-mode toggle, scroll-reveal motion, and fully
data-driven content. Deployed to GitHub Pages.

🔗 **Live:** https://Mithunraj-M.github.io/portfolio-website

## Tech stack

- **[Vite](https://vite.dev/)** 6 + **React** 19 + **TypeScript** 5
- **[Tailwind CSS](https://tailwindcss.com/)** v4 (via `@tailwindcss/vite`)
- **[Framer Motion](https://www.framer.com/motion/)** — scroll reveals & hero entrance
- **[lucide-react](https://lucide.dev/)** — icons
- **[gh-pages](https://github.com/tschaub/gh-pages)** — GitHub Pages deployment

## Project structure

```
src/
  main.tsx              # entry point
  App.tsx               # composes the single page (sections in order)
  index.css             # Tailwind import, design tokens, base styles
  types/index.ts        # shared content types
  data/                 # all site content lives here (see CONTENT_GUIDE.md)
    profile.ts  experience.ts  projects.ts  education.ts  socials.ts
  components/
    sections/           # Navbar, Hero, About, Experience, Projects, Education, Contact, Footer
    theme/              # ThemeProvider + ThemeToggle (dark/light)
    ui/                 # Section, Reveal, Badge primitives
  assets/               # imported images (profile photo, etc.)
public/                 # static files served as-is (favicon, robots.txt)
index.html              # HTML shell: title, meta, fonts, theme pre-paint script
vite.config.ts          # base path + plugins
```

## Editing content

**All content lives in [`src/data/`](src/data/)** — you don't need to edit
component code to update text, links, projects, or experience. See
**[CONTENT_GUIDE.md](CONTENT_GUIDE.md)** for exactly how to add/edit each section
and swap images.

## Local development

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
```

## Build & preview

```bash
npm run build    # type-check (tsc -b) + production build into dist/
npm run preview  # serve the production build locally
```

## Theming & accessibility

- Defaults to **dark**; respects the OS `prefers-color-scheme` on first visit and
  persists the user's choice to `localStorage`.
- A pre-paint script in [`index.html`](index.html) sets the theme before first
  render to avoid a flash of the wrong theme.
- Animations honor **`prefers-reduced-motion`** (Framer Motion `MotionConfig`
  + CSS fallbacks).

## Deploying to GitHub Pages

```bash
npm run deploy   # runs predeploy (build) then publishes dist/ via gh-pages
```

The site is served under the `/portfolio-website/` base path, configured in
[`vite.config.ts`](vite.config.ts). If you rename the repository, update both that
`base` and the `homepage` field in [`package.json`](package.json) to match, or
deployed asset paths will break.
