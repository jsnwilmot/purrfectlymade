import test from "node:test";
import assert from "node:assert/strict";

import { escapeHtml, sanitizeName } from "../src/js/sanitize.js";

test("sanitizeName keeps allowed name characters", () => {
  const output = sanitizeName("  Anna-Maria O'Neil  ");
  assert.equal(output, "Anna-Maria O'Neil");
});

test("sanitizeName strips script payload characters", () => {
  const output = sanitizeName("<script>alert(1)</script> Sam");
  assert.equal(output, "scriptalert1script Sam");
});

test("escapeHtml converts HTML-sensitive symbols", () => {
  const output = escapeHtml("<b>Tom & 'Sue'</b>");
  assert.equal(output, "&lt;b&gt;Tom &amp; &#39;Sue&#39;&lt;/b&gt;");
});
