const navToggle = document.querySelector("[data-nav-toggle]");
const siteNav = document.querySelector("[data-site-nav]");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

const requestForm = document.querySelector("[data-request-form]");

if (requestForm) {
  const status = requestForm.querySelector("[data-form-status]");
  const itemType = requestForm.elements.namedItem("itemType");
  const requestedItem = new URLSearchParams(window.location.search).get("item");

  if (itemType instanceof HTMLSelectElement && requestedItem) {
    const hasOption = Array.from(itemType.options).some((option) => option.value === requestedItem);
    if (hasOption) itemType.value = requestedItem;
  }

  const setError = (field, message) => {
    const wrapper = requestForm.querySelector(`[data-field="${field}"]`);
    const error = requestForm.querySelector(`[data-error-for="${field}"]`);
    if (wrapper) wrapper.classList.toggle("has-error", Boolean(message));
    if (error) error.textContent = message;
  };

  const valueOf = (name) => {
    const field = requestForm.elements.namedItem(name);
    return field instanceof HTMLInputElement || field instanceof HTMLSelectElement || field instanceof HTMLTextAreaElement
      ? field.value.trim()
      : "";
  };

  requestForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const requiredChecks = [
      ["guardianName", "Please enter a parent or guardian name."],
      ["contactEmail", "Please enter a contact email."],
      ["itemType", "Please choose an item type."],
      ["preferredColours", "Please add preferred colours or write flexible."],
      ["message", "Please add a short request message."]
    ];

    let firstInvalid = null;
    let hasError = false;

    requiredChecks.forEach(([name, message]) => {
      const hasValue = valueOf(name).length > 0;
      setError(name, hasValue ? "" : message);
      if (!hasValue) {
        hasError = true;
        firstInvalid ||= requestForm.elements.namedItem(name);
      }
    });

    const email = requestForm.elements.namedItem("contactEmail");
    if (email instanceof HTMLInputElement && email.value && !email.validity.valid) {
      setError("contactEmail", "Please enter a valid email address.");
      hasError = true;
      firstInvalid ||= email;
    }

    const consent = requestForm.elements.namedItem("consent");
    if (!(consent instanceof HTMLInputElement) || !consent.checked) {
      setError("consent", "Please confirm that a parent or guardian will review the request.");
      hasError = true;
      firstInvalid ||= consent;
    } else {
      setError("consent", "");
    }

    const honeypot = requestForm.elements.namedItem("companyWebsite");
    if (honeypot instanceof HTMLInputElement && honeypot.value) {
      if (status) status.textContent = "Thanks. Your request could not be sent from this page.";
      return;
    }

    if (hasError) {
      if (status) status.textContent = "Please fix the highlighted fields.";
      if (firstInvalid instanceof HTMLElement) firstInvalid.focus();
      return;
    }

    if (status) status.textContent = "Opening the confirmation page.";

    /*
      Connect a real form service here later.
      Options: Formspree, Netlify Forms, EmailJS, or a custom endpoint.
      Keep parent/guardian review wording on the server confirmation too.
    */
    window.location.href = "thank-you.html";
  });
}
