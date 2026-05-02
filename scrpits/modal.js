//-------------------------------------------Array
const project = [
  {
    title: "Practice Webesite",
    details: "",
    github_link:
      "https://github.com/holdenbrunner-sys/Brunner-csci181-practice",
    live_link: "https://holdenbrunner-sys.github.io/Brunner-csci181-practice/",
  },
  { title: "Website Redesign", details: "", github_link: "", live_link: "" },
  { title: "Modal Creation", details: "", github_link: "", live_link: "" },
];

//--------------------------------Modal Elements
const modal = document.querySelector("dialog");
const project_cards = document.querySelectorAll("[data-index]");
const modal_title = document.getElementById("project_title");
const modal_details = document.getElementById("project_details");
const github_link = document.getElementById("github_button");
const live_link = document.getElementById("live_link");
const close_button = document.getElementById("close_button");

//------------------------------------Functions
function openModalByIndex(index) {
  const project = projects[index];
  if (!project) return;
  modal.showModal();
  modal_title.textContent = projects[index].title;
  modal_details.textContent = projects[index].details;
  github_link.href = projects[index].github_link;
  live_link.href = projects[index].live_link;
  document.body.style.overflow = "hidden";
}
function onCardClicked(event) {
  const clicked_card = event.currentTarget;
  const index = Number(clicked_card.dataset.index);
  openModalByIndex(index);
}

for (let i = 0; i < 3; i++) {
  modal[i].addEventListener("click", onCardClicked);
}
close_button.addEventListener("click", () => {
  my_dialog.close();
  document.body.style.overflow = "";
});

console.log("tree");
