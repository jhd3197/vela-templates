// Follow the Vela server's viewport.
//
// The host owns the outer viewport. It sizes this frame to the workspace it
// can actually show and reports, in the bridge context, how much of that frame
// is currently off screen — browser chrome, a device safe area, or an open
// keyboard. An app cannot work those numbers out for itself: inside a frame
// `env(safe-area-inset-*)` is zero, and the frame's own visual viewport
// describes the frame, not the phone.
//
// This mirrors the reported insets onto the document as custom properties:
//
//   --vela-inset-top  --vela-inset-right  --vela-inset-bottom  --vela-inset-left
//
// `vela-app.css` subtracts them once, on the outermost layout box, so every
// region inside simply fills what is left. Do not subtract them again lower
// down, and do not add a second estimate of the keyboard: whatever the host
// has already taken out of this frame is not in these values.
//
// Nothing is read from the host's DOM and no credentials are involved: these
// are four numbers. Load after the SDK and before the app's own script.
(function () {
  'use strict';
  var EDGES = ['top', 'right', 'bottom', 'left'];
  function apply(context) {
    var viewport = (context && context.viewport) || {};
    var insets = viewport.insets || {};
    for (var i = 0; i < EDGES.length; i++) {
      var value = Number(insets[EDGES[i]]);
      document.documentElement.style.setProperty(
        '--vela-inset-' + EDGES[i],
        (isFinite(value) && value > 0 ? Math.round(value) : 0) + 'px'
      );
    }
  }
  // Start at zero so a standalone visit, or the moment before the bridge is
  // ready, still lays out correctly.
  apply(null);
  if (typeof Vela === 'undefined') return;
  Vela.ready.then(apply).catch(function () {});
  Vela.onContext(apply);
})();
