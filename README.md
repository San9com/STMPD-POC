# STMPD-POC (Astro)

This is a small POC website for **STMPD studios redesign**. It is built with [Astro](https://astro.build/) and deployed to GitHub Pages.

Live site: `https://san9com.github.io/STMPD-POC/`

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

