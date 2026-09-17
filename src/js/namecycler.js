var names = [
  { name: "Krishna",  font: "'Sunday Inspired', cursive",        size: "58px", weight: "400" },
  { name: "\u514b\u91cc\u5e0c\u7eb3",  font: "'Noto Sans SC', sans-serif",           size: "34px", weight: "700" },
  { name: "\u0915\u0943\u0937\u094d\u0923\u093e",  font: "'Noto Sans Devanagari', sans-serif",   size: "42px", weight: "700" },
  { name: "\u30af\u30ea\u30b7\u30e5\u30ca", font: "'Noto Sans JP', sans-serif",            size: "31px", weight: "700" },
  { name: "\ud06c\ub9ac\uc288\ub098", font: "'Noto Sans KR', sans-serif",            size: "34px", weight: "700" },
  { name: "\u0b95\u0bbf\u0bb0\u0bc1\u0bb7\u0bcd\u0ba3\u0bbe", font: "'Noto Sans Tamil', sans-serif",         size: "28px", weight: "700" },
  { name: "\u0c15\u0c43\u0c37\u0c4d\u0c23",  font: "'Noto Sans Telugu', sans-serif",        size: "42px", weight: "700" },
  { name: "\u0c95\u0cc3\u0cb7\u0ccd\u0ca3",  font: "'Noto Sans Kannada', sans-serif",       size: "42px", weight: "700" },
  { name: "\u0d15\u0d43\u0d37\u0d4d\u0d23",  font: "'Noto Sans Malayalam', sans-serif",     size: "40px", weight: "700" },
  { name: "\u0a15\u0a4d\u0a30\u0a3f\u0a38\u0a3c\u0a28\u0a3e", font: "'Noto Sans Gurmukhi', sans-serif",     size: "34px", weight: "700" },
  { name: "\u0a95\u0ac3\u0ab7\u0acd\u0aa3",  font: "'Noto Sans Gujarati', sans-serif",      size: "42px", weight: "700" },
  { name: "\u0b16\u0b4d\u0b30\u0b40\u0b37\u0b4d\u0b23",  font: "'Noto Sans Oriya', sans-serif",         size: "38px", weight: "700" }
];

(function () {
  var el = document.getElementById("nameDisplay");
  if (!el) return;

  var i = 0;

  function next() {
    el.classList.add("fade-out");
    el.classList.remove("fade-in");

    setTimeout(function () {
      i = (i + 1) % names.length;
      var n = names[i];
      el.textContent = n.name;
      el.style.fontFamily = n.font;
      el.style.fontSize = n.size;
      el.style.fontWeight = n.weight;
      void el.offsetHeight;
      el.classList.remove("fade-out");
      el.classList.add("fade-in");
    }, 150);
  }

  el.classList.add("fade-in");
  setInterval(next, 1100);
})();
