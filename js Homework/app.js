// Скидка
discountCalc = wholePrice - (wholePrice * discount / 100);

function discountCalc() {
	wholePrice = +prompt("Вкажіть загальну вартість покупок", "");
	discount = wholePrice == 0 ? 0 :
			   (wholePrice >= 1 && wholePrice <= 1000) ? 3 :
			   (wholePrice >= 1001 && wholePrice <= 5000) ? 5 :
			    wholePrice >= 5001 ? 7 :
			    7;
	discountPrice = wholePrice * discount / 100;
	discountCalc = wholePrice - discountPrice;
	return 	alert(`Сумма знижки складає ${discountPrice}грн., до сплати: ${discountCalc} грн.`)
	}

discountCalc();

// Функція

function test(a = 100,b = 77,c = false) {
	if (c === false && a < b ) {
		return a;
	} else if 
		(c === false && a > b)
		return b;
	  else if
		(c === true && a > b)
		return a;
	   else {
	   	(c === true && a < b)
	   	return b;
	   }
	}

// Останній елемент числового масиву

let numbers = [1000, 21, 50, 440, 20, 30, 100, 2000];
x = numbers.length;
alert(numbers[--x]);

// Сумма чисел масиву
let z = 0;

for (let i = 0; i < (numbers.length - 1); i++) {
	z += numbers[i];
}
alert(z);

// Найбільше число
let x = numbers[0];

for (let i = 0; i < numbers.length; i++) {
	if (x < numbers[i]) {x = numbers[i]};
}
alert(x);

// Найменше число

let x = numbers[0];

for (let i = 0; i < numbers.length; i++) {
	if (x > numbers[i]) {x = numbers[i]};
}
alert(x);











