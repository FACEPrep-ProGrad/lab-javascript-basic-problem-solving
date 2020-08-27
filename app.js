// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.

var a = "Ranjith";
console.log(a);
var b = "Mansoor";
console.log(b);

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

if (a.length > b.length) {
  console.log("Driver has the longest name");
} else if (a.length < b.length) {
  console.log("Navigator has the longest name");
} else {
  console.log("Wow , you both have equally long names" + " " + a.length);
}

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5.

function checkVowel(name) {
  var i;
  var vowel = "";
  var index = "";
  var count = 0;
  for (i of name) {
    if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u") {
      vowel += i + " ";
      index += name.indexOf(i) + " ";
    }
  }
  console.log(name + "-" + vowel + "-" + index + "-");
}

checkVowel(a);
checkVowel(b);

// - Print the number of upper case characters
// - Print the number of lower case characters

function uppercase(letter) {
  var e;
  var o;
  var ul = "";

  var ct = 0;

  for (e of letter) {
    if (e >= "A" && e <= "Z") {
      ul = e + "";
      ct = ct + 1;
    }
  }
  console.log("Upper case letters:" + ct);
}
uppercase(a);
uppercase(b);

function lowercase(letter) {
  var lc = "";
  var tc = 0;
  for (o of letter) {
    if (o >= "a" && o <= "z") {
      lc = o + "";
      tc = tc + 1;
    }
  }

  console.log("Lower case letters:" + tc);
}
lowercase(a);
lowercase(b);

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"

var v = " ";
var i;
for (i of a) {
  v = v + i.toUpperCase() + " ";
}
console.log(v);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"

var split = b.split("");
var reverse = split.reverse();
var navigator_name = reverse.join("");
console.log(navigator_name);

// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"

var c = a + "" + b;
var d = b + "" + a;
console.log(c);
console.log(d);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

if (a > b) {
  console.log("The driver's name goes first.");
} else if (b > a) {
  console.log(" Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.

var text =
  " vitae quo suscipit pariatur amet aliquam quos architecto atque at laboriosam nobis molestias et, sequi quidem laborum";

var r = text.split("").length;

console.log(r);

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
