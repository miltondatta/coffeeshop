# Style Guide

Coffee shop brand — warm, artisanal, inviting. The visual language pairs rich espresso browns with sun-baked cream backgrounds and terracotta accents to evoke a cozy café.

---

## Brand Personality

**Warm · Indulgent · Friendly · Modern**

The design should feel like stepping into a well-lit café on a cool morning: comfortable, premium without being austere, and always centred on the food and drink.

---

## Color

### Palette

All tokens are defined in `docs-design/tokens.css`.

#### Cream (backgrounds)

| Token | Hex | Usage |
|---|---|---|
| `cream-50` | `#FBF7F2` | Off-white surfaces, card fills |
| `cream-100` | `#F8F0E8` | **Hero / primary page background** |
| `cream-200` | `#F0E6D8` | Secondary sections (product rows) |
| `cream-300` | `#E8DDD0` | Dividers, borders, disabled states |
| `cream-400` | `#D8CBBF` | Placeholder text backgrounds |

#### Brown (type & brand)

| Token | Hex | Usage |
|---|---|---|
| `brown-950` | `#1A0E08` | Primary button fills |
| `brown-900` | `#2B1A0E` | **H1 headlines, logo mark** |
| `brown-600` | `#6B4A33` | Body copy, nav links |
| `brown-400` | `#A67D66` | Muted / placeholder text |
| `brown-200` | `#DEC5B8` | Subtle tints, empty states |

#### Terracotta (accent & interactive)

| Token | Hex | Usage |
|---|---|---|
| `terracotta-700` | `#8F3015` | Hover state on accent elements |
| `terracotta-500` | `#C5522A` | **Price labels, key highlights** |
| `terracotta-400` | `#D46840` | Play/icon buttons, inline accents |
| `terracotta-100` | `#F8D4C0` | Tinted backgrounds for chips |

#### Amber-warm (product circles)

| Token | Hex | Usage |
|---|---|---|
| `amber-warm-500` | `#D4A428` | Hot Chocolate product circle |
| `amber-warm-400` | `#E8BF35` | Caramel Frappuccino product circle |
| `spotlight-nutella` | `#D4703C` | Nutella Mudslide circle |
| `spotlight-hero` | `#C47840` | Large hero image backdrop circle |

#### Category palette

Each category icon uses its own distinct background:

| Category | Token | Hex |
|---|---|---|
| Coffee | `category-coffee` | `#8B8B40` (olive) |
| Drinks | `category-drinks` | `#1A6B54` (dark teal) |
| Tea | `category-tea` | `#D15A3C` (terracotta) |
| Bakery | `category-bakery` | `#C43060` (raspberry) |

### Color rules

- **Never** place brown text on terracotta — insufficient contrast.
- Use **cream-100** as the default page background; swap to **cream-200** for alternating sections.
- Terracotta is for prices and micro-accents only; don't use it as a large block color.
- White surfaces (`#FFFFFF`) are reserved for input fields, modals, and cards that need pop.
- Primary CTA button is always `brown-950` background with white text.

---

## Typography

### Typefaces

| Role | Family | Fallback |
|---|---|---|
| Display & body | **Poppins** | `ui-sans-serif, system-ui, sans-serif` |
| Code snippets | **Cascadia Code** | `ui-monospace` |

Load via `next/font/google`:

```tsx
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
})
```

### Type scale

| Token | Size | Weight | Leading | Use |
|---|---|---|---|---|
| `display-xl` | 44px | 800 ExtraBold | 1.15 | H1 hero headline |
| `display-lg` | 36px | 700 Bold | 1.3 | H2 section headings |
| `display-md` | 28px | 700 Bold | 1.3 | H3 card titles |
| `display-sm` | 22px | 600 SemiBold | 1.3 | H4 sub-headings |
| `body-lg` | 18px | 400 Regular | 1.6 | Lead paragraph |
| `body-md` | 16px | 400 Regular | 1.6 | Default body copy |
| `body-sm` | 14px | 400 Regular | 1.75 | Secondary text |
| `label` | 12px | 500 Medium | — | ALL CAPS labels, categories |

