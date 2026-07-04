# Client Requirements

**Project:** PurrfectlyMade Website  
**Client:** Isabella Pinzarrone  
**Business or department:** [MISSING: business or department]  
**Project type:** Static website  
**Target platform:** Web browser, tablet, mobile  
**Status:** Ready for Codex

## Client details

Isabella Pinzarrone

## Business or department

[MISSING: business or department]

## Problem statement

Right now, there is no dedicated website where customers can view the handmade products in one organized place. Product interest may depend on social media posts, messages, or word of mouth, which can make it harder for customers to see what is available or request an item clearly. The website will create a central place for product photos, descriptions, pricing details if available, and customer request submissions.

## User needs

- The target users are customers who want to view and request handmade craft items, including jewelry, bracelets, keychains, resin pieces, 3D printed items, seasonal gifts, and personalized items. The site will also be used by the business owner and family support members who help manage products, requests, and customer communication.

## Required features

- The initial website must include:
- Homepage with brand introduction and featured product highlights.
- Product showcase where visitors can view handmade items such as bracelets, jewelry, keychains, resin pieces, 3D printed items, seasonal gifts, and custom crafts.
- Simple product management structure so items can be added, edited, hidden, or removed easily.
- Request form for customers to ask about buying an item or placing a custom order.
- Facebook messaging link as an approved contact option.
- About section that explains Purrfectly Made in a safe, polished, family-supported way.
- Gallery or product photo sections for approved product images.
- Basic SEO setup for handmade crafts, gifts, jewelry, and local handmade items.
- Mobile-friendly responsive layout.
- Favicon and Open Graph social sharing image.
- Use of the approved logo and provided graphic assets.

## Workflows

- The website must support these main workflows:
- Customer browses products
- Customer submits a purchase or custom order request
- Parent or administrator reviews a request
- Product item is added to the website
- Product item is updated
- Product item is hidden or removed
- Customer uses Facebook messaging
- Seasonal or featured product update
- Form error or failed submission handling

## Screens

- Expected pages or views:
- Homepage
- Products or Shop page
- Custom Orders page or section
- About page
- Contact or Request Form page
- Seasonal Collection page or section, optional for launch
- Privacy page
- 404 page

## Data requirements

- The website must store or manage these records:

Product Catalog

Product Categories

Custom Order Requests

Customer Inquiries

Website Pages

Approved Assets

Testimonials, optional future collection

Site Settings
- Product Catalog

Product ID

Product name

Product category

Short description

Full description, optional

Price, optional

Availability status

Customizable, yes or no

Custom options, optional

Product image

Image alt text

Featured item, yes or no

Seasonal item, yes or no

Display order

Created date

Updated date

Product Categories

Category ID

Category name

Category description

Category image or icon

Display order

Active, yes or no

Custom Order Requests

Request ID

Customer name

Customer email

Preferred contact method

Product or category interested in

Custom request details

Colour preferences, optional

Personalization notes, optional

Quantity, optional

Needed by date, optional

Customer message

Consent confirmation

Submission date

Request status

Customer Inquiries

Inquiry ID

Customer name

Customer email

Message

Inquiry type

Submission date

Status

Website Pages

Page ID

Page title

Page slug

Page description

SEO title

SEO description

Page content

Active, yes or no

Last updated date

Approved Assets

Asset ID

Asset name

File name

Asset type

Usage purpose

Alt text

Approved for use, yes or no

Testimonials

Testimonial ID

Customer display name

Testimonial text

Permission received, yes or no

Date received

Approved for publishing, yes or no

Site Settings

Business name

Primary contact email

Facebook link

Form recipient email

SEO location, optional

Open Graph image

Favicon
- Product ID, Category ID, Request ID, Inquiry ID, Page ID, Asset ID, Testimonial ID:
Text or generated unique ID.

Product name, category name, page title, customer name:
Text.

Descriptions, messages, notes, testimonial text:
Long text.

Price:
Currency or text, depending on whether prices are fixed or request-based.

Availability status:
Choice field, such as Available, Made to Order, Sold, Coming Soon, Hidden.

