# Component Specs

All components use **Tailwind v4** utility classes and are implemented as React Server Components unless noted. Custom tokens come from `docs-design/tokens.css` (merged into `globals.css`).

---

## Navbar

### Anatomy

```
┌──────────────────────────────────────────────────────────────────┐
│  [Logo]  Home  Shop  Vendor  Pages  Blog          [  Search  ]   │
└──────────────────────────────────────────────────────────────────┘
```

### Spec

| Property | Value |
|---|---|
| Height | `nav-h` = 72px |
| Background | `cream-100` |
| Bottom border | `1px cream-300` |
| Horizontal padding | `container` = 96px |
| Logo size | 20px icon + 22px bold text |
| Nav link style | `body-md`, `medium`, `brown-600`, hover → `brown-900` |
| Search pill | White fill, `cream-300` border, `radius-pill` |

### Tailwind classes (reference)

```tsx
<nav className="h-[4.5rem] flex items-center px-24 border-b border-cream-300 bg-cream-100">
  {/* Logo */}
  <a href="/" className="flex items-center gap-2 font-display font-bold text-[1.375rem] text-brown-900 mr-12">
    <CoffeeIcon className="size-5" />
    Onea.
  </a>

  {/* Links */}
  <ul className="flex items-center gap-8 flex-1">
    {['Home','Shop','Vendor','Pages','Blog'].map(l => (
      <li key={l}>
        <a className="text-brown-600 font-medium hover:text-brown-900 transition-colors duration-150">
          {l}
        </a>
      </li>
    ))}
  </ul>

  {/* Search */}
  <div className="relative">
    <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-brown-400" />
    <input
      className="h-10 pl-9 pr-4 rounded-pill border border-cream-300 bg-white text-body-sm
                 placeholder:text-brown-400 focus:outline-none focus:ring-2 focus:ring-terracotta-500"
      placeholder="Search"
    />
  </div>
</nav>
```

---

## Hero Section

### Anatomy

```
┌────────────────────────────────────────────────────┐
│                                    [hero image]    │
│  H1 Headline                                       │
│  Body copy                       [Category icons]  │
│                                                    │
│  [Get Promo ▶]                                     │
└────────────────────────────────────────────────────┘
```

### Spec

| Property | Value |
|---|---|
| Background | `cream-100` |
| Min height | `min-h-[calc(100vh-4.5rem)]` |
| Layout | CSS Grid, `grid-cols-[1fr_auto_auto]` |
| Headline | `display-xl` (44px), `extrabold`, `brown-900`, `leading-tight` |
| Body copy | `body-lg` (18px), `regular`, `brown-600`, `leading-normal`, max 60ch |
| CTA gap | `mt-8` below body copy |
| Hero image circle | `spotlight-hero` fill, diameter ~360px, `radius-pill` |

---

## Primary Button (CTA)

### Variants

| Variant | Background | Text | Border |
|---|---|---|---|
| Primary | `brown-950` | White | None |
| Secondary | Transparent | `brown-900` | `cream-300` |
| Accent | `terracotta-500` | White | None |

### Primary CTA (with play icon)

```tsx
<button
  className="inline-flex items-center gap-3 h-14 pl-6 pr-2 rounded-pill
             bg-brown-950 text-white font-semibold text-body-md
             hover:bg-brown-800 transition-all duration-200 ease-smooth
             focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-terracotta-500"
>
  Get Promo
  <span className="flex items-center justify-center size-10 rounded-full bg-terracotta-400">
    <PlayIcon className="size-4 text-white" />
  </span>
</button>
```

### Sizes

| Size | Height | Padding | Text |
|---|---|---|---|
| `sm` | 36px | `px-4` | `body-sm` |
| `md` | 44px | `px-5` | `body-md` |
| `lg` | 56px | `px-6` | `body-md font-semibold` |

### States

- **Hover**: `bg-brown-800` (slightly lighter)
- **Active**: `scale-[0.98]`
- **Disabled**: `opacity-40 cursor-not-allowed`
- **Focus**: `ring-2 ring-offset-2 ring-terracotta-500`

---

## Category Icon

Stacked vertically in the hero, linking to filtered product pages.

### Anatomy

```
  ╭────╮
  │ ☕ │   ← colored circle (72×72px)
  ╰────╯
  COFFEE    ← 12px ALL CAPS label, brown-900
```

### Spec

| Property | Value |
|---|---|
| Circle size | 72×72px (`size-[4.5rem]`) |
| Circle shape | `rounded-full` |
| Icon size | 32px (`size-8`) |
| Icon color | White |
| Label | 12px, `tracking-widest`, `font-medium`, `brown-900` |
| Gap (stacked) | `gap-6` between items |
| Active state | `ring-2 ring-offset-2 ring-terracotta-500` on circle |

