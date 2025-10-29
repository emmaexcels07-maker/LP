
let balance = 0;

export function getBalance() {
  return balance;
}

export function deposit(amount) {
  if (amount <= 0 || isNaN(amount)) {
    return { success: false, message: "Invalid deposit amount." };
  }
  balance += amount;
  return { success: true, message: `Deposited $${amount.toFixed(2)}.` };
}

export function withdraw(amount) {
  if (amount <= 0 || isNaN(amount)) {
    return { success: false, message: "Invalid withdrawal amount." };
  }
  if (amount > balance) {
    return { success: false, message: "Insufficient balance." };
  }
  balance -= amount;
  return { success: true, message: `Withdrew $${amount.toFixed(2)}.` };
}
