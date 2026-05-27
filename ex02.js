// Find Exercise
// Instructions: Create an array of at least five numbers. Write code to find the first element that is greater than 10.

const numbers = [3, 5, 7, 9, 2, 10, 6, 15, 20, 9];
const numGreaterThan10 = numbers.find((num) => num > 10);

console.log(numGreaterThan10);
