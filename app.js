//Driver and Navigator name
var ProGrad_1 = 'Veera';
print(ProGrad_1);
var ProGrad_2 = 'Naveen';
print(ProGrad_2);

//Printing largest name
if ( getcount(ProGrad_1) > getcount(ProGrad_2)){
    print("The driver has the longest name, it has" + getcount(ProGrad_1) + "characters")
}
else if ( getcount(ProGrad_1) < getcount(ProGrad_2)){
    print("The Navigator has the longest name, it has" + getcount(ProGrad_2) + "characters")
}
else{
    print("Wow, you both have equally long names,"+ getcount(ProGrad_1) +"characters!")
}

// Finding vowels
var Vcount = 0;
while (ProGrad_1[Vcount] !== undefined){
    if(ProGrad_1[Vcount] === "a" || ProGrad_1[Vcount] === "e" || ProGrad_1[Vcount] === "i" || ProGrad_1[Vcount] === "o" || ProGrad_1[Vcount] === "u" || ProGrad_1[Vcount] === "A" || ProGrad_1[Vcount] === "E" || ProGrad_1[Vcount] === "I" || ProGrad_1[Vcount] === "O" || ProGrad_1[Vcount] === "U" ){
        print(ProGrad_1[Vcount]+ " " + Vcount + " " );
    }
    else{
        print("print no vowels")
    }
    Vcount++;
}
var Vwcount = 0;
while (ProGrad_2[Vwcount] !== undefined){
    if(ProGrad_2[Vwcount] === "a" || ProGrad_2[Vwcount] === "e" || ProGrad_2[Vwcount] === "i" || ProGrad_2[Vwcount] === "o" || ProGrad_2[Vwcount] === "u" || ProGrad_2[Vwcount] === "A" || ProGrad_2[Vwcount] === "E" || ProGrad_2[Vwcount] === "I" || ProGrad_2[Vwcount] === "O" || ProGrad_2[Vwcount] === "U"){
        print(ProGrad_2[Vwcount]+ " " + Vcount + " " );
    }
    else{
        print("print no vowels")
    }
    Vwcount++;
}

//Upper and lower count
var driverlowercount = getlowercount(ProGrad_1);
var navigatorlowercount = getlowercount(ProGrad_2);

var driveruppercount = getuppercount(ProGrad_1);
var navigatoruppercount = getuppercount(ProGrad_2);

print("No of Upper and lower case in Driver" + driveruppercount + " " + driverlowercount);
print("No of Upper and lower case in navigator" + navigatoruppercount + " " + navigatorlowercount);

// print name including space and reverse
getname(ProGrad_1);
getrevname(ProGrad_2,getcount(ProGrad_2));

//Merger and reverse
var merge_name = ProGrad_1+ " " + ProGrad_2;
print(merge_name);

var rev_merge_name = ProGrad_2+ " " + ProGrad_1;
print(rev_merge_name);

if(ProGrad_1 === ProGrad_2){
    print("You both have the same name");
}



//Functions

//Finding Length function
function getcount(s){
    var length = 0;
    while (s[length] !== undefined)
      length++;
    return length;
}

//Finding lowercount function
function getlowercount(name){
    var length = 0;
    var count = 0;
    while (name[length] !== undefined){
        if(name[length]>= 'a' && name[length]<= 'z')
            count++;
        length++;
    }
    return count;
}

//Finding uppercount function
function getuppercount(name){
    var length = 0;
    var count = 0;
    while (name[length] !== undefined){
        if(name[length]>= 'A' && name[length]<= 'Z')
            count++;
        length++;
    }
    return count;
}

//print rev_name

function getrevname(name,length){
    while (name[length] != undefined){
        print (name[length]);
        length++;
    }
}