Customizable, featured item, seasonal item, active, approved:
Yes or no.

Product image, category image, Open Graph image, favicon:
Image file path or asset reference.

Display order:
Number.

Submission date, created date, updated date:
Date and time.

Customer email:
Email field.

Needed by date:
Date field.

Required fields

Product Catalog required fields:

Product ID

Product name

Product category

Short description

Availability status

Product image

Image alt text

Display order

Product Categories required fields:

Category ID

Category name

Display order

Active status

Custom Order Requests required fields:

Customer name

Customer email

Product or request details

Consent confirmation

Submission date

Website Pages required fields:

Page title

Page slug

SEO title

SEO description

Page content

Approved Assets required fields:

Asset name

File name

Asset type

Usage purpose

Approved for use status
- [MISSING: required data fields]

## Security requirements

- The public website should be view-only for visitors. Visitors can browse products, read page content, and submit a request form.

Only approved administrators should be able to update website content, product listings, images, form settings, SEO settings, and published pages.

Customer request information should only be accessible to the approved parent, guardian, or site administrator.

The young client can help choose products, names, descriptions, and images, but private customer information should be reviewed and handled by an approved adult.
- Sensitive data may include:

Customer name.

Customer email address.

Customer message or custom order details.

Requested dates or gift details.

Private business email used for receiving requests.

Any personal details connected to the young client.

Handling expectations:

Do not display customer form submissions publicly.

Do not publish the young client’s full personal details, personal phone number, school information, home address, schedule, or private social accounts.

Use a parent, guardian, or approved business email for all form submissions.

Only collect information needed to respond to a product or custom order request.

Do not store customer information in public website files.

Delete or archive old requests when they are no longer needed.
- The website should use HTTPS.

Form submissions should be sent through a secure form provider.

Secrets, API keys, and private email settings must not be stored in public code.

Customer information should not appear in public files, browser-visible data, or website source code.

Admin accounts should use strong passwords and two-factor authentication where available.

## Integrations

- Approved integrations may include:
- Website request form service, such as Web3Forms or similar.
- Facebook page or Facebook Messenger link.
- Email delivery to the approved parent, guardian, or business email.
- Google Search Console, if approved.
- Basic analytics, if approved.
- No payment processor, customer account system, or ecommerce checkout is included in the initial scope.

## Reports or dashboards

- No reporting dashboard is required for the initial launch.
- Optional future tracking may include Google Search Console and basic website analytics to understand visits, popular pages, and search performance.

## Branding notes

- The client has an approved logo that must be used as the main brand source. The website should match the logo style and provided graphics.
- The design should feel fun, custom, youthful, handmade, and creative, while still looking polished and trustworthy. The site should not look childish, messy, or like a school project.

## Project-type-specific requirements

- **Domain status:** owned
- **Hosting status:** Cloudflare
- **Service area:** Lethbridger AB
- **Website pages:** Homepage:
Introduces Purrfectly Made, shows the logo, explains the handmade craft focus, and highlights featured items.

Products or Shop:
Displays available handmade items and product categories.

Custom Orders:
Explains that customers can request custom colours, personalized pieces, or special gift items where available.

About:
Shares a short, safe brand story. It should explain that Purrfectly Made is a handmade craft brand supported by family, without sharing private personal details.

Contact or Request Form:
Lets customers ask about products, custom orders, and availability.

Privacy:
Explains basic handling of form submissions and customer contact information.

404:
Provides a simple branded error page with a link back to the homepage.
- **Services or products:** The site should explain these product categories:

Handmade bracelets

Jewelry

Keychains

Resin pieces

3D printed items

Seasonal handmade gifts

Personalized craft items

Small gift items

Custom colours or custom requests where available
- **Contact method:** The primary contact path is the website request form.  The secondary contact path is Facebook messaging.  No telephone number should be listed because the client is a young child. Customer communication should be managed through a parent, guardian, or approved business contact only.
- **SEO notes and keywords:** Priority SEO topics:

Purrfectly Made

Handmade crafts

Handmade gifts

Handmade bracelets

Custom bracelets

Handmade keychains

