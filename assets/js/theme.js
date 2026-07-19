(function () {
  "use strict";
  var root = document.documentElement;
  root.classList.replace("no-js", "js");

  var COLORS = { dark: "#060907", light: "#f2efe4" };
  var stored = null;
  try { stored = localStorage.getItem("theme"); } catch (e) {}
  if (stored === "dark" || stored === "light") {
    root.dataset.theme = stored;
  }

  var media = window.matchMedia("(prefers-color-scheme: light)");

  function system() { return media.matches ? "light" : "dark"; }
  function effective() { return root.dataset.theme || system(); }

  function paintMeta() {
    var metas = document.querySelectorAll('meta[name="theme-color"]');
    for (var i = 0; i < metas.length; i++) {
      var m = metas[i];
      if (root.dataset.theme) {
        m.setAttribute("content", COLORS[root.dataset.theme]);
      } else {
        var mq = m.getAttribute("media") || "";
        m.setAttribute("content", mq.indexOf("light") >= 0 ? COLORS.light : COLORS.dark);
      }
    }
  }

  function label() {
    var btn = document.getElementById("theme-toggle");
    if (!btn) return;
    var cur = effective();
    btn.textContent = "theme=" + cur;
    btn.setAttribute("aria-label", "switch to " + (cur === "dark" ? "light" : "dark") + " theme");
  }

  function apply() { paintMeta(); label(); }

  paintMeta();

  document.addEventListener("DOMContentLoaded", function () {
    apply();
    var btn = document.getElementById("theme-toggle");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var next = effective() === "dark" ? "light" : "dark";
      if (next === system()) {
        delete root.dataset.theme;
        try { localStorage.removeItem("theme"); } catch (e) {}
      } else {
        root.dataset.theme = next;
        try { localStorage.setItem("theme", next); } catch (e) {}
      }
      apply();
    });
  });

  if (media.addEventListener) media.addEventListener("change", apply);
})();
