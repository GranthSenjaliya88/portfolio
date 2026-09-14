# Portfolio visual refinement — 13 September 2026

## Audit before code changes

Reviewed the published portfolio visually on desktop (1265 × 712) and mobile (390 × 844), including the navigation, Hero, About, project examples, Skills, Education, Contact and footer. Read the existing components and animation settings after reviewing their rendered presentation. The mobile page measured 14,456 pixels high before changes.

| Area | Observation | Refinement |
| --- | --- | --- |
| Hero | Condensed, tightly tracked name; CTAs compete with the paragraph on desktop; oversized overlapping GitHub and date badges | More open letter spacing, a clear introduction/CTA stack and a tidy portrait caption |
| About | Section heading competes with another oversized introduction; repeated large portrait; mostly empty fact cards | Smaller heading scale, readable introduction, tighter portrait crop and compact highlights |
| Skills | Four repetitive tall panels and large gaps above their titles; colored dots add noise; moving ticker competes with content | Compact category rows with grouped technologies; replace the redundant ticker with a quiet section boundary |
| Projects | All three projects have equal visual weight; large decorative icons; copy and metadata widely separated | One featured layout, two supporting layouts, specific system illustrations and consistent metadata alignment |
| Education | Huge headline and aside overwhelm actual qualifications; dates and metadata are tiny | Quieter timeline, readable dates and a more compact contrasting learning note |
| Contact | Entire orange screen overpowers the closing message; compressed serif text; large gap before form | Warm neutral background, orange accent, relaxed typography and a clear form/detail relationship |
| Footer | Large monogram and excess vertical padding extend the ending | A smaller signature and consistent link spacing |
| Motion | 56px/1-second reveals and full-card clipping temporarily conceal useful content; perpetual ticker/orbit are repetitive | Short transform reveals; readable content throughout; limited portrait parallax on large screens |
| Mobile | About/Skills headings break into four lines; fact cards become four tall rows; all projects feel oversized | Intentional type scale, compact highlights, wrapped skill lists and shorter project illustrations |
| Consistency | Heavy uppercase headings, tiny mono labels and different border/padding rules compete | Shared spacing, type, border, color and timing tokens |

The initial audit covered the cream/orange version. When work resumed, the workspace contained a dark purple redesign; the second audit below and the final implementation use that latest design. Preserve the real projects, qualifications, skills, links, contact information, résumé and SEO metadata. Use the sequence Hero → About → Skills → Projects → Education → Contact. Keep all existing section URLs.

## Second audit of the dark redesign — 14 September 2026

Inspected the current dark redesign before applying the final refinements, at desktop and phone sizes. The following issues were visible:

- Hero: two floating decorative cards and repeated role labels competed with the portrait. Several continuous animations added motion without explaining the work.
- Navigation: the mobile menu button appeared alongside desktop navigation because an unlayered display rule overrode the responsive utility. Anchor scrolling applied the header offset twice.
- About: the secondary introduction was too close to heading size. Four boxed highlights repeated the card treatment. The portrait caption needed a reliable dark background for contrast.
- Skills: compact rows were effective; small category/metadata text and repeated glow effects needed restraint.
- Projects: the featured article placed metadata, illustration and copy in three flex columns. The illustration consumed most of the width and forced a very narrow title. On phones the ESP32 and voting illustrations were clipped by their aspect ratios.
- Education: dates and supporting labels were faint, while the learning note repeated the project-card surface.
- Contact/footer: small mono labels were faint, input text was below 16px, and white text on bright gradient buttons needed stronger contrast.
- Responsive: the tablet hero had excessive vertical padding from its minimum height. A 320px minimum body width overflowed a narrow viewport with a scrollbar.
- Resume: the introductory paragraph was oversized and pushed the useful actions below the fold.

### Implemented refinements

Preserved the dark identity, real content, existing section IDs and links. Removed decorative hero cards and repeating ambient motion; retained short entrances, subtle desktop portrait motion, progress feedback and hover responses. Hero content remains visible in prerendered HTML.

Used the sequence Hero → About → Skills → Projects → Education → Contact. Shared section numbers, heading rules and consistent accents connect the sequence. Skills use compact rows, About highlights use a divided strip, projects have one featured composition and two supporting examples, and the education note has a simple left rule. This reduces repetitive boxed layouts.

Corrected the featured project grid and illustration clipping. Improved label contrast, button contrast, form focus outlines and narrow layouts. Reduced scrolling inertia, removed the duplicate anchor offset, and kept reduced-motion support. Simplified resume typography while preserving its focus trap and PDF fallback.

### Verification

- Production build, prerender and repository SEO audit passed. Canonical URL, Google verification, Person schema, sitemap, heading structure, image alternatives and local assets remain valid.
- Desktop, tablet (768px), and phone (390px and 320px) layouts inspected in the browser. Final phone document width matches the available viewport; no horizontal page overflow. All three illustrations fit their containers.
- Navigation anchors resolve to existing sections; desktop section links, mobile menu selection, hero View Work and home navigation exercised.
- Resume modal opens, traps keyboard focus, closes with Escape and restores focus to its trigger. PDF returns HTTP 200 with a valid PDF signature.
- Empty contact form focuses the required name field. Form still composes an email in the visitor's email application; no message was sent.
- GitHub and LeetCode profile destinations opened successfully. Project links intentionally continue to use the existing GitHub profile because project-specific repository URLs have not been supplied.
- No browser console warnings or errors observed during the checked interactions.
- Muted text token against the lightest base surface: 6.95:1 contrast. White button text against the two gradient endpoints: 6.59:1 and 6.43:1. These are targeted color checks, not a claim of a complete accessibility audit.
- At a 390×844 test viewport, the final page measured approximately 10,338 CSS pixels high, compared with 14,456 for the initial cream/orange baseline. All meaningful content is retained.

Existing education dates are preserved as supplied. Project illustrations are labelled system sketches; no invented screenshots, results or project links were added.


## Publication

Published the verified production build to the existing gh-pages branch on 14 September 2026. GitHub Pages deployment completed successfully: https://github.com/GranthSenjaliya88/portfolio/actions/runs/34844099330 . The public homepage was checked in the browser and loads the final stylesheet (index-ZHFfAv7T.css), the revised section order, and no floating hero cards. No console errors or warnings were observed.
