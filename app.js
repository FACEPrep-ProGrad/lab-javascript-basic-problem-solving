// Important Note - No Built-in functions to be used

// Progression 1: Names and Input
// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.

var ProGrad_1 = "Balasai Nikhil",
  ProGrad_2 = "Likhithanjali";
console.log("The driver's name is", ProGrad_1);
console.log("The navigator's name is", ProGrad_2);

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
var navigatorLen = ProGrad_2.length,
  driverLen = ProGrad_1.length;
if (driverLen > navigatorLen)
  console.log(
    "The driver has the longest name, it has ",
    driverLen,
    " characters"
  );
else if (navigatorLen > driverLen)
  console.log(
    "It seems that the navigator has the longest name, it has ",
    navigatorLen,
    " characters. or"
  );
else
  console.log(
    "Wow, you both have equally long names, ",
    driverLen,
    " characters!."
  );

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the number of name, and also print the vowel letters along with the vowel characters. or
// - print no vowels
function getVowels(string, len) {
  var vowelLetters = "";
  for (var i = 0; i < len; i++) {
    if (
      string[i] == "a" ||
      string[i] == "e" ||
      string[i] == "i" ||
      string[i] == "o" ||
      string[i] == "u" ||
      string[i] == "A" ||
      string[i] == "E" ||
      string[i] == "I" ||
      string[i] == "O" ||
      string[i] == "U"
    ) {
      vowelLetters += string[i] + ",";
    }
  }
  return vowelLetters;
}

function printVowels(string, len) {
  var vowels = getVowels(string, len);
  if (vowels.length > 0) console.log(string, vowels);
  else console.log("no vowels");
}

printVowels(ProGrad_1, driverLen);
printVowels(ProGrad_2, navigatorLen);

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
function isUpperCase(character) {
  return character >= "A" && character <= "Z";
}
function isLowerCase(character) {
  return character >= "a" && character <= "z";
}

function printCountOfUpperAndLowerCaseLetters(string, len) {
  var upperCaseLetterCount = 0,
    lowerCaseLetterCount = 0;
  for (var i = 0; i < len; i++) {
    if (isUpperCase(string[i])) upperCaseLetterCount += 1;
    if (isLowerCase(string[i])) lowerCaseLetterCount += 1;
  }
  console.log(
    "upper case ",
    upperCaseLetterCount,
    "lower case",
    lowerCaseLetterCount
  );
  return;
}
printCountOfUpperAndLowerCaseLetters(ProGrad_1, driverLen);
printCountOfUpperAndLowerCaseLetters(ProGrad_2, navigatorLen);

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"
function getSpaceSeperatedString(string, len) {
  var spaceSeperatedStr = "";
  for (var i = 0; i < len; i++) {
    spaceSeperatedStr += string[i] + " ";
  }
  return spaceSeperatedStr;
}
console.log(getSpaceSeperatedString(ProGrad_1, driverLen));

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"
function reverseOfString(string, len) {
  var reversedStr = "";
  for (var i = len - 1; i >= 0; i--) {
    reversedStr += string[i];
  }
  return reversedStr;
}
console.log(reverseOfString(ProGrad_2, navigatorLen));

// 3. 3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"
function mergeStrings(str1, str2) {
  return str1 + " " + str2;
}

function reverseWordsInString(string) {
  var words = [];
  var temp = "",
    result = "";
  console.log("Start",string);
  for (var i = 0; i < string.length; i++) {
    console.log("Str[i]",string[i]);
    if (string[i] != " ") {
      temp += string[i];
      console.log("temp-->",temp);
      
    } else {
      words.push(temp);
      console.log(words);
      temp='';
    }
  }
  words.push(temp);
  console.log("list of words", words);
  for (var i = words.length - 1; i <= 0; i--) {
    result += words[i] + " ";
  }
  return result;
}
var mergeStr = mergeStrings(ProGrad_2, "FACEPrep");
console.log(reverseWordsInString(mergeStr));

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
function lexicographicOrder(name1,name2){
  if(name1<name2)
    return name1+" , "+name2;
  return name2+" , "+name1;
}
console.log(lexicographicOrder("likhithanjali","Balasai nikhil"));


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
