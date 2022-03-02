const themeToggleEl = document.getElementById("theme-toggle");

themeToggleEl.onclick = () => {
  document.body.classList.toggle("dark");
};
