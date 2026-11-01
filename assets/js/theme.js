(function () {
  "use strict";
  var root = document.documentElement;
  root.classList.replace("no-js", "js");

  var COLORS = { dark: "#101713", light: "#f7f8f2" };
  var stored = null;
  var effects = true;
  try {
    stored = localStorage.getItem("theme");
    effects = localStorage.getItem("effects") !== "off";
  } catch (e) {}
  if (stored !== "dark" && stored !== "light") stored = null;

  var media = window.matchMedia("(prefers-color-scheme: light)");
  var motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  function system() { return media.matches ? "light" : "dark"; }

  function apply() {
    var current = stored || system();
    root.dataset.theme = current;
    root.dataset.effects = effects && !motion.matches ? "on" : "off";
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
    var toggle = document.getElementById("effects-toggle");
    if (toggle) {
      var active = effects && !motion.matches;
      var label = motion.matches ? "effects disabled by reduced motion preference" : "turn effects " + (active ? "off" : "on");
      toggle.disabled = motion.matches;
      toggle.setAttribute("aria-label", label);
      toggle.setAttribute("title", label);
      toggle.setAttribute("aria-pressed", active ? "true" : "false");
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
    var toggle = document.getElementById("effects-toggle");
    if (toggle) toggle.addEventListener("click", function () {
      effects = !effects;
      try { localStorage.setItem("effects", effects ? "on" : "off"); } catch (e) {}
      apply();
    });
  });
  if (media.addEventListener) media.addEventListener("change", apply);
  if (motion.addEventListener) motion.addEventListener("change", apply);
})();
