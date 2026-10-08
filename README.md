# Sergio Tomas — Portfolio

Bilingual (EN / PT-BR) portfolio built with **Next.js 16** (App Router, static export) and **Panda CSS**.
Screens were designed first in [`portifolio.pen`](./portifolio.pen) (pen.dev).

## Scripts

```bash
pnpm dev         # http://localhost:3000
pnpm build       # static site in ./out (79 pages)
pnpm start       # serve ./out locally
pnpm test        # Vitest
pnpm typecheck
```

`panda codegen` runs before each script and generates `styled-system/` (git-ignored).

## Structure

| Path | What |
| --- | --- |
| `src/app/(root)` | `/` — redirects to `/en/` or `/pt/` based on the browser language |
| `src/app/[lang]` | Home page per language |
| `src/app/[lang]/stack/[slug]` | One page per technology (37 × 2 languages) |
| `src/i18n/messages.ts` | All UI copy in English and Portuguese |
| `src/content/technologies.json` | Technology pages content (overview, key concepts, practice) in both languages |
| `src/components` | Nav, marquee carousel, home sections and UI primitives |
| `panda.config.ts` | Design tokens (colors, fonts, keyframes) matching the pen.dev design |
| `public/tech` | Official technology logos (Devicon, MIT; Simple Icons, CC0) |

## Deploy

Production domain: **https://sergiotomas.dev** (default for canonical, hreflang, `sitemap.xml` and `robots.txt`; override with `NEXT_PUBLIC_SITE_URL`). Publish the `out/` folder to any static host.
