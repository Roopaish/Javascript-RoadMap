const main = document.querySelectorAll(".project-grid");

const projects = [
  // Easy
  {
    mode: "easy",
    title: "Form Validation",
    image: "form-validation.png",
  },
  {
    mode: "easy",
    title: "Light/Dark Theme Toggle",
    image: "",
  },
  {
    mode: "easy",
    title: "Google Maps Clone",
    image: "",
  },
  {
    mode: "easy",
    title: "Analog Clock",
    image: "",
  },
  {
    mode: "easy",
    title: "Impossible To Click Button",
    image: "",
  },
  {
    mode: "easy",
    title: "Simple Tabs",
    image: "",
  },
  {
    mode: "easy",
    title: "Rock Paper Scissors Game",
    image: "",
  },
  {
    mode: "easy",
    title: "Text To Speech",
    image: "",
  },
  {
    mode: "easy",
    title: "Eye Tracking Program",
    image: "",
  },
  {
    mode: "easy",
    title: "Expandable Content",
    image: "",
  },
  {
    mode: "easy",
    title: "Modal",
    image: "",
  },
  // Medium
  {
    mode: "medium",
    title: "Password Strength Tester",
    image: "",
  },
  {
    mode: "medium",
    title: "Password Generator",
    image: "",
  },
  {
    mode: "medium",
    title: "Quiz App",
    image: "",
  },
  {
    mode: "medium",
    title: "Card Game",
    image: "",
  },
  {
    mode: "medium",
    title: "Snake Game",
    image: "",
  },
  {
    mode: "medium",
    title: "AI Face Detection",
    image: "",
  },
  {
    mode: "medium",
    title: "AI Face Recognition",
    image: "",
  },
  {
    mode: "medium",
    title: "Thanos Snap Effect",
    image: "",
  },
  {
    mode: "medium",
    title: "Sortable Drag And Drop",
    image: "",
  },
  {
    mode: "medium",
    title: "Speed Typing Game",
    image: "",
  },
  {
    mode: "medium",
    title: "Tic Tac Toe",
    image: "",
  },
  {
    mode: "medium",
    title: "Browser Based Guitar Amp",
    image: "",
  },
  {
    mode: "medium",
    title: "Text Adventure Game",
    image: "",
  },
  // Hard
  {
    mode: "hard",
    title: "Custom Select Dropdown",
    image: "",
  },
  {
    mode: "hard",
    title: "Calculator",
    image: "",
  },
  {
    mode: "hard",
    title: "Card Matching Game",
    image: "",
  },
  {
    mode: "hard",
    title: "Advanced Todo List",
    image: "",
  },
  {
    mode: "hard",
    title: "Mars Weather App",
    image: "",
  },
  {
    mode: "hard",
    title: "Battleship Clone",
    image: "",
  },
];

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
            : "/img/" + project.image
        }" alt="">
      </figure>
      <h4 class="project-name">${project.title}</h4>
      <p class="project-category">${project.mode.toUpperCase()}</p>
    </div>
    </a>
`;
});
