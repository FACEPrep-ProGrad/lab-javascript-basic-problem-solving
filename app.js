// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.
var prograd1 = "dhanunjay";
console.log(prograd1);
var prograd2 = "charith";
console.log(prograd2);


// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
var m = prograd1.length;
console.log(m)
var n = prograd2.length;
console.log(n);;
if (m > n) {
    console.log(" prograd1 name is the largest");
} else {
    console.log("prograd2 name is the largest");
}
// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5. 

var vowels = ["a", "e", "i", "o", "u"];
var count;
var count = [];
for (let i = 0; i < 6; i++) {
    count = 0;
    for (let j = 0; j < prograd1.length; j++)
        if (prograd1[j] == vowels[i])
            count++;
    count[i] == count;
    console.log(vowels[i] + " " + "found" + count + " " + "times");
}
for (let i = 0; i < 6; i++) {
    count = 0;
    for (let j = 0; j < prograd2.length; j++)
        if (prograd1[j] == vowels[i])
            count++;
    count[i] = count;
    console.log(vowels[i] + " " + "found" + count + " " + "times")

}
//2.3 t0 print the string in the upper case and in lower case

var prograd2 = "charith";
var length = prograd2.length;
var position = 0,
    capsCount = 0,
    smallCount = 0;
prograd2 = prograd2.trim();
console.log(prograd2);
while (length >= 0) {
    if (prograd2.charCodeAt(position) > 64 && prograd2.charCodeAt(position) <= 90) {
        console.log(proGrad2[position]);
        capsCount++;
    } else {
        smallCount++;
    }
    length--;
    position++;
}
console.log("Number of Upper Case Letters are " + capsCount);
console.log("Number of Lower Case Letters are " + smallCount);

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"

var letter = "";
for (letter of prograd1.toUpperCase())
    console.log(letter);
var letter = "";
for (letter of prograd2.toUpperCase())
    console.log(letter);



// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"

var word = "ProGrad";
var reverseWord = word.split("").reverse().join("");
console.log("Reversed str is:", reverseWord);


// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"
var string1 = "Prograd";
var string2 = "Faceprep";
console.log(string1 + " " + string2);
console.log(string2 + " " + string1);
// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

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