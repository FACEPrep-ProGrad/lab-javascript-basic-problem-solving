// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.
let Prograd_1 = "Apparao"; 
console.log("The driver name is "+Prograd_1);
let Prograd_2 = "Tejaswini";
console.log("The navigator name is "+Prograd_2); 

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
let Prograd_1 = "Apparao"; 
let Prograd_2 = "Tejaswini";
var l=0;
while(Prograd_1[l]!="undefined")
l++;
var l2=0;
while(Prograd_2[l2]!="undefined")
l2 ++;
if(l1>l2)
{
    console.log("The driver has the longest name, it has "+l+"characters");

}
esle if(l<l2)
{
    console.log("It seems that the navigator has the longest name, it has "+l2 +"characters");
}
else
console.log("Wow, you both have equally long names, XX characters!");




// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the number of name, and also print the vowel letters along with the vowel characters. or
// - print no vowels
              var me="apparao";
              var vowel_count=0;
              for(var i=0;i<me.length;i++)
              {
                  if(me[i]=="a"||me[i]=="A"||me[i]=="e"||me[i]=="E"||me[i]=="i"||me[i]=="I"||me[i]=="o"||me[i]=="O"||me[i]=="u"||me[i]=="U")
                  {
                      console.log(me[i]+" ");
                      vowel_count ++;
                  }
              }
              if(vowel_count!=0)
              { 
                   console.log("\n");
                   console.log(vowel_count);
              }
              else
              console.log("no vowels");




// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
let Prograd_2 = "Tejaswini";   
var   uppercase_count_prograd_2=0;
    var  lowercase_count_prograd_2=0;
    length=0;
    for(length=0;length<length_Prograd_2;length++)
    {
        if(ProGrad_2 >= 'a' && ProGrad_2 <= 'z')
        lowercase_count_prograd_2 ++;
        else
        lowercase_count_prograd_2 ++;
    }
    console.log("upper_count_prograd_2"+uppercase_count_prograd_2);
    console.log("lower_count_prograd_2"+lowercase_count_prograd_2);





// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"
                let driver="ProGrad";
            
                var i=0;
                while(driver[i]!="undefined")
                {
                    console.log(driver[i]+" ");
                    i++;
                }

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"
                       let nav="ProGrad";
                       var length=o;
                       while(nav[length]!="undefined")
                       length ++;
                       for(var i=length-1;i>=0;i--)
                       console.log(nav[i]);

// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"
               let driver="ProGrad";
               let navigator="FACEPrep";
               console.log("ProGrad"+"FACEPrep");
               console.log("FACEPrep"+" "+"ProGrad");

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
let ProGrad_1="ProGrad";
let ProGrad_2="FACEPrep";
var n=Prograd_1.localeCompare(Prograd_2);
if(n==1)
{
    console.log("The drivers's name goes first");

}
else if(n==-1)
{
    console.log("Yo,the navigator goes first definitely");
}
else{
    
    console.log("what?! You both have the same name ");
}

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
let s ="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when 
an unknown printer took a galley of type and scrambled it to make a type specimen book. 
It has survived not only five centuries, but also the leap into electronic typesetting, 
remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
 containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
  including versions of Lorem Ipsum.";
var words =0;
var i=0;
var latin_count=0;
 var prev=0;
while(s[i]!=undefined)
{
    if(s[i]==" ")
    {
    words++;
    let check=s.substring(prev,i);
    if(check=="Latin")
    latin ++;
    prev=i+1;
 }
}
console.log(words);
        
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
length=0;
let s2=malayalam;
while(s2[length]!=undefined)
length++;
var i=0,j=length-1;
for(i=0,j=length-1;i<j;i++,j--)
{
    if(s2[i]!=s2[j])
    console.log("not palindrome");
}
if(i>j)
{
   console.log("Palindrome") ;
}



// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 
