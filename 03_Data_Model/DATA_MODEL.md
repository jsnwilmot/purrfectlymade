# Data Model

**Project:** PurrfectlyMade Website  
**Client:** Isabella Pinzarrone  
**Business or department:** [MISSING: business or department]  
**Project type:** Static website  
**Target platform:** Web browser, tablet, mobile  
**Status:** Ready for Codex

## Data sources

- Approved project data sources include:
- Approved product photos supplied by the business owner or family support.
- Approved product names, descriptions, prices, and availability details.
- Approved brand assets, including the logo and craft icons.
- Website request form submissions from customers.
- Facebook page or Facebook messaging link, if approved.
- Website copy approved by the business owner and family support.
- No personal child contact information should be used as a public data source.

## Tables, lists, or collections

- The website must store or manage these records:
- Product Catalog
- Product Categories
- Custom Order Requests
- Customer Inquiries
- Website Pages
- Approved Assets
- Testimonials, optional future collection
- Site Settings

## Entities

- Key data entities include:
- Products
- Product Categories
- Custom Order Requests
- Customer Inquiries
- Website Pages
- Approved Assets
- Testimonials, future use only
- Site Settings

## Fields

- Product Catalog
- Product ID
- Product name
- Product category
- Short description
- Full description, optional
- Price, optional
- Availability status
- Customizable, yes or no
- Custom options, optional
- Product image
- Image alt text
- Featured item, yes or no
- Seasonal item, yes or no
- Display order
- Created date
- Updated date
- Product Categories
- Category ID
- Category name
- Category description
- Category image or icon
- Display order
- Active, yes or no
- Custom Order Requests
- Request ID
- Customer name
- Customer email
- Preferred contact method
- Product or category interested in
- Custom request details
- Colour preferences, optional
- Personalization notes, optional
- Quantity, optional
- Needed by date, optional
- Customer message
- Consent confirmation
- Submission date
- Request status
- Customer Inquiries
- Inquiry ID
- Customer name
- Customer email
- Message
- Inquiry type
- Submission date
- Status
- Website Pages
- Page ID
- Page title
- Page slug
- Page description
- SEO title
- SEO description
- Page content
- Active, yes or no
- Last updated date
- Approved Assets
- Asset ID
- Asset name
- File name
- Asset type
- Usage purpose
- Alt text
- Approved for use, yes or no
- Testimonials
- Testimonial ID
- Customer display name
- Testimonial text
- Permission received, yes or no
- Date received
- Approved for publishing, yes or no
- Site Settings
- Business name
- Primary contact email
- Facebook link
- Form recipient email
- SEO location, optional
- Open Graph image
- Favicon

## Field types

- Product ID, Category ID, Request ID, Inquiry ID, Page ID, Asset ID, Testimonial ID:
- Text or generated unique ID.
- Product name, category name, page title, customer name:
- Text.
- Descriptions, messages, notes, testimonial text:
- Long text.
- Price:
- Currency or text, depending on whether prices are fixed or request-based.
- Availability status:
- Choice field, such as Available, Made to Order, Sold, Coming Soon, Hidden.
- Customizable, featured item, seasonal item, active, approved:
- Yes or no.
- Product image, category image, Open Graph image, favicon:
- Image file path or asset reference.
- Display order:
- Number.
- Submission date, created date, updated date:
- Date and time.
- Customer email:
- Email field.
- Needed by date:
- Date field.
- Required fields
- Product Catalog required fields:
- Product ID
- Product name
- Product category
- Short description
- Availability status
- Product image
- Image alt text
- Display order
- Product Categories required fields:
- Category ID
- Category name
- Display order
- Active status
- Custom Order Requests required fields:
- Customer name
- Customer email
- Product or request details
- Consent confirmation
- Submission date
- Website Pages required fields:
- Page title
- Page slug
- SEO title
- SEO description
- Page content
- Approved Assets required fields:
- Asset name
- File name
- Asset type
- Usage purpose
- Approved for use status

## Required fields

- [MISSING: required data fields]

## Relationships

- Each product belongs to one product category.
- Each custom order request may relate to one product, one category, or a general custom request.
- Each product image should relate to an approved asset.
- Each website page may use one or more approved assets.
- Testimonials are separate records and should only be published when permission has been received.
- Site settings control shared information used across the website, such as contact links, form recipient, favicon, and social sharing image.

## Ownership

- The business owner and family support own the product information, photos, pricing, descriptions, and customer communication rules.
- The site administrator owns the website structure, technical setup, SEO fields, form setup, and publishing process.
- Customers own the personal information they submit through the request form.
- Customer submissions should only be used to respond to product or custom order requests.
- No public content should expose the young owner’s private personal information

## Retention notes

- Product records should remain active while items are available or useful for display.
- Sold or unavailable products can be hidden instead of deleted if they may be reused later.
- Customer request submissions should be kept only as long as needed to respond, complete the order discussion, and maintain basic records.
- Old inquiries should be deleted or archived when no longer needed.
- Testimonials should only be kept and displayed with clear permission.
- Private customer information should not be stored in public website files.

## Validation notes

- Enforce required fields before save.
- Validate field types and allowed values.
- Prevent invalid relationships and orphan records.

## Missing data decisions

No unresolved client review items are currently identified.