# Changelog

## Unreleased

### Added

- A shared app layout every starter now ships: `vela-app.css` and
  `vela-theme.js` give an app the Vela server's surfaces, spacing, controls and
  light/dark appearance without sharing host code, DOM or credentials. The
  stylesheet covers a single work surface and a navigation panel beside one,
  including the narrow-window behavior where the panel is the first screen. The
  README explains adopting it and keeping your own accent colour.

### Changed

- Every starter fits a phone. `vela-app.css` now sizes the app to the frame the
  server gave it rather than a viewport unit, and a new `vela-viewport.js`
  mirrors the insets the server reports — browser chrome, a device safe area, an
  open keyboard — onto `--vela-inset-*`. The layout subtracts them once, on the
  outermost box, so nothing inside has to measure anything or subtract the same
  keyboard twice. Fields render at 16 pixels or more on touch so tapping one
  does not zoom the page, larger inherited text is preserved, ordinary controls
  lose the double-tap delay while pinch zoom, panning and selection stay
  available, the note list contains its own scroll chaining, and dialogs fit and
  scroll on a short screen. Copy `vela-viewport.js` beside `vela-theme.js` and
  load it after the SDK; an app without it keeps working, with the insets at
  zero.
- The notebook starter uses the shared layout and reports its state in the
  server's own visual language.

## 0.1.0 - 2026-09-14

### Added

- App starters and connection recipes for Vela developers.
- Independent GitHub downloads, artifact checks and automatic releases after main updates.
- Contributor, security and funding information with shared changelog instructions.
