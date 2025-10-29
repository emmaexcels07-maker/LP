// import { add, subtract, getBalance} from "./component/caculator.js";
// import {WelcomeMessage} from "./component/greet.js";

// const greetingEl = document.getElementById("greetings");
// const creditsEl = document.getElementById("credit");
// const deditEl = document.getElementById("debit");
// const finalEl = document.getElementById("final");




// const greeting = WelcomeMessage("Emmanuel");
// const credit = add(5000, 3000)
// const debit = subtract(2000);
// const finalBalance = getBalance();

// greetingEl.innerText = greeting;
// creditsEl.innerText = `Credit Balance: $${credit}`;
// deditEl.innerText = `Debit Balance: $${debit}`;
// finalEl.innerText = `Final Balances: Credit - $${finalBalance[0]}, Debit - $${finalBalance[1]}`;





import { getBalance, deposit, withdraw } from './component/bank.js';

const balanceDisplay = document.getElementById('balanceDisplay');
const amountInput = document.getElementById('amountInput');
const message = document.getElementById('message');
const depositBtn = document.getElementById('depositBtn');
const withdrawBtn = document.getElementById('withdrawBtn');

function updateDisplay() {
  balanceDisplay.textContent = `$${getBalance().toFixed(2)}`;
}

function showMessage(text, success = false) {
  message.textContent = text;
  message.classList.toggle('text-red-600', !success);
  message.classList.toggle('text-green-600', success);
}

depositBtn.addEventListener('click', () => {
  const amount = parseFloat(amountInput.value);
  const result = deposit(amount);
  updateDisplay();
  showMessage(result.message, result.success);
});

withdrawBtn.addEventListener('click', () => {
  const amount = parseFloat(amountInput.value);
  const result = withdraw(amount);
  updateDisplay();
  showMessage(result.message, result.success);
});

updateDisplay();




