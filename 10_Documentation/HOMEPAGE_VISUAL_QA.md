# Homepage Visual QA

## Approved target

The approved generated homepage image is treated as the final visual target for desktop layout.

## Built screenshots

- `10_Documentation/homepage-built-desktop.png`
- `10_Documentation/homepage-built-viewport.png`
- `10_Documentation/homepage-built-desktop-full-pass2.png`
- `10_Documentation/homepage-built-desktop-viewport-pass2.png`
- `10_Documentation/homepage-built-mobile-390-pass2.png`
- `10_Documentation/homepage-built-desktop-full-pass3.png`
- `10_Documentation/homepage-built-desktop-viewport-pass3.png`
- `10_Documentation/homepage-built-mobile-390-pass3.png`
- `10_Documentation/homepage-built-desktop-full-pass4.png`
- `10_Documentation/homepage-built-desktop-viewport-pass4.png`
- `10_Documentation/homepage-built-mobile-390-pass4.png`
- `10_Documentation/homepage-built-desktop-full-pass5.png`
- `10_Documentation/homepage-built-desktop-viewport-pass5.png`
- `10_Documentation/homepage-built-mobile-390-pass5.png`
- `10_Documentation/homepage-built-desktop-full-pass6c.png`
- `10_Documentation/homepage-built-desktop-viewport-pass6c.png`
- `10_Documentation/homepage-built-mobile-390-pass6c.png`
- `10_Documentation/homepage-built-desktop-full-pass7.png`
- `10_Documentation/homepage-built-desktop-viewport-pass7.png`
- `10_Documentation/homepage-built-mobile-390-pass7.png`
- `10_Documentation/homepage-built-desktop-viewport-pass6.png`
- `10_Documentation/homepage-built-desktop-full-pass6.png`
- `10_Documentation/homepage-built-tablet-900-pass6.png`
- `10_Documentation/homepage-built-mobile-390-pass6.png`
- `10_Documentation/homepage-built-desktop-viewport-logo-center-pass.png`
- `10_Documentation/homepage-built-desktop-full-logo-center-pass.png`
- `10_Documentation/homepage-built-tablet-900-logo-center-pass.png`
- `10_Documentation/homepage-built-mobile-390-logo-center-pass.png`

## What was wrong before this pass

- Hero image still read as a framed visual area instead of a blended hero scene.
- Header felt compressed and logo/nav relationship did not match approved concept closely enough.
- Logo scale and overlap behavior needed refinement to appear more prominent and centered.

## What changed in this pass

- Hero image treatment changed from card-style presentation to a blended right-side hero background layer.
- HeroBG is now positioned as a large right-side scene layer with no card border, no rounded card radius, and no drop-shadow card styling.
- Header height and spacing were increased to better match approved concept rhythm.
- Navigation left/right grouping was retuned around the centered logo.
- Center logo scale and overlap placement were adjusted to remain a prominent brand element bridging header and hero.

## What changed in pass 4 (header and hero rebuild)

- Rebuilt header/nav/hero structure to align closer to approved concept instead of continuing minor tweaks.
- Navigation now uses explicit left and right groups around a centered overlapping logo anchor.
- Hero now uses a single absolutely positioned `HeroBG.png` scene image on the right side with no card framing.
- Hero content typography and spacing were retuned for a softer, less blocky hierarchy.
- Divider line behavior around the logo gap was updated to better mimic approved header treatment.

## What changed in pass 5 (targeted size and positioning correction)

- Added Google font `Allura` for the hero script line to better match approved headline style.
- Added Google serif support (`Cormorant Garamond`) for improved hero second-line tone.
- Increased and lowered centered logo treatment for stronger brand anchoring across header/hero boundary.
- Increased nav text sizing and adjusted nav spacing for better readability and proportionality.
- Increased hero text, body copy, trust note, and CTA sizing.
- Repositioned HeroBG scene higher and wider on the right to better match approved composition.

## What matches

- Section order and content hierarchy are implemented.
- Announcement bar, centered logo treatment, nav structure, hero text block, collection cards, featured cards, lower feature cards, Instagram strip, and footer blocks are present.
- Brand palette uses blush, cream, warm brown, and soft accent tones.
- Rounded cards, subtle shadows, dashed divider styling, and decorative icon usage are implemented.

## Visible differences

