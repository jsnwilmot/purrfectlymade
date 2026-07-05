import { cp, mkdir, rm, stat } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(process.cwd());
const dist = resolve(root, "dist");

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

const requiredItems = [
  "index.html",
  "request.html",
  "styles.css",
  "assets",
  "src"
];

const optionalItems = [
  "404.html",
  "robots.txt",
  "sitemap.xml",
  "CNAME",
  "manifest.webmanifest"
];

for (const item of requiredItems) {
  const source = resolve(root, item);
  const destination = resolve(dist, item);

  await cp(source, destination, {
    recursive: true,
    force: true
  });
}

for (const item of optionalItems) {
  const source = resolve(root, item);
  const destination = resolve(dist, item);

  try {
    await stat(source);
    await cp(source, destination, {
      recursive: true,
      force: true
    });
  } catch (error) {
    if (error && error.code === "ENOENT") {
      console.log(`Skipping optional file: ${item}`);
      continue;
    }
    throw error;
  }
}

console.log("Build complete: static files copied to dist/");
