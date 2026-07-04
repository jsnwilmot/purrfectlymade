# Acceptance Criteria

**Project:** PurrfectlyMade Website  
**Client:** Isabella Pinzarrone  
**Business or department:** [MISSING: business or department]  
**Project type:** Static website  
**Target platform:** Web browser, tablet, mobile  
**Status:** Ready for Codex

## Project-level acceptance criteria

- The project is complete when the website includes a polished homepage, product showcase area, about section, custom order or request form, contact information, and basic SEO setup. The site must work well on desktop and mobile, load quickly, have clear navigation, and match the Purrfectly Made brand style. Customers should be able to understand what is being sold, view product examples, and submit a request without confusion.

## Feature-level acceptance criteria

- The feature is successful when:
- The approved logo appears clearly on the site.
- The homepage explains what Purrfectly Made sells.
- Products can be added, edited, hidden, or removed through a simple process.
- Customers can submit a request form successfully.
- Form submissions go to the approved recipient.
- Facebook messaging is available as a contact option.
- No personal phone number is shown.
- The site works on mobile, tablet, and desktop.
- Images load correctly and include useful alt text.
- The design feels cute, polished, handmade, and boutique.
- The site has favicon and Open Graph image support.

## Workflow acceptance criteria

- Customer can clearly browse handmade products and find the request path without confusion.
- Workflow name
- Customer Submits Purchase or Custom Order Request
- Trigger
- Customer clicks the request form button or opens the Contact or Custom Order page.
- Steps
- Customer opens the request form.
- Customer enters their name and email.
- Customer selects or describes the item they are interested in.
- Customer adds custom details, colour preferences, quantity, and needed-by date if relevant.
- Customer confirms the request is not an automatic purchase.
- Customer submits the form.
- Website shows a success message.
- Request is sent to the approved parent, guardian, or business email.
- Inputs
- Customer name.
- Customer email.
- Item or category of interest.
- Custom request details.
- Optional colour, quantity, and date notes.
- Consent checkbox.
- Outputs
- Submitted request.
- Email notification to approved recipient.
- On-screen confirmation message.
- User roles involved
- Customer.
- Parent or Site Administrator.
- Decision points
- Customer decides whether to request a listed item or ask for a custom item.
- Parent or administrator decides whether the request can be accepted.
- Notifications
- Approved recipient receives an email when the form is submitted.
- Failure or exception handling
- If required fields are missing, the form should show a clear error message.
- If the form service fails, the customer should see a message asking them to try again or use the Facebook messaging option.
- Expected outcome
- Customer submits a clear request and receives confirmation that the message was sent.
- Workflow name
- Parent or Administrator Reviews Request
- Trigger
- A new request form submission is received.
- Steps
- Parent or administrator receives the request by email.
- They review the customer details and requested item.
- They confirm whether the item is available or possible to make.
- They respond to the customer using the approved contact method.
- They update the product status if needed.
- Inputs
- Request email.
- Product availability.
- Custom order details.
- Customer contact information.
- Outputs
- Customer response.
- Updated product status if needed.
- User roles involved
- Parent or Site Administrator.
- Business Owner.
- Customer.
- Decision points
- Request can be accepted.
- Request needs more information.
- Request cannot be completed.
- Item needs to be marked sold, unavailable, or made to order.
- Notifications
- Customer is contacted after the request is reviewed.
- Failure or exception handling
- If the customer email is invalid, the request cannot be completed by email. Facebook messaging may be used only if the customer provided or used that contact path.
- Expected outcome
- Each customer request is reviewed safely by an approved adult or administrator before any order discussion continues.
- Workflow name
- Product Item Is Added to the Website
- Trigger
- The business owner or family support has a new handmade item ready to display.
- Steps
- Product photo is selected.
- Product name is written.
- Product category is selected.
- Short description is added.
- Availability status is set.
- Price is added if pricing is approved.
- Custom options are added if relevant.
- Image alt text is added.
- Product is saved and published.
- Product is checked on mobile and desktop.
- Inputs
- Product image.
- Product name.
- Category.
- Description.
- Availability.
- Optional price.
- Optional custom notes.
- Outputs
- New product appears on the website.
- User roles involved
- Business Owner.
- Parent or Site Administrator.
- Decision points
- Product is approved for public display.
- Product needs better photo or description before publishing.
- Product should be featured on the homepage.
- Notifications
- None required.
- Failure or exception handling
- If the image is missing or poor quality, the product should not be published until a better image is available.
- Expected outcome
- A new product can be added without rebuilding the whole website or editing complex code.
- Workflow name
- Product Item Is Updated
- Trigger
- A product detail changes, such as availability, description, price, photo, or custom option.
- Steps
- Administrator opens the product record or product content file.
- Required changes are made.
- Product image or alt text is updated if needed.
- Changes are saved.
- Updated product is checked on the website.
- Inputs
- Existing product record.
- Updated product details.
- Outputs
- Updated product information appears on the website.
- User roles involved
- Parent or Site Administrator.
- Business Owner.
- Decision points
- Product remains visible.
- Product should be marked sold.
- Product should be hidden.
- Product should be moved to seasonal or featured section.
- Notifications
- None required.
- Failure or exception handling
- If the update causes a display issue, the previous version should be restored or corrected before launch.
- Expected outcome
- Product information stays accurate and current.
- Workflow name
- Product Item Is Hidden or Removed
- Trigger
- An item sells, becomes unavailable, or should no longer be shown.
- Steps
- Administrator finds the product record.
- Availability is changed to Sold, Hidden, or Unavailable.
- Product is removed from public product cards if needed.
- Website is checked to confirm the item no longer appears as available.
- Inputs
- Product ID or product name.
- Updated availability status.
- Outputs
- Product is no longer shown as available.
- User roles involved
- Parent or Site Administrator.
- Business Owner.
- Decision points
- Hide the product completely.
- Keep the product visible as an example.
- Mark it as Sold.
- Mark it as Made to Order.
- Notifications
- None required.
- Failure or exception handling
- If the product still appears as available, the page or product list must be corrected before customers can request it.
- Expected outcome
- Customers do not request items that are sold or unavailable unless made-to-order is allowed.
- Workflow name
- Customer Uses Facebook Messaging
- Trigger
- Customer clicks the Facebook message link.
- Steps
- Customer clicks Facebook contact button.
- Customer is taken to the approved Facebook page or Messenger path.
- Customer sends a message.
- Parent or approved administrator reviews and replies.
- Inputs
- Approved Facebook page or Messenger link.
- Outputs
- Customer message is sent through Facebook.
- User roles involved
- Customer.
- Parent or Site Administrator.
- Decision points
- Customer chooses Facebook instead of the website form.
- Parent or administrator decides how to respond.
- Notifications
- Facebook sends the message notification through its normal system.
- Failure or exception handling
- If the Facebook link is unavailable, the website request form remains the main contact method.
- Expected outcome
- Customer has a safe secondary contact option without a public phone number.
- Workflow name
- Seasonal or Featured Product Update
- Trigger
- A new seasonal collection, holiday item, market item, or featured product is ready.
- Steps
- Business Owner selects items to feature.
- Administrator updates the homepage or seasonal section.
- Seasonal wording and product images are added.
- Call-to-action links to the request form.
- Update is checked on mobile and desktop.
- Inputs
- Seasonal product photos.
- Product names.
- Short descriptions.
- Availability.
- Season or event name.
- Outputs
- Homepage or seasonal section highlights current products.
- User roles involved
- Business Owner.
- Parent or Site Administrator.
- Decision points
- Feature on homepage.
- Add to seasonal page.
- Remove old seasonal items.
- Keep old items hidden for future reuse.
- Notifications
- None required.
- Failure or exception handling
- If seasonal content becomes outdated, it should be removed or replaced.
- Expected outcome
- The website can stay fresh for holidays, markets, and new handmade items.
- Workflow name
- Form Error or Failed Submission Handling
- Trigger
- Customer submits a form with missing information or the form service does not send correctly.
- Steps
- Customer attempts to submit the form.
- Website checks required fields.
- Missing fields are highlighted.
- Customer corrects the form.
- Customer submits again.
- If the form service fails, website shows an error message.
- Customer is directed to use Facebook messaging if needed.
- Inputs
- Customer form data.
- Required field validation.
- Form service response.
- Outputs
- Successful submission or clear error message.
- User roles involved
- Customer.
- Parent or Site Administrator.
- Decision points
- Form submission succeeds.
- Customer must correct missing fields.
- Customer uses Facebook messaging as backup.
- Notifications
- Approved recipient is notified only if the form submission succeeds.
- Failure or exception handling
- If submission fails, no success message should show. The customer should receive clear next steps.
- Expected outcome
- Customers understand what went wrong and have a backup contact option.

