function welcomeMessage(name) {
    const message = `Welcome to the world of programing, ${name}!`; 
    console.log(message);
}
welcomeMessage("Alice");

    function addition(firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    }

 
    const weather = {
        temperature: 22,
        humidity: 60,
        description: "Partly cloudy"
    };  

    console.log(`The weather is ${weather.description} with a temperature of ${weather.temperature}°C and humidity of ${weather.humidity}%.`);

    function multiplication(a, b) {
        return a * b;
    }
    console.log(multiplication(5, 3));

    function division(a, b) {
        let divide = a / b;
        return divide;
    }   
    console.log(division(10, 2));

    function subtraction(a, b) {
        return a - b;
    }   
    console.log(subtraction(10, 4));

function netsalary(grossSalary, loanDeduction) {
    let netsalary = grossSalary - loanDeduction;
    if (netsalary < 0) {
        console.log('You have a debt of ${netsalary}');
    } else if (netsalary > 0) {
        console.log('Your net salary is ${netsalary}');
    }   else {
        console.log('You have no net salary');
    }
    return netsalary;
}   
console.log(netsalary(5000, 2000));
