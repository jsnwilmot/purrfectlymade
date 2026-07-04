# PurrfectlyMade Website

Homepage implementation status: in progress toward approved generated homepage image parity.

## Design target requirement

The generated homepage image provided in project approval is the design source of truth for the homepage. The desktop page should match that image as closely as possible, and any visible differences must be tracked and reviewed.

## Approved homepage assets

- `assets/images/HeroBG.png` is the approved hero image asset.
- `assets/images/icon-twocats.png` is the approved Made With Love card image asset.

## Required footer credit

- Footer must include: `Created by Rose & Paw Digital Designs`.
- Credit link must target: `https://design.roseandpaw.ca`.
- Credit must remain subtle and not disrupt approved footer hierarchy.

## Run locally

1. Run tests:
   - `npm.cmd test`
2. Build static output:
   - `npm.cmd run build`
3. Open homepage:
   - `index.html`

## Build output

Static output is generated into `dist/`.

## Notes

- This project is static only.
- No checkout, payment processing, authentication, backend, or database are included.
- Missing production URLs are kept as explicit missing-decision markers where required.
- Homepage remains under strict visual parity requirements and is not complete while visible pixel-perfect differences remain.
