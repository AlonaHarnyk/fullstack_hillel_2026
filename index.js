// // ❗️❗️❗️ Оголошення змінних

// const a = 'variable'; // ініціалізуємо завжди зі значенням
// a = 'new variable'; // отримаємо в консолі TypeError, адже переприсвоювати значення змінним, оголошеним через const, не можна. Важливо: якщо цей рядок не закоментувати, скрипт запнеться на помилці і далі не виконуватиметься.
// let b; // можемо ініціалізувати без присвоєння значення;
// console.log(b);
// b = 'one more variable'; // значення може бути присвоєно пізніше, після ініціалізації;
// console.log(b);
// b = 'new name of variable';
// console.log(b);

// ❗️❗️❗️ Примітивний типи

// number
// string
// boolean
// null
// undefined
// bigint
// symbol

// const c = null;
// console.log(c);
// console.log(typeof c); // object

// - виведення даних:

// console.log('Hello!');
// alert('Hello!');

// // - отримання даних:

// const answer = confirm('Is your name Ivan?'); // користувач може відповісти так або відхилити питання
// console.log(answer);
const age = prompt('How old are you?'); // користувач  може ввести якісь дані або відхилити питання
console.log(age);
console.log(typeof age);
