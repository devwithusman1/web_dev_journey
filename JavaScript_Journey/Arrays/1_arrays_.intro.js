// Arrays are data structures that can hold multiple values at once. 
// They are a fundamental part of JavaScript and are used to store collections of data.
// An array can hold values of any type, including numbers, strings, objects, and even other arrays.
// In javascript array's indices start from 0
// Creating an array
let fruits = ['apple', 'banana', 'cherry'];
//               0         1         2
 // accessing elements in an array
console.log(fruits[0]); // Output: 'apple'
console.log(fruits[1]); // Output: 'banana'
console.log(fruits[2]); // Output: 'cherry'

// Modifying elements in an array
fruits[1] = 'blueberry';
console.log(fruits[1]); // Output: 'blueberry'

// An array can hold numbers, strings, objects, booleans, and even other arrays
let mixedArray = [42, 'hello', true, { name: 'John' }, [1, 2, 3]];
console.log(mixedArray[0]); // Output: 42
console.log(mixedArray[1]); // Output: 'hello'
console.log(mixedArray[2]); // Output: true
console.log(mixedArray[3]); // Output: { name: 'John' }
console.log(mixedArray[4]); // Output: [1, 2, 3]
