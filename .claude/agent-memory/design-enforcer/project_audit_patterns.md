---
name: project-audit-patterns
description: Common design violation patterns found in the Brew & Co. coffee shop codebase during May 2026 audit
metadata:
  type: project
---

Audit completed 2026-05-12 against 12 files (Navbar, NavbarClient, HeroSection, HeroCTAButtons, PopularItemCard, EventCard, ReserveModal, Footer, MenuPageClient, app/page.tsx, about/page.tsx, menu/page.tsx).

**Why:** Baseline audit to establish design compliance state before further development.
**How to apply:** Use these patterns as a checklist for future reviews in this codebase.

## Confirmed violations

1. **`bg-terracotta-500` used as a large button fill in HeroCTAButtons.tsx** — "Reserve a Table" CTA uses `bg-terracotta-500` as its background. Design system rule: terracotta is for prices and micro-accents only; primary CTAs must use `bg-brown-950`.

2. **Focus ring variant on HeroCTAButtons.tsx** — Both CTA buttons use `focus-visible:ring-white` instead of the required `focus-visible:ring-terracotta-500`. On a dark overlay background, ring-white may be acceptable contextually, but it deviates from the standard pattern.

3. **Raw inline `style` with hex values in about/page.tsx (line ~138-143)** — Value card icon circles use `style={{ background: "#D4703C" }}`, `"#E8BF35"`, `"#1A6B54"` — raw hex values instead of token classes (`bg-spotlight-nutella`, `bg-spotlight-caramel`, `bg-category-drinks`).

4. **`rounded-xl` used instead of `rounded-lg` / `rounded-pill` in PopularItemCard, EventCard, MenuPageClient** — `rounded-xl` is not a defined radius token. Defined tokens are `radius-sm` (6px), `radius-md` (12px), `radius-lg` (16px), `radius-xl` (24px), `radius-2xl` (32px), `radius-pill`. The Tailwind utility `rounded-xl` maps to 12px in default Tailwind but `--radius-xl` is 24px in this theme. Cards should use `rounded-[1rem]` or token class for radius-lg.

5. **`object-cover` instead of `object-contain` on PopularItemCard product image** — Spec says product circle images must use `object-contain`. PopularItemCard line 28 uses `object-cover`.

6. **`text-brown-500` used in EventCard (line 31) and ReserveModal (line 143)** — `brown-500` (#8A6350) is defined in tokens but is not a documented semantic role. Body copy must use `brown-600` per style guide; `brown-500` is between body copy and muted — borderline acceptable but not spec-compliant.

7. **Focus ring missing `ring-offset-2` in several places** — Navbar logo focus ring (line 11) and hamburger button (line 41) use only `ring-2 ring-terracotta-500` without `ring-offset-2`. Standard focus pattern requires `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-terracotta-500`.

8. **`text-white` used in Footer for brand name (line 8)** — Raw `text-white` is used in footer. While white is allowable on dark backgrounds, it should be `text-cream-50` or `text-cream-100` per the dark-mode token aliases in the style guide.

9. **`bg-terracotta-500` used as event tag badge background in EventCard (line 19)** — Tag/badge chips should use `bg-terracotta-100 text-terracotta-600` per component-specs.md Badge spec. Using solid terracotta-500 as a large pill background violates the "micro-accents only" rule for terracotta.

10. **MenuPageClient uses emoji icons** — While not a token violation, AGENTS.md prohibits emoji. The category tab buttons use emoji (☕, 🧊, 🥐, 🥪).

## Confirmed compliant patterns (reference)
- NavbarClient "Reserve a Table" button: correctly uses `bg-brown-950 text-white rounded-pill` with `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-terracotta-500`
- PopularItemCard price: correctly uses `text-terracotta-500 font-bold`
- ReserveModal submit button: correctly uses `rounded-pill bg-brown-950`
- All shadow usage: correctly uses `shadow-warm-*` tokens throughout — no raw `shadow-md/lg` found
- Background alternation: cream-100 / cream-200 pattern correctly applied in page.tsx sections
- Image components: all use Next.js `<Image fill>` with sized containers