```tsx
<a className="flex flex-col items-center gap-2 group">
  <span
    className="flex items-center justify-center size-[4.5rem] rounded-full
               bg-category-coffee transition-transform duration-200
               group-hover:scale-105 ease-bounce"
  >
    <CoffeeIcon className="size-8 text-white" />
  </span>
  <span className="text-label font-medium tracking-widest text-brown-900 uppercase">
    Coffee
  </span>
</a>
```

### Color map

```ts
const categoryColors: Record<string, string> = {
  coffee: 'bg-category-coffee',
  drinks: 'bg-category-drinks',
  tea:    'bg-category-tea',
  bakery: 'bg-category-bakery',
}
```

---

## Product Card (Horizontal)

Used in the product-row section below the hero.

### Anatomy

```
  ╭──────╮  Product Name
  │ img  │  $XX.00
  ╰──────╯
```

### Spec

| Property | Value |
|---|---|
| Layout | `flex items-center gap-4` |
| Circle size | 96×96px (`size-24`) |
| Circle color | Product-specific spotlight token |
| Image | `object-contain`, fills circle |
| Product name | `display-sm` (22px), `bold`, `brown-900` |
| Price | `body-lg` (18px), `bold`, `terracotta-500` |
| Card padding | `p-6` |
| Card radius | `radius-lg` (16px) |
| Card bg | `cream-100` (same as page bg; no border needed) |
| Hover | Card lifts: `hover:shadow-warm-md hover:-translate-y-0.5` |

```tsx
<article
  className="flex items-center gap-4 p-6 rounded-[1rem] bg-cream-100
             hover:shadow-warm-md hover:-translate-y-0.5
             transition-all duration-200 ease-smooth cursor-pointer"
>
  <div className="relative flex-shrink-0 size-24 rounded-full bg-spotlight-nutella">
    <Image
      src={product.imageSrc}
      alt={product.name}
      fill
      className="object-contain p-2"
    />
  </div>
  <div>
    <h3 className="text-display-sm font-bold text-brown-900 leading-snug">
      {product.name}
    </h3>
    <p className="text-body-lg font-bold text-terracotta-500 mt-1">
      ${product.price.toFixed(2)}
    </p>
  </div>
</article>
```

---

## Search Input

### Spec

| Property | Value |
|---|---|
| Height | 40px (`h-10`) |
| Shape | `rounded-pill` |
| Background | White |
| Border | `1px cream-300` |
| Text | `body-sm`, `brown-900` |
| Placeholder | `brown-400` |
| Icon | `SearchIcon` at `left-3`, `size-4`, `brown-400` |
| Focus ring | `ring-2 ring-terracotta-500` |

---

## Product Row Section

The `cream-200` band below the hero that displays featured products.

### Spec

| Property | Value |
|---|---|
| Background | `cream-200` |
| Padding | `py-section-y px-container` |
| Grid | `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6` |
| Section heading | `display-lg`, `bold`, `brown-900` |

---

## Divider / Separator

```tsx
<hr className="border-t border-cream-300 my-2" />
```

---

## Badge / Chip

For labels, dietary tags, "New" indicators.

### Spec

| Property | Value |
|---|---|
| Height | 24px |
| Padding | `px-3 py-0.5` |
| Radius | `radius-sm` (6px) or `radius-pill` for pill variant |
| Background | `terracotta-100` |
| Text | `label` (12px), `medium`, `terracotta-600` |

```tsx
<span className="inline-flex items-center px-3 py-0.5 rounded-sm bg-terracotta-100 text-label font-medium text-terracotta-600">
  New
</span>
```

---

## Responsive Breakpoints

Tailwind v4 uses the same breakpoint defaults as v3:

| Name | Min width | Typical use |
|---|---|---|
| `sm` | 640px | 2-col product grid |
| `md` | 768px | Show hero image alongside text |
| `lg` | 1024px | 3-col product grid, full nav |
| `xl` | 1280px | Max container width |

Max container width: `max-w-[1280px] mx-auto`.

Hero layout stacks vertically on `< md`; hero image moves below text on mobile.  
Category icon column moves to a horizontal row above the hero image on `< lg`.

---

## Layout Template

```tsx
// app/layout.tsx
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased`}>
      <body className="min-h-screen bg-cream-100 font-display text-brown-900">
        {children}
      </body>
    </html>
  )
}
```

---

## globals.css integration

Add the token block to `app/globals.css` after the `@import`:

```css
@import "tailwindcss";

/* Paste contents of docs-design/tokens.css here */
@theme {
  /* ...all tokens... */
}

/* Semantic body defaults */
body {
  background-color: var(--color-cream-100);
  color: var(--color-brown-900);
  font-family: var(--font-display);
}
```

---

## File conventions

```
app/
  components/
    ui/
      Button.tsx          ← atomic, no business logic
      CategoryIcon.tsx
      ProductCard.tsx
      SearchInput.tsx
      Navbar.tsx
  (routes)/
    page.tsx              ← composes ui components
```

Keep all components as **Server Components** unless they require `onClick`, `useState`, or browser APIs — then add `'use client'` at the top.
