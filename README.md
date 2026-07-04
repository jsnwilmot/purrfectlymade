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
- Homepage remains under strict visual parity requirements and is not complete while visible pixel-perfect differences remain.

## Production metadata baseline

- Canonical domain: `https://www.purrfectlymade.ca/`
- Open Graph URL/image and Twitter image use absolute URLs on the confirmed canonical domain.
- Facebook link is active: `https://www.facebook.com/PurrfectlyMadeCrafts`
- Instagram links are hidden for now (no public Instagram profile yet).
- Public email link is not exposed yet.
- Newsletter card is marked `Coming Soon` and is intentionally non-clickable.
- Cart/bag icon has been removed to avoid implying checkout functionality.
- Custom-order CTA routing currently targets the on-page custom-order/contact area.
- Web3Forms integration is deferred to the next form phase.

## Deployment files

Build output now includes deployment-critical files:

- `dist/index.html`
- `dist/404.html`
- `dist/robots.txt`
- `dist/sitemap.xml`
- `dist/CNAME`
- `dist/manifest.webmanifest`
- active favicon manifest and icons under `dist/assets/images/favicon/`
