// Корзина
const productsCountEl = document.getElementById("products_count");

const addToCartButtons = document.querySelectorAll(".add-to-cart");

for(let i = 0; i < addToCartButtons.length;i++) {
		addToCartButtons[i].addEventListener("click", function () {
			productsCountEl.textContent = +productsCountEl.textContent +1;
		})
}

// Лайки
const likeMe = document.querySelectorAll(".like");

for(let i = 0; i < likeMe.length;i++) {
	likeMe[i].addEventListener("click", function () {
	likeMe[i].classList.toggle ("like2") ;
})
}
//Cлайдер 
$('.slider-block').slick({
	dots:true,
});
// Селектор
$('#sortBy').selectize({
	closeAfterSelect: true,
	persist: false,
	createOnBlur: false,
	create: true,
	dropdownParent: 'body'
});

// Изменение количества

var incrementBtn = document.querySelectorAll('.increment-btn');
var decrementBtn = document.querySelectorAll('.decrement-btn');
var quantityInput = document.querySelectorAll('.product-quantity input');

for (let i = 0; i < decrementBtn.length; i++ ) {
	decrementBtn[i].addEventListener("click",function() {
	    quantityInput[i].value = +quantityInput[i].value - 1;
	    (quantityInput[i].value <= 1) ? decrementBtn[i].disabled = true : decrementBtn[i].disabled = false &&
	    (quantityInput[i].value >= 5) ? incrementBtn[i].disabled = true : incrementBtn[i].disabled = false;
	    })
	incrementBtn[i].addEventListener("click",function() {
   		quantityInput[i].value = +quantityInput[i].value + 1;
	    (quantityInput[i].value >= 5) ? incrementBtn[i].disabled = true : incrementBtn[i].disabled = false &&
	    (quantityInput[i].value <= 1) ? decrementBtn[i].disabled = true : decrementBtn[i].disabled = false;
	})
}