### Typography rules

- Headlines use `brown-900`; body copy uses `brown-600`.
- Price labels: `terracotta-500` + `font-weight-bold`.
- `letter-spacing: tracking-widest` on category labels (12px ALL CAPS).
- Never go below `body-sm` for readable text. Labels may use 12px only when supplementary.
- Line length: cap body copy at 60–65 characters (`max-w-[42rem]`).

---

## Spacing

Base unit: **4px** (Tailwind's default `spacing-1 = 4px`).

Use the built-in Tailwind scale for granular control; use the semantic tokens for section-level layout:

| Token | Value | Typical usage |
|---|---|---|
| `section-y` | 80px | Top/bottom padding on page sections |
| `container` | 96px | Horizontal page margin on large screens |
| `card-p` | 24px | Card internal padding |
| `icon-lg` | 72px | Category icon circle size |
| `nav-h` | 72px | Fixed navbar height |

**Component gaps** follow an 8px rhythm: `gap-2` (8px) inside chips, `gap-4` (16px) between list items, `gap-6` (24px) between cards.

---

## Borders & Radius

| Token | Value | Use |
|---|---|---|
| `radius-sm` | 6px | Badges, tags |
| `radius-md` | 12px | Search input, small cards |
| `radius-lg` | 16px | Product cards |
| `radius-xl` | 24px | Hero panel, large containers |
| `radius-2xl` | 32px | Outer app frame (reference image chrome) |
| `radius-pill` | 9999px | Buttons, search bar, icon circles |

Border color: `cream-300` at `1px` for most dividers and input borders.

---

## Elevation & Shadows

Shadows use a warm brown tint (`rgb(43 26 14)`), not neutral grey.

| Token | Value | Use |
|---|---|---|
| `shadow-warm-xs` | `0 1px 2px 0 rgb(43 26 14 / 6%)` | Badges, pills |
| `shadow-warm-sm` | `0 2px 6px 0 rgb(43 26 14 / 8%)` | Inputs, small cards |
| `shadow-warm-md` | `0 4px 16px 0 rgb(43 26 14 / 10%)` | Product cards, dropdowns |
| `shadow-warm-lg` | `0 8px 32px 0 rgb(43 26 14 / 12%)` | Hero image, modals |

Use shadows sparingly — the cream palette is naturally low-contrast.

---

## Iconography

- **Style**: Outlined, 2px stroke, rounded ends — consistent with the Heroicons Outline set or Phosphor Icons (Regular weight).
- **Size**: 20px (`size-5`) for inline icons, 24px (`size-6`) for standalone.
- **Color**: Inherit from parent text color or use `terracotta-400` for interactive icons.
- Category icons are white on their respective colored circle backgrounds.

---

## Motion

| Token | Value | Use |
|---|---|---|
| `duration-fast` | 150ms | Hover color shifts |
| `duration-base` | 200ms | Button presses, focus rings |
| `duration-slow` | 350ms | Panel slides, page transitions |
| `ease-smooth` | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` | Most UI transitions |
| `ease-bounce` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | CTA hover scale, icon pop |

Default transition shorthand: `transition-all duration-200 ease-smooth`.

---

## Accessibility

- Minimum contrast: **4.5:1** for body text, **3:1** for large text / UI components (WCAG AA).
- `brown-900` on `cream-100` = **~12:1** ✓
- `terracotta-500` on `cream-100` = **~4.6:1** ✓ (border-line — verify at 12px)
- Always pair color information with shape/icon or text label.
- Focus rings: `outline-2 outline-offset-2 outline-terracotta-500`.
- All interactive elements must have a minimum touch target of **44×44px**.

---

## Dark mode

The reference design is light-only. Dark mode should invert the warmth:

| Light | Dark |
|---|---|
| `cream-100` bg | `brown-950` bg |
| `brown-900` text | `cream-100` text |
| `cream-300` border | `brown-800` border |
| `terracotta-500` accent | `terracotta-400` accent (slightly lighter) |

Implement with `@media (prefers-color-scheme: dark)` CSS variable overrides in `globals.css`.
