// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.

let Prograd_1 = "Light Yagami";
console.log(`The drive's name is ${Prograd_1}`);
let Prograd_2 = "Hoshomi";
console.log(`The navigator's name is ${Prograd_2}`);

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
if (Prograd_1.length > Prograd_2.length) {
  console.log(
    `The driver has the longest name, it has ${Prograd_1.length} characters`
  );
} else if (Prograd_1.length === Prograd_2.length) {
  console.log(
    `Wow, you both have equally long names, ${Prograd_1.length} characters`
  );
} else {
  console.log(
    `It seems that the navigator has the longest name, it has ${Prograd_2.length} characters`
  );
}

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5.
let word1 = "Prograd"; //prompt("Enter String");
const vowels = "aeiou";
let output_character = "";
let output_index = "";

for (let i = 0; i < vowels.length; i++) {
  let character = word1.charAt(i).toLowerCase();
  if (vowels.includes(character)) {
    output_character += `${character} `;
    output_index += `${i} `;
  }
}

console.log(`${word1} ${output_character.trim()} ${output_index.trim()}`);

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters

let word2 = "Prograd"; //prompt("Enter String");
let regex = /[A-Z]/g;
const matchedUppercase = word2.match(regex);
regex = /[a-z]/g;
const matchedLowercase = word2.match(regex);
console.log(`String: ${word2}`);
console.log(`Total Uppercase Letter: ${matchedUppercase.length}`);
console.log(`Total Lowercase Letter: ${matchedLowercase.length}`);

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"
let capitalised = "";
for (let i = 0; i < Prograd_1.length; i++) {
  capitalised += Prograd_1.charAt(i).toUpperCase() + " ";
}
console.log(capitalised.trim());

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"
let reversed = "";
for (let i = Prograd_2.length; i >= 0; i--) {
  reversed += Prograd_2.charAt(i);
}
console.log(reversed);

// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"

console.log(Prograd_1.concat(Prograd_2));
console.log(Prograd_2.concat(Prograd_1));

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

if (Prograd_1.localeCompare(Prograd_2)) {
  console.log("The driver's name goes first.");
} else if (Prograd_1.localeCompare(Prograd_2) == -1) {
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
let text =
  "Lorem ipsum, dolor et sit amet consectetur adipisicing elit.Culpa, neque earum fugiat a sapiente laborum dicta id libero dignissimos eos commodi voluptate ullam, soluta suscipit velit accusantium voluptatum nemo voluptates Lorem ipsum dolor sit amet consectetur, adipisicing elit.Autem error temporibus ducimus dolor consectetur voluptates reprehenderit dicta facere sint tempore, laboriosam repudiandae necessitatibus asperiores maxime.Consequuntur iste dolorum reiciendis fuga Lorem ipsum dolor sit amet consectetur adipisicing elit.Rerum, perspiciatis delectus!Tempore dignissimos corporis tenetur aut necessitatibus.Laborum, quaerat.Est, similique dolorem cupiditate culpa quas vitae hic blanditiis praesentium odit!";
const punctuations = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

text = text.replace(punctuations, " ");

text = text.split(" ");

let words = [];

for (let word of text) {
  if (word.trim()) {
    words.push(word.trim());
  }
}

let et_count = 0;

words.forEach(function (element) {
  if (element === "et") {
    et_count++;
  }
});
console.log(`Number of words: ${words.length}`);
console.log(`Et Count: ${et_count}`);

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

let phraseToCheck = "A man, a plan, a canal, Panama!".toLowerCase();
phraseToCheck = phraseToCheck.replace(punctuations, " ");
let words_array = phraseToCheck.split(" ");
let new_array = [];
words_array.forEach((element) => {
  if (element.trim()) {
    new_array.push(element.trim());
  }
});

phraseToCheck = new_array.join("");
revesePhraseToCheck = "";

for (let i = phraseToCheck.length; i >= 0; i--) {
  revesePhraseToCheck += phraseToCheck.charAt(i);
}

if (phraseToCheck === revesePhraseToCheck) {
  console.log("The given string is Palindrome.");
}