Resin crafts

3D printed gifts

Personalized gifts

Cute handmade gifts

Small handmade gifts

Seasonal handmade gifts

Handmade jewelry

Custom handmade items

Local handmade gifts

Local craft shop

Handmade gifts in Lethbridge, if location-based marketing is approved

Search intent:

People looking for handmade gifts

People looking for custom bracelets or keychains

People looking for small local gifts

People looking for personalized craft items

People looking for seasonal handmade items
- **Google Business Profile:** A Google Business Profile has not been created yet.  This can be considered later if the business is ready for local search visibility. Because the owner is young, profile setup should be managed by a parent or guardian and should avoid exposing personal contact information.
- **Testimonials:** No testimonials are approved yet.

Collection plan:
Add testimonials only after customers provide permission. Testimonials should use first name and last initial only, unless full name use is approved.
- **Website forms:** Request Form fields:

Customer name

Customer email

Preferred contact method

Product or item interested in

Custom request details

Colour or personalization notes, optional

Quantity, optional

Needed by date, optional

Message

Consent checkbox confirming the customer understands this is a request and not an automatic purchase

Recipient:
Approved parent, guardian, or business email.

Success behavior:
After submission, show a friendly thank-you message confirming the request was received and that someone will respond when available.
- **Images and content:** The site has approved logo and icon graphics available. Product photos and product descriptions may still need to be supplied.

Content gaps may include:

Final product category list

Product names

Product descriptions

Pricing, if prices will be shown

Availability status

Custom order rules

Care instructions

Approved contact email

Facebook page link
- **Brand status:** established
- **Logo status:** Approved logo file
- **Logo files:** Purrecftly_Logo.png
- **Primary colours:** Use colours based on the approved logo:

Soft cream, #FFF4E8

Warm blush, #F7B6B6

Dusty rose, #D98787

Muted peach, #F4A77C

Sage mint, #AFCBC0

Warm gold, #C8923A

Warm brown, #8A5A2B

Soft charcoal for readable text, #3F3935
- **Secondary colours:** Supporting colours:

Pale pink for soft backgrounds and accents.

Sage green for buttons, ribbons, dividers, and calm accent sections.

Gold for small decorative details only.

Warm brown for headings, outlines, and craft-inspired accents.

Cream or off-white for main backgrounds.
- **Font preferences:** Use fun but readable Google Fonts.  Recommended direction:  Brand-style headings: Pacifico, Elsie, or Playfair Display.  Supporting headings: Quicksand, Nunito, or Lora.  Body text: Nunito, Quicksand, or Poppins.  Avoid bubble fonts, messy handwriting fonts, hard-to-read script fonts, and overly childish lettering.
- **Brand tone:** The tone should feel fun, custom, youthful, handmade, and friendly.  The wording should be simple, warm, and clear. It should sound like a small handmade gift brand, not a large corporation. It should also feel safe, polished, and parent-supported.
- **Image style:** Images should feel fun, custom, youthful, handmade, soft, and giftable.

Use clean product photos, cute craft graphics, soft cream or blush backgrounds, and polished handmade details. Product images should be clear and not overly busy.
- **Icon style:** Use the provided soft illustrated icons when they fit the page content. Icons should feel handmade, cute, and polished. They should be used as accents, not clutter.
- **Reference sites:** Useful reference direction:

Etsy-style handmade shop pages

Small boutique gift websites

Clean craft brand websites

Instagram-ready handmade product layouts

Borrow:

Clear product cards

Soft backgrounds

Simple calls to action

Gift-focused wording

Clean category sections

Avoid:

Childish sticker layouts

Rainbow bubble lettering

Cluttered craft fair designs

Too many colours at once

Overly cartoonish mascots

Hard-to-read fonts

Generic template design
- **Brand restrictions:** Do not use a personal phone number.

Do not share the young client’s private personal details.

Do not make the brand look childish, messy, or cheap.

Do not use harsh neon colours.

Do not use cluttered layouts.

Do not stretch, recolour, or distort the approved logo.

Do not use too many fonts.

