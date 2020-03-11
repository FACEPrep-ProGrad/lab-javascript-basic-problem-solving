// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

var ProGrad1 = `Prince Bhardwaj`; // 1.1 Create a variable `ProGrad-1` with the driver's name.
console.log("The driver's name is XXXX " + ProGrad1); // 1.2 Print `"The driver's name is XXXX"`.
var ProGrad2 = `Vidya Bhardwaj`; // 1.3 Create a variable `ProGrad-2` with the navigator's name.
console.log("The navigator's name is " + ProGrad2); // 1.4 Print `"The navigator's name is YYYY"`.

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
if (ProGrad1.length > ProGrad2.length) {
    console.log("The driver has the longest name, it has " + ProGrad1.length + " characters.");
} else if (ProGrad1.length < ProGrad2.length) {
    console.log("The navigator has the longest name, it has " + ProGrad2.length + " characters.");
} else if (ProGrad1.length == ProGrad2.length) {
    console.log("Wow, you both have equally long names, " + ProGrad1.length + " characters.");
}


// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the number of name, and also print the vowel letters along with the vowel characters. or
// - print no vowels
function vowel_count(str) {
    var vowel = 'aeiouAEIOU';
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (vowel.indexOf(str[i]) !== -1) {
            console.log(str[i]);
            count += 1;
        }

    }
    return count;
}
console.log(vowel_count("Prince Bhardwaj"));


// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
function upperlower(str) {
    var lower = 0;
    var upper = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i].charAtIslower) {
            lower = lower + 1;
        } else if (str[i].charAtIsUpper) {
            upper = upper + 1;
        }
    }
    console.log("Upper: " + upper);
    console.log("Lower: " + lower)
}


// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"
// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"
var reverse = "";
for (var i = ProGrad2.length - 1; i >= 0; i--) {
    reverse += ProGrad2.charAt(i));
}

// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
console.log(ProGrad1 + " " + ProGrad2);
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"
console.log(ProGrad2 + " " + ProGrad1);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
function checkLexoName(str1, str2) {
    if (str1 > str2) {
        console.log("The " + ProGrad1 + " goes first.");
    }
    if (str1 > str2) {
        console.log("The " + ProGrad2 + " goes first.");
    } else {
        console.log("The " + ProGrad1 + " & " + ProGrad2 " have same names");
    }
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
var phraseToCheck = "MAM";

function isPalindrome(phraseToCheck) {
    var reverse = "";
    for (var i = ProGrad2.length - 1; i >= 0; i--) {
        reverse += phraseToCheck.charAt(i));
}
if (phraseToCheck.equals(reverse) {
        console.log("Yes Palindrome");
    } else {
        console.log("Not Palindrome");
    }
}

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 
