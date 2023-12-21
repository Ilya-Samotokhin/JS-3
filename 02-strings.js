const firstName = 'Илья';
const age = 26;
/*
//ver1
// const old = 'Hello my name is ' + name;
const output = `Hello my name is ${name} and my age is ${age}`;

console.log(output);

//ver1
function getAge() {
	return age;
}

const output1 = `Hello my name is ${name} and my age is ${
	getAge() > 18 ? 'Can drive' : "Can't Drive" // Символ Экранизации "\" или `Can't Drive`
}`;

console.log(output1);
*/

//Свойство
console.log(firstName.length);
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());
console.log(firstName.charAt(3)); //символ
console.log(firstName.indexOf('ь')); //Индекс
console.log(firstName.startsWith('ил'));
console.log(firstName.toLowerCase().startsWith('ил'));
console.log(firstName.endsWith('я'));
console.log(firstName.repeat(10));

const password = '    my super pass     '; // нужно убрать пробелы

console.log(password.trim());
