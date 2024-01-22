/* 1.  Ви прийшли в Макдональдз з трьома друзями.
Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
то виводити в консоль текст "Ми йдемо в інше кафе"
(Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)
 */


const checkFood = (hamburger, fries) => {
    if (hamburger >= 4 && fries >= 1) {
        console.log('Ми поїли');
    } else {
        console.log('Ми йдемо в інше кафе');
    }
}

const hamburgerTotal = 4;
const friesTotal = 1;
checkFood(hamburgerTotal, friesTotal);

/* 2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль. */

const checkNumber = (anyNumber) => {
    if (anyNumber >= 1000 && anyNumber <= 1900) {
        console.log('Your number is between 1000 and 1900')
    } else {
        console.log('Your number is less than 1000 or more than 1900')
    }
}

    const selectedNumber = 10000;
    checkNumber(selectedNumber);

/*   3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
   Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
   Результат виводити в консоль. */

const checkNumber2 = (number) => {
    if (number < 1000 || number > 1900) {
        console.log('Your number is not between 1000 and 1900')
    } else {
        console.log('Your number is between 1000 and 1900')
    } 
}

   const customerInput = 1900;
   checkNumber2(customerInput)

// ! operator
const checkNumberNot = (numberNot) => {
    if (!(numberNot > 999 && numberNot < 1901)) {
        console.log('Your number is not between 1000 and 1900');
    } else {
        console.log('Your number is between 1000 and 1900');
    }
};

const selectedNumberNot = 10000;
checkNumberNot(selectedNumberNot);

/* 4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль. */

    const checkSeason = (season) => {
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
    }

    const inputSeason = 2;
    checkSeason(inputSeason);

/* Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє мід цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль. */

    const findMiddleNumber = (numA, numB, numC) => {
        if ((numA > numB && numA < numC) || (numA > numC && numA < numB)) {
            console.log('Number A has the middle value');
        } else if ((numB > numA && numB < numC) || (numB > numC && numB < numA)) {
            console.log('Number B has the middle value');
        } else {
            console.log('Number C has the middle value');
        }
    };
    
    const inputNumA = 10;
    const inputNumB = 0;
    const inputNumC = -1;
    findMiddleNumber(inputNumA, inputNumB, inputNumC);

/* 6.  Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль. */

    const dayOfWeek = (weekNumber) => {
        switch (weekNumber) {
            case 1:
                console.log('Sunday');
                break;
            case 2:
                console.log('Monday');
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
    };
    
    const weekNumber = 1;
    dayOfWeek(weekNumber);

/* 7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль. */

    const calculate = (mathOperator, x, y) => {
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
                console.log("The math expression cannot be calculated");
                break;
        }
    };
    
    const inputOperator = '*';
    const inputX = 5;
    const inputY = 5;
    calculate(inputOperator, inputX, inputY);

/* 8. Використовуючи цикл for перемістити значення від 1 до 5 у масив myArray. */

    const myArray = (array) => {
        for(let i = 0; i < 6; i++){
            array.push(i);
         }
    }

const inputArray = [];
myArray(inputArray)
console.log(inputArray);

/* 9. Напишіть 2 цикли.
   За допомогою першого передайте парні числа від 1 до 9 у myArray за допомогою циклу for.
   За допомогою другого передайте непарні числа від 1 до 9 у myArray за допомогою циклу for. */

   const evenArray = () => {
    const myArrayEven = [];
    for (let i = 2; i < 10; i += 2) {
        myArrayEven.push(i);
    }
    return myArrayEven;
};

const resultEven = evenArray();
console.log(resultEven);

// odd
const oddArray = () => {
    const myArrayOdd = [];
    for (let i = 1; i < 10; i += 2) {
        myArrayOdd.push(i);
    }
    return myArrayOdd;
};

const resultOdd = oddArray();
console.log(resultOdd);

/* 10. Оголоcіть та ініціалізуйте змінну total = 0.
    Використовуйте цикл for, щоб додати значення кожного елемента масиву myArr до підсумку.
    const myArr = [2, 3, 4, 5, 6]; */
    
    const arraySum = (arr) => {
        let total = 0;
        for (let i = 0; i < arr.length; i++) {
            total += arr[i];
        }
        return total;
    };
    
    const myArr = [2, 3, 4, 5, 6];
    const result = arraySum(myArr);
    console.log(result);

/* 11. Напишіть код, котрий виведе в консоль кожен піделемент в arr по одному.
    const arr = [ [1, 2], [3, 4], [5, 6] ];
    Console output:
    1
    2
    3
    4
    5
    6 */

    function printArray(arr) {
        for (let i = 0; i < arr.length; i++) {
            for (let a = 0; a < arr[i].length; a++){
                console.log(arr[i][a]);
            }
        }
    }
    
    const arr = [ [1, 2], [3, 4], [5, 6] ];
    printArray(arr);
    

/* 12. Доповніть код нижче, так щоб в консоль повертався результат множення усіх чисел у підмасивах arr.
    Використайте для цього вкладені цикли for.
    Наприклад:
    const arr = [[1], [2], [3]]  >  console.log(product) має повернути 6
    const arr = [[1, 2], [3, 4], [5, 6, 7]]  >  console.log(product) має повернути 5040
    const arr = [[5, 1], [0.2, 4, 0.5], [3, 9]]  >  console.log(product) має повернути 54
    const arr = [[1, 2], [3, 4], [5, 6, 7]];
    let product = 1;
    // тут має бути ваше рішення
    console.log(product); */

    //const arrMultiply = [[1], [2], [3]] 
    //const arrMultiply = [[1, 2], [3, 4], [5, 6, 7]] 
    //const arrMultiply = [[5, 1], [0.2, 4, 0.5], [3, 9]] 

    function multiplyArray(arr) {
        let product = 1;
    
        for (let i = 0; i < arr.length; i++) {
            for (let a = 0; a < arr[i].length; a++){
                product = product * arr[i][a];
            }
        }
        return product;
    }
    
    const arrMultiply = [[1, 2], [3, 4], [5, 6, 7]];
    const resultArr = multiplyArray(arrMultiply);
    console.log(resultArr);


/* 13.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова. */

function removeVowelLetters(inputText) {
    return inputText.replace(/[aeiou]/gi, '');
}

const text = "HellO world!";
const removeVowels = removeVowelLetters(text);
console.log(removeVowels);


/* 14.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закінченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д. */

    const convertMetersToKilometers = (meters) => {
        if (meters / 1000 === 1) {
            console.log(meters + ' meters is ' + meters / 1000 + ' kilometer');
        } else if (meters / 1000 !== 1) {
            console.log(meters + ' meters is ' + meters / 1000 + ' kilometers');
        }
    };
    
    let meters = 1500;
    convertMetersToKilometers(meters);
    