- Hero right-side composition now uses approved `HeroBG.png` as a blended hero background, which improves parity significantly versus the prior card-like treatment.
- Product and category imagery are icon-based approximations using approved local assets rather than the exact photo renders in the approved image.
- Some typography differences remain due unavailable exact typefaces from the approved composition.
- Pixel-level spacing and ornament detail still differ in some areas, especially in hero and footer micro-elements.
- Desktop parity is improved in structure and hero behavior, but still not strict pixel-perfect.
- In integrated-browser captures with constrained visible pane width, the full right navigation group is not always visible in the screenshot frame even when layout checks pass.

## Pass-specific validation outcomes

- Hero image changed from card treatment to blended hero background: **Yes**.
- Header adjusted to better match approved concept: **Yes**.
- Logo placement adjusted and remains centered/prominent: **Yes**.
- HeroBG parity improvement: **Yes**.
- Made With Love card now uses approved two-cats image: **Yes**.
- Rose & Paw footer credit added without footer layout breakage: **Yes**.
- HeroBG card-style defect present: **No**.

## Pass 5 targeted defect checks

- Logo size and placement fixed: **Partially** (improved size and lower placement; still not exact pixel parity).
- Hero button size fixed: **Yes** (larger and more prominent than prior pass).
- Hero text size fixed: **Yes** (script/serif hierarchy increased and closer to concept).
- Nav text size fixed: **Yes** (increased to readable desktop proportion).
- Hero image placement fixed: **Partially** (improved right-side coverage and blend; still minor alignment differences).

## Pass 6c targeted defect checks

- Logo size: **Fixed (improved, larger and dominant)**.
- Logo vertical placement: **Partially fixed**.
- Logo centered position: **Fixed**.
- Nav text size: **Fixed (increased)**.
- Nav left/right grouping: **Fixed (improved)**.
- Bag icon placement: **Fixed (improved)**.
- Home active underline/heart: **Fixed**.
- Script font fit: **Partially fixed**.
- Headline size: **Fixed (improved)**.
- Heart after headline: **Fixed**.
- Hero button size: **Fixed (improved)**.

## Pass 6c summary

- This pass focused only on logo/nav/headline/heart/CTA and related hero spacing.
- Hero image remains blended (not card-styled) and uses approved `HeroBG.png`.
- Two-cats asset and Rose & Paw footer credit both remain present and correct.

## What changed in pass 7 (requested defect-only corrections)

- Increased centered desktop logo scale to keep logo as the dominant visual anchor.
- Tuned nav vertical centering by normalizing header/nav min-height and removing top-heavy nav padding.
- Swapped hero script stack to a more condensed elegant script treatment and tightened fit.
- Replaced tiny text heart after `made just for you.` with a larger icon-style inline SVG heart.
- Replaced hero CTA emoji paw with a larger white inline SVG paw icon.
- Tuned hero left-side fade overlay to a softer cream-to-transparent blend to remove hard image edge.
- Increased active Home heart detail size under the nav item.

## Pass 7 visual QA checklist

- Logo size improved: **Yes**.
- Logo placement still centered and anchored: **Yes**.
- Script font more condensed: **Yes**.
- Headline heart visible and properly sized: **Yes**.
- CTA paw icon white and larger: **Yes**.
- Hero image fades gently to cream/white on the left: **Yes**.
- Nav vertically centered in white header space: **Yes**.
- Active Home heart bigger and visible: **Yes**.

## Pass 7 remaining differences

- Desktop parity is materially closer, but still not exact pixel-perfect to the approved concept.
- Remaining differences are minor: exact script letterform match and exact logo overlap depth versus approved artwork capture.

## What changed in pass 6 (responsive header/nav/logo/hero stabilization)

- Moved centered logo anchor to viewport-based centering (`left: 50vw`, `translateX(-50%)`) and increased desktop scale target.
- Added stronger hero fade overlay layering above `HeroBG.png` to remove hard vertical seam.
- Retuned desktop hero spacing and headline layout so displayed hero text no longer sits under the logo.
- Swapped hero script stack to `Great Vibes`-first for closer logo-style script tone.
- Reworked tablet/mobile header behavior to keep nav available and readable by stacking nav rows under centered logo (no disappearing nav state).
- Preserved active Home heart visibility and CTA white paw icon treatment.

## Pass 6 visual QA checklist