## Data acceptance criteria

- [MISSING: required data fields]
- Product Catalog:

Product ID is the unique key.

Product name is used for display.

Product category is used for filtering and grouping.

Product Categories:

Category ID is the unique key.

Category name is used for display and navigation.

Custom Order Requests:

Request ID is the unique key.

Customer email is used for reply and follow-up.

Submission date is used for tracking.

Website Pages:

Page slug is the unique key for each page URL.

Approved Assets:

File name or Asset ID is the unique key.

Testimonials:

Testimonial ID is the unique key.

Site Settings:

Business name and form recipient email are key configuration values.
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

## Security acceptance criteria

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

## Accessibility acceptance criteria

- The website should be easy to use on mobile, tablet, and desktop. Text should be readable, buttons and links should be clear, and navigation should be simple. Product images should include descriptive alt text where possible. Form fields should have clear labels, required fields should be easy to understand, and the site should support keyboard navigation and screen reader basics.

## Testing acceptance criteria

- Unit tests cover validation and generation logic.
- Integration tests cover active-project persistence and workflow behavior.
- Manual checks cover accessibility and export reliability.

## Export or deployment acceptance criteria

- Generated package contains all 19 required files.
- ZIP structure matches approved folders.
- Missing markers remain visible in exported markdown.

## Client review acceptance

- [x] Project type confirmed
- [x] Scope reviewed
- [x] Required gaps resolved
- [x] Branding confirmed if required
- [x] Screens or pages confirmed
- [x] Data model confirmed
- [x] Workflows confirmed
- [x] Security expectations confirmed
- [x] Acceptance criteria reviewed
- [x] Client questions resolved or not applicable
- [x] Draft package reviewed
- [x] Codex instructions ready

## Readiness blockers

- None.