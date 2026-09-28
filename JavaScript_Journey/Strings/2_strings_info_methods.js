//Javascript String Methods
//Getting information about a string
// .length() returns the length of a string
// .charAt() returns the character at a specified index
// .charCodeAt() returns the Unicode of the character at a specified index
// .codePointAt() also returns the Unicode of the character at a specified index

let str = "Hello, World!";

//printing length
console.log(str.length); // Output: 13

//printing character at index 7
console.log(str.charAt(7)); // Output: W

//printing Unicode of character at index 7
console.log(str.charCodeAt(7)); // Output: 87

//printing Unicode of character at index 7 using codePointAt()
console.log(str.codePointAt(7)); // Output: 87

