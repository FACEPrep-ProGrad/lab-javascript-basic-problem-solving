// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
let ProGrad1;
// 1.2 Print `"The driver's name is XXXX"`.
ProGrad1 = "XXXX";
console.log(ProGrad1);
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
let ProGrad2;
// 1.4 Print `"The navigator's name is YYYY"`.
ProGrad2 = "YYYY";
console.log(ProGrad2);
// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
if (ProGrad1.length > ProGrad2.length) {
    console.log("The driver has the longest name, it has XX characters. or");
} else if (ProGrad1.length < ProGrad2.length) {
    console.log("It seems that the navigator has the longest name, it has XX characters. or");
} else {
    console.log("Wow, you both have equally long names, XX characters!.");
}

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5.

let ProGrad1 = "ProGrad";
let abc = false;
let str = "";
let pos = "";
for (let j = 0; j < ProGrad1.length; j++) {
    if (ProGrad1[j] == "a") {
        str += "a" + " ";
        pos += j + " ";
    } else if (ProGrad1[j] == "i") {
        str += "i" + " ";
        pos += j + " ";
    } else if (ProGrad1[j] == "e") {
        str += "e" + " ";
        pos += j + " ";
    } else if (ProGrad1[j] == "o") {
        str += "o" + " ";
        pos += j + " ";
    } else if (ProGrad1[j] == "u") {
        str += "u" + " ";
        pos += j + " ";
    } else {
        ;
    }
}
console.log(ProGrad1 + " " + str + pos);

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters

let str11 = "Xx";
let lower = str11.toLowerCase();
let upper = str11.toUpperCase();
let ans = "LowerCase letters are ";
let a = 0;
for (let i = 0; i < lower.length; i++) {
    if (str11[i] == lower[i]) {
        a++;
    }
}
console.log(ans + a);

ans = "UpperCase letters are ";
a = 0;
for (let i = 0; i < upper.length; i++) {
    if (str11[i] == upper[i]) {
        a++;
    }
}
console.log(ans + a);


// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"
ProGrad1 = "ProGrad";
str = ProGrad1.toUpperCase();
str11 = "";
for (let i = 0; i < str.length; i++) {
    str11 += str[i] + " ";
}
console.log(str11);
// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"
ProGrad1 = "ProGrad";
str11 = "";
for (let i = ProGrad1.length; i >= 0; i--) {
    str11 += ProGrad1[i];
}
console.log(str11);
// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
ProGrad1 = "ProGrad";
ProGrad2 = "FACEPrep";
console.log(ProGrad1 + " " + ProGrad2);
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"
console.log(ProGrad2 + " " + ProGrad1);
// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

console.log("We decide who goes first?");
ProGrad2 = "XXXX";
ProGrad1 = "XXXX";
if (ProGrad1.length > ProGrad2.length) {
    console.log("The driver's name goes first.");
} else if (ProGrad1.length < ProGrad2.length) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}

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