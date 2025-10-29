
//This is a calculator component

//This is a global variable
let CreditBalance = 0;

let DebitBalance = 0;

export function add(a, b) {
    CreditBalance = a + b;
    return CreditBalance;
}

export function subtract(a) {
    DebitBalance = (CreditBalance - a);
    return DebitBalance;
}

export function getBalance() {
    return (CreditBalance, DebitBalance); ;
}