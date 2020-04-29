// Important Note - No Built-in functions to be used
// Progression 1: Names and Input
var Prograd_1="Harsha";
console.log(Prograd_1);
var Prograd_2="FacePrep"
console.log(Prograd_2);

// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
if(Prograd_1.length>Prograd_2.length)
{
    console.log("The driver has the longest name, it has "+Prograd_1+ "characters");
}
else if(Prograd_1.lenghth<Prograd_2.length)
{
    console.log("It seems that the navigator has the longest name, it has " +Prograd_2+"characters");
}
else
{
    console.log("" Wow, you both have equally long names,""+Prograd_2+"characters!");
}
// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5. 

function vowel_count(str1)
{
    var vowel_list ="aeiouAEIOU";
    var vcount=0;
    var out=[];
    var vowelarray =[];
    for( var x=0;x<str1.length;x++)
    {
        for(var y=0;y<vowel_list.length;y++)
        {
            if(str1[x]==vowel_list[y])
            {
                vcount ==1;
                vowelarray ==vowel_list[y];

            }
        }
    }
    if(vcount!=0)
    out=(str1,vcount,vowelarray);
    return out;
}
console.log(vowel_count(Prograd_1));
console.log(vowel_count(Prograd_2));
// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters

function countUpperCaseCharater(str)
{
    var count=0, len =str.length;
    for(var i=0;i<len;i++)
    {
        if(/[A-Z]/.test(str.charAt(i))) count++;
    }
    return count;
}

function countLowerCaseCharater(str)
{
    var count=0, len =str.length;
    for(var i=0;i<len;i++)
    {
        if(/[a-z]/.test(str.charAt(i))) count++;
    }
    return count;
}
console.log(countUpperCaseCharater(Prograd_1));
console.log(countUpperCaseCharater(Prograd_2));
console.log(countLowerCaseCharater(Prograd_1));
console.log(countLowerCaseCharater(Prograd_1));






// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"
// function upperCase(str)
// {
//     var nm=str.split(" ");
//     let uppr =" ";
//     for(var i=0;i<nm.length;i++)
//     {
//         upr=nm[i]+" ";
//     }
//     return upr;
// }
// console.log(upperCase(Prograd_1));

var upr = "";
for(i=0; i < Prograd_1.length; i++) {
  example += Prograd_1[i].toUpperCase() + " "; 
}
console.log(upr);

c
// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"
// function reversenav(str)
// {
//     return str.split(" ").reverse().join("");
// }
// console.log(reversenav(Prograd_2));

var navigatorName = "";
for (j=Prograd_2.length-1; j >= 0; j--) {
  navigatorName += Prograd_2[j];
}
 console.log(navigatorName);
// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"
console.log(Prograd_1.concat(" ",Prograd_2));
console.log(Prograd_2.concat(" ",Prograd_1));
// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?


if (Prograd_1.toLowerCase() < Prograd_2.toLowerCase()) {
    console.log("The driver's name goes first");
  } else if (Prograd_1.toLowerCase() > Prograd_2.toLowerCase()) {
    console.log("Yo, the navigator goes first definitely");
  } else {
    console.log("What?! You both got the same name?");
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
