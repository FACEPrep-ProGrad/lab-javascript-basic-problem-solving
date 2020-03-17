// Important Note - No Built-in functions to be used
// Progression 1: Names and Input
// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.

var ProGrad_1;
ProGrad_1 = "driver";
document.write("The driver's name is " + ProGrad_1);
ProGrad_2 = "navigator";
document.write("<br>");
document.write("The navigator's name is " + ProGrad_2);

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

let d, n;
d = ProGrad_1.length;
n = ProGrad_2.length;
if (d > n) {
  document.write("<br>");
  document.write("The driver has the longest name, it has " + d + "characters");
} else if (d < n) {
  document.write("<br>");
  document.write(
    "The navigator has the longest name, it has " + n + " characters"
  );
} else {
  document.write("<br>");
  document.write("Wow, you both have equally long names, " + n + "characters!");
}

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5.

var a = "ProGrad";
var i;
if (a.match(/[aeiouAEIOU]/)) {
  document.write("<br>");
  document.write(a + "&nbsp;");
  b = a.length;
  for (i = 0; i < b; i++) {
    if (
      a.charAt(i) == "a" ||
      a.charAt(i) == "e" ||
      a.charAt(i) == "i" ||
      a.charAt(i) == "o" ||
      a.charAt(i) == "u" ||
      a.charAt(i) == "A" ||
      a.charAt(i) == "E" ||
      a.charAt(i) == "I" ||
      a.charAt(i) == "O" ||
      a.charAt(i) == "U"
    ) {
      document.write(a.charAt(i) + "&nbsp;");
    }
  }
  for (i = 0; i < b; i++) {
    if (
      a.charAt(i) == "a" ||
      a.charAt(i) == "e" ||
      a.charAt(i) == "i" ||
      a.charAt(i) == "o" ||
      a.charAt(i) == "u" ||
      a.charAt(i) == "A" ||
      a.charAt(i) == "E" ||
      a.charAt(i) == "I" ||
      a.charAt(i) == "O" ||
      a.charAt(i) == "U"
    ) {
      document.write(i + "&nbsp;");
    }
  }
} else {
  document.write("<br>");
  document.write("no vowels");
}

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
var count = 0;
var countlow = 0;

if ((a >= "A" && a <= "Z") || (a >= "a" && a <= "z")) {
  document.write("<br>");
  document.write("string contains uppercase and lowercase characters");
} else {
  document.write("<br>");
  document.write("string does not contains uppercase and lowercase characters");
}

for (i = 0; i < b; i++) {
  if (a.charAt(i) >= "A" && a.charAt(i) <= "Z") count++;
}
document.write("<br>");
document.write("the number of uppercase characters are " + count);
for (i = 0; i < b; i++) {
  if (a.charAt(i) >= "a" && a.charAt(i) <= "z") countlow++;
}
document.write("<br>");
document.write("the number of lowercase characters are " + countlow);

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"

// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"

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
