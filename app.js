// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.

var ProGrad1 = "Ravi Kachhadiya";
console.log("The driver's name is " + ProGrad1 + ".");

var ProGrad2 = "Viral Vekariya";
console.log("The navigator's name is " + ProGrad2 + ".");

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

function len(str1) {
    length = 0;
    while (str1[length] != undefined) {
        length++;
    }
    return length;
}

var len1 = len(ProGrad1);
var len2 = len(ProGrad2);

if (len1 > len2) {
    console.log("The driver has the longest name, it has " + len1 + " characters.");
}
else if (len1 < len2) {
    console.log("It seems that the navigator has the longest name, it has " + len2 + " characters.");
}
else {
    console.log("Wow, you both have equally long names, " + len1 + " characters!");
}

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5. 

function vowel(Str1) {

    var flag = 0;
    var vowel = [];
    var inde = [];


    if (Str1.includes("a") || Str1.includes("A")) {
        flag = 1;
        if (Str1.includes("a")) {
            vowel.push("a");
            inde.push(Str1.indexOf("a"));
        }
        if (Str1.includes("A")) {
            vowel.push("A");
            inde.push(Str1.indexOf("A"));
        }
    }
    if (Str1.includes("e") || Str1.includes("E")) {
        flag = 1;
        if (Str1.includes("e")) {
            vowel.push("e");
            inde.push(Str1.indexOf("e"));
        }
        if (Str1.includes("E")) {
            vowel.push("E");
            inde.push(Str1.indexOf("E"));
        }
    }
    if (Str1.includes("i") || Str1.includes("I")) {
        flag = 1;
        if (Str1.includes("i")) {
            vowel.push("i");
            inde.push(Str1.indexOf("i"));
        }
        if (Str1.includes("I")) {
            vowel.push("I");
            inde.push(Str1.indexOf("I"));
        }
    }
    if (Str1.includes("o") || Str1.includes("O")) {
        flag = 1;
        if (Str1.includes("o")) {
            vowel.push("o");
            inde.push(Str1.indexOf("o"));
        }
        if (Str1.includes("O")) {
            vowel.push("O");
            inde.push(Str1.indexOf("O"));
        }
    }
    if (Str1.includes("u") || Str1.includes("U")) {
        flag = 1;
        if (Str1.includes("u")) {
            vowel.push("u");
            inde.push(Str1.indexOf("u"));
        }
        if (Str1.includes("U")) {
            vowel.push("U");
            inde.push(Str1.indexOf("U"));
        }
    }

    if (flag == 1) {
        console.log(Str1 + " " + vowel + " " + inde);
    }
    else {
        console.log("no vowels");
    }

}

vowel(ProGrad1);
vowel(ProGrad2);

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters

function countUpperLower(length, str1) {
    var upper = 0;
    var lower = 0;

    for (var i = 0; i < length; i++) {
        if (str1[i] === str1[i].toUpperCase()) {
            upper++;
        }
        else {
            lower++;
        }
    }

    console.log("Upper case charcters : " + upper);
    console.log("Lower case charcters : " + lower);

}

countUpperLower(len1, ProGrad1);
countUpperLower(len2, ProGrad2);

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"

for (var i = 0; i < len1; i++) {
    console.log(ProGrad1[i] + " ");
}

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"

function rev(str1, len) {
    var str2 = [];
    for (var i = len; i >= 0; i--) {
        str2.push(str1[i]);
    }
    return str2.join("");
}

console.log(rev(ProGrad2));
// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"

console.log(ProGrad1 + " " + ProGrad2);
console.log(ProGrad2 + " " + ProGrad1);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

if (ProGrad1 < ProGrad2) {
    console.log("The driver's name goes first.");
}
else if (ProGrad1 > ProGrad2) {
    console.log("Yo, the navigator goes first definitely.");
}
else {
    console.log("What?! You both have the same name?");
}

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.

var lorem_ipsum = "Lorem ipsum dolor sit amet, ius eu odio reprimique,"
    + " quo id graeci causae aliquip, nam accusata periculis te. Ius etiam accusamus ex,"
    + " per et scripta antiopam. Malorum adolescens consectetuer ex duo, persius deserunt nam id."
    + " Facilisis disputando disputationi ne mel. Quo id blandit reprehendunt, at vis discere mnesarchum."
    + " Inermis vivendo volutpat no quo, dicunt officiis honestatis et has. Quo no dictas veritus."
    + " Legendos consequuntur at vel.Ne hinc solum pri.Usu appareat deserunt an.At assum petentium quo."
    + " Facilis insolens efficiendi et usu.Eam eu tation legere, graeco eripuit sea ut."
    + " Novum commune at nec.Eu vel harum repudiandae, cetero graecis ei has, in tamquam accusata"
    + " repudiandae sea.Per ut autem congue essent, enim vidit et vix.Ea discere molestie sed,"
    + " ubique dolorem feugait has no.Vix epicuri philosophia in.Magna mazim libris eum ea,"
    + " quando dicant an eos.";

var len3 = len(lorem_ipsum);
var count_word = 0;
var count_et = 0;

for (var i = 0; i < len3; i++) {
    if (lorem_ipsum[i] == " ") {
        count_word++;
    }
}

for (var i = 0; i < len3; i++) {
    if ((lorem_ipsum[i] == "e" && i == 0) || (lorem_ipsum[i] == "e" && lorem_ipsum[i - 1] == " ")) {
        if (lorem_ipsum[i + 1] == "t") {
            count_et++;
        }
    }
}

console.log("Word : " + count_word);
console.log("et Word : " + count_et);

// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that 
// will check if the value we assigned to this variable is a Palindrome.
// Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration,
// you might run into some solutions that use advanced string or array 
// methods(such as join(), reverse(), etc.).However, try to apply the knowledge 
// you currently have since you can build pretty nice solution with just using for loop, 
// if-else statements with some break and continue...Just sayin' 

var str1 = "Was it a car or a cat I saw?";
str1 = str1.toLocaleLowerCase();
var newStr = [];
var len4 = len(str1);

var char_list = "abcdefghijklmnopqrstuvwxyz";

for (var i = 0; i < len4; i++) {
    if (char_list.indexOf(str1[i]) != -1) {
        newStr.push(str1[i]);
    }
}

var len5 = len(newStr);

if (rev(newStr, len5) == newStr.join("")) {
    console.log("String is palindromes.");
}
else {
    console.log("String is not palindromes.");
}


