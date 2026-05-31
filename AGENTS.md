# AGENTS.md

## Project

Build the public web presence for **Purrfectly Made**, a local kid-owned handmade craft brand in the Lethbridge, Alberta area.

This site is a showcase and request funnel. It is **not** an ecommerce store.

## Primary goal

Create a polished, mobile-first website that helps visitors:

- Understand what Purrfectly Made makes
- Browse handmade item categories
- Request an item through a safe web form
- Learn care tips for handmade products
- Trust that requests are reviewed by a parent or guardian

## Brand summary

Purrfectly Made sells handmade beaded crafts and small gift items, including:

- Bracelets
- Keychains
- Earrings
- Resin pieces
- 3D printed items
- Seasonal handmade gifts
- Personalized craft-style items

The brand should feel:

- Cute but mature
- Boutique and polished
- Handmade and personal
- Feminine but not overly pink
- Fun and creative
- Clean enough for Etsy, Instagram, packaging, and local markets
- Local to Lethbridge, AB
- Safe and trustworthy for families

## Safety requirements

This project involves a child-owned business. Safety is mandatory.

Do not include:

- The child’s name
- The child’s photo
- A Meet Me section
- Personal biography details
- Exact address
- School name
- Age
- Schedule
- Phone number
- Public email address
- Payment collection
- Any personal child information

Use safe wording such as:

> Purrfectly Made is a local kid-owned handmade craft business in the Lethbridge, Alberta area.

All order/request language must make clear that requests are reviewed by a parent or guardian before anything is confirmed.

Preferred wording:

> All requests are reviewed by a parent or guardian before any order is confirmed.

The only contact method must be the web form.

## Site type

This is not a store.

Do not build:

- Cart
- Checkout
- Payment flow
- Customer accounts
- Live inventory
- Direct purchase buttons
- Public phone number
- Public email address

Use calls to action like:

- Request an Item
- Request Similar Item
- View Handmade Items
- Send a Request

## Required pages

Create these pages or equivalent routes:

1. `index.html`, Home
2. `gallery.html`, Gallery / Handmade Items
3. `request.html`, Request an Item
4. `about.html`, About Purrfectly Made
5. `faq.html`, FAQ
6. `care.html`, Care Tips
7. `thank-you.html`, Form confirmation
8. `404.html`, Not found page

## Required files

Include:

- `index.html`
- `gallery.html`
- `request.html`
- `about.html`
- `faq.html`
- `care.html`
- `thank-you.html`
- `404.html`
- `assets/css/styles.css`
- `assets/js/main.js`
- `assets/images/`
- `sitemap.xml`
- `robots.txt`
- `humans.txt`
- `manifest.webmanifest`
- `README.md`
- `AGENTS.md`

## Approved visual direction

Use the approved Purrfectly Made logo and Facebook banner as the main design reference.

Use this style:

- Soft cream background
- Warm blush
- Dusty rose
- Muted peach
- Soft taupe
- Warm brown
- Gentle gold accents
- Optional sage green or muted lavender
- Rounded cards
- Soft shadows
- Light stitched details
- Small hearts, paw accents, bows, beads, charms, and craft elements
- Clean boutique layout
- No clutter

Avoid:

- Childish sticker style
- Rainbow bubble letters
- Toy-like mascots
- Cheap craft fair layout
- Overly cartoonish cats
- Messy fonts
- Too many colours at once
- Generic template look

## Cat-inspired design

Include two tasteful cat-inspired accents based on:

- Orange tabby cat
- White and grey tabby cat

Cats should feel polished and boutique, not babyish.

Allowed animation ideas:

- Subtle blink
- Gentle float
- Tiny sparkle fade
- Slow paw print drift
- Small hover movement on product cards

Animation rules:

- Use CSS where possible
- Keep animation lightweight
- Do not hurt performance
- Respect `prefers-reduced-motion`
- Avoid autoplay video
- Avoid heavy GIFs unless optimized

## Typography

Use readable type.

Suggested direction:

- Elegant script-style treatment for the brand name only
- Clean rounded serif or sans-serif for headings and body text
- Large readable mobile text
- Strong contrast
- Clear buttons

Avoid:

- Bubble letters
- Messy handwritten fonts
- School-project fonts
- Thin unreadable text
- Fonts that hurt accessibility

## Mobile-first requirements

Build mobile-first.

The site must work well on:

- Small phones
- Large phones
- Tablets
- Desktop
- Wide desktop

Layout rules:

- Use simple stacked sections on mobile
- Use cards and grids only when space allows
- Keep buttons large enough for touch
- Keep forms easy to complete on mobile
- Avoid horizontal scrolling
- Avoid fixed elements that block content
- Keep hero content readable on small screens

## Accessibility requirements

Target Lighthouse Accessibility 100.

Implement:

- Semantic HTML
- `header`, `nav`, `main`, `section`, `footer`
- Skip link
- Proper heading order
- Keyboard navigation
- Visible focus states
- Form labels
- Accessible validation messages
- `aria-live` for form status or errors when needed
- Descriptive alt text
- Sufficient colour contrast
- Reduced motion support
- No text baked into images when important for SEO or accessibility
- No icon-only buttons without labels

## Performance requirements

Target Lighthouse Performance 95+.

Implement:

- Optimized image sizes
- Lazy loading for non-critical images
- Explicit width and height on images where possible
- Minimal JavaScript
- No heavy frameworks unless the project already uses one
- No unnecessary dependencies
- No layout shift
- Compressed assets where possible
- Modern image formats where useful
- CSS animations instead of video or large GIFs when practical

