(() => {
  const header = document.querySelector('.site-header');
  const menuButton = document.querySelector('.menu-toggle');
  const menuPanel = document.getElementById('mobile-menu');
  const mobileMq = window.matchMedia('(max-width: 930px)');

  if (header && menuButton && menuPanel) {
    const menuLinks = Array.from(menuPanel.querySelectorAll('a'));
    const focusableMenuItems = [menuButton, ...menuLinks];

    const setOpen = (isOpen) => {
      header.classList.toggle('menu-open', isOpen);
      menuPanel.hidden = !isOpen;
      menuButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    };

    const closeMenu = (returnFocus = false) => {
      setOpen(false);
      if (returnFocus) {
        menuButton.focus();
      }
    };

    setOpen(false);

    menuButton.addEventListener('click', () => {
      const expanded = menuButton.getAttribute('aria-expanded') === 'true';
      setOpen(!expanded);

      if (!expanded && menuLinks.length > 0) {
        requestAnimationFrame(() => menuLinks[0].focus());
      }
    });

    menuLinks.forEach((link) => {
      link.addEventListener('click', () => closeMenu(false));
    });

    document.addEventListener('keydown', (event) => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';

      if (event.key === 'Escape' && isOpen) {
        closeMenu(true);
        return;
      }

      if (event.key !== 'Tab' || !isOpen || !mobileMq.matches) {
        return;
      }

      const firstItem = focusableMenuItems[0];
      const lastItem = focusableMenuItems[focusableMenuItems.length - 1];

      if (event.shiftKey && document.activeElement === firstItem) {
        event.preventDefault();
        lastItem.focus();
      } else if (!event.shiftKey && document.activeElement === lastItem) {
        event.preventDefault();
        firstItem.focus();
      }
    });

    document.addEventListener('click', (event) => {
      if (!header.contains(event.target)) {
        closeMenu(false);
      }
    });

    const syncForDesktop = () => {
      if (!mobileMq.matches) {
        closeMenu(false);
      }
    };

    if (typeof mobileMq.addEventListener === 'function') {
      mobileMq.addEventListener('change', syncForDesktop);
    } else if (typeof mobileMq.addListener === 'function') {
      mobileMq.addListener(syncForDesktop);
    }
  }

  const requestForm = document.getElementById('custom-order-form');
  const formStatus = document.getElementById('request-form-status');

  if (!requestForm || !formStatus) {
    return;
  }

  const submitButton = requestForm.querySelector('button[type="submit"]');

  const setFormStatus = (message, type) => {
    formStatus.textContent = message;
    formStatus.classList.remove('is-error', 'is-success', 'is-loading');
    if (type) {
      formStatus.classList.add(type);
    }
  };

  const setSubmitState = (isSubmitting) => {
    if (!submitButton) {
      return;
    }

    submitButton.disabled = isSubmitting;
    submitButton.setAttribute('aria-busy', isSubmitting ? 'true' : 'false');
  };

  requestForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!requestForm.checkValidity()) {
      requestForm.reportValidity();
      setFormStatus('Please complete all required fields.', 'is-error');
      return;
    }

    const data = new FormData(requestForm);
    const accessKey = (data.get('access_key') || '').toString().trim();

    if (!accessKey || accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY') {
      setFormStatus('This request form is not active yet. A Web3Forms access key must be added before live submissions can be sent.', 'is-error');
      return;
    }

    try {
      setSubmitState(true);
      setFormStatus('Sending request...', 'is-loading');

      const response = await fetch(requestForm.action, {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json'
        }
      });
      const result = await response.json();

      if (response.ok && result.success) {
        requestForm.reset();
        window.location.assign('thank-you.html');
        return;
      }

      setFormStatus(result.message || 'Unable to send your request right now. Please try again.', 'is-error');
      setSubmitState(false);
    } catch {
      setFormStatus('Unable to send your request right now. Please try again.', 'is-error');
      setSubmitState(false);
    }
  });
})();
