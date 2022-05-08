"strict mode";

const selectedQuestion = document.querySelectorAll(".question");
const hiddenText = document.querySelectorAll(".hidden");
const questionText = document.querySelectorAll(".question-text");
let pathToggle = document.querySelectorAll(".arrow-path");

const arrowUp = "M5 15l7-7 7 7";
const arrowDown = "M19 9l-7 7-7-7";

for (let i = 0; i < selectedQuestion.length; i++) {
  selectedQuestion[i].addEventListener("click", function () {
    hiddenText[i].classList.toggle("hidden");
    questionText[i].classList.toggle("h2-selected");

    if (pathToggle[i].getAttribute("d") === arrowUp) {
      pathToggle[i].setAttribute("d", arrowDown);
    } else {
      pathToggle[i].setAttribute("d", arrowUp);
    }
  });
}
