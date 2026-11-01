(function () {
  "use strict";
  var root = document.documentElement;
  var el = document.getElementById("hero-cmd");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (el && !reduce.matches && root.dataset.effects !== "off") {
    var text = el.textContent;
    var i = 0;
    el.textContent = "";
    var tick = function () {
      if (reduce.matches || root.dataset.effects === "off") {
        el.textContent = text;
        return;
      }
      i += 1;
      el.textContent = text.slice(0, i);
      if (i < text.length) setTimeout(tick, 65);
    };
    setTimeout(tick, 120);
  }
})();
