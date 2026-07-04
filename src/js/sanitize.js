const NAME_ALLOWED_CHARS = /[^a-zA-Z0-9' -]/g;

export function sanitizeName(name) {
  if (typeof name !== "string") {
    return "";
  }

  const collapsed = name.trim().replace(/\s+/g, " ");
  return collapsed.replace(NAME_ALLOWED_CHARS, "");
}

export function escapeHtml(value) {
  if (typeof value !== "string") {
    return "";
  }

  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
