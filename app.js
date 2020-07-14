// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
var proGrad_1 = "Shivhari";
// 1.2 Print `"The driver's name is XXXX"`.
console.log("The driver's name is " + ProGrad_1);
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
var proGrad_2 = "Linan";
// 1.4 Print `"The navigator's name is YYYY"`.
console.log("The navigator's name is " + ProGrad_2);

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

function len(str) {
    var length = 0;
    while (str[length] !== undefined)
        length++;
    return length;
}

var len1 = len(proGrad_1);
var len2 = len(proGrad_2);
if (len1 > len2) {
    console.log("The driver " + proGrad_1 + " has the longest name " + len1 + "  characters");
} else if (len1 < len2) {
    console.log("The Navigator " + proGrad_2 + " has the longest name " + len2 + "  characters");
} else {
    console.log("both driver and navigater " + proGrad_2, proGrad_1 + " has same length" + len1);
}

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5. 

function vowel_count(str) {
    var vowel_list = 'aeiouAEIOU';
    var count = 0;

    for (var x = 0; x < str.length; x++) {
        if (vowel_list.indexOf(str[x]) !== -1) {
            count++;
        }

    }
    return count;
}

console.log(vowel_count("Shivhari"));
console.log(vowel_count("Linan"));

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
count(proGrad_1);
count(proGrad_2);

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"
function len(str) {
    var length = 0;
    while (str[length] !== undefined)
        length++;
    return length;
}

var len1 = len(proGrad_1);
proGrad_1 = proGrad_1.toUpperCase();

for (i = 0; i < len1; i++) {
    console.log(proGrad_1[i] + " ");
}
// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"

function reverseString(str) {
    var string = "";
    for (var i = str.length - 1; i >= 0; i--) {
        string += str[i];
    }
    return string;
}
console.log(reverseString(proGrad_2));

// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
console.log(proGrad_1 + " " + proGrad_2);
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

if (proGrad_1 < proGrad_2) {
    console.log('proGrad_1 goes first');
} else if (proGrad_1 > proGrad_2) {
    console.log('proGrad_2 goes first');
} else {
    console.log('You have same names');
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
