// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
let ProGrad_1 = 'Rohit';
// 1.2 Print `"The driver's name is XXXX"`.
document.write(`The driver's name is ${ProGrad_1}<br>`);
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
let ProGrad_2 = 'Punam';
// 1.4 Print `"The navigator's name is YYYY"`.
document.write(`The navigator's name is ${ProGrad_2}<br>`);

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
let length1 = ProGrad_1.length,
    length2 = ProGrad_2.length;
if(length1>length2){
    document.write(`The driver has the longest name, it has ${length1} characters.<br>`);
}
else if(length1<length2){
    document.write(`It seems that the navigator has the longest name, it has ${length2} characters.<br>`);
}
else{
    document.write(`Wow, you both have equally long names, ${length1} characters!.<br>`);
}

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5. 

//searches for vowels and returns array of their indices
function checkVowels(string){
    let index=[];
    for(let i=0;i<string.length;i++){
        switch(string[i]){
            case 'a':
            case 'A':
            case 'e':
            case 'E':
            case 'i':
            case 'I':
            case 'o':
            case 'O':
            case 'u':
            case 'U':
                index[index.length] = i;
        }
    }
    return index;
}

//prints vowel in a string
function display(indices,ProGrad){
    if(indices.length){
        document.write(ProGrad);
        for(let i=0;i<indices.length;i++){
            document.write(ProGrad[indices[i]]);
        }
        for(let i=0;i<indices.length;i++){
            document.write(indices[i]);
        }
    } 
    document.write(`<br>`);   
}
display(checkVowels(ProGrad_1),ProGrad_1);
display(checkVowels(ProGrad_2),ProGrad_2);
// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
function caseCheck(name){
    let upperCaseCount=0,
        lowerCaseCount=0;
    for(let i=0;i<name.length;i++){
        if(name[i]==name[i].toUpperCase()){
            upperCaseCount++;
        }
        else{
            lowerCaseCount++;
        }
    }
    document.write(`upperCaseCount = ${upperCaseCount} , lowerCaseCount = ${lowerCaseCount}<br>`);
}
caseCheck(ProGrad_1);
caseCheck(ProGrad_2);

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"
let capital = ProGrad_1.toUpperCase()
for(let i=0;i<length1;i++){
    document.write(capital[i]+" ");
}

document.write(`<br>`);
// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"
for(let i=length2-1;i>-1;i--){
    document.write(ProGrad_2[i]);
}
document.write(`<br>`);
// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"
let merged =`${ProGrad_1} ${ProGrad_2}`;
document.write(merged + `<br>`);

merged = `${merged.substr(length1+1,length2)} ${merged.substr(0,length1)}`;

document.write(merged+`<br>`);
// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

if(ProGrad_1<ProGrad_2){
    document.write(`The driver's name goes first.<br>`);
}
else if(ProGrad_1>ProGrad_2){
    document.write(`Yo, the navigator goes first definitely.<br>`);
}
else{
    document.write(`What?! You both have the same name?<br>`);
}
// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
let text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, atque facilis? Cupiditate nesciunt fugiat distinctio laborum fugit quisquam minima ratione, tempore necessitatibus magni omnis, quia quam provident, neque consequatur quod? Iste nostrum ipsa quae, recusandae nulla iusto dolor amet hic. Autem earum dolores sequi ipsum accusantium ipsam repellendus, ab cumque inventore optio fugiat minus corporis ut explicabo repellat? Porro, necessitatibus.";
let count = 0;
// Make your program count the number of words in the string.
for(let i=0;i<text.length;i++){
    if(text[i]==` ` && text[i+1] != ` `){
        count++;
    }
}
if(text.length){
    count++;
}
document.write(count);

// Make your program count the number of times the Latin word et appears.

// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:
let phraseToCheck = "A man, a plan, a canal, Panama!";
// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 
