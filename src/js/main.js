import { SITE_CONFIG } from "../site.config.js";

const currentYearNode = document.querySelector("#current-year");
if (currentYearNode) {
  currentYearNode.textContent = String(new Date().getFullYear());
}

if (document.title.includes("Purrfectly Made") && SITE_CONFIG.seo.titleSuffix) {
  document.title = `Purrfectly Made${SITE_CONFIG.seo.titleSuffix}`;
}
