// Theme toggle. The site is light (white) by default; a visitor can switch to
// dark, and the choice is remembered in localStorage.
(function () {
  var root = document.documentElement;
  var button = document.getElementById("theme-toggle");
  if (!button) return;

  function current() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function label() {
    button.setAttribute(
      "aria-label",
      current() === "dark" ? "Switch to light theme" : "Switch to dark theme"
    );
  }

  button.addEventListener("click", function () {
    var next = current() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
    label();
  });

  label();
})();
