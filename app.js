const main = document.querySelectorAll(".project-grid");

const projects = [
  // Easy
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
    title: "Google Maps Clone",
    image: "",
    codeLink: "",
  },
  {
    mode: "easy",
    title: "Analog Clock",
    image: "",
    codeLink: "",
  },
  {
    mode: "easy",
    title: "Impossible To Click Button",
    image: "",
    codeLink: "",
  },
  {
    mode: "easy",
    title: "Simple Tabs",
    image: "",
    codeLink: "",
  },
  {
    mode: "easy",
    title: "Rock Paper Scissors Game",
    image: "",
    codeLink: "",
  },
  {
    mode: "easy",
    title: "Text To Speech",
    image: "",
    codeLink: "",
  },
  {
    mode: "easy",
    title: "Eye Tracking Program",
    image: "",
    codeLink: "",
  },
  {
    mode: "easy",
    title: "Expandable Content",
    image: "",
    codeLink: "",
  },
  {
    mode: "easy",
    title: "Modal",
    image: "",
    codeLink: "",
  },
  // Medium
  {
    mode: "medium",
    title: "Password Strength Tester",
    image: "",
    codeLink: "",
  },
  {
    mode: "medium",
    title: "Password Generator",
    image: "",
    codeLink: "",
  },
  {
    mode: "medium",
    title: "Quiz App",
    image: "",
    codeLink: "",
  },
  {
    mode: "medium",
    title: "Card Game",
    image: "",
    codeLink: "",
  },
  {
    mode: "medium",
    title: "Snake Game",
    image: "",
    codeLink: "",
  },
  {
    mode: "medium",
    title: "AI Face Detection",
    image: "",
    codeLink: "",
  },
  {
    mode: "medium",
    title: "AI Face Recognition",
    image: "",
    codeLink: "",
  },
  {
    mode: "medium",
    title: "Thanos Snap Effect",
    image: "",
    codeLink: "",
  },
  {
    mode: "medium",
    title: "Sortable Drag And Drop",
    image: "",
    codeLink: "",
  },
  {
    mode: "medium",
    title: "Speed Typing Game",
    image: "",
    codeLink: "",
  },
  {
    mode: "medium",
    title: "Tic Tac Toe",
    image: "",
    codeLink: "",
  },
  {
    mode: "medium",
    title: "Browser Based Guitar Amp",
    image: "",
    codeLink: "",
  },
  {
    mode: "medium",
    title: "Text Adventure Game",
    image: "",
    codeLink: "",
  },
  // Hard
  {
    mode: "hard",
    title: "Custom Select Dropdown",
    image: "",
    codeLink: "",
  },
  {
    mode: "hard",
    title: "Calculator",
    image: "",
    codeLink: "",
  },
  {
    mode: "hard",
    title: "Card Matching Game",
    image: "",
    codeLink: "",
  },
  {
    mode: "hard",
    title: "Advanced Todo List",
    image: "",
    codeLink: "",
  },
  {
    mode: "hard",
    title: "Mars Weather App",
    image: "",
    codeLink: "",
  },
  {
    mode: "hard",
    title: "Battleship Clone",
    image: "",
    codeLink: "",
  },
];

const easyProjects = projects.filter((project) => project.mode === "easy");

var currentElement = main[0];
projects.forEach((project) => {
  if (project.mode === "medium") {
    currentElement = main[1];
    console.log("medium");
  }
  if (project.mode === "hard") {
    currentElement = main[2];
  }
  currentElement.innerHTML += `
    <a href="/Javascript-RoadMap/${project.title}"><div class="project">
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
    </a>
`;
});