Do not make the site feel like a toy brand.
- **Favicon needed:** Yes. A favicon is required.  It should be created from the approved logo or a simplified icon, such as a paw, heart, cat detail, or craft charm.
- **Open Graph image needed:** Yes. A social sharing image is required.  It should use the approved logo, soft brand colours, and a clean handmade gift layout. It should be sized for social sharing and look good when shared on Facebook or messaging apps.
- **Social assets needed:** [MISSING: social assets needed]
- **Content source:** The business owner and family support will supply and approve product content, product photos, product names, pricing if used, custom order details, and final wording.

The site administrator will prepare the website copy and layout based on approved content.
- **Approved assets:** Approved assets include:

Purrecftly_Logo.png

icon_charm.png.png

icon_heart1.png.png

icon_heart2.png.png

icon_Kitty.png.png

icon_locket.png.png

icon_paw.png.png

icon_yarn.png.png

icon_brushes.png.png
- **Accessibility contrast notes:** Text must have strong contrast against soft pink, cream, sage, and peach backgrounds.

Gold should be used for decoration only, not small body text.

Script fonts should be used sparingly and should not be used for long paragraphs.

Buttons must be easy to read.

Form labels must be clear.

Required fields must be easy to identify.

The site should support keyboard navigation.

Images should include descriptive alt text.

Mobile text size must remain readable without zooming.
- **Website analytics:** Basic website analytics can be approved if privacy-friendly tracking is used.

Analytics should measure:

Page visits

Most viewed product categories

Traffic sources

Contact or request form clicks

Facebook message link clicks

Device type, such as mobile or desktop

Search performance through Google Search Console

Analytics should not collect unnecessary personal information. Form submissions and analytics should remain separate.
- **Legal pages:** The website should include these basic legal and trust pages for the initial launch:

Privacy Policy

Required.

Explains what information is collected through the request form, such as customer name, email address, product interest, and message details. It should explain that this information is used only to respond to product, purchase, or custom order requests.

Terms and Conditions

Recommended.

Explains that product requests are not automatic purchases. Availability, pricing, customization, timelines, and pickup or delivery details must be confirmed after the request is reviewed.

Accessibility Statement

Recommended.

States that the website is intended to be usable on desktop, tablet, and mobile, with readable text, clear navigation, labelled forms, alt text where possible, and basic keyboard support.

Cookie Notice

Optional.

Only needed if the website uses cookies, analytics, embedded third-party tools, or tracking services. If no tracking is used, a full cookie notice may not be needed.

Contact and Safety Notice

Recommended.

States that customer communication is handled through the website request form or approved Facebook messaging only. No personal phone number, private child contact details, school information, or home address should be published.

Refund, Custom Order, and Availability Notes

Optional for launch, but useful if prices or custom orders are shown.

Should explain that handmade items may vary slightly, custom requests are reviewed before approval, and availability can change.

Required legal page minimum for launch

Privacy Policy

Terms and Conditions

Accessibility Statement

Recommended supporting note

Add a short safety-friendly contact statement on the Contact page:

For safety and privacy, all requests are handled through this website form or the approved Purrfectly Made Facebook page. No phone orders are available at this time.

## Notifications

- none

## Automations

- Approved automations may include:
- Form submission sends an email notification to the approved recipient.
- Customer sees a success message after submitting the form.
- Basic spam protection is added to the form if supported.
- Sitemap and SEO metadata are included in the site build if applicable.

## Constraints

- The website should be simple, affordable, and easy to maintain. It should not require a full online checkout system at this stage. Sales requests should go through a contact or order request form. The design must look cute, polished, boutique, and professional, while still fitting a handmade craft brand. The site should be mobile-friendly, fast, accessible, and suitable for sharing on social media, business cards, packaging, and local market materials.

## Success criteria

- The project is complete when the website includes a polished homepage, product showcase area, about section, custom order or request form, contact information, and basic SEO setup. The site must work well on desktop and mobile, load quickly, have clear navigation, and match the Purrfectly Made brand style. Customers should be able to understand what is being sold, view product examples, and submit a request without confusion.

## Outstanding questions

No unresolved client review items are currently identified.