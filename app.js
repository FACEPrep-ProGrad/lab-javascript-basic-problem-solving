// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
var ProGrad1 = "Arshia";
// 1.2 Print `"The driver's name is XXXX"`.
console.log("The driver's name is " + ProGrad1);
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
var ProGrad2 = "Subham";
// 1.4 Print `"The navigator's name is YYYY"`.
console.log("The navigator's name is " + ProGrad2);

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
if (ProGrad1.length > ProGrad2.length) {
  console.log(
    "The driver has the longest name, it has " +
      ProGrad1.length +
      " characters."
  );
} else if (ProGrad2.length > ProGrad1.length) {
  console.log(
    "It seems that the navigator has the longest name, it has " +
      ProGrad2.length +
      " characters."
  );
} else {
  console.log(
    "Wow, you both have equally long names, " + ProGrad2.length + " characters."
  );
}

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5.
function checkvowels(str) {
  var vowels = "aeiouAEIOU";
  var vowelAlpha = "";
  var vowelIndex = "";
  for (i = 0; i < str.length; i++) {
    for (j = 0; j < vowels.length; j++) {
      if (str[i] == vowels[j]) {
        vowelAlpha = vowelAlpha + str[i] + " ";
        vowelIndex = vowelIndex + i + " ";
      }
    }
  }
  if (vowelIndex.length == 0) {
    console.log("no vowels");
  } else {
    var output = vowelAlpha + vowelIndex;
    console.log(str + " " + output); //checkvowels("Subham") -> Subham u a 1 4
  }
}

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
var string = "SubhamBakshi";
console.log("The number of upper case characters:");
console.log(string.replace(/[^A-Z]/g, "").length);
console.log("The number of lower case characters:");
console.log(string.replace(/[^a-z]/g, "").length);

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"
var output = "";
var capitals = ProGrad1.toUpperCase();
for (i = 0; i < capitals.length; i++) {
  output = output + capitals.charAt(i) + " ";
}
console.log(output);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"
var word = "Subham";
var reverseWord = word.split("").reverse().join("");
console.log("Reversed str is:", reverseWord);
// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"
var str1 = "Arshia ";
var str2 = "Subham ";
var res = str1.concat(str2);
console.log(res);
var res2 = str2.concat(str1);
console.log(res2);

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
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
var str =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis saepe perspiciatis minima similique, sequitenetur, dolor quasi veniam, aspernatur consequatur aliquid optio! Assumenda facere porro sit inventore aliquamcupiditate debitis!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis saepe perspiciatis minima similique, sequitenetur, dolor quasi veniam, aspernatur consequatur aliquid optio! Assumenda facere porro sit inventore aliquamcupiditate debitis!";
console.log("the number of words in the string is " + str.match(/ /g).length);
console.log(
  "number of times the latin word et appears is " + str.match(/e/g).length
);
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

var phrase = "A man, a plan, a canal, Panama!";
for (i = 0, j = phrase.length - 1; i < phrase.length / 2; i++, j--) {
  if (phrase.charAt(i) != phrase.charAt(j)) {
    flag = 1;
    break;
  }
}
if (flag == 1) {
  console.log("string is not a Palindrome");
} else {
  console.log("string is a Palindrome");
}

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin'
