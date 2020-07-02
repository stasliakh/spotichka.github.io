// Корзина

const productsCountEl = document.getElementById("products_count");

const addToCartButtons = document.querySelectorAll(".add-to-cart");

for (let i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener("click", function () {
    productsCountEl.textContent = +productsCountEl.textContent + 1;
  });
}

// Лайки

const likeBtns = document.querySelectorAll(".like");

for (let i = 0; i < likeBtns.length; i++) {
  likeBtns[i].addEventListener("click", function () {
    likeBtns[i].classList.toggle("liked");
  });
}

//Cлайдер

$(".slider-block").slick({
  dots: true,
  autoplay: true,
  autoplaySpeed: 2000,
});

// Селектор

$("#sortBy").selectize({
  closeAfterSelect: true,
  persist: false,
  createOnBlur: false,
  create: true,
  dropdownParent: "body",
});

// Изменение количества

var incrementBtn = document.querySelectorAll(".increment-btn");
var decrementBtn = document.querySelectorAll(".decrement-btn");
var quantityInput = document.querySelectorAll(".product-quantity input");

for (let i = 0; i < decrementBtn.length; i++) {
  decrementBtn[i].addEventListener("click", function () {
    quantityInput[i].value = +quantityInput[i].value - 1;
    quantityInput[i].value <= 1
      ? (decrementBtn[i].disabled = true)
      : (decrementBtn[i].disabled =
          false && quantityInput[i].value >= 5
            ? (incrementBtn[i].disabled = true)
            : (incrementBtn[i].disabled = false));
  });
  incrementBtn[i].addEventListener("click", function () {
    quantityInput[i].value = +quantityInput[i].value + 1;
    quantityInput[i].value >= 5
      ? (incrementBtn[i].disabled = true)
      : (incrementBtn[i].disabled =
          false && quantityInput[i].value <= 1
            ? (decrementBtn[i].disabled = true)
            : (decrementBtn[i].disabled = false));
  });
}

// modal window

const moreDetails_btns = document.querySelectorAll(".details");
const showModal = document.querySelector(".modal");
const closeModal = document.querySelector(".btn_close");

for (let i = 0; i < moreDetails_btns.length; i++) {
  moreDetails_btns[i].addEventListener("click", function () {
    showModal.classList.add("visibility");
  });
}

closeModal.addEventListener("click", function closeModal() {
  showModal.classList.remove("visibility");
});

showModal.addEventListener("click", (e) => {
  if (e.target === showModal) {
    showModal.classList.remove("visibility");
  }
});

// modal on scroll
const halfOfSite = document.documentElement.scrollHeight / 2;

function openModal() {
  showModal.classList.add("visibility");
}

document.addEventListener("scroll", function remuveEvent() {
  if (window.scrollY >= halfOfSite) {
    openModal();
    document.removeEventListener("scroll", remuveEvent);
  }
});
