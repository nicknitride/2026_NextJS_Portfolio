# Portfolio Improvements Plan

## 1. Extend the shared content model

Update `lib/portfolio-content.ts` before building either UI feature. Keep all copy and structured display data there so the components only render content rather than hard-code it.

- Add a `hero.terminal` value containing an ordered list of terminal entries. Each entry should model a command and its output lines, including the status/tone needed for syntax highlighting.
- Add a `certifications` section with a title and reusable certification entries. Seed it with `OCA 8` and `KCNA`; each entry should support optional metadata such as issuer, credential URL, issue date, and badge/image for future certifications.
- Move any new UI labels, accessibility text, and presentation copy into this content object as well.

## 2. Build the decorative hero terminal

Create a reusable `components/decorative-terminal.tsx` component that receives the terminal data from `portfolioContent`.

- Render each requested command/output group in the supplied order:
  - `git status`
  - `docker compose up`
  - `./gradlew test`
  - `pnpm build`
  - `gh workflow run deploy.yml`
  - `curl https://api.example.com/health`
- Use a terminal-window treatment (title bar, compact spacing, monospaced text, border, and restrained shadow) that matches the existing dark portfolio styling.
- Add semantic syntax highlighting with CSS classes rather than injecting highlighted HTML: distinguish prompts/commands, shell flags or URLs, successful checkmarks, success phrases, and the JSON status value.
- Keep the terminal explicitly decorative: hide it from screen readers (`aria-hidden="true"`) so it does not duplicate the hero’s meaningful content.
- Avoid terminal interaction, cursor input, or animated typing; the terminal is a stable visual accent.

## 3. Recompose the hero responsively

Update `components/hero.tsx` to use a responsive two-column layout.

- Keep the current headline, summary, CTAs, and specialties as the primary left column.
- Place `DecorativeTerminal` on the right on large screens, with a bounded width so it does not overpower the headline.
- Stack or hide the terminal at smaller breakpoints based on visual testing; prefer hiding it on narrow mobile screens if stacking makes the hero excessively tall.
- Preserve the current hero grid background, readable text contrast, keyboard focus styles, and no-horizontal-overflow behavior.

## 4. Add a reusable certifications section

Create `components/certifications.tsx` that renders `portfolioContent.certifications`.

- Use a mapped card/list layout rather than bespoke markup for OCA 8 and KCNA, so new certifications require only a content update.
- Show the certification name prominently and conditionally render optional issuer, date, badge, and credential link fields when supplied.
- Use accessible link labels and avoid empty links when a credential URL is absent.
- Add the section to `app/page.tsx` in the portfolio flow, likely after Technical Skills and before Contact, and update navigation only if a certifications anchor is desired.

## 5. Verify and polish

- Run lint, type checking, and the production build after implementation.
- Review desktop, tablet, and mobile layouts for terminal clipping, card wrapping, and section spacing.
- Confirm every new display string and certification record is sourced from `lib/portfolio-content.ts`.
- Check color contrast for the highlighted terminal tokens and ensure the non-interactive terminal is skipped by assistive technology.

## Resumable task checklist

### P0 — Content and core UI

- [x] Define terminal entries, token tones, certifications, and new UI labels in `lib/portfolio-content.ts`.
- [x] Create `components/decorative-terminal.tsx` to render the shared terminal entries with syntax-token classes.
- [x] Update `components/hero.tsx` to render the terminal in a desktop two-column layout.
- [x] Create `components/certifications.tsx` using mapped, optional certification fields.
- [x] Add the certifications section to `app/page.tsx` after Skills and before Contact.

### P1 — Responsive design and accessibility

- [x] Add terminal styling and responsive constraints in the appropriate component classes or `app/globals.css`.
- [x] Confirm the terminal is decorative (`aria-hidden`) and does not create horizontal overflow on mobile.
- [x] Verify terminal-token contrast, certification link labels, and keyboard focus styles.
- [x] Improve the certifications component design: establish a stronger visual hierarchy, add optional badge/issuer treatments, and align card styling with the portfolio’s existing visual system.

### P2 — Quality assurance

- [ ] Check desktop, tablet, and mobile layouts in the browser.
- [ ] Run lint, type checking, and the production build; address any errors.
