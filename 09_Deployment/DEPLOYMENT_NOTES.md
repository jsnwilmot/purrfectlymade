# Deployment Notes

**Project:** PurrfectlyMade Website  
**Client:** Isabella Pinzarrone  
**Business or department:** [MISSING: business or department]  
**Project type:** Static website  
**Target platform:** Web browser, tablet, mobile  
**Status:** Ready for Codex

## Target platform

Web browser, tablet, mobile

## Environment assumptions

- The website will be a simple product showcase and request-based site for the first phase.
- The site will not include full ecommerce checkout, payment processing, customer accounts, or inventory automation at launch.
- A parent, guardian, or site administrator will manage customer communication.
- Approved logo and icon assets are available for use.
- Product photos, product names, descriptions, and pricing will be supplied or approved before launch.
- Facebook messaging is approved as a secondary contact method.
- A favicon and Open Graph image are required.
- The site must be mobile-friendly, polished, and safe for a young handmade business owner.

## Build commands

- npm.cmd test
- npm.cmd run build
- npm.cmd audit

## Cloudflare Pages configuration

Use these settings for this repository:

- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: leave blank (unless this project is moved into a subfolder)

Critical safeguards:

- Do not deploy the repository root.
- Do not set assets/output directory to `/opt/buildhome/repo`.
- Do not configure assets upload as `.`.

Expected behavior:

- Cloudflare deploys static files from `dist/` only.
- `node_modules/` is excluded by `.gitignore` and is not a deployable static asset directory.

## Cloudflare Workers configuration

Use these settings when deploying via Wrangler:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Root directory: `/`
- Wrangler config: `wrangler.toml`
- Assets directory: `./dist`

Wrangler config values in this repository:

- `name = "purrfectlymade"`
- `compatibility_date = "2026-07-04"`
- `[assets] directory = "./dist"`

Alternative manual deploy command:

- `npx wrangler deploy --assets=dist --compatibility-date=2026-07-04`

## Deployment steps

- [MISSING: deployment steps by environment]

## Required secrets or configuration

- [MISSING: required secrets and environment variables]

## Security notes

- The website should use HTTPS.
- Form submissions should be sent through a secure form provider.
- Secrets, API keys, and private email settings must not be stored in public code.
- Customer information should not appear in public files, browser-visible data, or website source code.
- Admin accounts should use strong passwords and two-factor authentication where available.

## Rollback notes

- [MISSING: rollback process]
- [MISSING: incident communication owner]

## Open deployment decisions

- [MISSING: approved hosting environment]
- [MISSING: release approval workflow]