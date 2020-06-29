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

const adittionalContent = document.querySelectorAll(".showContent");

const showMoreBtn = document.querySelector(".lovely-gallery__button");

// showMoreBtn.addEventListener("click", () => {
//   adittionalContent.classList.toggle("aditional__block");
// });

for (let i = 0; i < adittionalContent.length; i++) {
  showMoreBtn.addEventListener("click", () => {
    adittionalContent[i].classList.toggle("aditional");
    showMoreBtn.innerHTML =
      showMoreBtn.innerHTML === "SHOW ME MORE"
        ? (showMoreBtn.innerHTML = "HIDE ELSE")
        : (showMoreBtn.innerHTML = "SHOW ME MORE");
  });
}
