/* 
Ticket Prices:
up to 12 years: $10
Standard: $20
65 and over: $12 
*/

let age = 8;
let ticketPrice;

if (age <= 12) {
    ticketPrice = 10;
} else if (age >= 65) {
    ticketPrice = 12;
}else { 
    ticketPrice = 20;
}

console.log(`The ticket price is $${ticketPrice}`);
 



let darkMode = true;
if (darkMode === true) {
    console.log("Dark mode is on");
}else {
    console.log("Light mode is on");
} 


let userLoggedIn = true;

if (userLoggedIn === true) {
    console.log("Discount $20");
} else {
    console.log("Discount $10");
}