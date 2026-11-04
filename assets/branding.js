(function () {
  'use strict';

  var logos = document.querySelectorAll('[data-portal-logo]');
  if (!logos.length) return;
  var brandingUrl =
    'https://script.google.com/macros/s/' +
    'AKfycbxvxwSGxgAY54pr1iey7_PNiEB0Fi0pHM2lapKB__q7N8QGRr0RlyL6-kfzZXvyrk7u1Q' +
    '/exec?mode=branding-publik';
  var controller = new AbortController();
  var timeout = window.setTimeout(function () { controller.abort(); }, 12000);

  function fallback(logo) {
    logo.classList.remove('has-portal-logo');
    logo.replaceChildren();
    logo.style.visibility = 'hidden';
    logo.setAttribute('aria-busy', 'false');
  }

  // Only the public logo is read. Google Sign-In runs independently.
  fetch(brandingUrl, {
    credentials: 'omit',
    redirect: 'follow',
    cache: 'no-store',
    referrerPolicy: 'no-referrer',
    signal: controller.signal
  }).then(function (response) {
    if (!response.ok) throw new Error('Branding unavailable');
    return response.json();
  }).then(function (result) {
    if (!result || !result.valid || !result.data) throw new Error('Branding unavailable');
    var imageUrl = String(result.data.logoPortalDataUrl || '');
    if (!/^data:image\/(?:png|jpeg|jpg|webp);base64,[A-Za-z0-9+/=]+$/.test(imageUrl)) {
      throw new Error('Portal logo unavailable');
    }
    logos.forEach(function (logo) {
      var image = new Image();
      image.alt = 'Logo portal';
      image.onload = function () {
        logo.replaceChildren(image);
        logo.classList.add('has-portal-logo');
        logo.style.visibility = 'visible';
        logo.setAttribute('aria-busy', 'false');
      };
      image.onerror = function () { fallback(logo); };
      image.src = imageUrl;
    });
  }).catch(function () {
    logos.forEach(fallback);
  }).finally(function () {
    window.clearTimeout(timeout);
  });
})();
