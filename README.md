# Purrfectly Made Website

## Purpose

Purrfectly Made is a static public web presence for a local kid-owned handmade craft business in the Lethbridge, Alberta area. The site showcases handmade item categories and sends visitors to a safe request form. It is not an ecommerce store.

## Safety rules

- Do not publish child personal details, private location details, direct contact details, schedules, or identifying family information.
- Do not add cart, checkout, payment collection, customer accounts, or live inventory.
- Keep this wording visible near request actions: "All requests are reviewed by a parent or guardian before any order is confirmed."
- The only contact path on the site should be the request form.

## Pages included

- `index.html` - Home
- `gallery.html` - Gallery / Handmade Items
- `request.html` - Request an Item
- `about.html` - About Purrfectly Made
- `faq.html` - FAQ
- `care.html` - Care Tips
- `thank-you.html` - Request confirmation
- `404.html` - Not found page

## File structure

```text
.
├── 404.html
├── about.html
├── care.html
├── faq.html
├── gallery.html
├── index.html
├── request.html
├── thank-you.html
├── assets/
│   ├── css/styles.css
│   ├── js/main.js
│   └── images/
├── sitemap.xml
├── robots.txt
├── humans.txt
├── manifest.webmanifest
├── README.md
└── AGENTS.md
```

## Form setup

The request form currently performs client-side validation and then opens `thank-you.html`. It does not store form data in browser storage.

To connect submissions later:

1. Choose a form service such as Formspree, Netlify Forms, EmailJS, or a custom endpoint.
2. Update the submit handler in `assets/js/main.js` where the integration comment appears.
3. Keep the honeypot field named `companyWebsite`.
4. Keep server-side validation aligned with the safety rules above.
5. Keep the parent/guardian review reminder in the success message.

## Replacing images

Brand and icon assets live in `assets/images/`. Replace files with the same names to avoid editing markup, or update the `src`, `width`, `height`, and `alt` attributes in each page if filenames or dimensions change.

Key assets:

- `logo-purrfectly-made.png`
- `logo-purrfectly-made-192.png`
- `logo-purrfectly-made-520.png`
- `icon-192.png`
- `icon-512.png`
- `purrfectly-made-banner.png`
- `purrfectly-made-banner-1280.png`
- `purrfectly-made-og.png`
- `icon-*.png`

## SEO metadata

Each page has a unique title, meta description, canonical URL, Open Graph tags, Twitter card tags, and local wording for handmade gifts in Lethbridge AB.

Before launch, confirm the live domain. If the domain is not `https://purrfectlymade.ca/`, update:

- Canonical URLs in each HTML file
- Open Graph image URLs in each HTML file
- Structured data URLs in each HTML file
- `sitemap.xml`
- `robots.txt`
- `manifest.webmanifest` start URL if needed

## Run locally

No build tooling is required. Open `index.html` directly in a browser, or run a small static server from this folder:

```powershell
python -m http.server 8123
```

Then visit `http://127.0.0.1:8123/`.

## Build

There is no build step. The site is plain HTML, CSS, JavaScript, and image assets.

## Deploy

Any static host can serve the site.

- GitHub Pages: publish the repository root, or the selected branch root, as the Pages source.
- Cloudflare Pages: connect the repository and leave the build command blank.
- Netlify: drag and drop the folder, or connect the repository with no build command.
- Other static hosting: upload the full folder contents, including `assets/`, `sitemap.xml`, and `robots.txt`.

## Performance and accessibility targets

- Lighthouse Performance target: 95+
- Lighthouse Accessibility target: 100
- Lighthouse SEO target: 100

The site uses semantic HTML, a skip link, visible focus states, labelled form fields, accessible error text, reduced motion support, explicit image dimensions, optimized logo derivatives, and minimal JavaScript.

## Future improvement ideas

- Add real item photography once safe and approved.
- Add a connected form provider with server-side spam filtering.
- Add a privacy page if a production form service is connected.
- Add more care details by material once final products are known.
- Run Lighthouse against the production URL after deployment.

## Maintenance Notes

- Mobile hero banner now uses full-image containment so the cats, logo, and product artwork are not cropped.
- Mobile layout was reviewed for hero spacing, typography, and tap targets.
- Sticky nav, gallery/care card layout, footer behavior, Facebook link attributes, and safety rules were rechecked.
- Files changed in this pass: `assets/css/styles.css` and `README.md`.
