// Can be done without js using hidden checkbox field
// But it's a Javascript RoadMap xd
const themeToggleEl = document.getElementById("theme-toggle");

themeToggleEl.onclick = () => {
  document.body.classList.toggle("dark");
};
