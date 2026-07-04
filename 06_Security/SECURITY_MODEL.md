# Security Model

**Project:** PurrfectlyMade Website  
**Client:** Isabella Pinzarrone  
**Business or department:** [MISSING: business or department]  
**Project type:** Static website  
**Target platform:** Web browser, tablet, mobile  
**Status:** Ready for Codex

## User roles

- Customer
- Browses the website, views available products, reads product details, and submits a request form for purchases or custom orders.
- Business Owner
- Provides product information, reviews customer requests, responds to inquiries, updates product availability, and manages the overall direction of the brand.
- Site Administrator
- Maintains the website content, updates images and text, checks form submissions, manages basic SEO, and ensures the site continues to work properly.
- Role descriptions
- Customers need a simple and clear browsing experience. They should be able to understand what products are available, see product examples, and submit a request without needing an account.
- The Business Owner needs the website to be easy to update and simple to manage. The site should support a small handmade business without requiring complex ecommerce tools.
- The Site Administrator needs access to update content, review form setup, fix technical issues, and keep the website aligned with the approved brand style.

## Permission rules

- The public website should be view-only for visitors. Visitors can browse products, read page content, and submit a request form.
- Only approved administrators should be able to update website content, product listings, images, form settings, SEO settings, and published pages.
- Customer request information should only be accessible to the approved parent, guardian, or site administrator.
- The young client can help choose products, names, descriptions, and images, but private customer information should be reviewed and handled by an approved adult.

## Authentication expectations

- No public login is required for this phase.
- Customers should not need an account to browse products or submit a request.
- Admin access should happen through approved tools only, such as the code repository, hosting provider, form provider, or a future content management tool.

## Authorization expectations

- Only approved administrators can publish or change website content.
- Only approved parent, guardian, or administrator accounts can access form submissions.
- The young client should not be responsible for managing private customer data alone.
- Any future admin panel should use separate accounts, strong passwords, and role-based permissions.

## Sensitive data notes

- Sensitive data may include:
- Customer name.
- Customer email address.
- Customer message or custom order details.
- Requested dates or gift details.
- Private business email used for receiving requests.
- Any personal details connected to the young client.
- Handling expectations:
- Do not display customer form submissions publicly.
- Do not publish the young client’s full personal details, personal phone number, school information, home address, schedule, or private social accounts.
- Use a parent, guardian, or approved business email for all form submissions.
- Only collect information needed to respond to a product or custom order request.
- Do not store customer information in public website files.
- Delete or archive old requests when they are no longer needed.

## Data protection expectations

- The website should use HTTPS.
- Form submissions should be sent through a secure form provider.
- Secrets, API keys, and private email settings must not be stored in public code.
- Customer information should not appear in public files, browser-visible data, or website source code.
- Admin accounts should use strong passwords and two-factor authentication where available.

## Audit and logging needs

- Basic auditability should include:
- Website changes tracked through version control.
- Deployment history tracked through the hosting provider.
- Form submission emails retained only as needed.
- Admin changes reviewed before publishing when possible.
- No advanced audit dashboard is required for the initial launch.

## Compliance notes

- The website should follow basic privacy and child safety expectations.
- A simple privacy page should explain what information the form collects, why it is collected, and who receives it.
- The site should avoid collecting unnecessary personal information.
- Marketing emails should not be sent unless proper consent is collected in a future phase.
- Accessibility should be checked against basic WCAG-friendly practices, including readable contrast, clear labels, keyboard navigation, alt text, and mobile usability.

## Risks

- Risk:
- The site may expose too much personal information about a young client.
- Mitigation:
- Keep the about content general, parent-supported, and brand-focused. Do not publish private personal details.
- Risk:
- Customers may expect instant checkout or online payment.
- Mitigation:
- Clearly state that the form is a request only and that availability, pricing, and custom details will be confirmed after review.
- Risk:
- A customer may submit incomplete or unclear request details.
- Mitigation:
- Use clear required fields and optional detail fields for colour, quantity, item name, and needed-by date.
- Risk:
- The request form may fail or send to the wrong recipient.
- Mitigation:
- Test the form before launch. Show a clear success message. Provide Facebook messaging as a backup contact method.
- Risk:
- Product listings may become outdated.
- Mitigation:
- Use simple availability statuses such as Available, Made to Order, Sold, Coming Soon, and Hidden.
- Risk:
- The design may feel too childish or cluttered.
- Mitigation:
- Use the approved logo, soft colours, clean spacing, readable fonts, and limited decorative graphics.
- Risk:
- Customer data may be stored longer than needed.
- Mitigation:
- Review old requests regularly and delete or archive messages when no longer needed.
- Risk:
- Images may slow down the website.
- Mitigation:
- Compress images, use proper image sizes, add alt text, and test performance before launch.
- Risk:
- The young client may need help maintaining the site.
- Mitigation:
- Use a simple product update process and keep admin work under parent or site administrator support.

## Assumptions

- The website will be a simple product showcase and request-based site for the first phase.
- The site will not include full ecommerce checkout, payment processing, customer accounts, or inventory automation at launch.
- A parent, guardian, or site administrator will manage customer communication.
- Approved logo and icon assets are available for use.
- Product photos, product names, descriptions, and pricing will be supplied or approved before launch.
- Facebook messaging is approved as a secondary contact method.
- A favicon and Open Graph image are required.
- The site must be mobile-friendly, polished, and safe for a young handmade business owner.

## Blocked assumptions

- Do not assume authentication, backend services, external AI calls, or import features without explicit approval.

## Missing security decisions

No unresolved client review items are currently identified.