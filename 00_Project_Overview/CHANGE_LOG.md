# Change Log

**Project:** PurrfectlyMade Website  
**Client:** Isabella Pinzarrone  
**Business or department:** Purrfectly Made  
**Project type:** Static website  
**Target platform:** Web browser, tablet, mobile  
**Status:** Ready for Codex

## 2026-07-04

### Web3Forms custom request wording and safety refinement pass

- Refined homepage Web3Forms contact/request form copy for polished customer-facing language.
- Updated form fields to required set: Name, Email, Request Type, Message.
- Added optional fields: Phone, Item or Category, Preferred Colours, Pickup or Delivery Question.
- Added request type options: Product Question, Custom Order, Gift Order, Local Pickup Question, Other.
- Added item/category options aligned to approved product categories.
- Removed parent/guardian-specific wording from field labels and consent copy.
- Added form privacy notice clarifying limited use of submitted information.
- Added scope agreement checkbox wording to prevent payment details being submitted.
- Preserved Web3Forms placeholder key (`YOUR_WEB3FORMS_ACCESS_KEY`) and no secrets were committed.
- Updated placeholder-key guard message to clearly explain form is not active until key configuration.

### Production URL and deployment metadata alignment pass

- Set canonical domain to `https://www.purrfectlymade.ca/` across homepage metadata, sitemap, and robots.
- Updated Open Graph and Twitter image references to absolute canonical-domain URLs.
- Removed cart/bag icon UI from header and mobile controls to avoid checkout implication.
- Replaced newsletter action with non-clickable `Coming Soon` state.
- Hid Instagram outgoing links for this phase and switched social messaging to a non-link update state.
- Set Facebook link to `https://www.facebook.com/PurrfectlyMadeCrafts`.
- Removed public email link exposure for this phase.
- Simplified sitemap to current single-page baseline URL only.
- Updated robots sitemap URL to canonical domain.
- Aligned manifest strategy and ensured active favicon manifest paths resolve after build.
- Updated `404.html` to current asset paths/routes and canonical-domain metadata.
- Updated build script to include deployment-critical files in `dist/`.
- Confirmed Web3Forms contact/custom-order form integration is deferred to the next phase.

### Header and hero responsive stabilization pass

- Fixed header/nav/logo breakpoints to keep navigation visible and readable at desktop, tablet, and mobile widths.
- Centered logo using viewport-centered anchor behavior and increased desktop logo scale.
- Retuned hero fade overlay to remove visible left-side seam between text area and `HeroBG.png`.
- Updated hero script style toward a logo-closer script treatment and preserved headline/CTA icon refinements.
- Captured pass-6 desktop, full-page, tablet-900, and mobile-390 screenshots and updated visual QA checklist.

### Header and hero strict defect pass (logo/script/heart/paw/fade/nav)

- Increased centered desktop logo width to restore dominant brand anchor behavior.
- Tuned nav vertical centering in header band and increased active Home heart visibility.
- Updated hero script headline styling to a more condensed elegant treatment.
- Replaced tiny headline heart with a larger icon-style inline heart.
- Replaced hero CTA paw emoji with larger white inline SVG paw icon.
- Tuned hero left-side fade gradient for softer blend into cream background.
- Captured pass-7 screenshots and updated homepage visual QA checklist outcomes.

### Header and hero rebuild pass

- Rebuilt header and hero layout structure to improve parity with approved homepage concept.
- Re-centered and resized logo as dominant overlapping brand anchor between header and hero.
- Refined left and right navigation grouping around centered logo and updated divider-gap behavior.
- Replaced incremental hero treatment with a single blended right-side `HeroBG.png` layer (no card styling).
- Captured pass-4 screenshots for comparison and updated visual QA notes.

### Homepage visual parity revision pass (HeroBG and two-cats assets)

- Replaced hero right-side composition with approved `assets/images/HeroBG.png`.
- Removed old hero icon-composition approach and updated hero image handling in `styles.css`.
- Replaced Made With Love card image with approved `assets/images/icon-twocats.png`.
- Added subtle footer credit link: `Created by Rose & Paw Digital Designs` -> `https://design.roseandpaw.ca`.
- Captured updated parity screenshots:
	- `10_Documentation/homepage-built-desktop-full-pass2.png`
	- `10_Documentation/homepage-built-desktop-viewport-pass2.png`
	- `10_Documentation/homepage-built-mobile-390-pass2.png`
- Homepage remains under strict parity review; do not mark complete while visible desktop diffs remain.

### Homepage visual implementation entry

- Rebuilt `index.html` homepage to match approved generated homepage layout and section order.
- Added dedicated root stylesheet `styles.css` for homepage visual treatment, spacing, and responsive behavior.
- Updated SEO metadata in homepage head tags, including Open Graph and Twitter card metadata.
- Updated build script to copy homepage assets and CSS into `dist/` output.
- Captured implementation screenshots under `10_Documentation/` for visual comparison.
- Known limitation: exact 1:1 desktop pixel parity is constrained by available local assets and available browser screenshot viewport control in the integrated tool.

### Phase 1 project setup implementation entry

- Implemented baseline static website scaffold at repository root.
- Added `package.json` with deterministic `test` and `build` scripts.
- Added `index.html`, `src/styles/main.css`, and `src/js/main.js` starter files.
- Added `src/site.config.js` for shared site-level configuration.
- Added `src/js/sanitize.js` and `tests/sanitize.test.js` for initial input-sanitization coverage.
- Added `scripts/build.mjs` to produce static output in `dist/`.
- Added `.gitignore` entries for `node_modules/` and build artifacts.

### Initial package generation entry

- Generated date: 2026-07-04

- Project status: Ready for Codex

- Generated files: 19

- Missing information count: 3

- Known gaps: No unresolved client review items are currently identified.

- Next review action: Architect resolves missing decisions and confirms phased implementation order.