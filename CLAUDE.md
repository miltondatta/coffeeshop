@AGENTS.md

# Coffee Shop — Project Guide

## Stack

- **Next.js 16.2.6** — App Router, React Server Components by default
- **React 19.2.4**
- **Tailwind CSS v4** — `@theme {}` in `app/globals.css`; no `tailwind.config.js`
- **TypeScript 5**
- **Fonts** — Poppins via `next/font/google` (weights 400/500/600/700/800), `variable: '--font-display'`

## Commands

```bash
npm run dev      # start dev server
npm run build    # production build
npm run lint     # eslint
```

## Project structure

```
app/
  globals.css           # @import "tailwindcss" + full @theme {} tokens
  layout.tsx            # root layout — Poppins font, bg-cream-100
  page.tsx              # homepage (hero, popular items, events, visit CTA)
  about/page.tsx        # founders story, values, quote
  menu/page.tsx         # server shell → passes MENU_ITEMS to MenuPageClient
  components/
    Navbar.tsx          # Server Component (logo + nav links)
    NavbarClient.tsx    # 'use client' — reserve button, mobile hamburger, ReserveModal
    Footer.tsx          # Server Component
    HeroSection.tsx     # Server Component (bg image + overlay)
    HeroCTAButtons.tsx  # 'use client' — View Menu link + Reserve button + ReserveModal
    PopularItemCard.tsx # Server Component
    EventCard.tsx       # Server Component
    ReserveModal.tsx    # 'use client' — createPortal form modal with success state
    MenuPageClient.tsx  # 'use client' — category tabs + filtered item grid
  lib/
    pexels-images.ts    # centralised Pexels URL registry (PEXELS object)
    menu-data.ts        # 50 typed MenuItem objects; Category + Badge types
    events-data.ts      # 4 hardcoded upcoming events
docs-design/
  tokens.css            # full @theme block (already merged into globals.css)
  style-guide.md        # color, type, spacing, motion rules
  component-specs.md    # visual specs + Tailwind class examples per component
  menu-items.csv        # 50-item menu (Espresso, Cold Drinks, Pastries, Sandwiches)
  components/           # ready-to-use input components (barrel: @/docs-design/components)
```

## Tailwind v4 rules

- All theme customisation in `@theme { }` in `app/globals.css` — never `tailwind.config.js`
- Use plain `@theme {}` (not `@theme inline`) — cross-token `var()` references require it
- Tokens from `docs-design/tokens.css` are already merged into `globals.css`

## Design tokens (quick reference)

| Role | Token | Hex |
|---|---|---|
| Page background | `bg-cream-100` | `#F8F0E8` |
| Headline text | `text-brown-900` | `#2B1A0E` |
| Body copy | `text-brown-600` | `#6B4A33` |
| Accent / prices | `text-terracotta-500` | `#C5522A` |
| Primary button | `bg-brown-950` | `#1A0E08` |
| Border / divider | `border-cream-300` | `#E8DDD0` |
| Focus ring | `ring-terracotta-500` | `#C5522A` |

Full palette + typography scale → `docs-design/tokens.css`

## Component conventions

- Default to **Server Components**; `'use client'` only for `onClick`, `useState`, browser APIs
- Input components in `docs-design/components/` already have `'use client'`
- Focus rings: `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-terracotta-500`
- Pill shape: `rounded-pill`; warm shadows: `shadow-warm-sm/md/lg` (never raw `shadow-*`)
- Card border radius: `rounded-lg` (16px per spec) — not `rounded-xl`
- Product images: `object-contain p-2` inside spotlight circles; `object-cover` for hero/banner images

## Input components (`@/docs-design/components`)

`FormField` · `TextInput` · `SearchInput` · `Textarea` · `Select` · `Checkbox` · `RadioGroup` · `Toggle` · `QuantityStepper`

Note: `TextInput` does not accept `type="date"` — use bare `<input type="date">` wrapped in `<FormField>`.

## Key design rules

- Page bg alternates: `cream-100` (default/hero) → `cream-200` (product/feature rows)
- Buttons always pill-shaped (`rounded-pill`), primary = `bg-brown-950 text-white`
- Terracotta is for prices and micro-accents only — never large backgrounds or solid badge fills
- Badge pills: `bg-terracotta-100 text-terracotta-700` (not `bg-terracotta-500 text-white`)
- All text contrast must meet WCAG AA (4.5:1 body, 3:1 large/UI)
- Pexels images: register URLs in `app/lib/pexels-images.ts`; `remotePatterns` already in `next.config.ts`