- Hard hero image line removed: **Yes**.
- Hero image fades gently to cream/white: **Yes**.
- Logo horizontally centered: **Yes**.
- Logo larger and closer to approved concept: **Yes**.
- Hero text no longer hides behind logo: **Yes**.
- Script font improved and closer to logo style: **Yes**.
- Nav remains visible or has a proper mobile replacement: **Yes**.
- Nav vertically centered in header band: **Yes**.
- Active Home heart remains visible: **Yes**.
- CTA paw icon remains white and readable: **Yes**.

## Pass 6 responsive notes

- Desktop (1200+): split left/right nav around centered large logo.
- Tablet (900-1199): centered logo with stacked nav rows beneath, preserving all links and bag icon visibility.
- Mobile (390 and below): logo remains centered above stacked nav rows and hero text; no horizontal overflow.

## Pass 6 remaining differences

- Visual parity is improved but still not strict pixel-perfect against the approved concept.
- Primary remaining differences are exact script letterform fidelity and exact logo overlap depth at very large desktop widths.

## Logo center defect pass

- Focus scope: logo horizontal centering and header-logo positioning independence from nav layout.
- Root cause found: centered logo wrapper had a larger width, but the logo image remained fixed at `260px` and sat left within the wrapper, causing visual and measured drift.
- Corrective CSS:
	- Kept logo in its own absolute layer outside nav flow.
	- Updated logo centering anchor to viewport-consistent centering with scrollbar compensation:
		- `left: calc(50% + (100vw - 100%) / 2)`
		- `transform: translateX(-50%)`
	- Added `.brand-center img { width: 100%; height: auto; }` so the image center matches the centered wrapper center.

## Logo center measurements

- 1440px: logo center `720`, viewport center `720`, difference `0`.
- 1200px: logo center `600`, viewport center `600`, difference `0`.
- 900px: logo center `450`, viewport center `450`, difference `0`.
- 390px: logo center `195`, viewport center `195`, difference `0`.
- Result: within required tolerance (<= 2px) at all tested widths.

## Optical offset check

- PNG alpha-bounds analysis shows artwork is effectively centered in the image canvas (offset about `-0.5px`).
- Optical correction variable was **not** needed.

## Logo center pass checklist

- Logo centered relative to viewport/page center: **Yes**.
- Logo independent from nav layout: **Yes**.
- Nav and bag icon do not shift logo center: **Yes**.
- Logo remains centered at 1440/1200/900/390 widths: **Yes**.

## Final responsive header and hero adjustment pass

- Desktop logo size/placement, desktop nav, and hero background treatment were preserved.
- Desktop hero headline was reduced slightly (script and serif) and moved lower to avoid visual collision with centered logo.
- Tablet and mobile now use hamburger navigation before nav/logo collision points.
- Mobile script line `Handmade with love,` is forced to single-line behavior at 390px without horizontal overflow.

## Final pass screenshots

- `10_Documentation/homepage-built-desktop-viewport-pass7.png`
- `10_Documentation/homepage-built-tablet-900-pass7.png`
- `10_Documentation/homepage-built-mobile-390-pass7.png`

## Final pass checklist

- Desktop logo remains good: **Yes**.
- Desktop nav remains good: **Yes**.
- Desktop hero background remains good: **Yes**.
- Desktop hero text slightly reduced and no longer collides with logo: **Yes**.
- Tablet nav no longer disappears behind logo: **Yes** (hamburger mode).
- Mobile nav uses hamburger: **Yes**.
- Mobile `Handmade with love,` stays on one line at 390px: **Yes**.
- CTA paw icon remains white: **Yes**.
- Headline heart remains visible: **Yes**.
- Horizontal overflow at tested widths: **No**.

## Final pass measured checkpoints

- Desktop 1366: nav display `flex`, logo/headline overlap `false`.
- Tablet 900: nav display `none`, menu button visible, hamburger toggle works.
- Mobile 390: nav display `none`, menu button visible, script white-space `nowrap`, script rendered on one line.
- Keyboard menu check: `aria-expanded` toggles `false -> true`, menu opens; selecting a menu link closes menu and resets `aria-expanded` to `false`.

## Remaining visual differences (final pass)

- The integrated browser screenshot renderer can still crop or downscale portions of wide captures in preview panes.
- Minor typographic differences from the approved concept remain outside this focused pass.

## Tooling limitation encountered

