// VARIABLES
let weight = parseInt (prompt('Enter your weight in kg: '));
let height = parseFloat (prompt('Enter your height in m: '));
let gender = prompt('Enter your gender as male or female');
let bmiCategory;

// BMI CALCULATION
let bmi = weight / (height * height ** 2);

/*
 Underweight = <18.5
 Healthy: 18.5 - 25 ( not including 25)
    Overweight: 25 - 30 ( not including 30)
    Obese: >30
    */
   if (bmi < 18.5) {
    bmiCategory = 'Underweight';
    } else if (bmi > 30) {
        bmiCategory = 'Obese';
    } else {
        bmiCategory = 'Healthy or Overweight';
    }

// OUTPUT
console.log (`Your BMI is: ${bmi} which is considered ${bmiCategory} `);