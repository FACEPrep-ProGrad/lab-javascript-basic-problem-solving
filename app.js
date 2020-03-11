// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.
var ProGrad_1="Harish"
var dri=ProGrad_1;
console.log(ProGrad_1)
var ProGrad_2="Shanmuga Sundharan"
var nav=ProGrad_2;
console.log(ProGrad_2)

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
var len1=ProGrad_1.length;
var len2=ProGrad_2.length;
if(len1>len2)
{
    console.log("the driver "+ProGrad_1+" has the longest name "+len1+"  characters");
}
else if(len1<len2)
{
    console.log("the Navigater "+ProGrad_2+" has the longest name "+len2+"  characters");
}
else{
    console.log("both driver and navigater "+ProGrad_2,ProGrad_1+" has same length" +len1);
}



// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the number of name, and also print the vowel letters along with the vowel characters. or
// - print no vowels
var i,c=0;
for(i=0;i<len1;i++)
{
    if(ProGrad_1[i]=='a'|| ProGrad_1.charAt(i)=='e'|| ProGrad_1.charAt(i)=='i'||ProGrad_1.charAt(i)=='o'|| ProGrad_1.charAt(i)=='u')
    {
        console.log(ProGrad_1[i]);
        c++;
    }
    
}
console.log("number of vowels in string is"+c);

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
var uc=0,lc=0;
for(i=0;i<len1;i++)
{
    if(ProGrad_1[i]>='A' && ProGrad_1[i]<='Z')
    {
        uc++;
    }
    
    else
{
    lc++;
}

}
console.log("no of upper caes letters are "+uc);
console.log("no of lower caes letters are "+lc);


// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"
ProGrad_1=ProGrad_1.toUpperCase();
for(i=0;i<len1;i++)
{
    console.log(ProGrad_1[i]+" ");
}

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"
for(i=len2;i>=0;i--)
{
    console.log(ProGrad_2[i]);
}

// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
console.log(ProGrad_1+" "+ProGrad_2);
console.log(ProGrad_2+" "+ProGrad_1);
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
if(dri[0]<nav[0])
{
    console.log("Lexicographic\n"+dri);
}
else{
    console.log("Lexicographic\n"+nav);
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
