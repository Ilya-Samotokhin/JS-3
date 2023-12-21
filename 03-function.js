/* ___________Есть два способа объявления функций

// function declaration

function greet(name) {
  console.log('Hello - my name', name);
}

//Function Expression - нельзя до инициализации вызвать функцию
const greet2 = function (name) {
  console.log('2 Hello - ', name);
};

greet('Ilya');
greet2('Ilya');

console.log(typeof greet);
console.dir(greet);
*/

/* ___________методы
// setTimeout();  Вызывает функционал по истечению времени (другая функция, 1500 полторы секунды)

setTimeout(greet, 1500); // undefined потому что не присвоено значение для name

setTimeout(greet('Ilya'), 1500); // Вызов произойдет но сразу, потеряется смысл в SetTimeout

//Частая практика вызывать через анонимную функцию

setTimeout(function () {
  greet('Ilya2');
}, 1500);

// setInterval; - выполняет функцию в интервале
setInterval(function () {
  console.log(Math.random());
}, 2000);

let counter = 0;
const interval = setInterval(function () {
  if (counter === 5) {
    clearInterval(interval);
	} else {
    console.log(++counter);
	}
}, 1000);
*/

/*_____________Arrow Function

function greet(name) {
  console.log('Hello - my name', name);
}

const arrow = name => {
  console.log('Hello - my name', name);
};

const arrow2 = name => console.log('Hello - my name', name);

arrow('Ilya');
arrow2('Ilya');

function pov(num, exp) {
  return Math.pow(num, exp);
}
console.log(pov(2, 3));

const pow2 = (num, exp) => Math.pow(num, exp); //return по умолчанию
console.log(pow2(2, 4));
*/

/*_______________Default parameters
const sum = (a = 40, b = a / 2) => a + b;

// console.log(sum(40, 2));
// console.log(sum());

// function sumAll(...numbers) {
// 	console.log(numbers);
// } //Оператор РЕСТ Все параметры положить в массив

// console.log(sumAll(1, 2, 3, 4, 5));

function sumAll(...numbers) {
	// Базовый способ решения задачи
	// let result = 0;
	// for (let num of numbers) {
	// 	result += num;
	// }
	// return result;

	return numbers.reduce((acc, cur) => (acc += cur), 0);
}

console.log(sumAll(1, 2, 3, 4, 5));
*/

/* Closures
 */
// Функция в которой есть другая функция > Пример задачи, есть человек с одним именем, но нужно добавлять разные фамилии
function createPerson(name) {
	return function (lastName) {
		console.log(name + ' ' + lastName);
	};
}

const addLastName = createPerson('Ilya');

addLastName('Samotokhin');
addLastName('Minin');
