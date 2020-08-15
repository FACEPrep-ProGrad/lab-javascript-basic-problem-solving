// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.

var mahesh = "ProGrad-1";
console.log("The driver's name is " + mahesh);
var silentcoder = "ProGrad-2";
console.log("The navigator's is " + silentcoder);
// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

if (mahesh.length == silentcoder.length) {
    console.log("Wow, you both have equally long names, " + mahesh.length + " characters!");
} else if (mahesh.length > silentcoder.length) {
    console.log("The driver has the longest name, it has " + silentcoder.length + " characters");
} else {
    console.log("It seems that the navigator has the longest name, it has " + silentcoder.length + " characters.")
}

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5. 

var string = "ProGrad";
const vowels = ["a", "e", "i", "o", "u"];
var v = "";
var c = "";
for (let i = 0; i < string.length; i++) {
    if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u') {
        v += string[i] + " ";
        c += i + " ";
    }
}
if (v.length > 0) {
    console.log(string + " " + v + " " + c);
} else {
    console.log("no vowels");
}
// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters

var string = "ProGrad Mahesh";
var upperCounter = 0;
var lowerCounter = 0;
for (let letter of string) {
    if (letter == letter.toUpperCase()) {
        upperCounter++;
    } else if (letter == letter.toLowerCase()) {
        lowerCounter++;
    }
}

console.log("Number of Upper case characters = " + upperCounter);
console.log("Number of Lower case characters = " + lowerCounter);

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"

var result = ""
for (let letter of mahesh) {
    result += letter.toUpperCase() + " ";
}
console.log(result);
// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"
var reverse = "";
for (var i = silentcoder.length - 1; i >= 0; i--) {
    reverse += silentcoder[i] + " ";
}
console.log(reverse);
// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
if (mahesh.localeCompare(silentcoder)) {
    console.log("The driver's name goes first.");
} else if (silentcoder.localeCompare(mahesh)) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What ? !You both have the same name ? ");
}
// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.

var string = "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Culpa, neque earum fugiat a sapiente laborum dicta id libero dignissimos eos commodi voluptate ullam, soluta suscipit velit accusantium voluptatum nemo voluptates Lorem ipsum dolor sit amet consectetur, adipisicing elit.Autem error temporibus ducimus dolor consectetur voluptates reprehenderit dicta facere sint tempore, laboriosam repudiandae necessitatibus asperiores maxime.Consequuntur iste dolorum reiciendis fuga Lorem ipsum dolor sit amet consectetur adipisicing elit.Rerum, perspiciatis delectus!Tempore dignissimos corporis tenetur aut necessitatibus.Laborum, quaerat.Est, similique dolorem cupiditate culpa quas vitae hic blanditiis praesentium odit!"
var total = 0;
for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
        total += 1;
    }
}
total += 1;
console.log(total);
// Bonus 2:

// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

var phraseToCheck = "mom";
var result = "";
for (let i = phraseToCheck.length - 1; i >= 0; i--) {
    result += phraseToCheck.charAt(i);
}
if (result === phraseToCheck) {
    console.log("input string is palindrome");
} else {
    console.log("input string is not palindrome");
}


// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 