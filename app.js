// Important Note - No Built-in functions to be used
// Progression 1: Names and Input
// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.
var prograd_1 = "harsh";
var prograd_2 = "ranjan";
console.log("the driver's name is " + prograd_1);
console.log("the navigator's name is " + prograd_2);
// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

if (prograd_1.length > prograd_2.length) {
    console.log("The driver has the longest name, it has " + Prograd_1.length + " characters");
}
else if (prograd_1.length < prograd_2.length) {
    console.log("it seems that the navigator has the longest name, it has " + prograd_2.length + " characters");
}
else {
    console.log("Wow, you both have equally long names," + prograd_2.length + " characters!");
}

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5. 
vowel_checker(prograd_1);
vowel_checker(prograd_2);
function vowel_checker(string_value) {
    var count = 0;
    var position = " ";
    var value = " ";
    for (var i = 0; i < string_value.length; i++) {
        if (string_value.charAt(i) == "a" || string_value.charAt(i) == "e" || string_value.charAt(i) == "i" || string_value.charAt(i) == "o" || string_value.charAt(i) == "u" || string_value.charAt(i) == "A" || string_value.charAt(i) == "E" || string_value.charAt(i) == "I" || string_value.charAt(i) == "O" || string_value.charAt(i) == "U") {
            count = count + 1;
            position = position.concat(' ', i.toString());
            value = value.concat(' ', string_value.charAt(i));
        }
    }
    if (count >= 1) {
        console.log(string_value + " " + value + " " + position);
        console.log("\n");
    }
    else
        console.log("no vowels\n");
}
// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
Case(prograd_1);
Case(prograd_2);
function Case(string_value1) {
    var upper = 0;
    var lower = 0;
    for (var i = 0; i < string_value1.length; i++) {

        if (string_value1.charCodeAt(i) >= 97 || string_value1.charCodeAt(i) <= 122)
            lower = lower + 1;
        else {
            upper = upper + 1;
        }
    }
    console.log("the number of upper case characters " + upper);
    console.log("the number of lower case characters " + lower);
}
// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"
serialprint(prograd_1);
function serialprint(string_value2) {
    var word = "";
    var new_word = "";
    for (var i = 0; i < string_value2.length; i++) {
        word = (string_value2[i].toUpperCase());
        new_word = new_word.concat(' ', word);
    }
    console.log(new_word);
}


// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"
reversePrint(prograd_2);
function reversePrint(string_value3) {
    var word = "";
    var reverseword = "";
    for (var i = string_value3.length - 1; i >= 0; i--) {
        word = string_value3[i];
        reverseword = reverseword.concat(' ', word);
    }
    console.log(reverseword);
}
// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
console.log(prograd_1.concat(' ', prograd_2));
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"
console.log(prograd_2.concat(' ', prograd_1));
// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
lexicographic(prograd_1, prograd_2)
function lexicographic(string_value3, string_value4) {
    if (string_value3 < string_value4) {
        console.log("Yo, the navigator goes first definitely");
    }
    else if (string_value3 > string_value4) {
        console.log("Yo, the navigator goes first definitely.");
    }
    else
        console.log("What?! You both have the same name?");
}
// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Donec adipiscing tristique risus nec feugiat. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Ornare lectus sit amet est. Ultrices vitae auctor eu augue. Sem et tortor consequat id porta nibh venenatis cras sed. Quis enim lobortis scelerisque fermentum dui faucibus. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer. Quis imperdiet massa tincidunt nunc. Suscipit adipiscing bibendum est ultricies integer quis auctor elit sed. Cursus mattis molestie a iaculis at. Amet facilisis magna etiam tempor orci eu lobortis. Risus feugiat in ante metus dictum at tempor.At erat pellentesque adipiscing commodo elit at imperdiet. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Morbi quis commodo odio aenean sed adipiscing diam. Ornare arcu odio ut sem nulla pharetra diam sit amet. Massa vitae tortor condimentum lacinia. Elementum integer enim neque volutpat ac tincidunt vitae semper. Tristique senectus et netus et. Nunc mi ipsum faucibus vitae aliquet nec. Tincidunt arcu non sodales neque sodales. Pellentesque habitant morbi tristique senectus et netus. Pellentesque id nibh tortor id aliquet lectus. Ultrices in iaculis nunc sed augue lacus viverra vitae congue. Dui id ornare arcu odio ut sem nulla pharetra diam. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Non sodales neque sodales ut etiam. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Condimentum vitae sapien pellentesque habitant morbi tristique senectus. Faucibus interdum posuere lorem ipsum dolor. Pharetra vel turpis nunc eget lorem dolor sed. Tellus cras adipiscing enim eu.Eu augue ut lectus arcu. Imperdiet nulla malesuada pellentesque elit eget. Ipsum a arcu cursus vitae congue mauris rhoncus aenean vel. Sed egestas egestas fringilla phasellus faucibus. Ut porttitor leo a diam. Commodo viverra maecenas accumsan lacus vel. Lacus sed turpis tincidunt id aliquet. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Volutpat est velit egestas dui id ornare arcu odio ut. Ipsum suspendisse ultrices gravida dictum fusce. Diam volutpat commodo sed egestas. Pellentesque sit amet porttitor eget dolor. Nunc non blandit massa enim nec dui. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Tellus molestie nunc non blandit massa enim nec. Cum sociis natoque penatibus et. Vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam."
ipsum_counter(lorem);
function ipsum_counter(lorem) {
    var i = 0;
    var count = 0;
    var etcount = 0;
    var ipsumlength = 0;
    ipsumlength = lorem.length;
    while (i < ipsumlength) {
        if (lorem[i] == " ") {
            count = count + 1;
        }
        i++;
    }
    console.log("number of words in the string:-" + count);
    i = 0;
    while (i < ipsumlength) {
        if (lorem[i] == " " && lorem[i + 1] == "e" && lorem[i + 2] == "t" && lorem[i + 3] == " ")
            etcount = etcount + 1;
        i++;
    }
    console.log("number of times the Latin word et appears:->" + etcount);
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

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 
var phraseToCheck = "Amor,Roma";
palind(phraseToCheck);
function palind(phraseToCheck) {
    var str = phraseToCheck.toLowerCase();
    var plen = phraseToCheck.length;
    var i, j;
    var count = 0;
    i = 0;
    j = plen - 1;
    for (i, j; i <= ((plen - 1) / 2) && j >= ((plen - 1) / 2); i++, j--) {
        if (str[i] == str[j]) {
            count = 1;
        }
        else
            count = 0;
    }
    if (count == 1) {
        console.log("palindrome");

    } else {
        console.log("not an palindrome");
    }
}