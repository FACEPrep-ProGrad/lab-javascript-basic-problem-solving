// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.

var ProGrad_1 = "Abhi"
var ProGrad_2 = "Tejas"

document.write("<h2>The Drivers name is " + ProGrad_1 + "</h2>");
document.write("<h2>The navigator's name is " + ProGrad_2 + "</h2>");



// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

if (ProGrad_1.length > ProGrad_2.length) {
  document.write("<h2>The driver has the longest name, it has " + ProGrad_1.length + " characters</h2>")
} else if (ProGrad_1.length < ProGrad_2.length) {
  document.write("<h2>The navigator has the longest name, it has " + ProGrad_2.length + " characters</h2>")
} else {
  document.write("<h2>Wow, you both have equally long names, " + ProGrad_1.length + " characters!.</h2>")
}

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5. 


function CheckVowel(name) {
  var i;
  var vowel = ""
  var index = ""
  for (i of name) {
    if (i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u') {
      vowel += i + " "
      index += name.indexOf(i) + " "
    }
  }
  document.write("<h2>" + name + " " + vowel + " " + index + "</h2>")
}
CheckVowel(ProGrad_1)
CheckVowel(ProGrad_2)


// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters

function Checkcase(name) {
  var i = ''
  var UpperCount = 0
  var LowerCount = 0
  var char = ""
  for (i = 0; i < name.length; i++) {
    char = name.charAt(i);
    if (char == char.toUpperCase()) {
      UpperCount += 1
    } else if (char == char.toLowerCase()) {
      LowerCount += 1
    }
  }
  document.write("<h2>For String " + name + " UpperCase count is " + UpperCount + " & LowerCase count is " + LowerCount + "</h2>")
}
Checkcase(ProGrad_1)
Checkcase(ProGrad_2)

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"

var i
var DriverName = ""
for (i of ProGrad_1) {
  DriverName += i.toUpperCase() + " "
}
document.write("<h2>" + DriverName + "</h2>")

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"

var i
var NavigatorName = ""
for (i of ProGrad_2) {
  NavigatorName = i + NavigatorName
}
document.write("<h2>" + NavigatorName + "</h2>")


// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"
document.write("<h2>" + ProGrad_1 + " " + ProGrad_2 + "</h2>")
document.write("<h2>" + ProGrad_2 + " " + ProGrad_1 + "</h2>")

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

function Order(a, b) {
  if (a === b) {
    document.write("<h2>What?! You both have the same name?</h2>");
  } else if (a < b) {
    document.write("<h2>The driver's name goes first.</h2>");
  } else {
    document.write("<h2>Yo, the navigator goes first definitely.</h2>")
  }
}
Order(ProGrad_1, ProGrad_2)

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.

/*var Bonus1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus ipsum sed elementum accumsan. Mauris elementum ac mi ac dapibus. Integer a lacus sed neque cursus rhoncus at nec massa. Integer euismod eu arcu eu placerat. Sed a eros et neque blandit commodo a vel erat. Duis vitae orci congue, porttitor ex in, tristique risus. Fusce elementum libero in tristique egestas. Etiam nec suscipit nunc. Vestibulum mollis enim quis erat luctus, id lobortis ex feugiat. Sed maximus laoreet dolor eget consectetur. Aliquam at massa fermentum, tempor quam vel, facilisis mi. Sed sed consectetur arcu, et suscipit velit. Nullam ac enim sagittis, vulputate massa id, consequat nisl. Ut id sapien bibendum, venenatis felis vitae, imperdiet neque. Curabitur faucibus libero vel lacus convallis, non suscipit odio vehicula. Ut vitae dolor ut ex viverra tincidunt.Etiam sodales eros eu eros pharetra, et bibendum felis volutpat.Pellentesque hendrerit non arcu ac vestibulum.Fusce volutpat viverra magna nec consequat.Etiam tincidunt lectus sit amet eros condimentum, vel sagittis risus iaculis.Sed maximus eros sit amet nibh scelerisque, sed molestie orci malesuada.Sed rhoncus metus arcu.Quisque sit amet sem lacus.Nullam a porttitor elit.Proin pretium efficitur commodo.In efficitur massa dolor, at lacinia turpis rutrum pretium.Vivamus vel justo eget felis bibendum ultrices vitae ac nisl.Aliquam vestibulum neque ante, vitae pellentesque sem rutrum in.Phasellus tincidunt vel nunc sed posuere.Proin ornare pharetra sem, id faucibus nunc pulvinar vel.Nunc lobortis, sem vel dictum aliquam, nulla neque laoreet nibh, a ullamcorper nunc nulla eget justo.Pellentesque laoreet facilisis finibus.Cras euismod, ipsum vitae tincidunt iaculis, tellus dolor iaculis odio, a placerat orci purus at nulla.Curabitur tincidunt tortor eu vulputate pellentesque.Nulla laoreet eleifend ultricies.Integer condimentum libero id lacus cursus bibendum nec a risus.In tincidunt lacus tincidunt, luctus nisi et, maximus mauris.Nam mattis, massa id placerat consequat, mi diam posuere sapien, et cursus elit felis id nulla.Quisque arcu dui, porttitor ac tincidunt at, blandit sed enim.Cras ut diam non nulla elementum placerat eu et ligula.Donec lobortis libero a ex congue, eget eleifend diam dignissim."*/


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

function CheckPallindrome(name) {
  var reverse = ''
  var i
  cleanname = name.replace(/\s/g, '')
  cleanname = cleanname.toUpperCase()
  cleanname = cleanname.replace(/[^\w\s]/gi, '')
  for (i of cleanname) {
    reverse = i + reverse
  }
  if (cleanname == reverse) {
    document.write("<h2>" + name + " : It is Pallindrome string</h2>")
  } else {
    document.write("<h2>" + name + "Not pallidrome</h2>")
  }
}
CheckPallindrome("A man, a plan, a canal, Panama!")

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 