// ❗️❗️❗️ NUMBER ❗️❗️❗️

// ❗️❗️❗️ Приведення до числа
// const a = '5';
// console.log(a);
// const b = Number(a);
// const c = +a;
// console.log(b);
// console.log(c);

// ❗️❗️❗️ Правила приведення різних типів до числа:
// true --> 1
// false --> 0
// '', а також рядок з пробілами --> 0
// null --> 0
// undefined --> NaN
// не порожній рядок --> якщо рядок складається лише з цифр, відбувається приведення до числа. В іншому випадку - NaN.

// NaN // not a number
// console.log(typeof NaN);

// ❗️❗️❗️ Number.isNaN / isNaN

// const a = 123;
// const b = 'qwerty';

// console.log(Number.isNaN(a)); // false
// console.log(Number.isNaN(b)); // false

// const toNumber = Number(b);
// console.log(toNumber); // NaN;
// console.log(Number.isNaN(toNumber)); // true;

// console.log(isNaN(b)); // true;

// const num1 = 5;
// const num2 = 10;
// const sum = num1 + num2;
// console.log(sum);

// console.log(10 - 5);
// console.log(2 * 5);
// console.log(10 / 5);

// ❗️❗️❗️ Присвоєння з операцією

// let value = 5;

// value = value + 10;
// console.log(value); // 15
// value = value + 10;
// console.log(value); // 25

// value += 10;
// console.log(value); // 15
// value += 10;
// console.log(value); // 25

// let value1 = 10;

// value1 = value1 - 2;
// console.log(value1); // 8
// value1 = value1 - 2;
// console.log(value1); // 6

// value1 -= 2;
// console.log(value1); // 8
// value1 -= 2;
// console.log(value1); // 6

// const num1 = Number.parseInt('56823.38erkjgvberk');
// console.log(num1);
// console.log(Number.isInteger(num1));
// const num2 = Number.parseFloat('56823.38erkjgvberk');
// console.log(num2);
// console.log(Number.isInteger(num2));

// const num3 = 124.3657;
// const value = num3.toFixed(2);
// console.log(value);
// const num4 = Number(value);
// console.log(num4);

// const a = 0.1 + 0.2;
// console.log(a);
// console.log(a.toFixed(1));
// const b = 0.3 + 0.6;
// console.log(b);
// console.log(b.toFixed(1));

// ❗️❗️❗️ STRING ❗️❗️❗️

// ❗️❗️❗️ Приведення до рядка
// const num = 123;
// const str1 = String(num);
// console.log(str1);
// const str2 = num + '';
// console.log(str2);

// const str3 = true + '';
// console.log(str3);

// ❗️❗️❗️ Шаблонні рядки (template strings)
// const userName = prompt('What is your name?');
// console.log(userName);

// // const text = 'My name is Alona';
// const text1 = `My name is ${userName}`;

// console.log(text1);

// ❗️❗️❗️ length
// const a = 'erjejnretlknhkt';
// console.log(a.length); // довжина

// ❗️❗️❗️ indexes
const a = 'superjavascript';

// console.log(a[5]); // j
// console.log(a[0]); // s
// console.log(a[a.length - 1]); // t
// console.log(a[20]); // undefined

// ❗️❗️❗️ Методи рядків

// const word = 'tEsT';
// console.log(word.toLowerCase()); // test
// console.log(word.toUpperCase()); // TEST

const word1 = 'superjavascript';
// console.log(word1.includes('super')); // true
// console.log(word1.includes('html')); // false

// console.log(word1.indexOf('java')); // 5
// console.log(word1.indexOf('html')); // -1
// console.log(word1.indexOf("a")); // 6
// console.log(word1.lastIndexOf("a")); // 8

// const word2 = '    string ';
// console.log(word2.trim());
// console.log(word2.trimEnd());
// console.log(word2.trimStart());

// const text1 = 'Я люблю яблука';
// const newText = text1.replace('яблука', 'апельсини');
// console.log(newText); // 'Я люблю апельсини'

// const text2 = 'Рама, рама, рама';
// console.log(text2.replaceAll('рама', 'двері')); // 'Рама, двері, двері'

// const word3 = word1.slice();
// console.log(word3); // копія
// console.log(word1.slice(0)); // копія
// console.log(word1.slice(0, word1.length)); // копію

// console.log(word1.slice(5)); //javascript
// console.log(word1.slice(0, 5)); //super
// console.log(word1.slice(5, 9));

// ❗️❗️❗️ Операції з приведенням типів

// console.log(2 + 5 + '' + 1 + 0 - 10); // 700
// console.log('710bjk' - 10); // NaN
// console.log('' + 1 - 0); // 1