- Integrated browser screenshot capture did not reliably provide a large desktop viewport comparable to the approved reference resolution in this session.
- Requested mobile capture at 390px width is constrained by integrated browser rendering area in this session; runtime checks still verified responsive behavior and no horizontal overflow.
- Integrated browser frame can visually crop right-side viewport in chat-rendered previews despite larger underlying viewport values used for capture/checks.

## Recommendation

Use the approved exact rendered image assets (or equivalent layered export assets) to close remaining visual differences and complete strict pixel-perfect parity.

## Pass 8: Hero spacing and responsive position stability

- Focus of this pass: headline size hierarchy, headline-to-body spacing, and viewport-resize stability in the hero text block.
- Removed excessive vertical offset in hero body copy block by replacing unstable paragraph top-padding with stable margin spacing.
- Reduced serif line (`made just for you.`) so it reads as secondary to the script line.
- Smoothed desktop width behavior around the previous failing range so slight resize no longer causes a large headline drop.

## Pass 8 screenshots

- `10_Documentation/homepage-built-desktop-viewport-pass8.png`
- `10_Documentation/homepage-built-desktop-resize-check-pass8.png`
- `10_Documentation/homepage-built-tablet-900-pass8.png`
- `10_Documentation/homepage-built-mobile-390-pass8.png`

## Pass 8 measured checks

- Desktop 1440: logo/headline overlap `false`, script `62.64px`, serif `43.28px`, headline-to-body gap `10px`.
- Desktop 1201 -> 1200 resize: headline top changed from `446px` to `448px` (2px delta only, no large jump).
- Tablet 900: hamburger mode active (`primary-nav` hidden), no headline/logo overlap.
- Mobile 390: script white-space `nowrap`, no horizontal overflow, no logo/headline overlap.

## Pass 8 required acceptance checks

- Body copy, CTA, and trust block moved up significantly versus prior state: **Yes**.
- `made just for you.` is slightly smaller than script line: **Yes**.
- Headline no longer drops significantly on slight desktop resize: **Yes**.
- Hero text does not hide behind logo at tested widths: **Yes**.
- Logo/nav/hero background prior approvals retained: **Yes**.
- CTA paw icon remains white and readable: **Yes**.
- Headline heart remains visible: **Yes**.
- No horizontal overflow at tested widths: **Yes**.

## Pass 8 remaining differences

- This pass resolved the spacing and resize-jump issue, but full pixel-perfect typography parity to the approved concept is still subject to small render differences across environments.

## Pass 9: Hero text block vertical correction

- Focus of this pass: move the full hero text group upward while preserving tight internal spacing and preventing large resize jumps.
- Adjusted hero vertical offsets so the headline, body copy, CTA, and trust note move as one grouped block.
- Kept reduced headline-to-body spacing from prior pass (headline/copy/button/trust block remains compact).
- Retained prior header/logo/nav/background/fade improvements and hamburger behavior.

## Pass 9 screenshots

- `10_Documentation/homepage-built-desktop-viewport-pass9.png`
- `10_Documentation/homepage-built-desktop-resize-check-pass9.png`
- `10_Documentation/homepage-built-tablet-900-pass9.png`
- `10_Documentation/homepage-built-mobile-390-pass9.png`

## Pass 9 measured checks

- 1440 desktop: headline top `425`, gap headline->body `10px`, no horizontal overflow.
- 1366 desktop: headline top `425`, gap headline->body `10px`, no horizontal overflow.
- 1201 -> 1200 resize check: headline top `425` -> `427` (2px delta only, no large drop jump).
- 900 tablet: hamburger mode active, no horizontal overflow.
- 390 mobile: hamburger mode active, script line remains `nowrap`, no horizontal overflow.

## Pass 9 notes

- Entire hero text block was moved upward compared to prior low placement.
- Internal spacing remained compact and grouped:
	- headline -> body copy: ~`9-10px`
	- body copy -> CTA: ~`16px`
	- CTA -> trust note: ~`13px`
- CTA paw icon remains white and headline heart remains visible.

## Pass 10: Responsive HeroBG scaling and vertical space reduction

- Focus of this pass: responsive HeroBG scaling behavior and reducing excess dead space below hero text at tablet/mobile widths.
- Tuned hero section min-height and padding for `<=1100`, `<=600`, and `<=420` to stop image layer from forcing oversized hero height.
- Tuned HeroBG width/right/object-position at the same breakpoints so the scene remains visible without oversized cropping.
- Preserved soft hero fade, header/logo/nav behavior, and hamburger behavior.

