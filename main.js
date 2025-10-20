// import { kitchen } from "./kitchen";
// kitchen();

// import {add} from "./caculator";
// add(500, 200);


// import {greet} from "./greet";
// greet("Emmanuel");

import {getBalance, resetBalance, calculateInterest} from "./component/bankAccount.js";

console.log("Initial Balances:", getBalance());

calculateInterest(10);
console.log("After Interest Balances:", getBalance());

resetBalance();
console.log("After Reset Balances:", getBalance());