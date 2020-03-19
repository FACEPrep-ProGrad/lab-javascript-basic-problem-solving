// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.
var prograd_1 = "Subham Das";
var prograd_2 = "pavan";
document.writeln("The Driver name is ",prograd_1,"<br>");
document.writeln("The Navigator name is ",prograd_2,"<br>");
// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
var driver = prograd_1.length;
var navi= prograd_2.length;
if(driver>navi){
    document.write("The driver has the longest name, it has ", driver," characters.<br>")
}
else if(driver<navi){
    document.write("It seems that the navigator has the longest name, it has ", navi ," characters.<br>")
}
else{
    document.write("Wow, you both have equally long names, ",driver,"characters!.<br>")
}
// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5. 
function findVowel(prograds){
    var vowel=[];
    var vowelIndex=[];
    for (let i = 0; i < prograds; i++) {
        if(prograds.charAt(i) =="a" || prograds.charAt(i) =="e" || prograds.charAt(i) =="i" ||prograds.charAt(i) =="o" || prograds.charAt(i) =="u" ||
        prograds.charAt(i) =="A" || driver.charAt(i) =="E" ||prograds.charAt(i) =="I" ||prograds.charAt(i) =="O" ||prograds.charAt(i) =="U")
        {
            vowel[i] = prograds.charAt(i);
            vowelIndex[i] = i;  
            
        }
        else{
            document.writeln("no vowel");2
        }
    }
}
function printVowel(prograds)
{
    document.writeln(prograds);
    for (let i = 0; i < vowel.length; i++)
    {
        document.writeln(vowel[i]);
    }
    for (let i = 0; i < vowelIndex.length; i++){
        document.writeln(vowelIndex[i]);
    }
}  
findVowel(prograd_1);
printVowel(prograd_1);
document.writeln("<br>");
findVowel(prograd_2);a
printVowel(prograd_2);
// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
function caseCount(name){
    var upper = 0;
    var lower =0;
    for (let i = 0; i <name.length(); i++) 
    { 
        if (str[i] >= 'A' && str[i] <= 'Z') {
            upper++; 
        }
        else{
            lower++;
        }
         
    } 
    document.writeln("the number of upper case characters ",upper," <br>");
    document.writeln("the number of lower case characters ",lower," <br>");
 } 
caseCount(prograd_1);
caseCount(prograd_2);

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"
function UpperCaseChars(name) {
    var res = name.split("");
    // console.log(res);
    let upper = "";
    for(var i = 0; i < res.length; i++)
    {
        upper += res[i]+" ";
    }
    upper = upper.toUpperCase();
    document.writeln(upper);
}
UpperCaseChars(prograd_1);
// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"
function reverseString(name) {
    return name.split("").reverse().join("");
}
console.log(reverseString(ProGrad_2));
// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"
console.log(ProGrad_1.concat(" ", ProGrad_2));
console.log(ProGrad_2.concat(" ", ProGrad_1));
// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
function alphabeticalOrder(name)
{
    str=name.toUpperCase().split("").sort().join("").toLowerCase();
    document.writeln(str);

}
alphabeticalOrder(ProGrad_1);
alphabeticalOrder(ProGrad_2);
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
