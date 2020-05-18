// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

var ProGrad_1='Elizabeth';
console.log("The driver's name is "+ProGrad_1);
var ProGrad_2='Stefani';
console.log("The navigator's name is "+ProGrad_2);


// Progression 2: Control Statements - 1
len1=ProGrad_1.length;
len2=ProGrad_2.length;
if(len1 > len2)
{
  console.log('Looks like the driver has the longer name. Their name has '+len1+' characters.');
}
else if(len1 < len2)
{
  console.log('Looks like the driver has the longer name. Their name has '+len2+' characters.');
}
else{
  console.log('Looks like they both have equally long names');
}

// 2.2. Check if the string contains vowels or not.  var vowel_list = 'aeiouAEIOU';
  for(var x = 0; x < len1 ; x++) {
    if (vowel_list.indexOf(ProGrad_1[x]) !== -1)
    {
      console.log(ProGrad_1[x]+' Vowel At '+x);
    }
    else{
      console.log('No vowels');
    }
    
  }
  
   for(var x = 0; x < len2 ; x++) {
    if (vowel_list.indexOf(ProGrad_2[x]) !== -1)
    {
      console.log(ProGrad_2[x]+' Vowel At '+x);
    }
    else{
      console.log('No vowels');
    }
    
  }

// 2.3. Check if the string contains uppercase and lowercase characters Xx
//for driver's name
// - Print the number of upper case characters
var upper=0;
var lower=0;
for(var x=0;x<len1;x++)
{
if (ProGrad_1[x] == ProGrad_1[x].toUpperCase()) {
 alert ('upper case true');
  upper++;
}
else if (ProGrad_1[x] == ProGrad_1[x].toLowerCase()){
 alert ('lower case true');
 lower++;
}
else{
  console.log('Not a letter');
}
}
console.log("Number of upper case letter in driver's name = "+upper);
// - Print the number of lower case characters
console.log("Number of lower case letter in driver's name = "+lower);

//for navigator's name
// - Print the number of upper case characters
for(var x=0;x<len2;x++)
{
if (ProGrad_2[x] == ProGrad_2[x].toUpperCase()) {
 alert ('upper case true');
  upper++;
}
else if (ProGrad_2[x] == ProGrad_2[x].toLowerCase()){
 alert ('lower case true');
 lower++;
}
else{
  console.log('Not a letter');
}
}
console.log("Number of upper case letter in driver's name = "+upper);
// - Print the number of lower case characters
console.log("Number of lower case letter in driver's name = "+lower);



// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"
var newpro1=[];
for(var x=0; x<len1; x++){
  newpro1.push(ProGrad_1[x].toUpperCase()+" ");
}
space1=newpro1.toString();
console.log(space1);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"
function revstring(str){
    var newpro2="";
    for(var x=str.length-1; x>=0; x--){
      newpro2+=ProGrad_2[x];
    }
    return newpro2;
    }
    revstring(ProGrad_2);

// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"

console.log(ProGrad_1+" "+ProGrad_2);
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"
console.log(ProGrad_2+" "+ProGrad_1);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
if(ProGrad_1.localeCompare(ProGrad_2)<0){
    console.log("The driver's name goes first.");
  }
  else if(ProGrad_1.localeCompare(ProGrad_2)>0){
    console.log("Yo, the navigator goes first definitely.");
  }
  else{
    console.log("What?! You both have the same name?");
  }

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
function WordCount(str) { 
    return str.split(" ").length;
  }

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
function checkpal(str){
    for(i=str.length-1;i>=0;i++){
      rev.push(str[i]);
    }
    rev.toString();
    if(rev==str){
      console.log("It's a palindrome.");
    }
    else{
      console.log("It's not a palindrome.");
    }
  }
  checkpal('Was it a car or a cat I saw?');

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 
