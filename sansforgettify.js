window.useSansForgetica = false;
if (!window.defaultFont) {
  window.defaultFont = document.body.style.fontFamily;
}

console.log("Toggling");
if (!window.useSansForgetica) {
  window.useSansForgetica = true;
  document.body.style.fontFamily = "Sans Forgetica";
} else {
  window.useSansForgetica = false;
  document.body.style.fontFamily = window.defaultFont;
}
