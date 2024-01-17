let num = 20;

// while (not working in Cypress)

/* while(num < 20){
    console.log(num)
} 

while(num < 20){
    console.log(num);
    num++;
} */

// do while - will run at least once

do{
    console.log(num);
    num++
}while(num < 20)

// for

for (let i = 1; i < 10; i++){
    console.log(i);
}

let number = 5;

for (let i = 1; i < number; i++){
    console.log(number);
}

let arr = [2, 4, 6, 8, 10, 11, 12]

for(let i = 0; i < arr.length; i++){
    if(arr[i] === 11){
        continue;
    }
    console.log(arr[i]);
}

// cycle inside a cycle

for (let i = 0; i < 3; i++){
    console.log(`i = ${i}`);
    for(let j = 0; j < 3; j++){
        console.log(`j = ${j}`);
    }
}

let k = [1, 2, 3, 4, 5];
let m = [];

for (let i = 0; i < k.length; i++){

    if (!(k[i]%2)){
        m.push(k[i]);
    }

    for(let d = 0; d < m.length; d++){
        console.log(m[d]);
    }
}