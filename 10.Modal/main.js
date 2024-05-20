const openModalBtn = document.querySelector(".openModal");
const modalbackground = document.querySelector(".modal_background");
const closeIcon = document.querySelector(".close-icon");
const closeBtn = document.querySelector(".close");

openModalBtn.addEventListener("click", () => {
  modalbackground.style.display = "block";
});

closeIcon.addEventListener("click", () => {
  modalbackground.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modalbackground) {
    modalbackground.style.display = "none";
  }
});
closeBtn.addEventListener("click", () => {
    modalbackground.style.display = "none";
  });
