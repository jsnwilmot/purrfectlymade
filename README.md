# PurrfectlyMade Website

Homepage implementation status: production-ready. Ongoing refinements are focused on performance and optional visual polish.

## Design target requirement

The generated homepage image provided in project approval is the design source of truth for the homepage. The desktop page should match that image as closely as possible, and any visible differences must be tracked and reviewed.

## Approved homepage assets

- `assets/images/HeroBG.png` is the approved hero image asset.
- `assets/images/icon-twocats.png` is the approved Made With Love card image asset.
- `assets/images/icon_keychain.png` is the approved real-product keychain icon asset.
- `assets/images/icon_dogtag.png` is the approved real-product dog tag icon asset.

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
The live deployment uses optimized static output from `dist/`.

## Cloudflare Pages deployment

- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: leave blank unless this repo is moved into a subfolder
- Never deploy repository root (`/opt/buildhome/repo`) as the assets directory

## Cloudflare Workers deployment

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Root directory: `/`
- Wrangler config file: `wrangler.toml`
- Assets directory is configured in Wrangler as `./dist`

Manual fallback deploy command:

- `npx wrangler deploy --assets=dist --compatibility-date=2026-07-04`

## Notes

- This project is static only.
- No checkout, payment processing, authentication, backend, or database are included.
- The site is production-ready.
- Remaining performance work is primarily image optimization for additional PageSpeed improvements.

## Production metadata baseline

- Canonical domain: `https://www.purrfectlymade.ca/`
- Open Graph URL/image and Twitter image use absolute URLs on the confirmed canonical domain.
- Facebook link is active: `https://www.facebook.com/PurrfectlyMadeCrafts`
- Instagram links are hidden for now (no public Instagram profile yet).
- Public email link is not exposed yet.
- Newsletter card is marked `Coming Soon` and is intentionally non-clickable.
- Cart/bag icon has been removed to avoid implying checkout functionality.
- Custom-order CTA routing currently targets the on-page custom-order/contact area.

## Web3Forms request form status

- Web3Forms custom order/contact request form now lives on `request.html`.
- Homepage lower feature row is restored to compact cards and links to `request.html` for requests.
- Request page uses a secondary-page header spacing treatment so logo and request card do not overlap.
- Form endpoint remains `https://api.web3forms.com/submit` using `POST`.
- Hidden fields in use: `access_key`, `subject`, `from_name`, and `redirect`.
- Honeypot anti-spam field `botcheck` is included and hidden from users.
- Request form is live in production and submits successfully.
- Web3Forms email notification delivery is confirmed.
- Successful submissions redirect users to `/thank-you.html`.
- Payment-details agreement checkbox is required before submit.
- JavaScript success handling redirects only after confirmed successful API response.
- Native no-JavaScript fallback includes a Web3Forms redirect field to `/thank-you.html`.

Production verification note:

Web3Forms request form is live and verified in production. Live submission works, email notification is received, and successful submissions redirect to /thank-you.html.

### Customer-facing form scope

- Form purpose: product questions and custom order requests.
- Form does not collect payment details.
- Privacy note shown near the form:
   - `Please share only the details needed for your request. Your information will only be used to reply about your order or question.`
- Customer-facing wording was cleaned up to remove awkward parent/guardian form language.

## Form activation steps

Completed in production:

1. Production Web3Forms integration configured and deployed.
2. `npm.cmd test` and `npm.cmd run build` executed successfully.
3. Request page form submit success and error states validated.
4. Successful submissions verified to redirect to `/thank-you.html`.

## Final launch blockers

- None.

## Deployment files

Build output now includes deployment-critical files:

- `dist/index.html`
- `dist/request.html`
- `dist/404.html`
- `dist/thank-you.html`
- `dist/robots.txt`
- `dist/sitemap.xml`
- `dist/CNAME`
- `dist/manifest.webmanifest`
- active favicon manifest and icons under `dist/assets/images/favicon/`
- Build process auto-discovers and copies all root-level `.html` files into `dist/`.
