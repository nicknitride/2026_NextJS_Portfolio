# Visual Identity Improvement Plan

## Purpose

Evolve this portfolio from a capable dark, purple-accented template into a distinct personal brand for **Nicholo Pardines, Software Engineer**. The design should communicate secure, practical engineering work while remaining polished, readable, and fast.

## Current baseline

The site already has a consistent dark mode, violet accent (`#a855f7`), rounded cards, animated gradients, and a clear single-page information flow. Its main visual limitations are that the palette and effects feel broadly template-like, project cards use empty gradient placeholders, and there is not yet a recognisable personal mark, type system, or image language.

## Brand direction

Use **Practical systems, clearly engineered** as the guiding idea.

- **Personality:** calm, precise, dependable, contemporary.
- **Audience:** hiring managers, engineering peers, and collaborators.
- **Visual metaphor:** a well-organised engineering workspace—structured grids, purposeful highlights, and small signals of depth instead of decorative glow everywhere.
- **Avoid:** generic “cyberpunk” effects, excessive gradients, emoji-led identity, and visual elements without content value.

## Design system

### 1. Establish a purposeful palette

Retain a dark-first experience but shift from a single purple treatment to a restrained system:

| Role | Suggested value | Use |
| --- | --- | --- |
| Canvas | `#0B1020` | Page background |
| Surface | `#121A2B` | Cards and raised regions |
| Surface-raised | `#18233A` | Hover and selected states |
| Primary ink | `#F4F7FB` | Headings and high-emphasis text |
| Secondary ink | `#A8B3C7` | Body copy and metadata |
| Brand violet | `#8B5CF6` | Primary action, active state, key emphasis |
| Signal teal | `#2DD4BF` | System/status detail and secondary emphasis |
| Border | `#26324A` | Quiet structure and dividers |

Define these as semantic CSS variables in `app/globals.css`; components should use roles such as `primary`, `accent`, and `muted`, rather than raw color values. Keep teal rare: it should support violet rather than compete with it.

### 2. Define typography and hierarchy

- Add a display face with technical character for headings (for example, **Space Grotesk**) and pair it with **Inter** or the existing system sans for body copy.
- Use a compact, monospaced label style for section kickers, technology tags, dates, and small navigation elements.
- Introduce consistent levels: eyebrow/label, display heading, section heading, card heading, body, and metadata.
- Tighten headline line-height and preserve a comfortable body line-height (about 1.6) for scanability.
- Replace the hero emoji with a typographic or geometric signature so the identity survives contexts where emoji rendering differs.

### 3. Create a reusable graphic signature

Create a simple **NP monogram** or abstract two-stroke mark inspired by brackets, connected nodes, or a code cursor. Use it in the future header, favicon, social-preview image, and as a low-contrast watermark in the hero.

The mark should work at 16px, in one color, and without surrounding text. Prefer an SVG kept in `public/` so it is sharp and reusable.

### 4. Use a more intentional layout language

- Add a slim, sticky header with the monogram, section links, and an active-section indicator.
- Introduce a small uppercase section label above each heading; pair it with a fine rule or numbered index to create rhythm.
- Standardise content widths: narrow reading width for biography and experience, wider grid for projects, and consistent vertical section spacing.
- Use a 4/8px spacing scale and one card radius family to make the page feel deliberately constructed.
- Replace isolated decorations with a subtle grid, dot matrix, or line-work texture at very low contrast. Respect `prefers-reduced-motion`.

## Section-by-section plan

### Hero

1. Add the personal mark and a short role label, such as `Software Engineer · Quezon City, PH`.
2. Rework the heading to foreground the professional value proposition rather than the name alone—for example, “Building reliable systems for real-world products.” Keep the name as a clear signature.
3. Add concise proof points (OAuth/JWT, REST APIs, React/TypeScript) in a metadata row.
4. Use one contained visual device: a quiet architectural grid or compact “now building” panel. Remove or substantially tone down competing animated orbs.
5. Make the primary CTA visually decisive and the email CTA quieter but equally accessible.

### About and experience

