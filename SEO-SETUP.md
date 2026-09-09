# Granth Senjaliya — SEO and indexing setup

Website: https://granthsenjaliya88.github.io/portfolio/

Sitemap: https://granthsenjaliya88.github.io/portfolio/sitemap.xml

## 1. Confirm the published site

The homepage title should be **Granth Senjaliya | CSE Student & Developer**. Its initial HTML now contains your name, sections, projects, metadata, and Person structured data before JavaScript runs. The design remains a single-page portfolio: About, Projects, Skills, Education, and Contact are sections, not independent pages. The sitemap therefore contains only the homepage's canonical URL. Do not submit `#about` or other fragments as separate pages. See [Google's sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).

The existing GitHub Pages setting is **Deploy from a branch → gh-pages → /(root)**. No custom domain is configured. Keep this setting with the current deployment command.

For future updates:

```sh
npm ci
npm run build
npm run deploy
```

The build compiles, prerenders, and audits the production files. Deployment runs the same checks and publishes `dist` to `gh-pages`. Commit and push source changes to `main` separately; do not edit generated `dist` files. Source pushes run the validation workflow and retain a build artifact. That workflow no longer attempts to deploy `main` to an environment that only permits `gh-pages`; existing protection settings are preserved.

## 2. Add Google Search Console

