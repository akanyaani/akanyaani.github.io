// Theme toggle. Follows the system setting until the visitor picks a theme,
// then remembers the choice in localStorage.
(function () {
  var root = document.documentElement;
  var button = document.getElementById("theme-toggle");
  if (!button) return;

  var systemDark = window.matchMedia("(prefers-color-scheme: dark)");

  function current() {
    var forced = root.getAttribute("data-theme");
    if (forced === "light" || forced === "dark") return forced;
    return systemDark.matches ? "dark" : "light";
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

  if (systemDark.addEventListener) systemDark.addEventListener("change", label);
  label();
})();
