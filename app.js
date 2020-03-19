// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5. 

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters


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


// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the number of name, and also print the vowel letters along with the vowel characters. or
// - print no vowels

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters


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


//Progression - 1
var Prograd1 = "Sherlock", Prograd2 = "Watson";
console.log("The driver's name is " + Prograd1)
console.log("The navigator's name is " + Prograd2)

//Progression - 2.1
if (Prograd1.length>Prograd2.length){
    console.log("The driver has the longest name, it has " + Prograd1.length + "characters.");
} 
else if (Prograd1.length<Prograd2.length){
    console.log("It seems that the navigator has the longest name, it has " + Prograd2.length + "characters.");
}
else
  console.log("Wow, you both have equally long names, " + Prograd2.length + "characters!.");

//Progression - 2.2
var a=e=i=o=u=0;
var s1=Prograd1.split()
var s2=Prograd2.split()
for(var j=0; j<Prograd1.length; j++)
{ if(Prograd1[j]=='a' || Prograd1[j]=='A')
  {a++;}
  if(Prograd1[j]=='e' || Prograd1[j]=='E')
  {e++;}
  if(Prograd1[j]=='i' || Prograd1[j]=='I')
  {i++;}
  if(Prograd1[j]=='o' || Prograd1[j]=='O')
  {o++;}
  if(Prograd1[j]=='u' || Prograd1[j]=='U')
  {u++;}
}
console.log("a : "+a)
console.log("e : "+e)
console.log("i : "+i)
console.log("o : "+o)
console.log("u : "+u)

//Progression - 2.3
var l = 0, u = 0;
for (var i = 0; i < Prograd1.length; i++)
    if(Prograd1.charCodeAt(i)<97){
        u = u+1;
    }
  else{
        l = l+1;}
console.log("UpperCase: " + u)
console.log("LowerCase: " + l)

//Progression - 3.1
var gimp="";
for (var i = 0; i < Prograd1.length; i++){
    gimp = gimp + (Prograd1.charAt(i).toUpperCase());
    if(i == Prograd1.length-1){
        break;
    }else{
        gimp = gimp + " ";}
}
console.log(gimp)

//Progression - 3.2
var temp = x.split("");
var reversed = temp.reverse();
var r = reversed.join("");
console.log(r)

//Progression - 3.3
var x = ""
undefined
x = x.concat(Prograd1, " ", Prograd2)
var p = x.split(" ")
var final = "";
for (i = p.length-1; i>=0; i--){
    final = final + p[i];
    if(i == 0){
        break;
    }else{
        final = final + " ";}
}
console.log(final)

//Progression - 3.4
if(p[0]<p[1])
{ console.log("The driver's name goes first.")}
else if(p[0]>p[1]){
  console.log("Yo, the navigator goes first definitely.")}
else { console.log("What?! You both have the same name?")}

//Bonus - 1
var lo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum sed justo ut finibus. Proin consequat eget neque vel aliquam. Suspendisse potenti. Maecenas eu egestas felis, ac tristique lorem. Morbi nec dui rhoncus, dignissim dolor vitae, fermentum orci. Aenean id nunc non urna mollis viverra non et velit. Pellentesque dignissim dignissim ante, at cursus nunc convallis sit amet. Quisque bibendum sagittis consectetur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras imperdiet sapien non sodales elementum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas a ipsum nec nibh consectetur egestas. Aenean varius libero a elit blandit, sit amet commodo urna semper. Maecenas iaculis id velit nec malesuada. Etiam venenatis ac mi ac fermentum. Aenean orci lectus, pretium vitae leo ac, pellentesque hendrerit ligula. Nunc sit amet ligula sapien. Integer id lacus nec urna sollicitudin luctus ut at arcu. Donec suscipit ante ut hendrerit fermentum. Cras faucibus tristique blandit. Pellentesque et eros non orci tristique accumsan. Mauris gravida suscipit ipsum, malesuada lobortis nisl fringilla et. Morbi nisl neque, finibus a imperdiet nec, interdum id nisl. Aenean sit amet blandit odio, at ultricies leo. Sed fringilla pharetra diam et consectetur. Vivamus porta bibendum risus ac auctor. Vestibulum tincidunt eleifend pretium. Praesent in mauris eget nisi pretium imperdiet a a nunc. Vestibulum massa enim, vestibulum et ex sit amet, porta blandit metus. Duis lectus purus, condimentum at orci ac, laoreet blandit nibh. Vivamus convallis urna eu nulla faucibus, at lacinia ipsum cursus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque rhoncus eu arcu placerat viverra. Sed tincidunt ut quam in ultrices. Nunc a imperdiet ligula. Mauris ac molestie dui, vel iaculis eros. Nulla iaculis nibh lorem, vel viverra sem vulputate ac. Fusce scelerisque dignissim dui vehicula pharetra. Proin molestie facilisis quam ut tempus. Praesent tempus dui dui, a pretium sem feugiat ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer suscipit, nulla at egestas sodales, massa arcu laoreet ligula, vitae feugiat justo lacus vitae ipsum. Cras non libero varius, viverra dui a, maximus tortor. Quisque luctus orci est, a lobortis lorem ornare quis."
var hola = lo.split(" ")
var le = hola.length
for(var i=0; i<hola.length; i++)
{ if(hola[i]=="et")
{ co++;
}}
console.log(co)

//Bonus - 2
var phraseToCheck = "race car"
var gmp = phraseToCheck.split(" ")
var gmpj = gmp.join("")
var newstring = "";
for (var i = gmpj.length - 1; i >= 0; i--) { 
        newstring += gmpj[i]; }
if(gmpj==newstring)
{ console.log("Palindrome");}
else{console.log("Not a Palindrome");}
