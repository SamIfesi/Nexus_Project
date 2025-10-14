const moveBg = document.querySelectorAll(".day");

moveBg.forEach((mover) => {
  mover.addEventListener("click", (e) => {
    e.preventDefault();
    moveBg.forEach((removeMoveBg) => removeMoveBg.classList.remove("move"));
    mover.classList.add("move");
  });
});
