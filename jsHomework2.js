/* 8. Використовуючи цикл for перемістити значення від 1 до 5 у масив myArray. */

let myArray = [];

for(let i = 0; i < 6; i++){
   myArray.push(i);
}
console.log(myArray);

/* 9. Напишіть 2 цикли.
   За допомогою першого передайте парні числа від 1 до 9 у myArray за допомогою циклу for.
   За допомогою другого передайте непарні числа від 1 до 9 у myArray за допомогою циклу for. */

   let myArrayEven = [];

   for(let i = 2; i < 10; i+=2){
    myArrayEven.push(i);
   }
   console.log(myArrayEven);


   let myArrayEOdd = [];

   for(let i = 1; i < 10; i+=2){
    myArrayEOdd.push(i);
   }
   console.log(myArrayEOdd);

/* 10. Оголоcіть та ініціалізуйте змінну total = 0.
    Використовуйте цикл for, щоб додати значення кожного елемента масиву myArr до підсумку.
    const myArr = [2, 3, 4, 5, 6]; */

    let total = 0;
    const myArr = [2, 3, 4, 5, 6];

    for (let i = 0; i < myArr.length; i++) {
        total = total + myArr[i];
    }
    
    console.log(total);

/* 11. Напишіть код, котрий виведе в консоль кожен піделемент в arr по одному.

    const arr = [ [1, 2], [3, 4], [5, 6] ];

    Console output:
    1
    2
    3
    4
    5
    6 */

    const arr = [ [1, 2], [3, 4], [5, 6] ];

    for (let i = 0; i < arr.length; i++) {
        for (let a = 0; a < arr[i].length; a++){
            console.log(arr[i][a]);
        }
    }

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
    
    const arrMultiply = [[1, 2], [3, 4], [5, 6, 7]];

    let product = 1;

    for (let i = 0; i < arrMultiply.length; i++) {
        for (let a = 0; a < arrMultiply[i].length; a++){
            product = product * arrMultiply[i][a];
        }
    }

    console.log(product);