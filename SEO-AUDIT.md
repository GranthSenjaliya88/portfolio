# Portfolio technical SEO audit

Date: 2026-09-09

Canonical website: https://granthsenjaliya88.github.io/portfolio/

## Implemented

| Area | Result |
| --- | --- |
| Identity and metadata | Exact requested title, professional description, consistent full name, author and index/follow directives |
| Canonical and sharing | One public GitHub Pages canonical; corrected Open Graph and Twitter URLs; existing preview artwork optimized |
| Structured data | Valid JSON with Schema.org Person, name, role, canonical URL, known skills, GitHub and confirmed LeetCode sameAs URLs |
| Crawl files | Sitemap contains the one actual page; project robots.txt supplied with its host-root scope caveat documented |
| Initial HTML | React prerendering emits the portfolio's sections and project content before JavaScript; the browser hydrates the same tree |
| Navigation | Header/footer/section links use real hrefs; résumé links open the PDF without JavaScript and enhance to a dialog when JavaScript loads |
| Images | Alt text and dimensions; responsive WebP portrait; lazy loading/async decoding below the fold; high-priority hero image |
| Performance | Removed the artificial loading-screen gate; fonts discovered directly in the head with preconnect and swap; optional résumé code loads on demand |
| Accessibility | Résumé focus trap, inert background, focus restoration, Escape close and independent scrolling; mobile menu Escape/resize handling; stronger text contrast and form focus indicators |
| Mobile | Fixed the narrow Skills heading; allowed tablet project links to wrap; preserved the visual layout and content |
| Publishing | Uses existing gh-pages publishing source; source workflow now validates instead of attempting a deployment from the protected main branch |

## Verification performed

- `npm run build` completes, including the prerender step and SEO artifact audit.
- The artifact audit checks required metadata, exactly one H1, sequential heading levels (18 headings), unique IDs, real section links, image descriptions/dimensions, local asset existence, sitemap URLs and `.nojekyll`.
- Browser-tested the production build under `/portfolio/`, matching the GitHub Pages path. No JavaScript or hydration errors were observed during the checked interactions.
- Checked narrow/mobile layouts at 320px and 390px, a tablet layout at 768px, and desktop layouts at 1280px and 1440px. The checked headings/body/form controls have no narrow-screen horizontal overflow after the fix.
- Checked résumé opening, keyboard focus cycling, Escape, focus restoration and scrolling at a short 1280 × 500 viewport. Scrolling the dialog moved it 392px while the background stayed at scrollY 0.
- Checked native contact navigation and empty-form validation. Required name/email/message inputs block an empty submission. No message was sent; email-app delivery remains outside this test.
- Public résumé PDF and GitHub profile returned HTTP 200 during the initial website check. LeetCode returned HTTP 403 to automated HTTP fetching; this is not proof of a broken profile. The exact LeetCode URL supplied by the owner is preserved.

## Asset changes

| Asset | Before | Optimized alternative |
| --- | ---: | ---: |
| Portrait | 117,702 bytes, 767 × 1024 WebP | 55,786 bytes, 479 × 640 WebP for suitable screens; original retained for higher resolution |
| Social preview | 1,056,770 bytes, 1200 × 630 PNG | 109,796 bytes, 1200 × 630 JPEG using the same artwork |

Browser selection of responsive images depends on screen width and pixel density. These file-size improvements and removal of the artificial delay are not a measured Core Web Vitals score.

## Search-engine account checks — 2026-09-09

| Check | Observed result |
| --- | --- |
| Google ownership | URL-prefix property verified using the real HTML tag; tag published and confirmed in the live homepage |
| Google live URL test | URL is available to Google; page can be indexed |
| Google indexing request | Accepted; homepage added to the priority crawl queue. Actual indexing is not confirmed |
| Google sitemap | Submission accepted and retried once, but latest status remains Couldn't fetch / Sitemap could not be read; discovered pages 0 |
| Public sitemap validation | Exact submitted URL returns HTTP 200 with valid XML and the canonical homepage entry |
| Google Pages and Performance | Processing data; Google asks to check again in a day or so |
| Bing import | Verified Google property and its sitemap imported successfully |
| Bing sitemap | Success; 1 URL discovered, 0 errors, 0 warnings. Actual indexing is not confirmed |

The ownership tag was committed as `a87f688`, pushed to `main`, and deployed to GitHub Pages. The source validation workflow and Pages deployment both succeeded.

## Remaining checks and owner details

Follow [SEO-SETUP.md](SEO-SETUP.md) for the full checklist and exact Google/Bing instructions.

- Recheck Google's sitemap processing and homepage indexing status after Google has had time to process the new property. The live URL test passed, but the sitemap fetch error remains unresolved.
- Review Pages and Performance when Google finishes preparing the reports. Check Bing's URL Inspection for actual indexing; its successful sitemap import alone does not prove indexing.
- The effective host-root `/robots.txt` returned 404. The project's `/portfolio/robots.txt` does not control the host; the missing root file does not prohibit crawling. The sitemap has been submitted directly.
- Project links point to the GitHub profile until exact repositories are supplied. Unknown LinkedIn/Instagram URLs are omitted, not guessed.
- Existing education dates appear inconsistent (university 2022—Present versus 2025 batch and school 2023—2025); they need the owner's factual confirmation.
- Search-engine indexing, rankings, real-user Core Web Vitals and device/browser combinations beyond those checked are not guaranteed or claimed as verified.
