var font = new FontFace(
  "Sans Forgetica",
  `url(${browser.runtime.getURL("fonts/SansForgetica.otf")})`
);
font.load().then(function(loadedFace) {
  document.fonts.add(loadedFace);
});