1. Turn the interests list into small capability cards or tagged domains with a consistent icon set (Lucide is already installed).
2. Refine the experience timeline with an explicit vertical rail, clearer date treatment, and result-oriented achievement callouts (for example, `80+ audit operations`, `40% device-cost reduction`).
3. Keep paragraphs narrow and improve contrast for all supporting copy.

### Projects

1. Replace each empty gradient block with a project thumbnail, case-study visual, repository preview, or carefully designed project-specific abstract illustration.
2. Give each project one recognisable motif and a deliberate accent treatment; do not use the same placeholder for every card.
3. Add visible actions only when destinations exist: live demo, case study, and source code. Avoid dead or implied controls.
4. Include a lightweight project taxonomy (web app, mobile, backend, prototype) to make the portfolio easier to scan.
5. On hover, use a small elevation, border shift, and image movement—not a large glow.

### Skills, contact, and footer

1. Replace repeated bullet lists with a compact skills matrix grouped by capability and confidence/context (for example, “Production”, “Working knowledge”, “Tools”).
2. Make the contact area a clear closing panel that repeats the brand mark subtly and supplies one strong email action.
3. Add professional links (GitHub, LinkedIn, résumé) when available, using consistent Lucide icons and accessible text labels.
4. Keep the footer minimal; use it to reinforce the monogram and copyright rather than add more decoration.

## Interaction, accessibility, and quality bar

- Provide a visible keyboard focus ring with sufficient contrast on every interactive control.
- Ensure body text and muted text meet WCAG AA contrast against their intended surfaces.
- Honor `prefers-reduced-motion` by disabling background movement and shortening hover transitions.
- Use semantic heading order, descriptive image alt text, and clear link names.
- Test at 320px, 768px, 1024px, and wide desktop widths; navigation and CTA groups must wrap without crowding.
- Optimise supplied imagery with Next.js `Image`, stable aspect ratios, and appropriately sized assets.

## Delivery phases

### Phase 1 — Foundation

1. Audit the existing tokens in `app/globals.css` and introduce the semantic palette, spacing, radius, type, and motion tokens.
2. Add font loading and base type styles in `app/layout.tsx` and `app/globals.css`.
3. Design and add the SVG monogram plus updated favicon/social assets.
4. Create reusable components for section headers, tags, and project cards.

**Done when:** the site has a documented visual vocabulary and the hero, headings, cards, and controls use it consistently.

### Phase 2 — Core page redesign

1. Build the sticky header and recompose the hero around the new hierarchy.
2. Apply the section-label rhythm and improve the experience timeline.
3. Replace project placeholders with real visual assets and explicit, valid links.
4. Rework skills and contact into the new component patterns.

**Done when:** every main section looks intentional on mobile and desktop, and no generic placeholder visual remains.

### Phase 3 — Polish and validation

1. Tune hover, focus, and reduced-motion states.
2. Perform contrast, keyboard, screen-reader, responsive, and performance checks.
3. Capture final desktop and mobile screenshots for visual regression reference.
4. Update this plan with final token values and any decisions made during implementation.

**Done when:** the visual identity is coherent, accessible, and validated in production-like builds.

## Priorities

| Priority | Work | Why it matters |
| --- | --- | --- |
| ~~P0~~ | ~~Typography, semantic palette, hero hierarchy~~ | ~~Establishes immediate recognition and readability~~ |
| ~~P0~~ | ~~Project imagery and real project actions~~ | ~~Converts interest into evidence of work~~ |
| P1 | Header, monogram, section rhythm | Makes the experience feel owned rather than templated |
| P1 | Accessible interaction and responsive refinement | Preserves quality for all visitors and devices |
| P2 | Subtle ambient texture and motion refinements | Adds polish once content and system are strong |

## Measures of success

- A visitor can identify Nicholo’s role, core specialties, and strongest work within the first screen.
- The palette, typography, mark, cards, and imagery feel like one system rather than separate template elements.
- Each project presents a visual proof point and a clear next action.
- The portfolio maintains strong readability, keyboard usability, reduced-motion support, and fast loading across devices.
