# Test Plan

**Project:** PurrfectlyMade Website  
**Client:** Isabella Pinzarrone  
**Business or department:** Purrfectly Made  
**Project type:** Static website  
**Target platform:** Web browser, tablet, mobile  
**Status:** Ready for Codex

## Test scope

Validation, generation, persistence, document preview, and export behavior for the active project.

## Unit test targets

- Validation rules by stage
- Document helper functions
- File mapping and sanitization
- Input sanitization helper behavior in `src/js/sanitize.js`

## Integration test targets

- Active project generation and persistence
- Intake edit behavior versus generated documents
- Document preview and export behavior
- Static site build output generation into `dist/`

## Runtime commands

- Run tests: `npm.cmd test`
- Run build: `npm.cmd run build`

## Final launch QA results (2026-07-04)

- `npm.cmd test` passed.
- `npm.cmd run build` passed.
- Responsive pass validated at 1440, 1280, 900, and 390 widths.
- No horizontal overflow detected at 390 width.
- No console runtime errors detected during launch QA flow.
- No broken images detected on homepage.
- No broken internal hash links detected.
- Required payment-details agreement checkbox blocks submit when unchecked.
- Placeholder access-key status message appears and live fetch submission is not attempted while placeholder key is present.
- Dist output contains deployment-critical files and favicon assets.

## Homepage QA checklist

- Compare built homepage screenshot against approved generated homepage image.
- Verify section order and hierarchy match approved design.
- Verify logo is unchanged and brand icons are not distorted.
- Verify hero uses approved `HeroBG.png` asset.
- Verify Made With Love card uses approved two-cats image asset.
- Verify footer includes subtle creator credit linked to `https://design.roseandpaw.ca`.
- Verify canonical metadata uses `https://www.purrfectlymade.ca/`.
- Verify Open Graph and Twitter image URLs are absolute on canonical domain.
- Verify Facebook link points to `https://www.facebook.com/PurrfectlyMadeCrafts`.
- Verify Instagram outbound links are hidden for this phase.
- Verify newsletter CTA text is `Coming Soon` and non-clickable.
- Verify cart/bag icon is removed.
- Verify no broken images in homepage.
- Verify no internal `#` dead links.
- Verify no horizontal overflow at active viewport.
- Verify mobile-width layout remains readable and touch friendly.
- Verify homepage metadata includes title, description, Open Graph, and Twitter card values.
- Verify homepage lower card row remains visually balanced and no card is stretched by form content.
- Verify homepage request-related CTAs route to `request.html`.

## Request page QA checklist

- Verify `request.html` loads with one `h1` and expected intro copy.
- Verify Web3Forms form fields match approved customer-facing wording.
- Verify required fields are Name, Email, Request Type, Message, and agreement checkbox.
- Verify optional fields are Phone, Item or Category, Preferred Colours, and Pickup or Delivery Question.
- Verify form includes visible privacy note and no payment details request.
- Verify placeholder-key guard message appears when `YOUR_WEB3FORMS_ACCESS_KEY` is present.
- Verify status message uses live region behavior for validation/success/error.
- Verify payment-details agreement checkbox is required and has visible label text.
- Verify no horizontal overflow on `request.html` at mobile width.

## Manual test checklist

- Generate package and verify all 19 files exist
- Confirm missing markers are visible in preview and ZIP
- Switch active project and verify preview/export use active project docs
- Edit intake after generation and verify docs persist until regenerate

## Accessibility checks

- Keyboard navigation
- Focus visibility
- Semantic headings and labels
- Color contrast

## Security checks

- Sanitized folder and file paths
- No unsafe path traversal in export
- Missing decisions explicitly marked
- No real Web3Forms access key committed to repository
- Form does not collect payment details

## Data validation checks

- [MISSING: required data fields]

## Workflow checks

- Customer lands on the homepage.
- Customer reads the short brand introduction.
- Customer opens the Products or Shop page.
- Customer views product categories.
- Customer selects a product or category.
- Customer reviews the item image, description, availability, and custom notes.
- Customer chooses to submit a request or continue browsing.

## Export or deployment checks

- ZIP includes approved folder structure
- Manifest reflects generated docs
- Export succeeds after generation

## Regression checks

- Intake navigation remains intact
- Generated docs persist after refresh
- Generated count remains accurate

## Known gaps

- Web3Forms form requires production `access_key` before live submissions can succeed.
- Native no-JavaScript fallback should not be treated as production-ready until the production key is set.
- `request.html` should be included in all launch smoke tests and deployment QA checks.