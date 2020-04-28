// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
let ProGrad_1 = " Pavan Ganesh";
console.log("The Driver's name is " + ProGrad_1);
let ProGrad_2 = " Varsha Bisht";
console.log("The navigator's name is " + ProGrad_2);
let driver = ProGrad_1.length;
navigator = ProGrad_2.length;
if (driver > navigator) {
    console.log(" The driver has the longest name, it has " + driver + " characters.");
} else if (driver < navigator) {
    console.log("It seems that the navigator has the longest name, it has " + navigator + " characters");
} else {
    console.log("Wow, you both have equally long names, " + driver + " characters!.");
}



let count = 0;
let vowel = "aeiou";
for (let x = 0; x < ProGrad_2.length; x++) {
    if (vowel.indexOf(ProGrad_2[x]) !== -1) {
        count++;
    }
}
console.log(ProGrad_2 + " no. of vowels " + count);
// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5. 
let upper = 0;
let lower = 0;
for (var i = 0; i < ProGrad_2.length; i++) {
    if (/[A-Z]/.test(ProGrad_2.charAt(i))) {
        upper++;
    } else {
        lower++;
    }
}
console.log("no of lower case " + lower);;
console.log("no of upper case " + upper);

let str = ProGrad_1.split("");
console.log("after removing space" + str);
// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters


// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"
var newString = "";
for (var i = ProGrad_2.length - 1; i >= 0; i--) {
    newString += str[i];
}
document.write(newString);
// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"
var mergeString = ProGrad_1.concat(ProGrad_2);
document.write(mergeString);
// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
var mergeString1 = ProGrad_2.concat(ProGrad_1);
document.write(mergeString1 + "\n ");


if (ProGrad_1.localeCompare(ProGrad_2) == -1)
    document.write("driver name goes first");
else if (ProGrad_1.localeCompare(ProGrad_2) == 1)
    document.write("navigator should come first")
else
    document.write("both have same name");

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
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

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 