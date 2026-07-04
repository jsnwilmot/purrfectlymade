# Architect Instructions

**Project:** PurrfectlyMade Website  
**Client:** Isabella Pinzarrone  
**Business or department:** [MISSING: business or department]  
**Project type:** Static website  
**Target platform:** Web browser, tablet, mobile  
**Status:** Ready for Codex

## Project purpose

This website must give Purrfectly Made a simple, polished online home where handmade crafts can be showcased and offered for sale. It should display items such as jewelry, bracelets, keychains, resin pieces, 3D printed items, seasonal gifts, and personalized crafts. Visitors should be able to browse products, learn about the brand, and submit a request form to ask about buying or customizing an item.

## Project type

Static website

## Target platform

Web browser, tablet, mobile

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

## Data sources

- Approved project data sources include:
- Approved product photos supplied by the business owner or family support.
- Approved product names, descriptions, prices, and availability details.
- Approved brand assets, including the logo and craft icons.
- Website request form submissions from customers.
- Facebook page or Facebook messaging link, if approved.
- Website copy approved by the business owner and family support.
- No personal child contact information should be used as a public data source.

## Architecture rules

- Keep boundaries explicit between data, workflows, security, UI, and generation.
- Avoid assumptions not present in intake or approved decisions.
- Preserve deterministic output and missing-marker visibility.

## Naming standards

Use stable names from intake for projects, roles, features, screens, workflows, and entities.

## Documentation standards

Every decision must be documented and contradictory statements must be resolved before handoff.

## Accessibility expectations

Accessibility requirements are mandatory and must be traceable to acceptance criteria.

## Security expectations

Enforce least privilege, sensitive-data handling notes, and explicit risk tracking.

## Testing expectations

Define unit, integration, and manual verification requirements before Codex implementation starts.

## Review process

1. Resolve missing markers.
2. Validate cross-document consistency.
3. Approve phased implementation order.
4. Mark package ready for Codex.

## Allowed assumptions

- Formatting or wording improvements that do not change scope.

## Blocked assumptions

- Backend, authentication, import, external AI calls, or architecture replacement without approval.

## How GPT creates Codex prompts

Create phased, scoped prompts with objective, files, constraints, acceptance criteria, testing, and reporting.

## How GPT reviews Codex output

Review for scope compliance, requirement coverage, security/accessibility impact, and test evidence.