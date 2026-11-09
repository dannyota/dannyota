(function () {
  "use strict";
  var root = document.documentElement;
  root.classList.replace("no-js", "js");

  var COLORS = { dark: "#101713", light: "#f7f8f2" };
  var stored = null;
  try {
    stored = localStorage.getItem("theme");
    localStorage.removeItem("effects");
  } catch (e) {}
  if (stored !== "dark" && stored !== "light") stored = null;

  var media = window.matchMedia("(prefers-color-scheme: light)");
  var motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  function system() { return media.matches ? "light" : "dark"; }

  function apply() {
    var current = stored || system();
    root.dataset.theme = current;
    root.dataset.effects = motion.matches ? "off" : "on";
    var metas = document.querySelectorAll('meta[name="theme-color"]');
    for (var i = 0; i < metas.length; i++) metas[i].setAttribute("content", COLORS[current]);

    var theme = document.getElementById("theme-toggle");
    if (theme) {
      var next = current === "dark" ? "light" : "dark";
      theme.querySelector(".icon-sun").hidden = current !== "dark";
      theme.querySelector(".icon-moon").hidden = current === "dark";
      theme.setAttribute("aria-label", "switch to " + next + " theme");
      theme.setAttribute("title", "switch to " + next + " theme");
      theme.setAttribute("aria-pressed", current === "dark" ? "true" : "false");
    }
  }

  apply();
  document.addEventListener("DOMContentLoaded", function () {
    apply();
    var theme = document.getElementById("theme-toggle");
    if (theme) theme.addEventListener("click", function () {
      var next = root.dataset.theme === "dark" ? "light" : "dark";
      stored = next === system() ? null : next;
      try {
        if (stored) localStorage.setItem("theme", stored);
        else localStorage.removeItem("theme");
      } catch (e) {}
      apply();
    });
  });
  if (media.addEventListener) media.addEventListener("change", apply);
  if (motion.addEventListener) motion.addEventListener("change", apply);
})();
