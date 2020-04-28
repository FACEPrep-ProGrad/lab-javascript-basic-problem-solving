// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.

    var ProGrad1 = "Yashasree";
    var ProGrad2 = "Swetha";
    document.write("The driver's name is " + ProGrad1 + "<br>");
    document.write("The navigator's name is " + ProGrad2 + "<br>");

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

if(ProGrad1.length == ProGrad2.length)
    document.write("Wow, you both have equally long names," + ProGrad1.length + "characters!.");
else if(ProGrad1.length > ProGrad2.length)
    document.write("The driver has the longest name, it has " + ProGrad1.length + "characters!.");
else
document.write("The driver has the longest name, it has " + ProGrad2.length + "characters!.");

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5.

function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  }
  return vcount;
}

document.write(vowel_count(ProGrad1) + "<br>");
document.write(vowel_count(ProGrad2) + "<br>");



// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters

function countUpperCaseChars(str) 
{
    var count=0,len=str.length;
    for(var i=0;i<len;i++) 
    {
      if(/[A-Z]/.test(str.charAt(i))) count++;
    }
    return count;
  }

  function countLowerCaseChars(str) 
  {
    var count=0,len=str.length;
    for(var i=0;i<len;i++) 
    {
      if(/[a-z]/.test(str.charAt(i))) count++;
    }
    return count;
  }
  document.write(countLowerCaseChars(ProGrad1) + "<br>");
  document.write(countLowerCaseChars(ProGrad2) + "<br>");
  document.write(countUpperCaseChars(ProGrad1) + "<br>");
  document.write(countUpperCaseChars(ProGrad2) + "<br>");


// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"

document.write(ProGrad1.toUpperCase.split('').join(' '));
document.write(ProGrad1.toLowerCase.split('').join(' '));


// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"

function reverseString(str) {
    return str.split("").reverse().join("");
}
document.write(reverseString(ProGrad2));


// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
var both_Names = ProGrad1 + " " + ProGrad2;
if (ProGrad1[0] < ProGrad2[0])
{
    document.write(both_Names);
}
else
    document.write(ProGrad2 + " " + ProGrad1);
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
