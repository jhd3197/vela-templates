// Follow the Vela server's appearance preference.
//
// The host sends its theme in the bridge context and again whenever it changes,
// so an app only has to mirror it onto its own document. Nothing is read from
// the host's DOM and no credentials are involved: this is one string.
//
// Load after the SDK and before the app's own script.
(function () {
  'use strict';
  function apply(context) {
    var theme = context && context.theme === 'light' ? 'light' : 'dark';
    document.documentElement.dataset.velaTheme = theme;
  }
  // Until the bridge is ready, follow the device preference so the first paint
  // is not the wrong colour.
  try {
    apply({ theme: matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark' });
  } catch (error) {
    apply({ theme: 'dark' });
  }
  if (typeof Vela === 'undefined') return;
  Vela.ready.then(apply).catch(function () {});
  Vela.onContext(apply);
})();
