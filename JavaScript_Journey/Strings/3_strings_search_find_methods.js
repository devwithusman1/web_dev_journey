//JavaScript Strings Methods
//Searching and finding in a string
// .indexOf() knowing the index of a character or substring in a string
// .lastIndexOf() knowing the last index of a character or substring in a string
// .search() searching for a substring in a string and returning the index of the first match
// .match() searching for a substring in a string and returning an array of matches
// .startsWith() checking if a string starts with a specified substring
// .endsWith() checking if a string ends with a specified substring
// .includes() checking if a string contains a specified substring
// .matchAll() searching for a substring in a string and returning an iterator of matches

let str = "Hello, World!";

//printing index of character 'W'
console.log(str.indexOf('W')); // Output: 7

//printing last index of character 'H'
console.log(str.lastIndexOf('H')); // Output: 0

//printing index of substring 'World'
console.log(str.search('World')); // Output: 7

//searching for "World"
console.log(str.search("World")); // Output: 7

//searching for a word that does not exist
console.log(str.search("JavaScript")); // Output: -1 because ot does not exist in the string

