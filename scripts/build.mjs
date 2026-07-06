import { cp, mkdir, readdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(process.cwd());
const dist = resolve(root, "dist");
const assetVersion = "perf1";

const rootHtmlFiles = (await readdir(root, { withFileTypes: true }))
  .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith(".html"))
  .map((entry) => entry.name);

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

const requiredItems = [
  "styles.css",
  "assets"
];

const optionalItems = [
  "robots.txt",
  "sitemap.xml",
  "CNAME",
  "manifest.webmanifest"
];

const withAttribute = (tag, name, value) => {
  const attributePattern = new RegExp(`\\s${name}\\s*=`, "i");

  if (attributePattern.test(tag)) {
    return tag;
  }

  return tag.replace(/(\s*\/?>)$/, ` ${name}="${value}"$1`);
};

const optimizeImageTag = (tag) => {
  const isHeroImage = /class="[^"]*hero-bg/i.test(tag) || /src="[^"]*HeroBG\.png/i.test(tag);
  const isHeaderLogo = /src="[^"]*logo-purrfectly-made-520\.png/i.test(tag);
  let optimizedTag = withAttribute(tag, "decoding", "async");

  if (isHeroImage) {
    optimizedTag = withAttribute(optimizedTag, "fetchpriority", "high");
    return optimizedTag;
  }

  if (!isHeaderLogo) {
    optimizedTag = withAttribute(optimizedTag, "loading", "lazy");
  }

  return optimizedTag;
};

const addHeroPreload = (html, fileName) => {
  const preload = '    <link rel="preload" as="image" href="assets/images/HeroBG.png" fetchpriority="high" />\n';

  if (fileName !== "index.html" || html.includes('rel="preload" as="image" href="assets/images/HeroBG.png"')) {
    return html;
  }

  return html.replace(/(\s*<link rel="preconnect" href="https:\/\/fonts\.googleapis\.com" \/>)/, `\n${preload}$1`);
};

const addNoIndexToThankYou = (html, fileName) => {
  if (fileName !== "thank-you.html" || /<meta\s+name="robots"/i.test(html)) {
    return html;
  }

  return html.replace(/(<meta\s+name="description"[\s\S]*?\/?>\n)/i, `$1    <meta name="robots" content="noindex" />\n`);
};

const externalizeInlineSiteScript = (html) => {
  let removedInlineScript = false;
  const scriptPattern = /\n\s*<script>\s*\(\(\) => \{[\s\S]*?\}\)\(\);\s*<\/script>\s*/g;
  const cleanedHtml = html.replace(scriptPattern, () => {
    removedInlineScript = true;
    return "\n";
  });

  if (!removedInlineScript || cleanedHtml.includes('src="assets/js/site.js"')) {
    return cleanedHtml;
  }

  return cleanedHtml.replace(/\n\s*<\/body>/, '\n    <script src="assets/js/site.js" defer></script>\n  </body>');
};

const polishHomepageCopy = (html, fileName) => {
  if (fileName !== "index.html") {
    return html;
  }

  return html
    .replace(/>View Details</g, ">Request This Item<")
    .replace(/View All Items/g, "Browse Collections");
};

const transformHtml = (html, fileName) => {
  let output = html;

  output = output.replace(/styles\.css(?:\?v=pass\d+)?/g, `styles.css?v=${assetVersion}`);
  output = output.replace(/https:\/\/fonts\.googleapis\.com\/css2\?[^\"]+/g, (fontUrl) => {
    if (fontUrl.includes("display=")) {
      return fontUrl;
    }

    return `${fontUrl}&display=swap`;
  });
  output = addHeroPreload(output, fileName);
  output = addNoIndexToThankYou(output, fileName);
  output = polishHomepageCopy(output, fileName);
  output = output.replace(/<img\b[^>]*>/gi, optimizeImageTag);
  output = externalizeInlineSiteScript(output);

  return output;
};

for (const fileName of rootHtmlFiles) {
  const source = resolve(root, fileName);
  const destination = resolve(dist, fileName);
  const html = await readFile(source, "utf8");

  await writeFile(destination, transformHtml(html, fileName));
}

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

console.log("Build complete: optimized static files copied to dist/");