## Pass 10 screenshots

- `10_Documentation/homepage-built-desktop-viewport-pass10.png`
- `10_Documentation/homepage-built-tablet-900-pass10.png`
- `10_Documentation/homepage-built-tablet-700-pass10.png`
- `10_Documentation/homepage-built-mobile-390-pass10.png`

## Pass 10 viewport results

- 1440 desktop:
	- hero height `539px`
	- HeroBG width `904px`
	- no horizontal overflow
- 1200 desktop:
	- hero height `530px`
	- HeroBG width `790px`
	- no horizontal overflow
- 900 tablet:
	- hero height reduced to `450px` (from prior `542px`)
	- trust-note to hero-bottom gap reduced to `162px` (from prior `238px`)
	- HeroBG width `626px`
- 700 narrow tablet:
	- hero height reduced to `398px` (from prior `542px`)
	- trust-note to hero-bottom gap reduced to `120px` (from prior `248px`)
	- HeroBG width `487px`
- 390 mobile:
	- hero height reduced to `398px` (from prior `516px`)
	- trust-note to hero-bottom gap reduced to `134px` (from prior `237px`)
	- HeroBG width `352px`
	- script remains `nowrap`

## Pass 10 acceptance checks

- HeroBG scales more cleanly at desktop/tablet/mobile: **Yes**.
- Excess empty space below hero text reduced: **Yes**.
- Collections section starts closer after useful hero content: **Improved**.
- Soft fade remains (no hard edge): **Yes**.
- Header/logo/nav/hamburger retained: **Yes**.
- CTA paw white and headline heart visible: **Yes**.
- No horizontal overflow at tested widths: **Yes**.

## Pass 11: Mid-size hero layout tightening

- Focus of this pass: fix excess vertical space at one mid-size desktop/tablet viewport so it keeps a compact desktop-style hero rhythm.
- Root defect: breakpoint switched too early into hamburger/tablet hero mode, introducing excess header+hero vertical height and pushing collections too far down.
- Fix applied: lowered hamburger/tablet breakpoint from `<=1100` to `<=930` so the failing mid-size viewport remains in compact desktop layout.
- Tuned tablet-mode hero spacing to reduce dead space when hamburger mode is active (`<=930`), and kept hero image scaling balanced.
- Added a small hero-copy top offset in hamburger range to avoid headline/logo touch at the transition width.

## Pass 11 screenshots

- `10_Documentation/homepage-built-failing-width-pass11.png`
- `10_Documentation/homepage-built-good-width-check-pass11.png`
- `10_Documentation/homepage-built-desktop-1440-pass11.png`
- `10_Documentation/homepage-built-tablet-900-pass11.png`
- `10_Documentation/homepage-built-mobile-390-pass11.png`

## Pass 11 widths tested

- Failing-width check: `1080px`
- Good-width check: `1280px`
- Desktop: `1440px`
- Desktop/tranistion checks: `1200px`, `1100px`, `1000px`, `980px`, `960px`, `940px`
- Tablet: `930px`, `900px`, `700px`
- Mobile: `390px`

## Pass 11 viewport results summary

- `1080px` (previous failing behavior range): now stays compact desktop mode (`navDisplay: flex`), hero height `526px`, trust-note to hero-bottom gap `18px`.
- `1280px` good view preserved and remains compact.
- `1440px` desktop preserved.
- `900px` tablet (hamburger mode): hero height `414px`, trust-note to hero-bottom gap `130px` (improved from earlier much larger spacing).
- `700px` narrow tablet: hero height `378px`, trust-note to hero-bottom gap `104px`.
- `390px` mobile: hero height `398px`, no overflow, hamburger unchanged and functional.

## Pass 11 acceptance checks

- Failing viewport no longer has excessive empty vertical space: **Yes**.
- Mid-size viewport resembles tighter layout rhythm: **Yes**.
- HeroBG no longer drives oversized section at failing viewport: **Yes**.
- Collections heading starts closer after hero at failing viewport: **Yes**.
- Large desktop view regressed: **No**.
- Mobile/hamburger regressed: **No**.
- No horizontal overflow: **Yes**.
