// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
var ProGrad1 = "Harini";
// 1.2 Print `"The driver's name is XXXX"`.
console.write(ProGrad1);
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
var ProGrad2 = "Rhea";
// 1.4 Print `"The navigator's name is YYYY"`.
console.write(ProGrad2);

// Progression 2: Control Statements - 1
function strlength(s) {
    var length = 0;
    while (s[length] != undefined) {
        length += 1;
    }
    return length;
}
// 2.1. Depending on which name is longer, print:
if (strlength(ProGrad1) > strlength(ProGrad2)) {
    console.log("The driver has the longest name, it has " + strlength(ProGrad1) + " characters.");
} else if (strlength(ProGrad2) > strlength(ProGrad1)) {
    console.log("The navigator has the lomgest name, it has " + strlength(ProGrad2) + " characters.");
} else {
    console.log("Wow, you both have equally long names, " + strlength(ProGrad1) + " characters!.");
}
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
function containsvowels(s) {
    var result = s;
    var index = "";
    var length = strlength(s);
    for (i = 0; i < length; i++) {
        if (s.charAt(i) === 'A' || s.charAt(i) === 'E' || s.charAt(i) === 'I' || s.charAt(i) === 'O' || s.charAt(i) === 'U' || s.charAt(i) === 'a' || s.charAt(i) === 'e' || s.charAt(i) === 'i' || s.charAt(i) === 'o' || s.charAt(i) === 'u') {
            result + " " + s.charAt(i);
            index += " " + i;
        }
        return result + index;
    }
}
if (containsvowels(ProGrad1) != ProGrad1) {
    console.log(containsvowels(ProGrad1));

} else {
    console.log("no vowels");
}
if (containsvowels(ProGrad2) != ProGrad12) {
    console.log(containsvowels(ProGrad2));

} else {
    console.log("no vowels");
}
// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5. 
function upperornot(s) {
    var length = strlength(s);
    var uppercount = 0;
    for (i = 0; i < length; i++) {
        if (s.charAt(i) == s.charAt.toUpperCase()) {
            count += 1;
        }
    }
    return uppercount;
}

function lowerornot(s) {
    var length = strlength(s);
    var lowercount = 0;
    for (i = 0; i < length; i++) {
        if (s.charAt(i) == s.charAt.toLowerCase()) {
            count += 1;
        }
    }
    return Lowercount;
}
// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
console.log("number of upper case letters in driver : " + upperornot(ProGrad1));
console.log("number of lower case letters in driver : " + lowerornot(ProGrad1));
console.log("number of upper case letters in navogator : " + upperornot(ProGrad2));
console.log("number if lower case letters in navigator : " + lowerornot(ProGrad2));

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"
console.log(ProGrad1);
// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"
function reverseString(s) {
    var length = strlength(s);
    var res = "";
    for (i = length - 1; i >= 0; i--) {
        res += s.charAt(i);
    }
    return res;
}
console.log(reverseString(ProGrad2));
// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"
console.log(ProGrad2 + " " + ProGrad1);
// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
if (ProGrad1.localeCompare(ProGrad2) > 0) {
    console.log("he driver's name goes first");
} else if (ProGrad1.localeCompare(ProGrad2) < 0) {
    console.log("Yo, the navigator goes first definitly");
} else {
    console.log("What? You both have the same name?");
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