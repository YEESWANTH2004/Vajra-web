# Vajra Alloys — Single-Page Landing Site

A premium, animated one-page site built strictly from the brochure content, logo, imagery and colour palette.

## One note on the stack
Next.js isn't available on this platform — the project runs on React + TanStack Start (same React ecosystem, SSR, and equally production-grade). Everything below is delivered exactly as described.

## Brand system (taken from the brochure)
- Navy `#1F2A5A` (primary), Gold `#EDB93C` (accent), steel greys, off-white surfaces
- Logo: extracted from page 1 of the PDF, used in header and footer
- Typography: Barlow Condensed (industrial headings) + Inter (body) — real industrial-grade typefaces, no generic AI defaults
- Angled/chevron shapes echoing the logo's slashes, sharp 2px radii, engineered grid

## Page sections (brochure content only)
1. **Hero** — "Powering the future with SUPERALLOY STRENGTH", brochure hero photo, animated chevron sweep, gold underline, scroll cue
2. **Product-form strip** — the 7 metal form icons (bar, rods, plates, bundle, coil, sheet, wire) in an infinite marquee, "Superalloy & Special Steel"
3. **About Vajra** — full brochure text, KSSL parentage, factory photo, counters/standards chips (ASTM, ASME, DIN)
4. **Mission / Vision / Quality Policy** — 3 stacked scroll-pinned cards with brochure images
5. **Facilities carousel** — ESR Furnace, HR/CR Coil Slitter, 6-Hi Rolling Mill, Wire Drawing, Boggie & Pit Furnaces; each slide with its photo, description and spec table from the PDF
6. **Cold rolling process flow** — animated horizontal flow (Uncoiler → Slitting → Coiler → Leveller → Looper → 6Hi Mill → Bright Annealing → CR Slitter) plus the surface-finish table (2B, BA, HR, 2D, 2E)
7. **Superalloy manufacturing flow + Forms & Sizes** — animated node flow (VIM → ESR → Forging → Mills → Heat Treatment → Testing → Dispatch) and the forms/sizes spec cards
8. **Product portfolio** — filterable table (Super Alloy / Stainless / High Speed Steel) with grade, chemistry, form, application from the PDF
9. **Testing facilities** — 5-image gallery carousel (Tensile, Hardness, Heat Treatment, Microstructure, OES)
10. **Contact footer** — corporate & plant addresses, info@vajraalloys.com, +91 44 46507037, social icons, www.vajraalloys.com

## Motion
Framer Motion throughout: staggered reveals, parallax hero, counter animations, stacked sticky cards, marquee, sequential flow-diagram draw-in, hover tilt on cards, embla-powered carousels with autoplay.

## Technical
- Images extracted from the PDF, uploaded as CDN assets and imported in components
- Single route at `/`, sectioned components under `src/components/`, tokens in `src/styles.css`
- Fonts via `<link>` in the root route; SEO head with title, description, OG/Twitter tags
- Fully responsive; no content invented beyond the brochure
