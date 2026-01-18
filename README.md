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

## Schemes (high level)

This is the rough request flow for GitHub Pages (project site):

```text
browser
  |
  |  GET https://san9com.github.io/STMPD-POC/
  v
github pages static hosting
  |
  |  serves dist/index.html + /_astro/* + /assets/* + /fonts/*
  v
astro generated html
  |
  |  uses BASE_URL = "/STMPD-POC/" to build correct paths
  v
assets load
```

This is the build + deploy flow:

```text
git push (main)
  -> github actions workflow .github/workflows/deploy-pages.yml
     -> npm ci
     -> npm run build (astro build -> dist/)
     -> upload dist/ as pages artifact
     -> deploy artifact to github pages
```

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

This is the file map (simplified):

```text
src/
  pages/
    index.astro        -> /
    studio-1.astro     -> /studio-1/
    studio-2.astro     -> /studio-2/
  components/
    MenuOverlay.astro
    SiteFooter.astro
    StudioDetailPage.astro
  layouts/
    BaseLayout.astro
  styles/
    global.css
public/
  assets/              -> /assets/*
  fonts/               -> /fonts/*
```

## Deployment (GitHub Pages)

This project is hosted as a GitHub Pages project site, so it needs a base path `/STMPD-POC/`.
The base path is configured in `astro.config.mjs` using `site` and `base`.
In the UI code, URLs for assets and internal links should use `import.meta.env.BASE_URL` (or helper around it), otherwise you can break images/links on Pages.

Deployment is done by GitHub Actions in `.github/workflows/deploy-pages.yml`.
It builds the site and publishes the `dist/` folder.

## Base path and URLs (important)

GitHub Pages project sites are not hosted at `/`.
So a hardcoded URL like `/assets/home.png` will try to load from `https://san9com.github.io/assets/home.png` and it will 404.
The correct path is `/STMPD-POC/assets/home.png`.

In this codebase, the safe pattern is:

```text
BASE_URL comes from import.meta.env.BASE_URL
then we normalize it to always end with "/"
then withBase("assets/file.png") becomes "/STMPD-POC/assets/file.png"
```

If you rename the repository, you must update the `base` in `astro.config.mjs`.
After that, rebuild and redeploy.

## Why Astro (short technical)

Astro fits this POC because it generates static HTML by default, so the runtime is light and fast.
It supports component based templates (`.astro`) and integrates cleanly with Tailwind.
For GitHub Pages, the deploy is also simple: build once, upload `dist`.

## Runtime behaviour notes

Most pages are server-rendered at build time, so there is no runtime server.
Interactive parts are implemented with small inline scripts (for example menu overlay, cursor-follow effects, and scroll based motion).
This keeps the bundle small and avoid big frameworks on the client.

Fonts are loaded using `@font-face` with files inside `public/fonts/`.
On some browsers, using CSS variables inside `@font-face src:` is not reliable, so the font-face is defined with a direct URL in the HTML head.

## Debug notes

If assets are missing on GitHub Pages, check that the URL starts with `/STMPD-POC/` and not with `/assets/`.
If you rename the repository, update the base path in `astro.config.mjs` and re-deploy.

If the layout looks “too clipped” around 1024–1500px widths, it is usually a padding / overflow issue.
Check `src/styles/global.css` for responsive clamps (carousel padding, rings safe positioning, and hover text overflow).

