// const number4 = 57;

// if (number4 >= 50 && number4 <= 100) {
//   console.log('Here1');
// }

// if (number4 < 50 || number4 > 100) {
//   console.log('Here2');
// }
// if (0 || !null) {
//   console.log('Here3');
// }

// ❗️❗️❗️ Тернарний оператор

// const number1 = Number(prompt('Please, enter a number 1'));
// const number2 = Number(prompt('Please, enter a number 2'));

// if (number1 > number2) {
//   console.log('+');
// } else {
//   console.log('-');
// }

// ? :

// number1 > number2 ? console.log('+') : console.log('-');

// if (number1 === number2) {
//   console.log("=");
// } else {
//   if (number1 > number2) {
//     console.log("+");
//   } else {
//     console.log("-");
//   }
// }

// not recommended
// number1 === number2
//   ? console.log('=')
//   : number1 > number2
//     ? console.log('+')
//     : console.log('-');

// ❗️❗️❗️ Switch

// const number3 = Number(prompt('Please, enter number between 1 and 3'));

// if (number3 === 1) {
//   console.log('You entered 1');
// } else if (number3 === 2) {
//   console.log('You entered 2');
// } else if (number3 === 3) {
//   console.log('You entered 3');
// } else {
//   console.log('You entered another number');
// }

// switch (number3) {
//   case 1:
//     console.log('You entered 1');
//     break;
//   case 2:
//     console.log('You entered 2');
//     break;
//   case 3:
//     console.log('You entered 3');
//     break;
//   default:
//     console.log('You entered another number');
// }

// let a = 1;
// let b = 2;
// let c = 3;

// let a1 = 1,
//   b1 = 2,
//   c1 = 3;

// let a2, b2, v2;

// a2 = 1;
// b2 = 2;
// c3 = 3;

// ❗️❗️❗️ Цикли

// let counter = 1;

// while (counter <= 5) {
//   console.log(counter);
//   // counter = counter + 1
//   counter += 1;
// }

// console.log('Test');

// let number;

// do {
//   console.log('here');
//   number = Number(prompt('Input number'));
// } while (number <= 100);

// console.log(number);

// for (let i = 1; i <= 3; i += 1) {
//   console.log(i);
// }

// console.log('test');

// for (let i = 10; i <= 100; i += 20) {
//   console.log(i);
// }

// console.log('test');

// for (let i = 100; i >= 20; i -= 30) {
//   console.log(i);
// }

// console.log('test');

// const min = 10;
// const max = 15;

// for (let i = min; i <= max; i++) {
//   console.log(i);
// }

// console.log('test');

// const word = 'javascript';

// for (let i = 0; i < word.length; i += 1) {
//   console.log(word[i]);
// }

// const word = 'javascript';
// let word2 = '';

// for (let i = 0; i < word.length; i += 1) {
//   // console.log(word[i]);
//   // word2 = word2 + word[i];
//   word2 += word[i];
//   //   console.log(word2);
// }

// console.log(word2);

// for (let i = 1; i <= 10; i += 1) {
//   console.log(i);
//   if (i === 5) {
//     break;
//   }
// }

// for (let i = 1; i <= 15; i += 1) {
//   if (i / 3 === 4 || i / 2 === 5) {
//     continue;
//   }
//   console.log(i);
// }

// ❗️❗️❗️ Functions

// function logMessageWithName() {
//   const userName = prompt('What is your name?');
//   const text = `My name is ${userName}`;
//   console.log(text);
// }

// logMessageWithName();
// logMessageWithName();
// logMessageWithName();

// function add(number1, number2) {
//   console.log(number1 + number2);
// }

// add(10, 20);

// add(3, 7);

// add(348957645986, 79845764496);

// function add(number1, number2) {
//   const sum = number1 + number2;
//   console.log(sum);
// }

// add(10, 20);

// add(3, 7);

// add(348957645986, 79845764496);

// function add1(number1, number2) {
//   //   return number1 + number2;
//   const sum = number1 + number2;
//   return sum;
// }

// let sum = add1(10, 20);
// console.log(sum);

// sum += 10;

// console.log(sum);

// console.log(add1(10, 20));

// function add2(number1, number2) {
//   const sum = number1 + number2;
//   console.log(sum);
//   return sum;
// }

// const result = add2(4, 16);
// console.log(result);

// function add3(number1, number2) {
//   const sum = number1 + number2;
//   return sum;
//   console.log(sum);
// }

// function compare(num1, num2) {
//   if (num1 > num2) {
//     return '>';
//   } else {
//     return '<';
//   }
// }

// console.log(compare(10, 5));

// const res = testReturn(5, 10);

// function testReturn(num1, num2) {
//   if (num1 > num2) {
//     console.log('here');
//     return;
//   }
//   console.log('there');
// }

// const res = testReturn(10, 5);

// function add4(num1 = 0, num2 = 0, num3 = 0) {
//   console.log(num1 + num2 + num3);
// }

// add4(1, 2, 3);

// add4(1, 2);

// add4();
