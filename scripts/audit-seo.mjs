import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import { resolve } from "node:path";

const origin = "https://granthsenjaliya88.github.io/portfolio/";
const html = await readFile("dist/index.html", "utf8");
const head = html.split("</head>")[0];
const attrs = (tag) => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map((m) => [m[1].toLowerCase(), m[2]]));
const metas = [...head.matchAll(/<meta\b[^>]*>/g)].map(([tag]) => attrs(tag));
const meta = (name) => metas.filter((m) => (m.name || m.property) === name);
for (const name of ["description", "robots", "viewport", "author", "og:title", "og:description", "og:url", "og:image", "og:type", "og:site_name", "twitter:card", "twitter:title", "twitter:description", "twitter:image", "twitter:url"]) {
  assert.equal(meta(name).length, 1, `Expected one ${name} tag`);
  assert.ok(meta(name)[0].content, `${name} cannot be empty`);
}
assert.ok(head.includes("<title>Granth Senjaliya | CSE Student &amp; Developer</title>"));
const canonical = [...head.matchAll(/<link\b[^>]*>/g)].map(([tag]) => attrs(tag)).filter((a) => a.rel === "canonical");
assert.deepEqual(canonical.map((a) => a.href), [origin]);
assert.equal(meta("og:url")[0].content, origin);
assert.equal(meta("twitter:url")[0].content, origin);
assert.ok(!/noindex|nofollow/i.test(meta("robots")[0].content));
assert.ok(!html.includes("chatgpt.site") && !html.includes("REPLACE THIS") && !html.includes("MY_WEBSITE_URL"));
const schema = JSON.parse(head.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
assert.equal(schema["@type"], "Person");
assert.equal(schema.name, "Granth Senjaliya");
assert.equal(schema.url, origin);
for (const social of schema.sameAs) assert.equal(new URL(social).protocol, "https:");

const headings = [...html.matchAll(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/g)];
assert.equal(headings.filter((h) => h[1] === "1").length, 1, "Exactly one H1 must exist in initial HTML");
assert.equal(headings[0][2].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim(), "Granth Senjaliya");
let level = 0;
for (const h of headings) { assert.ok(+h[1] <= level + 1, "Heading levels must not be skipped"); level = +h[1]; }
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
assert.equal(new Set(ids).size, ids.length, "HTML IDs must be unique");
for (const id of ["home", "about", "projects", "skills", "education", "contact"]) {
  assert.ok(ids.includes(id), `Missing section: ${id}`);
  assert.ok(html.includes(`href="#${id}"`), `Missing crawlable link to ${id}`);
}
for (const [tag] of html.matchAll(/<img\b[^>]*>/g)) {
  const a = attrs(tag);
  assert.ok(a.alt?.trim() && a.width && a.height, "Images need alt text and dimensions");
  for (const url of [a.src, ...(a.srcset || "").split(",").filter(Boolean).map((s) => s.trim().split(/\s/)[0])]) {
    await access(resolve("dist", decodeURIComponent(url.replace(/^\.\//, ""))));
  }
}
for (const [tag] of html.matchAll(/<(?:a|link|script)\b[^>]*>/g)) {
  const a = attrs(tag);
  const url = a.href || a.src;
  if (!url || /^(https?:|mailto:|tel:)/.test(url)) continue;
  if (url.startsWith("#")) assert.ok(ids.includes(url.slice(1)), `Broken section anchor: ${url}`);
  else await access(resolve("dist", decodeURIComponent(url.split(/[?#]/)[0])));
}
const sitemap = await readFile("dist/sitemap.xml", "utf8");
assert.ok(sitemap.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"'));
assert.deepEqual([...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]), [origin]);
assert.ok((await readFile("dist/robots.txt", "utf8")).includes(`Sitemap: ${origin}sitemap.xml`));
await access("dist/.nojekyll");
await access("dist/portfolio-preview.jpg");
assert.ok(html.includes("ESP32 Voice Controlled Home Automation") && html.includes("CSE student and developer"), "Initial HTML must include real content");
assert.ok(!html.includes('aria-label="Loading portfolio"'), "A splash screen must not gate the content");
console.log(`SEO audit passed: metadata, Person schema, ${headings.length} headings, links, images, sitemap, robots.txt, and GitHub Pages assets.`);
