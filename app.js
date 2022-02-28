const main = document.querySelector(".project-grid");

const projects = [
  {
    mode: "easy",
    title: "Form Validation",
    image: "",
    codeLink: "",
  },
  {
    mode: "easy",
    title: "Light/Dark Theme Toggle",
    image: "",
    codeLink: "",
  },
  {
    mode: "easy",
    title: "Google Maps Clone Very Long Title ",
    image: "",
    codeLink: "",
  },
];

projects.forEach(
  (project) =>
    (main.innerHTML += `
    <div class="project">
      <figure class="project-img">
        <img src="${
          project.image == ""
            ? "http://media.indiedb.com/images/games/1/43/42826/COMING_SOON.jpg"
            : project.image
        }" alt="">
      </figure>
      <h4 class="project-name">${project.title}</h4>
      <p class="project-category">${project.mode.toUpperCase()}</p>
    </div>
`)
);
