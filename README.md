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

## Web3Forms request form status

- Web3Forms custom order/contact request form now lives on `request.html`.
- Homepage lower feature row is restored to compact cards and links to `request.html` for requests.
- Form endpoint remains `https://api.web3forms.com/submit` using `POST`.
- Hidden fields in use: `access_key`, `subject`, and `from_name`.
- Honeypot anti-spam field `botcheck` is included and hidden from users.
- No real access key is committed. Placeholder remains: `YOUR_WEB3FORMS_ACCESS_KEY`.
- Live submissions will not work until a real Web3Forms access key is added.
- Payment-details agreement checkbox is required before submit.
- Current JavaScript enhancement prevents live submission attempts while placeholder key is present.
- Native no-JavaScript fallback still posts to the configured endpoint and should not be considered production-ready until key setup is complete.

### Customer-facing form scope

- Form purpose: product questions and custom order requests.
- Form does not collect payment details.
- Privacy note shown near the form:
   - `Please share only the details needed for your request. Your information will only be used to reply about your order or question.`
- Customer-facing wording was cleaned up to remove awkward parent/guardian form language.

## Form activation steps

1. Replace `YOUR_WEB3FORMS_ACCESS_KEY` in `request.html` with the approved production key using a secure method.
2. Run `npm.cmd test` and `npm.cmd run build`.
3. Validate request page form submit success and error states in browser.
4. Confirm no secrets were committed in staged changes before push.

## Final launch blockers

- Web3Forms production access key has not been configured yet.
- Final stakeholder visual parity sign-off is still required.

## Deployment files

Build output now includes deployment-critical files:

- `dist/index.html`
- `dist/request.html`
- `dist/404.html`
- `dist/robots.txt`
- `dist/sitemap.xml`
- `dist/CNAME`
- `dist/manifest.webmanifest`
- active favicon manifest and icons under `dist/assets/images/favicon/`
