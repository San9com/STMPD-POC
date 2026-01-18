# STMPD-POC (Astro)

This is a small POC website for **STMPD studios redesign**. It is built with [Astro](https://astro.build/) and deployed to GitHub Pages.

Live site: `https://san9com.github.io/STMPD-POC/`

## Tech stack (STMPD POC) — Alexander Murashko style

### 1. Core framework at use

The core framework at use is **Astro (v5)**. This project is mainly a static site, so Astro is a good fit.

- I’m using **Astro pages** in `src/pages/` (each `.astro` file becomes a route)
- **Static build output** is generated into `dist/` (then deployed)
- **Base path support** for GitHub Pages project sites via `site` + `base` in `astro.config.mjs`

### 2. Styling (CSS)

Styling is done with **Tailwind CSS (v3)** through the `@astrojs/tailwind` integration.

- **Tailwind utility classes** for fast layout and consistent spacing/typography
- **PostCSS** pipeline (with **Autoprefixer**) for browser compatibility
- Global styles live in `src/styles/global.css` (Tailwind + a bit of custom CSS)

### 3. Language and tooling

- **TypeScript (v5)** is included for better type safety and IDE support
- Node + npm scripts are kept simple:
  - `npm run dev` (local dev server)
  - `npm run build` (production build)
  - `npm run preview` (preview `dist/` locally)

### 4. Deployment

This site is deployed as a **GitHub Pages project site**:

- Build happens in GitHub Actions (`.github/workflows/deploy-pages.yml`)
- The action publishes the `dist/` folder
- Because it’s a project site under `/STMPD-POC/`, the site uses a base path (important for links and assets)

### 5. Assets and fonts

- Static assets are stored in `public/` and copied as-is into the build
  - `public/assets/`: images, svg, videos used by the site
  - `public/fonts/`: local font file(s)

### 6. General decisions rationale (short)

- **Why Astro?**
  - Very good performance for static sites (less client-side JS by default)
  - Simple routing via files in `src/pages/`
  - Easy to deploy (build once, serve static files)
- **Why Tailwind?**
  - Fast development for a POC
  - Consistent UI without writing too much custom CSS
  - Works nicely with Astro components
- **Why GitHub Pages?**
  - Free hosting for a school/portfolio demo
  - Easy automatic deploy on push to `main`

## Project structure

- `src/pages/`: routes (pages)
  - `index.astro`: home page
  - `studio-1.astro`, `studio-2.astro`: studio detail pages
- `src/components/`: reusable UI parts (menu, footer, buttons, icons, etc)
- `src/layouts/`: shared page layout (`BaseLayout.astro`)
- `src/styles/`: global CSS (Tailwind + custom styles)
- `public/`: static files copied as-is to build output
  - `public/assets/`: images, svg, videos used by the site
  - `public/fonts/`: local font file(s)
- `.github/workflows/deploy-pages.yml`: GitHub Actions workflow that builds and deploy to GitHub Pages
- `astro.config.mjs`: Astro config (important for GitHub Pages base path)

## Setup

### Requirements

- Node.js 20 (or close version)
- npm

### Install

```bash
npm ci
```

### Run locally

```bash
npm run dev
```

Then open the local URL Astro prints in terminal (usually `http://localhost:4321`).

### Build

```bash
npm run build
```

### Preview build

```bash
npm run preview
```

## Deploy (GitHub Pages)

This repo is configured for GitHub Pages **project site** under `/STMPD-POC/`.
Because of that, we use `site` + `base` in `astro.config.mjs` and `import.meta.env.BASE_URL` in code.

When you push to `main`, GitHub Actions should run `Deploy to GitHub Pages` and publish the `dist/` folder.

## Why I chose Astro

I picked Astro because:

- It is very good for **static sites** and performance.
- You can write pages as components (`.astro`) without heavy client JS.
- It works nice with Tailwind and simple folder structure.
- Deploying to GitHub Pages is straight forward (just build and upload `dist`).

## Notes

- Some assets are big (videos), so first load can be slow on bad internet.
- If you change the repo name, you will need to update the base path in config, otherwise links/images may break.

