import { cp, mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(process.cwd());
const dist = resolve(root, "dist");

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

const itemsToCopy = ["index.html", "styles.css", "src", "assets"];

for (const item of itemsToCopy) {
  const source = resolve(root, item);
  const destination = resolve(dist, item);

  await cp(source, destination, {
    recursive: true,
    force: true
  });
}

console.log("Build complete: static files copied to dist/");