1. Open [Google Search Console](https://search.google.com/search-console/) and sign in to your chosen Google account.
2. Open the upper-left property selector and click **Add property**, or use the property selector on the welcome screen.
3. Select **URL prefix**. A Domain property would require DNS control.
4. Enter exactly **https://granthsenjaliya88.github.io/portfolio/**, including the final slash.
5. Click **Continue**.

Source: [Google property instructions](https://support.google.com/webmasters/answer/34592?hl=en).

## 3. Verify ownership

1. In the verification dialog, expand **HTML tag** under the alternative methods.
2. Copy the complete tag supplied by Google. Its value is specific to your account.
3. Paste the real tag inside `<head>` in the source `index.html`, near the verification comment.
4. Run `npm run deploy`. Confirm the tag appears in the live homepage's source.
5. Return to Search Console and click **Verify**. Keep the tag after verification.

```html
<!-- REPLACE THIS with Google's complete real verification tag. -->
<meta name="google-site-verification" content="REPLACE THIS: GOOGLE_VERIFICATION_TOKEN" />
```

Do not publish the placeholder. You can paste the real tag into the Codex task to have it added. No verification token has been invented or inserted into production metadata.

Source: [Google HTML-tag verification](https://support.google.com/webmasters/answer/9008080?hl=en).

## 4. Submit the sitemap

1. Select the verified portfolio property.
2. Open **Indexing → Sitemaps**.
3. Under **Add a new sitemap**, enter **sitemap.xml** if the property prefix is already displayed. Otherwise enter **https://granthsenjaliya88.github.io/portfolio/sitemap.xml**.
4. Click **Submit**.
5. Check for **Success** in the submitted sitemap's status. Open the row for error details if needed.

Source: [Google Sitemaps report](https://support.google.com/webmasters/answer/7451001?hl=en).

## 5. Request indexing

1. Paste **https://granthsenjaliya88.github.io/portfolio/** into the top inspection bar and press Enter.
2. Review **Page indexing**, then click **Test live URL**.
3. If the live page is accessible and eligible, click **Request indexing**.
4. For future standalone pages, give each a canonical URL and sitemap entry, then inspect and request those URLs individually. Current section anchors do not need separate requests.

A successful test/request is not proof of indexing. Google decides whether and when to index a page and how to rank it. Repeated requests do not guarantee faster processing.

Source: [Google URL Inspection](https://support.google.com/webmasters/answer/9012289?hl=en).

## 6. Check status and search performance

- Use **Indexing → Pages** to review indexed and not-indexed URLs and reasons. Inspect the homepage URL for its specific status.
- Use **Performance → Search results** for impressions, clicks, CTR, and average position once data is available.
- In **Queries**, review searches containing **Granth Senjaliya**. Use **+ New → Query** to apply a name filter when that control is available.
- Review variants such as `Granth Senjaliya portfolio`, `Granth Senjaliya CSE`, `Granth Senjaliya developer`, and `Granth Senjaliya CHARUSAT`.
- Check **Core Web Vitals** when sufficient real-user data exists. Local responsive checks do not establish a real-user performance score.

Sources: [Page indexing report](https://support.google.com/webmasters/answer/7440203?hl=en), [Performance report](https://support.google.com/webmasters/answer/7576553?hl=en).

## 7. Bing and other search engines

1. Open [Bing Webmaster Tools](https://www.bing.com/webmasters/) and sign in.
2. After Google verification, choose **Import from Google Search Console**, authorize access, select the portfolio, and click **Import**.
3. Alternatively, manually add the exact portfolio URL and use Bing's HTML meta-tag option. Add its real tag to `index.html`, publish, and verify.
4. Open **Sitemaps → Submit sitemaps** and enter **https://granthsenjaliya88.github.io/portfolio/sitemap.xml** if it was not imported.
5. Check processing status and inspect the homepage with Bing's URL Inspection tool.

```html
<!-- Optional manual Bing verification; REPLACE THIS with Bing's real tag. -->
<meta name="msvalidate.01" content="REPLACE THIS: BING_VERIFICATION_TOKEN" />
```

Sources: [Bing add/verify instructions](https://www.bing.com/webmasters/help/add-and-verify-site-12184f8b), [Bing sitemap instructions](https://www.bing.com/webmasters/help/sitemaps-3b5cf6ed).

The public HTML, ordinary links, and standard sitemap are available to legitimate crawlers from other search engines too. No obsolete keywords tag or paid submission service is needed. Bing submission does not guarantee inclusion in Bing, DuckDuckGo, or Yahoo.

## 8. GitHub Pages robots.txt limitation

The project provides **https://granthsenjaliya88.github.io/portfolio/robots.txt**. However, crawlers honor the host-root file **https://granthsenjaliya88.github.io/robots.txt**. A file under `/portfolio/` cannot set the host's effective crawl rules.

The host-root file returned HTTP 404 during this audit. That is not a disallow rule and does not prevent Google crawling. Submit the sitemap directly as described above.

If you later manage a user-site repository that publishes the host root, add the allow-all rules and this sitemap reference there. Preserve rules for other sites on that host. If you add a custom domain, update canonical metadata, JSON-LD, sitemap, robots reference, and the Search Console property together.

Sources: [Google robots.txt location requirements](https://developers.google.com/crawling/docs/robots-txt/create-robots-txt), [Google robots.txt HTTP handling](https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec).

## 9. Details only you can supply

- **REPLACE THIS: GOOGLE_VERIFICATION_TOKEN** — obtain from your Search Console account.
- **REPLACE THIS: BING_VERIFICATION_TOKEN** — only for manual Bing verification.
- **REPLACE THIS: MY_LINKEDIN_URL** and **REPLACE THIS: MY_INSTAGRAM_URL** — optional exact URLs. Unknown profiles are omitted from production JSON-LD. GitHub and your confirmed LeetCode URL are included.
- **REPLACE THIS: PROJECT_REPOSITORY_URLS** — current project links open your GitHub profile. Provide individual repositories or live demos to make those links more specific; destinations were not invented.
- Confirm existing education dates: university currently says **2022—Present** and **2025 Batch**, alongside school **2023—2025**. These were preserved instead of guessed.

Use **Granth Senjaliya** consistently as your professional profile name, and put the public portfolio URL in the website/bio field on GitHub and other appropriate profiles. No external social profile has been edited.

## Completed code checklist

- [x] SEO title
- [x] Meta description
- [x] Robots meta tag
- [x] Canonical URL
- [x] Open Graph
- [x] Twitter/X metadata
- [x] Person JSON-LD structured data
- [x] robots.txt supplied; host-root limitation documented
- [x] sitemap.xml with the real canonical page
- [x] Mobile optimization
- [x] Image optimization
- [x] Heading optimization
- [x] Internal HTML linking
- [x] GitHub Pages compatibility
- [x] Google Search Console instructions
- [x] Indexing instructions
- [x] Technical SEO audit and build checks

Search Console verification, search-engine submissions, actual indexing/ranking, and real-user performance are external outcomes, not completed code changes. Indexing and ranking are not guaranteed.
