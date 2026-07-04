# Test Plan

**Project:** PurrfectlyMade Website  
**Client:** Isabella Pinzarrone  
**Business or department:** [MISSING: business or department]  
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

## Homepage QA checklist

- Compare built homepage screenshot against approved generated homepage image.
- Verify section order and hierarchy match approved design.
- Verify logo is unchanged and brand icons are not distorted.
- Verify hero uses approved `HeroBG.png` asset.
- Verify Made With Love card uses approved two-cats image asset.
- Verify footer includes subtle creator credit linked to `https://design.roseandpaw.ca`.
- Verify no broken images in homepage.
- Verify no internal `#` dead links.
- Verify no horizontal overflow at active viewport.
- Verify mobile-width layout remains readable and touch friendly.
- Verify homepage metadata includes title, description, Open Graph, and Twitter card values.

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

- [MISSING: deployment environment details]
- [MISSING: production secrets and configuration decisions]