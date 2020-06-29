const showModal = document.querySelector(".contact-information__btn");
const modalWindow = document.querySelector(".modal");

showModal.addEventListener("click", () => {
  modalWindow.classList.add("visibility");
});

modalWindow.addEventListener("click", (e) => {
  if (e.target === modalWindow) {
    modalWindow.classList.remove("visibility");
  }
});

const arrow = document.querySelector(".arrow_up");

let usedModal = false;
function onScroll() {
  if (window.scrollY >= 1000 && window.scrollY > 1000) {
    arrow.classList.add("visibility");
    usedModal = true;
  } else arrow.classList.remove("visibility");
}

document.addEventListener("scroll", onScroll);
