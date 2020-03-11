// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.

let prograde1 = 'Shrikantkumar';

// 1.2 Print `"The driver's name is XXXX"`.
console.log(prograde1);
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
let prograde2 = 'Koushik';
// 1.4 Print `"The navigator's name is YYYY"`.
console.log(prograde2);


// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
var len1 = Prograd1.length;
var len2 = Prograd2.length;
if (len1 > len2) {
    console.log(`The driver has the longest name, it has ${len1} characters.`);
    document.write(`The driver has the longest name, it has ${len1} characters.<br>`);
} else if (len1 < len2) {
    console.log(`The navigator has the longest name, it has ${len2} characters.`);
    document.write(`The navigator has the longest name, it has ${len2} characters.<br>`);
} else {
    console.log(`Wow, you both have equally long names, ${len1} characters.<br>`);
}

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the number of name, and also print the vowel letters along with the vowel characters. or
// - print no vowels
let prograde1 = 'Shrikantkumar';
if (prograde1.match(/[aeiouAEIOU]/)) {
    console.log(prograde1 + " " + "has a Vowel in it");
}
else {
    console.log(prograde1 + " " + "no vowels");
}


// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
console.log(prograde1.toUpperCase(prograde1));

// - Print the number of lower case characters
console.log(prograde1.toUpperCase(prograde1));


// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"
var str1 = "";
for (let i = 0; i < len1; i++) {
    str1 = str1 + " " + Prograd1.charAt(i);
}
console.log(str1.toUpperCase());
document.write(`Drivers name in capital: ${str1.toUpperCase()} <br>`)

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"
let str1 = "prograde";
str1.split();
str1.split(" ").reverse();
str1.split(" ").reverse().join("");

// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
prograde1.concat(prograde2);
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"
prograde2.concat(prograde1);
// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.

// - Yo, the navigator goes first definitely.

// - What?! You both have the same name?
if (Prograd1.charCodeAt(0) < Prograd2.charCodeAt(0)) {
    console.log("The drivers name goes first.");
    document.write("The driver's name goes first.<br>");
} else if (Prograd1.charCodeAt(0) > Prograd2.charCodeAt(0)) {
    console.log("Yo, the navigator goes first definitely.");
    document.write("Yo, the navigator goes first definitely.<br>");
} else {
    console.log("What? ! You both have the same name ?");
    document.write("What? ! You both have the same name ? <br>");
}


// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.

var str = " et Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit voluptates corrupti magnam velit eveniet explicabo rerum et. Sequi placeat a eos consequuntur porro fuga, quasi ducimus temporibus eveniet laboriosam incidunt reprehenderit. Maiores architecto repellendus illum maxime voluptas rerum, hic aperiam illo dolore, facilis sit placeat suscipit incidunt quasi pariatur qui nemo dicta reiciendis eos fugit? Tempore et dolore sit sed quam molestiae!Dignissimos, corrupti odio voluptatem in eum rerum atque delectus sunt nesciunt officiis alias quam minus quisquam repellat esse, quo nihil possimus laboriosam eveniet laudantium tempore fugit aliquid excepturi impedit! Repellat.";

var arr = str.split(" ");
var len = str.split(" ").length;
let count = 0;
for (var q = 0; q < len; q++) {
    if (arr[q] == "et" || arr[q] == "et.") {
        count++;
    }
}
document.write("Total number of words in paragraph : " + len);
console.log("Total number of words in paragraph : " + len);
document.write(" <br>");
document.write("Number of time 'et' word appears : " + count + "<br>");
console.log("Number of time 'et' word appears : " + count);
document.write(" <br>");




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

var phraseToCheck = "taco cat";
obj = phraseToCheck.replace(/,/g, "");
var obj1 = obj.split(" ");
var ch = obj1.join("");
var newstr = "";
let len_of_stri = ch.length
for (let i = len_of_stri - 1; i >= 0; i--) {
    newstr = newstr + ch.charAt(i);
}

if (ch == newstr) {
    console.log("Palindrome.");
    document.write(ch + " is a Palindrome.<br>");

} else {
    console.log("Not a Palindrome.");
    document.write(ch + " is not a Palindrome.<br>");
}