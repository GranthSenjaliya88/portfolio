import { readFile, writeFile } from "node:fs/promises";
import { createServer } from "vite";

const server = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
});

try {
  const { render } = await server.ssrLoadModule("/src/entry-server.jsx");
  const manifest = JSON.parse(await readFile("dist/.vite/manifest.json", "utf8"));
  let content = render();
  // SSR imports point at source images; use the exact assets from this build.
  for (const [source, asset] of Object.entries(manifest)) {
    if (source.startsWith("src/assets/")) {
      content = content.replaceAll(`/${source}`, `./${asset.file}`);
    }
  }
  if (content.includes("/src/assets/")) throw new Error("An image was not mapped to its production asset.");
  const template = await readFile("dist/index.html", "utf8");
  if (!template.includes('<div id="root"></div>')) throw new Error("Missing prerender mount point.");
  await writeFile("dist/index.html", template.replace('<div id="root"></div>', `<div id="root">${content}</div>`));
  console.log("Prerendered portfolio content into dist/index.html.");
} finally {
  await server.close();
}
