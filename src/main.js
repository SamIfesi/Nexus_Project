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
// console.log(moveSections);

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
window.addEventListener("scroll", () => {
  const chatIcon = document.querySelector(".chat");
  const scrollThreshold = window.innerHeight;

  if (window.scrollY >= scrollThreshold) {
    chatIcon.classList.add("visible");
  } else {
    chatIcon.classList.remove("visible");
  }
});

// NAVBAR LOGIC FUNCTION
const bar = document.getElementById("bar");
const xmark = document.getElementById("xmark");
const overlay = document.getElementById("overlay");
const navMenu = document.getElementById("navLinks");

bar.addEventListener("click", () => {
  navMenu.classList.add("control");
  bar.classList.add("display");
  xmark.classList.remove("display");
  overlay.classList.add("opac");
});
xmark.addEventListener("click", () => {
  navMenu.classList.remove("control");
  bar.classList.remove("display");
  xmark.classList.add("display");
  overlay.classList.remove("opac");
});
overlay.addEventListener("click", () => {
  navMenu.classList.remove("control");
  bar.classList.remove("display");
  xmark.classList.add("display");
  overlay.classList.remove("opac");
});

// FOR THE DATA-SET (DATA-DAY)
const day1 = document.getElementById("day1");
const day2 = document.getElementById("day2");
const day3 = document.getElementById("day3");
const eCards = document.querySelectorAll(".eCard");
const allDayLinks = document.querySelectorAll("[data-day-event]");

function showEvent(e) {
  e.preventDefault();
  const link = e.target.closest("a");

  if (link) {
    const selectedDay = link.dataset.dayEvent;
    allDayLinks.forEach((dayLink) => {
      dayLink.classList.remove("move");
    });
    link.classList.add("move");

    eCards.forEach((card) => {
      if (card.dataset.day === selectedDay) {
        card.classList.remove("display");
      } else {
        card.classList.add("display");
      }
    });
  }
}
day1.addEventListener("click", showEvent);
day2.addEventListener("click", showEvent);
day3.addEventListener("click", showEvent);
