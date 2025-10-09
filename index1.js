// let selectedcolors = ['red', 'blue'];
// selectedcolors[2] = 'yellow';




// const classcourse = {
//     coursename: 'JavaScript',
//     courseprice: 299,
//     courseinstructor: 'John Doe'
// };

// const mixedarray = [2007 , 'Hello', true, { name: 'Alice' }, [1, 2, 3]];


// const friuts = ['Apple', 'Banana', 'Orange'];
// friuts.pop();
// console.log(friuts);

// const person = {
//     name: 'Emmanuel Feyisayo',
//     age: 25,
//     occupation: 'Software Developer',   
//     country: 'Nigeria',
//     city: 'Lagos'
// };
// console.log(person);

// const friuts = ['Apple', 'Banana', 'Orange'];
// friuts.push('Mango');


// .SHIFT() METHOD - removes the first element from an array and returns that removed element. This method changes the length of the array.
// const friuts = ['Apple', 'Banana', 'Orange'];
// friuts.shift();
// console.log(friuts);

// .UNSHIFT() METHOD - adds one or more elements to the beginning of an array and returns the new length of the array.
// const friuts = ['Apple', 'Banana', 'Orange'];
// friuts.unshift('Mango');
// console.log(friuts);

// // .SPLICE() METHOD - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// let numbers = [1, 2, 3, 4, 5];
// numbers.splice(2, 1, ); // Removes 1 element at index 2
// console.log(numbers); // Output: [1, 2, 4, 5]

// // .SLICE() METHOD - returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
// const numbers = [1, 2, 3, 4, 5];
// const slicedNumbers = numbers.slice(1, 4); // Extracts elements from index 1 to 3
// console.log(slicedNumbers); // Output: [2, 3, 4]
// console.log(numbers); // Original array remains unchanged: [1, 2, 3, 4, 5]

// .INDEXOF() METHOD - returns the first index at which a given element can be found in the array, or -1 if it is not present.
// const fruits = ['Apple', 'Banana', 'Orange'];
// const index = fruits.indexOf('Banana');
// console.log(index); // Output: 1

// .JOIN() METHOD - joins all elements of an array into a string and returns this string.
// const fruits = ['Apple', 'Banana', 'Orange'];
// const result = fruits.join(' ');
// console.log(result); // Output: "Apple Banana Orange"

// .REVERSE() METHOD - reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
// const fruits = ['Apple', 'Banana', 'Orange'];
// fruits.reverse();
// console.log(fruits); // Output: ['Orange', 'Banana', 'Apple']

// .CONCAT() METHOD - is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const combinedArray = array1.concat(array2);
// console.log(combinedArray); // Output: ['a', 'b', 'c', 'd', 'e', 'f']

// let classA = ['John', 'Jane', 'Jim'];
// let classB = ['Alice', 'Bob', 'Charlie'];
// let combinedClasses = classA.concat(classB);
// console.log(combinedClasses); // Output: ['John', 'Jane', 'Jim', 'Alice', 'Bob', 'Charlie']

// FOREACH METHOD - executes a provided function once for each array element.
// let fruits = ['Apple', 'Banana', 'Orange'];
// fruits.forEach(frut => console.log(frut));  

// MAP METHOD - creates a new array populated with the results of calling a provided function on every element in the calling array.
// let numbers = [1, 2, 3, 4, 5];
// let squaredNumbers = numbers.map(num => num * num);
// console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// FILTER METHOD - creates a new array with all elements that pass the test implemented by the provided function.
// let mixedNumbers = [1, -2, 3, -4, 5, -6];
// let positiveNumbers = mixedNumbers.filter(num => num > 0);
// console.log(positiveNumbers); // Output: [1, 3, 5]


// shift() method
let numbers = [1, 2, 3, 4, 5];
numbers.shift();
console.log(numbers);


// splice() method
let fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
fruits.splice(1, 2);
console.log(fruits);

// indexof() method
let colors = ['Red', 'Blue', 'Green', 'Yellow'];
let index = colors.indexOf('Green');
console.log(index);

// foreach() method
let countrys = ['Nigeria', 'Ghana', 'Kenya'];
countrys.forEach(country => console.log(country));

// join() method
let words = [ 'l' , 'am' , 'Emmanuel'];
let sentence = words.join(' ');
console.log(sentence);

// reverse() method
let letters = ['A', 'B', 'C', 'D'];
letters.reverse();
console.log(letters);