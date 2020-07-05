// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
var ProGrad1 = "Yaswanth";
// 1.2 Print `"The driver's name is XXXX"`.
console.log("The driver's name is Yaswanth");
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
var ProGrad2 = "Vishnu";
// 1.4 Print `"The navigator's name is YYYY"`.
console.log("The navigator's name is Vishnu");

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

var x = ProGrad1.length; //x is drivers name length
var y = ProGrad2.length; //y is navigator name length
if (x > y) {
  console.log("The driver has the longest name, it has " + x + " characters");
} else if (x < y) {
  console.log(
    "It seems that the navigator has the longest name, it has " +
      y +
      " characters."
  );
} else {
  console.log("Wow, you both have equally long names, " + x + "characters!.");
}

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5.
function checkvowels(str) {
  var vowels = "aeiouAEIOU";
  var vowelAlphabhets = "";
  var vowelIndex = "";
  for (i = 0; i < str.length; i++) {
    for (j = 0; j < vowels.length; j++) {
      if (str[i] == vowels[j]) {
        vowelAlphabhets = vowelAlphabhets + str[i] + " ";
        vowelIndex = vowelIndex + i + " ";
      }
    }
  }
  if (vowelIndex.length == 0) {
    console.log("no vowels");
  } else {
    var output = vowelAlphabhets + vowelIndex;
    //var output22 = " ";
    //for (i = 0; i < output.length; i++) {
    //  output22 = output22 + output.shift();
    // }
    console.log(str + " " + output);
  }
}

checkvowels("Yaswanth");
checkvowels("Vishnu");

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters

function checkUppercase(str) {
  var count = 0;
  var uppercase = str.toUpperCase();
  for (i = 0, j = 0; i < str.length, j < uppercase.length; i++, j++) {
    if (str[i] == uppercase[j]) {
      count++;
    }
  }

  console.log("the number of upper case characters in " + str + " is " + count);
}

checkUppercase("Yaswanth");
checkUppercase("Vishnu");

function checkLowercase(str) {
  var lowercase = str.toLowerCase();
  var count = 0;
  for (i = 0, j = 0; i < str.length, j < lowercase.length; i++, j++) {
    if (str[i] == lowercase[j]) {
      count++;
    }
  }
  console.log("the number of lower case characters in " + str + " is " + count);
}

checkLowercase("Yaswanth");
checkLowercase("Vishnu");

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"
var output31 = "";
var capitals = ProGrad1.toUpperCase();
for (i = 0; i < capitals.length; i++) {
  output31 = output31 + capitals.charAt(i) + " ";
}
console.log(output31);
// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"
var output32 = "";
for (i = ProGrad2.length - 1; i >= 0; i--) {
  output32 = output32 + ProGrad2.charAt(i);
}
console.log(output32);

// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"
//prograd1 = driver  prograd2 = nav
var merge = ProGrad2 + " " + ProGrad1;
var output33 = "";
for (i = merge.indexOf("Yaswanth"); i < merge.length; i++) {
  output33 = output33 + merge.charAt(i);
}
output33 = output33 + " ";
for (j = merge.indexOf("Vishnu"); j <= ProGrad2.length; j++) {
  output33 = output33 + merge.charAt(j);
}

console.log(output33);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

var a = ProGrad1.localeCompare(ProGrad2);
if (a < 0) {
  console.log("The driver's name goes first.");
} else if (a > 0) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.

var str =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis saepe perspiciatis minima similique, sequitenetur, dolor quasi veniam, aspernatur consequatur aliquid optio! Assumenda facere porro sit inventore aliquamcupiditate debitis!";

// Make your program count the number of words in the string.
console.log("the number of words in the string is " + str.match(/ /g).length);

// Make your program count the number of times the Latin word et appears.
console.log(
  "number of times the latin word et appears is " + str.match(/et/g).length
);

// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

var phraseToCheck = "A man, a plan, a canal, Panama!";
for (
  i = 0, j = phraseToCheck.length - 1;
  i < phraseToCheck.length / 2;
  i++, j--
) {
  if (phraseToCheck.charAt(i) != phraseToCheck.charAt(j)) {
    flag = 1;
    break;
  }
}
if (flag == 1) {
  console.log("string is not a Palindrome");
} else {
  console.log("string is a Palindrome");
}
// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin'
