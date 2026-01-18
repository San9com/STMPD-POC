# STMPD-POC

This repository is a static website POC for a STMPD studios redesign.
It uses Astro and deploys to GitHub Pages as a project site.

Live site: `https://san9com.github.io/STMPD-POC/`

## Stack

Astro v5 is used as the main framework (static output).
Tailwind CSS is used for styling via `@astrojs/tailwind`.
TypeScript is included for editor support and safer refactors.

A. Entry pages live in `src/pages/` (file-based routing).
B. Shared UI components live in `src/components/`.
C. Layout + global head/scripts live in `src/layouts/BaseLayout.astro`.

## Local setup

You need Node.js 20 (or close) and npm.

Install dependencies:

```bash
npm ci
```

Start dev server:

```bash
npm run dev
```

Build production output:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Project structure (main folders)

`src/pages/` contains routes. Example: `index.astro` is the home page, and `studio-1.astro` / `studio-2.astro` are studio pages.
`src/components/` contains reusable parts like menu overlay, footer, icons, and buttons.
`src/styles/global.css` contains Tailwind directives and custom CSS for interactions/animations.
`public/` contains static files copied to `dist/` without processing.
`public/assets/` contains images, svg, and videos.
`public/fonts/` contains local font files used by `@font-face`.

## Deployment (GitHub Pages)

This project is hosted as a GitHub Pages project site, so it needs a base path `/STMPD-POC/`.
The base path is configured in `astro.config.mjs` using `site` and `base`.
In the UI code, URLs for assets and internal links should use `import.meta.env.BASE_URL` (or helper around it), otherwise you can break images/links on Pages.

Deployment is done by GitHub Actions in `.github/workflows/deploy-pages.yml`.
It builds the site and publishes the `dist/` folder.

## Why Astro (short technical)

Astro fits this POC because it generates static HTML by default, so the runtime is light and fast.
It supports component based templates (`.astro`) and integrates cleanly with Tailwind.
For GitHub Pages, the deploy is also simple: build once, upload `dist`.

## Debug notes

If assets are missing on GitHub Pages, check that the URL starts with `/STMPD-POC/` and not with `/assets/`.
If you rename the repository, update the base path in `astro.config.mjs` and re-deploy.

