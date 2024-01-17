/* 1.  Ви прийшли в Макдональдз з трьома друзями.
Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
то виводити в консоль текст "Ми йдемо в інше кафе"
(Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)
 */

const hamburger = 4;
const fries = 1;

if (hamburger >= 4 && fries) {
    console.log('Ми поїли');
} else {
    console.log('Ми йдемо в інше кафе')
}

/* 2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль. */

let anyNumber = 1000;

if (anyNumber >= 1000 && anyNumber <= 1900) {
    console.log('Your number is between 1000 and 1900')
} else {
    console.log('Your number is less that 1000 or more that 1900')
}

/*   3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
   Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
   Результат виводити в консоль. */

let number = 1901;

if (number < 1000 || number > 1900) {
    console.log('Your number is not between 1000 and 1900')
} else {
    console.log('Your number is between 1000 and 1900')
}

// ! operator
let numberNot = 1000;

if (!(numberNot > 999 && numberNot < 1901)) {
    console.log('Your number is not between 1000 and 1900');
} else {
    console.log('Your number is between 1000 and 1900');
}

/* 4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль. */

let season = 2;

if (season === 1) {
    console.log("It's summer")
} else if (season === 2) {
    console.log("It's fall")
} else if (season === 3) {
    console.log("It's winter")
} else if (season === 4) {
    console.log("It's spring")
} else {
    console.log('Your input is not a season')
}

/* Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє мід цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль. */

let numA = 10;
let numB = 0;
let numC = -1;

if (numA > numB && numA < numC || numA > numC && numA < numB) {
    console.log('Number a has the middle value')
} else if (numB > numA && numB < numC || numB > numC && numB < numA) {
    console.log('Number b has the middle value')
} else {
    console.log('Number c has the middle value')
}

/* 6.  Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль. */

let weekNumber = 1

switch (weekNumber) {
    case 1:
        console.log('Sunday');
        break;
    case 2:
        console.log('Mondey');
        break;
    case 3:
        console.log('Tuesday');
        break;
    case 4:
        console.log('Wednesday');
        break;
    case 5:
        console.log('Thursday');
        break;
    case 6:
        console.log('Friday');
        break;
    case 7:
        console.log('Saturday');
        break;
    default:
        console.log("Your value doesn't match any of the days of the week");
        break;
}

/* 7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль. */

let mathOperator = '*'
let x = 5;
let y = 5;

switch (mathOperator) {
    case '+':
        console.log(x + y);
        break;
    case '-':
        console.log(x - y);
        break;
    case '/':
        console.log(x / y);
        break;
    case '*':
        console.log(x * y);
        break;
    default:
        console.log("The math expession cannot be calculated");
        break;
}

/* 13.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова. */

const text = "HellO world!";
const removeVowels = text.replace(/[aeiou]/gi, '')

console.log(removeVowels)

/* 14.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закінченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д. */

let meters = 1500;

if (meters / 1000 === 1) {
    console.log(meters + ' meters is ' + meters / 1000 + ' kilometer')
} else if (meters / 1000 < 1 || meters / 1000 > 1) {
    console.log(meters + ' meters is ' + meters / 1000 + ' kilometers')
}