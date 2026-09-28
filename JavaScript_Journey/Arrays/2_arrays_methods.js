// Array Methods
//Add/remove items from an array
// push() - adds an item to the end of an array
let fruits = ['apple', 'banana', 'cherry'];
fruits.push('date');
console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'date']

// pop() - removes the last item from an array
fruits.pop();
console.log(fruits); // Output: ['apple', 'banana', 'cherry']

// unshift() - adds an item to the beginning of an array
fruits.unshift('apricot');
console.log(fruits); // Output: ['apricot', 'apple', 'banana', 'cherry']

// shift() - removes the first item from an array
fruits.shift();
console.log(fruits); // Output: ['apple', 'banana', 'cherry']

// Extract/copy parts of array




// slice() - returns a shallow copy of a portion of an array into a new array object
let citrus = fruits.slice(1, 3);
console.log(citrus); // Output: ['banana', 'cherry']


// concat() - merges two or more arrays and returns a new array
let moreFruits = ['date', 'elderberry'];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits); // Output: ['apple', 'banana', 'cherry', 'date', 'elderberry']

//OR

let result = [...a, ...b];


// Search/check for items in an array
// indexOf() - returns the first index at which a given element can be found in the array, or -1 if it is not present
console.log(fruits.indexOf('banana')); // Output: 1
console.log(fruits.indexOf('kiwi')); // Output: -1

// includes() - determines whether an array includes a certain value among its entries, returning true or false
console.log(fruits.includes('cherry'));

// lastIndexOf() - returns the last index at which a given element can be found in the array, or -1 if it is not present
let numbers = [1, 2, 3, 2, 1];
console.log(numbers.lastIndexOf(2));


// find() - returns the value of the first element in the array that satisfies the provided testing function
let found = numbers.find(function(element) {
  return element > 2;
});

// findIndex() - returns the index of the first element in the array that satisfies the provided testing function
let foundIndex = numbers.findIndex(function(element) {
  return element > 2;
});

// findlast() - returns the value of the last element in the array that satisfies the provided testing function
let foundLast = numbers.findLast(function(element) {
  return element < 2;
});

// findLastIndex() - returns the index of the last element in the array that satisfies the provided testing function
let foundLastIndex = numbers.findLastIndex(function(element) {
  return element < 2;
});



// Transform/create new arrays

// map() - creates a new array populated with the results of calling a provided function on every element in the calling array
let doubled = numbers.map(function(element) {
  return element * 2;
});


// filter() - creates a new array with all elements that pass the test implemented by the provided function
let evenNumbers = numbers.filter(function(element) {
  return element % 2 === 0;
});

// flat() - creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
let nestedArray = [1, [2, [3, [4]]]];
let flatArray = nestedArray.flat(2);    

// flatMap() - first maps each element using a mapping function, then flattens the result into a new array
let flatMapped = nestedArray.flatMap(function(element) {
  return [element, element * 2];
});




// loop through an array
// forEach() - executes a provided function once for each array element
numbers.forEach(function(element) {
  console.log(element);
});

// some() - tests whether at least one element in the array passes the test implemented by the provided function
let hasEvenNumber = numbers.some(function(element) {
  return element % 2 === 0;
});

//every() - tests whether all elements in the array pass the test implemented by the provided function
let allPositive = numbers.every(function(element) {
  return element > 0;
});




// calculate/combine values in an array
// reduce() - executes a reducer function on each element of the array, resulting in a single output value
let sum = numbers.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);




// convert an array to a string
// join() - joins all elements of an array into a string
let fruitsString = fruits.join(', ');
console.log(fruitsString); // Output: 'apple, banana, cherry'

// toString() - returns a string representing the specified array and its elements
let fruitsToString = fruits.toString();
console.log(fruitsToString); // Output: 'apple,banana,cherry'





// sort/reverse an array
// sort() - sorts the elements of an array in place and returns the sorted array
let sortedFruits = fruits.sort();
console.log(sortedFruits); // Output: ['apple', 'banana', 'cherry']

// reverse() - reverses the order of the elements of an array in place
let reversedFruits = fruits.reverse();
console.log(reversedFruits); // Output: ['cherry', 'banana', 'apple']

// toSorted() - returns a new array with the elements sorted in ascending order
let sortedNumbers = numbers.toSorted();
console.log(sortedNumbers); // Output: [1, 1, 2, 2, 3]

// torReversed() - reverses the order of the elements of an array in place
let reversedNumbers = numbers.reverse();




// Fill/Copy within an array

// fill() - fills all the elements of an array from a start index to an end index with a static value
let filledArray = new Array(5).fill(0);
console.log(filledArray); // Output: [0, 0, 0, 0, 0]

// copyWithin() - shallow copies part of an array to another location in the same array and returns it without modifying its length
let copyArray = [1, 2, 3, 4, 5];
copyArray.copyWithin(0, 3);
console.log(copyArray); // Output: [4, 5, 3, 4, 5]


// Create Arrays






// Array.isArray() - determines whether the passed value is an array
console.log(Array.isArray(fruits));

// Array.from() - creates a new, shallow-copied Array instance from an array-like or iterable object
let arrayLike = {0: 'a', 1: 'b', length: 2};
let newArray = Array.from(arrayLike);
console.log(newArray); // Output: ['a', 'b']

// Array.of() - creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments
let arrayOf = Array.of(1, 2, 3);
console.log(arrayOf); // Output: [1, 2, 3]

// Array constructor - creates a new Array instance
let arrayConstructor = new Array(5);
console.log(arrayConstructor); // Output: [ <5 empty items> ]



// Mordern non-mutating methods
// toReversed() - returns a new array with the elements in reverse order
let reversedArray = numbers.toReversed();
console.log(reversedArray); // Output: [3, 2, 1]

// toSorted() - returns a new array with the elements sorted in ascending order
let sortedArray = numbers.toSorted();
console.log(sortedArray); // Output: [1, 2, 3]

// toSpliced() - returns a new array with the specified elements removed and/or added, without modifying the original array
let splicedArray = numbers.toSpliced(1, 1, 4);
console.log(splicedArray); // Output: [1, 4, 3]

// with() - returns a new array with the specified element replaced at the given index, without modifying the original array
let withArray = numbers.with(1, 5);
console.log(withArray); // Output: [1, 5, 3]

