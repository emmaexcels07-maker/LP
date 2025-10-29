
let account = {
    credit: 1000,
    debit: 500,
};

// function to get both credit and debit balance
export function getBalance() {
   return {
    credit: account.credit,
    debit: account.debit,
   };   
}

// function to reset both balances to zero
export function resetBalance() {
    account.credit = 0;
    account.debit = 0;
    console.log("Both balances have been reset to zero.");
}

// function to calculate interest and it to credit balance
export function calculateInterest(rate){
    const interest = (account.credit * rate) / 100;
    account.credit += interest;
    console.log(`Interest of ${rate}% added. New credit balance: ${account.credit}`);
}


    