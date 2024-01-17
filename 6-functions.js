// named functions
function sum(a, b) {
    let c = a +b;
    return(c);
}

sum(3, 5)
sum(1, 8)

let a = 10;
let b = 2;

console.log(sum (a, sum(5, b)));

function login(username, password) {
    cy.get('[#username]'),type(username);
    cy.get('[#password]'),type(password);
}

login('123@123.com', 'pass123');

// anonymous functions

const anonymousFunct = function(a, b) {
    let c = a +b;
    console.log(c);
}

anonymousFunct(3, 4);


//fuction with return
function add(a, b) {
    let c = a +b;
    return(c);
}

let result = add(3, 4);
console.log(result)

// () => {} - arrow function


