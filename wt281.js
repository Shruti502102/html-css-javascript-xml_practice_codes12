console.log("Hello World");
//arrow function with default arguments 
const greet=(name="Guest",time="moorning")=>{
    console.log(`Good ${time}, ${name}!`);
    //console.log(`Good ${tome},${name}!`);
};
//calling function without providing arguments
greet();//output:"good morning guest!"
//calling the function with arguments
greet("Alice","evening");//output:"good morning ,Alice!"
// Original string
const originalString = "Hello, World!";

// Displaying the original string
console.log(`Original String: ${originalString}`);

// String length
const stringLength = originalString.length;
console.log(`String Length: ${stringLength}`);

// Converting to lowercase
const lowercaseString = originalString.toLowerCase();
console.log(`Lowercase String: ${lowercaseString}`);

// Converting to uppercase
const uppercaseString = originalString.toUpperCase();
console.log(`Uppercase String: ${uppercaseString}`);

// Checking if a string contains a substring
const containsSubstring = originalString.includes("Hello");
console.log(`Contains "Hello": ${containsSubstring}`);

// Finding the index of a substring
const indexOfSubstring = originalString.indexOf("World");
console.log(`Index of "World": ${indexOfSubstring}`);

// Extracting a substring
const substring = originalString.substring(7, 12);
console.log(`Substring: ${substring}`);

// Trimming whitespaces
const stringWithWhitespace = "  Trim me  ";
const trimmedString = stringWithWhitespace.trim();
console.log(`Trimmed String: ${trimmedString}`);

// Replacing a substring
const replacedString = originalString.replace("World", "Universe");
console.log(`Replaced String: ${replacedString}`);
