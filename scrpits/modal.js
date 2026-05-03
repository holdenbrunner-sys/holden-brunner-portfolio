//-------------------------------------------Array
const projects = [
  {
    title: "Practice Webesite",
    details:
      "The website I first used when creating websites with HTML. Includes all my pracitces from using HTML design. Including creating hero sections, navigation, accessibility, Flexbox and JavaScript ",
    github_link:
      "https://github.com/holdenbrunner-sys/Brunner-csci181-practice",
  },
  {
    title: "Website Redesign",
    details:
      "I took an out of date website and improved it using proper HTML structure and desighn layouts.",
    github_link: "https://github.com/holdenbrunner-sys/brunner-csci181-p1",
  },
  {
    title: "Modal Creation",
    details:
      "I used JavaScript to create modals which contained various other projects of mine.",
    github_link: "https://github.com/holdenbrunner-sys/Brunner-csci181-p2",
  },
];

//--------------------------------Modal Elements
const modal = document.querySelector("dialog");
const project_cards = document.querySelectorAll("[data-index]");
const modal_title = document.getElementById("project_title");
const modal_details = document.getElementById("project_details");
const github_link = document.getElementById("github_button");
const close_button = document.getElementById("close_button");

//------------------------------------Functions
function openModalByIndex(index) {
  const project = projects[index];
  if (!project) return;
  modal.showModal();
  modal_title.textContent = projects[index].title;
  modal_details.textContent = projects[index].details;
  github_link.href = projects[index].github_link;
  document.body.style.overflow = "hidden";
}
function onCardClicked(event) {
  const clicked_card = event.currentTarget;
  const index = Number(clicked_card.dataset.index);
  openModalByIndex(index);
}

for (let i = 0; i < project_cards.length; i++) {
  project_cards[i].addEventListener("click", onCardClicked);
}
close_button.addEventListener("click", () => {
  modal.close();
});
modal.addEventListener("close", function () {
  document.body.style.overflow = "";
});
console.log("tree");
