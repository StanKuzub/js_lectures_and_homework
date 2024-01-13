/*

    Прості або примітиви:
    - числа
    - текст
    - логічний тип
    - null
    - undefined
    - Symbol
    - BigInt

    Обʼєкти:
    - обʼєкт {}
    - Функції
    - Масиви
    - Регулярні вирази
    - Помилки
    - Обʼєкт дати

 */

// number
let number = 5;
let floatNumber = 5.5;

// infinity, NaN
console.log(4/0); // infinity
console.log(-4/0); // -infinity

console.log('text' * 3); // NaN (Not a number)

// boolean
let isExist = true; // = false


// null, undefined

let value = null; //can only be assigned,  there are no other cases when we can get null returned
console.log(value);

let undef;
console.log(undef);

// обʼєкт

let object = {};

let person2 = {
    name: "Dmytro",
    age: 29,
    qwe: true,
    asd: {
        key1: true,
        key2: "Text"
    }
}

console.log(person);

let person1 = new Object();

console.log(person1);

let person = {
    name: "Stas",
    age: 10,
    qwe: true,
    asd: {
        key1: true,
        key2: "Text"
    }
}

console.log(person);

person.age = 34;
person.asd.key1 = 10;
person.hairColor = 'black';

console.log(person);

console.log(person.age);
console.log(person.name);
console.log(person.asd.key2);

//Interpolation - combine lines and variables
console.log("My name is " + person.name + ", I'm " + person.age + " years old") //concatination

console.log(`My name is ${person.name}, I'm ${person.age} years old.`) //interpolation, more useful

let url = 'https://example.com';
let endpoint = '/homepage';

console.log(`${url}${endpoint}`)

// Array
let array = ['text', 20, {name: "Stas"}, [1, 2, 3]];
console.log(array[0])

let numArray = [1, 2, 3];
let numObj = {a:1, b:2, c:3};

console.log(numArray[0]);
console.log(numObj.a)

let salary = {
    'person1': 1000,
    'person2': 2000
}

let someObjArr = {
    0: 1,
    1: 2,
    2: 3,
    3: 4
}

let someArray = [1, 2, 3, 4]

console.log(someObjArr[0])
console.log(someArray[0])


// Actions with different data types

let someText = " Hello world! "
console.log(someText.length);
console.log(someText.substring(1,6));
console.log(someText.slice(1,6));
console.log(someText.toLowerCase());
console.log(someText.toUpperCase());
console.log(someText.trim());
console.log(someText.charAt(1));
console.log(someText[1]);

let myArr = [];
console.log(myArr.push(' '));
console.log(myArr.push('Hello'));
console.log(myArr.push(' '));
console.log(myArr.push('world!' ));
console.log(myArr.length);

console.log(myArr);
console.log(myArr.pop());
console.log(myArr);

let someNumber = 12.6;
console.log(someNumber.toFixed());
console.log(Math.round(someNumber));

let someParameter = '12.5px';
console.log(parseInt(someParameter));
console.log(parseFloat(someParameter));

