(function () {
  "use strict";
  document.documentElement.classList.replace("no-js", "js");

  var el = document.getElementById("hero-cmd");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (el && !reduce) {
    var text = el.textContent;
    var line = el.closest(".promptline");
    el.textContent = "";
    line.classList.add("typing");
    var i = 0;
    var tick = function () {
      i += 1;
      el.textContent = text.slice(0, i);
      if (i < text.length) {
        setTimeout(tick, 55 + Math.random() * 65);
      } else {
        line.classList.remove("typing");
      }
    };
    setTimeout(tick, 350);
  }

  console.log(
    "%c danny.vn %c go get danny.vn/{s1,secops,fortigate,fortimgr,nessus,vngcloud,kaggle}",
    "background:#46e07d;color:#04140a;font-family:monospace",
    "color:#f5b453;font-family:monospace"
  );
})();
