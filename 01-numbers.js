const num = 42; // integer
const float = 42.5; // float
const pow = 10e3; // 10 в 3 степени
//const big = 1000000 // неудобно читать
const big = 1_000_000; // неудобно читать
const negative = -10;
/*
console.log(Number.MAX_SAFE_INTEGER); //Самое большое безопасное число
console.log(Math.pow(2, 53) - 1);
console.log(Number.MIN_SAFE_INTEGER); //Самое маленькое безопасное число
console.log(Number.MAX_VALUE); //Самое большое число с которым может работать JS
console.log(Number.MIN_VALUE); //Самое маленькое число
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(1 / 0);
console.log(Number.isFinite(1 / 0)); //Проверяет конечное ли число

const weird = 23 / undefined;
console.log(Number.isNaN(weird)); //Проверяет не число ли это
console.log(Number.isNaN(12));
*/

//
/*Парсинг значений

const strInt = '42';
const strFloat = '42.42';
console.log(Number(strInt));
console.log(Number(strFloat));
console.log(parseInt(strInt));
console.log(parseInt(strFloat));
console.log(parseFloat(strFloat));
console.log(strInt, strFloat);
console.log(+strInt, +strFloat);

console.log(0.1 + 0.2); // Работа с дробными числами работает не как калькулятор, всегда проверять работу с дробными числами

console.log((0.1 + 0.2).toFixed(1)); //toFixed Всегда возвращает строку
console.log(+(0.1 + 0.2).toFixed(1)); //но есть волшебный +

const fixed = (0.1 + 0.2).toFixed(10);
console.log(parseFloat(fixed));
*/

//
/*BigInt - для работы с большими цифрами > MAX_SAFE_INTEGER !!Это отдельный тип данных

console.log(Number.MAX_SAFE_INTEGER + 94224980);
console.log(BigInt(Number.MAX_SAFE_INTEGER) + 94224980n); // n - приравнивает Number к BigInt
console.log(-42n); // Он может быть отрицательным, только целые числа.

//console.log(42.42n) // error
//console.log(10n - 4) // error
console.log(parseInt(10n) - 4); // можно конвертировать в обычное число
console.log(10n - BigInt(4)); // или в BigInt
console.log(5n / 2n); // при делении получим только целое число
console.log(5 - 2);
*/

//
/* Math 

console.log(Math.E);
console.log(Math.PI);

const myNum = 4.9;

console.log(Math.sqrt(25));
console.log(Math.pow(2, 3));
console.log(Math.abs(-42));
console.log(Math.max(2, 5, 42, 199, 0));
console.log(Math.min(2, 5, 42, 199, 0));
console.log(Math.floor(myNum));
console.log(Math.ceil(myNum));
console.log(Math.round(myNum));
console.log(Math.round(4.2));
console.log(Math.trunc(myNum));
console.log(Math.random(myNum));


function getRandomNumber(min, max) {
  return Math.random() * (max - min + 1) + min;
}

const num1 = getRandomNumber(10, 100);

console.log(num1);

function getRandomFullNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const num2 = getRandomFullNumber(10, 100);

console.log(num2);

*/
