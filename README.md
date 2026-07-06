# articles.anantaops.com

AnantaOps' engineering & security articles site. Astro + Tailwind + MDX, statically built and deployed to GitHub Pages.

## Structure

```text
src/
  content/articles/*.mdx   # one file per article, frontmatter: title, description, pubDate, author, tags, draft
  content.config.ts        # articles collection schema
  layouts/Layout.astro     # shared page shell (nav + footer)
  components/              # Nav.astro, Footer.astro
  pages/
    index.astro             # article listing, newest first
    [...slug].astro          # article detail, one per MDX file
  styles/global.css         # design tokens ported from anantaops.github.io (grayscale HSL vars, Inter/JetBrains Mono)
```

## Commands

| Command           | Action                                      |
| :----------------- | :------------------------------------------- |
| `npm install`       | Install dependencies                        |
| `npm run dev`        | Local dev server at `localhost:4321`        |
| `npm run build`      | Build static site to `./dist/`              |
| `npm run preview`    | Preview the production build locally        |

## Adding an article

Drop a new `.mdx` file in `src/content/articles/` with frontmatter:

```yaml
---
title: "..."
description: "..."
pubDate: 2026-07-13
author: "Your Name — Team"
tags: ["tag1", "tag2"]
draft: false
---
```

The slug is derived from the filename. `draft: true` excludes it from the listing/build.

## Deploy

`.github/workflows/deploy.yml` builds on every push to `main` and publishes `dist/` to the `gh-pages` branch (mirrors the `anantaops.github.io` deploy setup). Point the custom domain `articles.anantaops.com` at GitHub Pages via a `CNAME` file or the repo's Pages settings once DNS is configured.