## SEO requirements

Target Lighthouse SEO 100.

Every page needs:

- Unique title tag
- Unique meta description
- Canonical URL
- Open Graph title, description, image, and type
- Twitter card tags
- Clear internal links
- Descriptive headings
- Local SEO wording where natural

Use local SEO terms naturally:

- Purrfectly Made
- handmade gifts Lethbridge
- handmade bracelets Lethbridge
- handmade keychains Lethbridge
- kid-owned business Lethbridge
- handmade crafts Alberta
- local handmade gifts in Lethbridge AB

Structured data:

- Add `Organization` or `LocalBusiness`
- Add `WebSite`
- Add `FAQPage` on the FAQ page
- Add `BreadcrumbList` where appropriate

Schema safety:

- Do not include a street address
- Do not include phone
- Do not include email
- Use `areaServed`: `Lethbridge, Alberta, Canada`
- Do not include child personal details

## Home page requirements

The home page must include:

- Hero section
- Brand name
- Short tagline
- CTA button: `Request an Item`
- Secondary CTA: `View Handmade Items`
- Short intro explaining what Purrfectly Made makes
- Local trust section
- Parent/guardian review notice
- Featured category cards

Suggested tagline:

> Handmade little gifts, made with care in Lethbridge, AB.

Suggested safe intro:

> Purrfectly Made is a local kid-owned handmade craft business in the Lethbridge, Alberta area. We create small handmade gifts, beaded pieces, keychains, resin items, 3D printed trinkets, and seasonal designs.

## Gallery page requirements

The gallery page must showcase item categories, not sell live inventory.

Include sections/cards for:

- Beaded bracelets
- Keychains
- Earrings
- Resin pieces
- 3D printed trinkets
- Seasonal gifts
- Personalized items

Each category should include:

- Short description
- Placeholder image or local image path
- `Request Similar Item` button

Add wording:

> Availability may change because each item is handmade.

## Request page requirements

Create a safe request form.

Fields:

- Parent/guardian name
- Contact email
- Item type requested
- Preferred colours
- Short message
- Pickup or delivery preference, optional
- Consent checkbox

Consent text:

> I understand this request will be reviewed by a parent or guardian before anything is confirmed.

Do not ask for:

- Child information
- School
- Exact address
- Phone number
- Payment details
- Birthdate
- Sensitive personal information

Form handling:

- Do not store form data in `localStorage`
- Use client-side validation
- Use accessible error messages
- Include a hidden honeypot field
- Route successful submissions to `thank-you.html` or show a success state
- Add code comments showing where to connect Formspree, Netlify Forms, EmailJS, or a custom endpoint later

## About page requirements

Do not create a child biography.

Use brand-focused wording only.

Suggested copy:

> Purrfectly Made is a local kid-owned handmade craft business in the Lethbridge, Alberta area. Each piece is made with care, creativity, and a love for small thoughtful gifts.

Also mention:

- Requests are reviewed by a parent or guardian
- Items are handmade
- Colours, sizes, and availability may vary
- The site is a showcase, not a checkout store

## FAQ page requirements

Include these questions:

- Can I buy directly from the website?
- How do I request an item?
- Are custom colours available?
- Are items always in stock?
- Who reviews requests?
- Where is Purrfectly Made located?
- Do you ship?
- Are items handmade?
- Are small pieces safe for young children?

Answers must be safe, clear, and family-friendly.

## Care tips page requirements

Include simple care notes for:

- Beaded bracelets
- Keychains
- Resin pieces
- Earrings
- 3D printed items
- Handmade gifts

Care content should be short and practical.

## Thank-you page requirements

Include:

- Friendly confirmation message
- Reminder that a parent or guardian will review the request
- Link back to gallery
- Link back to home

Do not imply the request is confirmed as an order.

## 404 page requirements

Include:

- Polished branded message
- Link to home
- Link to gallery
- Link to request form

## README.md requirements

The README must document:

- Project name
- Purpose
- Safety rules
- Pages included
- File structure
- Form setup instructions
- How to replace placeholder images
- How to update SEO metadata
- How to run locally
- How to build, if build tooling is used
- How to deploy to GitHub Pages, Cloudflare Pages, Netlify, or static hosting
- Performance and accessibility targets
- Future improvement ideas

## Code quality rules

Write clean, maintainable code.

Use:

- Clear file names
- Clear class names
- Reusable CSS variables
- Mobile-first CSS
- Comments only where useful
- No unused files
- No broken links
- No console errors
- No hardcoded unsafe personal details

Before finishing, check:

- No phone number appears anywhere
- No public email appears anywhere
- No child name appears anywhere
- No child photo is included
- No exact address appears anywhere
- No school reference appears anywhere
- No payment flow exists
- No checkout/cart exists
- Form does not store data locally
- All pages have metadata
- All pages are linked
- Sitemap includes all public pages
- Robots file is valid
- 404 page exists
- README exists
- AGENTS.md exists

## Testing checklist

Run available checks:

- `npm install`, if package files exist
- `npm run lint`, if available
- `npm run build`, if available
- Check all pages in browser
- Check mobile layout
- Check desktop layout
- Check keyboard navigation
- Check form validation
- Check broken links
- Check image alt text
- Check reduced motion
- Check Lighthouse-style performance, accessibility, best practices, and SEO

## Expected final response from Codex

When finished, return:

1. Summary of what was built
2. File list
3. Setup notes
4. Form integration steps still needed
5. Testing results
6. Any known issues
7. Suggested commit name

Suggested commit name:

`Build Purrfectly Made web presence`
