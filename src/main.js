const moveBg = document.querySelectorAll(".day");
const model = document.querySelector(".model");
const faqsReply = document.querySelectorAll(".ansQ");
const tickets = document.querySelectorAll(".ticket");
const answers = document.querySelectorAll(".ans");
const arrows = document.querySelectorAll(".arrows");
const modelContainer = document.getElementById("modelContainer");
const close = document.getElementById("close");

// FOR CHANGING THE BACKGROUND OF THE LINE UP DATES
moveBg.forEach((mover) => {
  mover.addEventListener("click", (e) => {
    e.preventDefault();
    moveBg.forEach((removeMoveBg) => removeMoveBg.classList.remove("move"));
    mover.classList.add("move");
  });
});

// FOR THE BOX-MODEL
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

// FOR THE FAQs TO SHOW THE ANSWERS
answers.forEach((answer, index) => {
  answer.addEventListener("click", () => {
    console.log("hello");
    faqsReply[index].classList.toggle("active");
    answers[index].classList.toggle("colored");
    arrows[index].classList.toggle("rotate");
  });
});

// FOR THE ENGAGING MOVES IN THE UI
const moveSections = document.querySelectorAll(".transform");
console.log(moveSections);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("control");
      // console.log(entries);
    }
  });
});
moveSections.forEach((move) => {
  observer.observe(move);
});

// FOR THE CHAT ICON
// window.addEventListener("scroll", () => {
//   const chatIcon = document.querySelector(".chat");
//   const scrollThreshold = window.innerHeight;

//   if (window.scrollY >= scrollThreshold) {
//     chatIcon.classList.add("visible");
//   } else {
//     chatIcon.classList.remove("visible");
//   }
// });
