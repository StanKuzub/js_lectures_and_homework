// +

console.log('te'+'xt');
console.log(2+2);

console.log(2 + '2')
console.log(2 + + '2') //addition instead of concatenation


// інкремент/декремент

let incr = 10;
let decr = 10;

// incr++
// decr--
//
// console.log(incr);
// console.log(decr);
//
// ++incr
// --decr
//
// console.log(incr);
// console.log(decr);


// console.log(incr++);
// console.log(decr--);
// console.log(incr);
// console.log(decr);

console.log(++incr);
console.log(--decr);
console.log(incr);
console.log(decr);


// < , >

console.log(5 < 2);
console.log(5 > 2);

console.log(5 <= 2);
console.log(5 >= 6);

console.log(5%2)


// =

//console.log(2*2=4)
console.log(2*2==4)
console.log(2*2=='4')
console.log(2*2==='4') // nember =! text
console.log(2*2===4)

// логічні оператори "і" та "або"

let isChecked = false;
let isClosed = true;

console.log(isChecked && isClosed); // i
console.log(isChecked || isClosed); // або

// оператор заперечення "!"

// console.log(!isChecked);
// console.log(!isClosed);

console.log(isChecked && !isClosed); // i
console.log(!isChecked || !isClosed); // або


// Я хочу купити картоплю фрі та гамбургер, якщо обидві страви є в наявності, я їх купую і буду ситим.

const hamburger = true;
const fries = true;

if(hamburger&&fries){
    console.log('Я ситий');
}

// Я хочу купити картоплю фрі та гамбургер, якщо обидві страви є в наявності, я їх купую і буду ситим.

const hamburgerNum = 1;
const friesNum = 1;

if(hamburgerNum&&friesNum){
    console.log('Я ситий');
}

// приведення типів до true або false
// false - 0, "", null, undefined, NaN (not a number)


const hamburgerNumber = 3; // 3
const friesNumber = 1; // 1
//або
const cola = 4; // 4
const nuggets = 4; // 4

if(hamburgerNumber >= 3 && friesNumber || nuggets >= 4 && cola >= 4){
    console.log('Я ситий');
}