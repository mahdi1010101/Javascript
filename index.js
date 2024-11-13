// question 1 : Reverse a String: Write a function that reverses a given string.

function reverseString(str) {
  return str.split("").reverse().join("");
}

//console.log(reverseString("HELLO WORRRLDDD!"));

// ----------------------------------------------------------------------

// question 2 : Count Characters: Create a function that counts the number of characters in a string.

function nbChars(paragraph) {
  return paragraph.split("").filter((p) => /[a-zA-Z]/.test(p)).length;
}

//console.log(nbChars("hello  . 589-+/"))

// ----------------------------------------------------------------------
// question 3 : Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.

function capitaliseFirstLetter(pargraph) {
  return pargraph
    .split(" ")
    .map((p) => (p = p[0].toUpperCase() + p.substring(1, p.length)))
    .join(" ");
}

//console.log(capitaliseFirstLetter("hello world and welcome"));

// ----------------------------------------------------------------------
// question 4 : Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.

function findMinMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

//console.log(findMinMax([100, 5, 10, 0]));

// ----------------------------------------------------------------------
// question 5 : Sum of Array: Create a function that calculates the sum of all elements in an array.

function returnSum(arr) {
  return arr.reduce((a, b) => a + b);
}

//console.log(returnSum([100, 5, 10, 100]));

// ----------------------------------------------------------------------
// question 6 : Filter Array: Implement a function that filters out elements from an array based on a given condition.

function filterArray(arr, condition) {
  return arr.filter(condition);
}

//console.log(filterArray([100, 5, 10, 0],  value => value>=10));

// ----------------------------------------------------------------------
// question 7 : Factorial: Write a function to calculate the factorial of a given number.

function getFactorial(num) {
  return Array.from({ length: num }, (_, i) => i + 1).reduce((a, b) => a * b);
}

//console.log(getFactorial(10));

// ----------------------------------------------------------------------
// question 8 : Prime Number Check: Create a function to check if a number is prime or not.

function isPrime(num) {
  return num % 2 == 0;
}

//console.log(isPrime(8));

// ----------------------------------------------------------------------
// question 9 : Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(7));
