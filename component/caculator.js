
//This is a calculator component

//This is a global variable
let CreditBalance = 0;

let DebitBalance = 0;

export function add(a, b) {
    CreditBalance = (a + b);
    return console.log("Your Credit Balance is:", CreditBalance);
}

export function subtract(a, b) {
    DebitBalance = (a - b);
    return console.log("Your Debit Balance is:", DebitBalance);
}