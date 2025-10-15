const moveBg = document.querySelectorAll(".day");
const model = document.querySelector(".model");
const faqsReply = document.querySelectorAll(".ansQ");
const tickets = document.querySelectorAll(".ticket");
const answers = document.querySelectorAll(".ans");
const arrows = document.querySelectorAll(".arrows");
const modelContainer = document.getElementById("modelContainer");
const close = document.getElementById("close");

moveBg.forEach((mover) => {
  mover.addEventListener("click", (e) => {
    e.preventDefault();
    moveBg.forEach((removeMoveBg) => removeMoveBg.classList.remove("move"));
    mover.classList.add("move");
  });
});

tickets.forEach((ticket) => {
  ticket.addEventListener("click", () => {
    modelContainer.classList.add("show");
    setTimeout(() => {
      model.classList.add("open");
      document.body.style.overflow = "hidden";
    }, 500);
  });
});
close.addEventListener("click", () => {
  model.classList.remove("open");
  setTimeout(() => {
    document.body.style.overflow = "";
    modelContainer.classList.remove("show");
  }, 1500);
});
answers.forEach((answer, index) => {
  answer.addEventListener("click", () => {
    console.log("hello");
    faqsReply[index].classList.toggle("active");
    answers[index].classList.toggle("colored");
    arrows[index].classList.toggle("rotate");
  });
});
