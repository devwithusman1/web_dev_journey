let name = new String("  Muhammad Usman  ");





let str = "  Hello, World!   ";
let str1 = str.replace("Hello", "Hi").replace("World", "Everyone").trim();
console.log(str1); // Output: "Hi, Everyone!"  
console.log(str); // Output: "   Hello, World!   " (original string remains unchanged) because it's immutable/nonprimitve datatype.