// function cubeme(incomingNum) {
//     if (incomingNum == 1) {
//         return "What are you doing?";
//     } else {
//         return Math.pow(incomingNum, 3);
//     }
// }

// const theNum = 2;
// const finalNum = cubeme(theNum);

// if (isNaN(finalNum)) {
//     alert("You should know that 1 to any power is 1.");
// } else {
//     alert("When cubed, " + theNum + " is " + finalNum);
//}

// document.write("Is Not a Number: " + isNaN("four"));

//important of a .length | the symbol dot(.) can be used to access the member of an objec
// var x = "This is a string.";
// console.log(x.length);

// var myString = "This is a string.";
// console.log(myString.substring(3));  //Returns "s is a string."
// console.log(myString.substring(3, 9));  //Returns "s is a"
// console.log(myString.slice(3));  //Returns "s is a string."
// console.log(myString.slice(3, 9));  //Returns "s is a"

// var myString = "This is a string.";
// console.log(myString.substr(3));  //Returns "s is a string." (The same as substring/slice)
// console.log(myString.substr(3, 9));  //Returns "s is a st" (Different from substring/slice)

// var firstString = "Hello ";
// var finalString = firstString.concat("World");
// alert(finalString);  //Outputs "Hello World"

// var myString = "this is a String";
// alert(myString.toUpperCase());  // "THIS IS A STRING"
// alert(myString.toLowerCase());  // "this is a string"

// var dvdCatalog = {
//     "identifier": "1",
//     "name": "Coho Vineyard"
// };

// alert(dvdCatalog.name);

// Create four new objects
// var star = {};
// // Create properties  for each of four stars.
// star["Polaris"] = new Object;
// star["Deneb"] = new Object;
// star["Vega"] = new Object;
// star["Altair"] = new Object;

// var x, y, zeta;
// var x = 1, y = "hello", zeta = 14;

// var aNewVariable = "I'm Global.";
// function doSomething(incomingBits) {
//     alert(aNewVariable);
//     alert(incomingBits);
// }
// doSomething("An argument");

// var aNewVariable = "is global.";
// function doSomething(incomingBits) {
//     alert("Global variable within the function: " + aNewVariable);
//     alert("Local variable within the function: " + incomingBits);
// }

// doSomething("is a local variable");
// alert("Global var outside the function: " + aNewVariable);
// alert("Local var outside the function: " + incomingBits);

// var myDate = new Date();
// var dateString = myDate.toLocaleDateString() + " " + myDate.toLocaleTimeString();
// var dateLoc = document.getElementById("dateField");
// dateLoc.innerHTML = "Hello - Page Rendered on " + dateString;

// var today = new Date();
// var then = new Date();
// // January 1, 2014
// then.setFullYear(2020, 12, 1);
// var diff = then.getTime() - today.getTime();
// diff = Math.floor(diff / (1000 * 60 * 60 * 24));
// var dateLoc = document.getElementById("dateField"); dateLoc.innerHTML = "There are " + diff + " days until 1/1/2014";


// var emailAddr = "suehring@braingia.com";
// var myRegex = /\.com$/;
// var replaceWith = ".net";
// var result = emailAddr.replace(myRegex, replaceWith);
// alert(result); //Returns suehring@braingia.net

// // Set the value of myNum to 20.
// var myNum = 20;
// // Create a new variable, anotherNum, and copy the contents of myNum to it.
// // Both anotherNum and myNum are now 20.
// var anotherNum = myNum;
// // Change the value of myNum to 1000.
// myNum = 1000;
// // Display the contents of both variables.
// // Note that the contents of anotherNum haven't changed.
// alert(myNum);
// alert(anotherNum);

// // Create an array of three numbers in a variable named myNumbers.
// var myNumbers = [20, 21, 22];
// // Make a copy of myNumbers in a newly created variable named copyNumbers.
// var copyNumbers = myNumbers;
// // Change the first index value of myNumbers to the integer 1000.
// myNumbers[0] = 1000;
// // Alert both.
// alert(myNumbers);
// alert(copyNumbers);


// var aNum = 947;
// var aStr = "Rush";
// var anotherNum = 53;
// var aStrNum = "43";
// var result1 = aNum + aStr;  // result1 will be the string "947Rush";
// var result2 = aNum + anotherNum;  // result2 will be the number 1000;
// var result3 = aNum + aStrNum;  // result3 will be 94743;

// var aNum = 947;
// var aStrNum = Number("43");
// var result3 = aNum + aStrNum;  // result3 will be 990;

// var x = 42;
// var y = "42";
// if (x === y) {
//     alert("x is equal to y with a simple test.");
// } else {
//     alert("x is not equal to y");
// }

// var myObj = {
//     star: "Algol",
//     constellation: "Perseus"
// };
// if ("star" in myObj) {
//     alert("There is a property called star in this object");
// }

// The in operator is most commonly used to evaluate whether a given property is contained within an object. 


// var myDate = new Date();
// if (myDate instanceof Date) {
//     alert("There is a property called star in this object");
// }

// var aNum = 4;
// aNum++;
// alert(aNum);
// ++aNum;
// alert(aNum);

// var aNum = 4;
// var y = aNum++;  // y now has the value 4, but aNum then has the value 5

// var aNum = 4;
// var y = ++aNum;  // y now has the value 5, as does aNum

// var star = {};
// if (typeof (star) == "object") {
//     alert("star is an object");
// }

// var inputNum = prompt("Please enter a number below 100:");
// if (inputNum < 99) {
//     alert("That number, " + inputNum + ", is not below 100.");
// }

// var inputNum = prompt("Please enter a number between 50 and 100:");
// if ((inputNum < 51) || (inputNum > 99)) {
//     alert("That number, " + inputNum + ", is not between 50 and 100.");
// }

// var inputNum = prompt("Please enter a number between 50 and 100:");
// if (isNaN(inputNum)) { // importance of isNaN
//     alert(inputNum + " doesn't appear to be a number.");
// }
// else if ((inputNum > 99) || (inputNum < 51)) {
//     alert("That number, " + inputNum + ", is not between 50 and 100.");
// }
// else {
//     alert("You entered a number: " + inputNum);
// }

// var inputNum = prompt("Please enter a number between 50 and 100:"); if (isNaN(inputNum)) {
//     if (inputNum.match(/one|two|three|four|five|six|seven|eight|nine|ten/)) {
//         alert("While this is a number, it's not really a number to me.");
//     } else {
//         alert(inputNum + " doesn't appear to be a number.");
//     }
// } else if ((inputNum > 99) || (inputNum < 51)) {
//     alert("That number, " + inputNum + ", is not between 50 and 100.");
// } else {
//     alert("THis is definitely between 70 and 100");
// }

// if (name == "steve") {
//     var greeting = "Hello Steve";
// }
// else {
//     var greeting = "Hello Unknown Person";
// }
// alert(greeting);

// if (languageChoice == "en") {
//     // Language is English, execute code for English.
// }
// else if (languageChoice == "de") {
//     // Language is German, execute code for German.
// }
// else if (languageChoice == "pt") {
//     // Language is Portuguese, execute code for Portuguese.
// }
// else {
//     // Language not chosen, use Swedish.
// }

// switch (languageChoice) {
//     case "en":
//         // Language is English, execute code for English.
//         break;
//     case "de":
//         // Language is German, execute code for German.
//         break;
//     case "pt":
//         // Language is Portuguese, execute code for Portuguese.
//         break;
//     default:
//     // Language not chosen, use Swedish.

// }

// Back to code outside the switch statement

// switch (countryChoice) {
//     case "US":
//     case "Australia":
//     case "Great Britain":
//         // Language is English, execute code for English
//         break;
//     case "Germany":
//         // Language is German, execute code for German.
//         break;
//     case "Portugal":
//         // Language is Portuguese, execute code for Portuguese.
//         break;
//     default:
//     // Locale not chosen, use Swedish.
// }
//       // Back to code outside the loop

//do...while loop
// var count = 0;
// do {
//     alert("Count is " + count);
//     count++;
// }
// while (count < 3);

// var count = 0;
// while (count < 10) {
//     // Do something in here.
//     // Multiple lines are fine.
//     // Don't forget to increment the counter:
//     alert("Count is " + count);
//     count++;

// }


// var myArray = ["Vega", "Deneb", "Altair"];
// var arrayLength = myArray.length;
// for (var count = 0; count < arrayLength; count++) {
//     alert(myArray[count]);
// }

// for (var myProp in myObject) {
//     alert(myProp + " = " + myObject[myProp]);
// }

// an example of for in loop
// var star = new Object;
// star.name = "Polaris";
// star.type = "Double/Cepheid";
// star.constellation = "Ursa Minor";
// for (var starProp in star) {
//     alert(starProp + " = " + star[starProp]);
// }

// Whereas the for...in construct returns the name of the property, the for each...in loop returns the
// value of the property. 

// for each(var myValue in myObject) {
//     alert(myValue "is in the object.");
// }

// var star = new Object;
// star.name = "Polaris";
// star.type = "Double/Cepheid";
// star.constellation = "Ursa Minor";
// for (var starValue in star) {
//     alert(starValue + " is in the star object.");
// }

// function alertName() {
//     var name = document.forms[0].nametext.value;
//     if (name == "steve") {
//         alert("Hello Steve.  Welcome to Machine");
//     }
//     else if (name == "tim") {
//         alert("Hello Tim.");
//     }
//     else {
//         alert("Hello " + name);
//     }
//     return true;
// }  //end function

// // alertName()

// function myFunction() {
//     var firstArg = arguments[0];
//     var secondArg = arguments[1];
//     alert("firstArg is: " + firstArg);
//     alert("secondArg is: " + secondArg);
// }
// myFunction("hello", "world");

// let aNewVariable = "is global";
// function doSomething(incomingBits) {
//     alert("Global variable within the function: " + aNewVariable);
//     alert("Local variable within the function: " + incomingBits);
// }

// doSomething("is a local variable");
// alert("Global var outside the function: " + aNewVariable);
// alert("Local var outside the function: " + incomingBits);

// function addNumbers() {
//     firstNum = 4;
//     secondNum = 8;
//     result = firstNum + secondNum;

//     return result;
// }
// result = 0;
// alert(result);
// sum = addNumbers();
// alert(sum)

// function multiplyNums(x) {
//     return x * 2;
// }
// var theNumber = 10;
// var result = multiplyNums(theNumber);
// alert(result);

// When a function finishes executing its code, it can return a value to the caller by using the return keyword
// creates a function called multiplyNums with an intended input value, which will be assigned to the variable x.The function performs one task: it returns its argument multiplied by 2, as follows:

// function processConfirm(answer) {
//     let result = "";
//     if (answer) {
//         result = "Excellent. We'll play a nice game of chess.";
//     } else {
//         result = "Maybe later then.";
//     }
//     return result;
// }

// let confirmAnswer = confirm("Shall we play a game?");
// let theAnswer = processConfirm(confirmAnswer);
// alert(theAnswer);

// function processConfirm(answer) {
//     if (answer) {
//         return "Excellent.  We'll play a nice game of chess.";
//     } else {
//         return "Maybe later then.";
//     }
// }

// function processConfirm(answer) {
//     var result;
//     (answer) ? result = "Excellent.  We'll play a nice game of chess." : result = "Maybe later then.";
//     return result;
// }

// var star = {};

// star["Polaris"] = new Object;
// star["Mizar"] = new Object;
// star["Aldebaran"] = new Object;
// star["Rigel"] = new Object;
// star["Castor"] = new Object;
// star["Albireo"] = new Object;
// star["Acrux"] = new Object;
// star["Gemma"] = new Object;
// star["Procyon"] = new Object;
// star["Sirius"] = new Object;
// star["Rigil Kentaurus"] = new Object;
// star["Deneb"] = new Object;
// star["Vega"] = new Object;
// star["Altair"] = new Object;

// star["Polaris"].constellation = "Ursa Minor";
// star["Mizar"].constellation = "Ursa Major";
// star["Aldebaran"].constellation = "Taurus";
// star["Rigel"].constellation = "Orion";
// star["Castor"].constellation = "Gemini";
// star["Albireo"].constellation = "Cygnus";
// star["Acrux"].constellation = "Crux";
// star["Gemma"].constellation = "Corona Borealis";
// star["Procyon"].constellation = "Canis Minor";
// star["Sirius"].constellation = "Canis Major";
// star["Rigil Kentaurus"].constellation = "Centaurus";
// star["Deneb"].constellation = "Cygnus";
// star["Vega"].constellation = "Lyra";
// star["Altair"].constellation = "Aquila";

// star["Polaris"].type = "Double/Cepheid";
// star["Mizar"].type = "Spectroscopic Binary";
// star["Aldebaran"].type = "Irregular Variable";
// star["Rigel"].type = "Supergiant with Companion";
// star["Castor"].type = "Multiple/Spectroscopic";
// star["Albireo"].type = "Double";
// star["Acrux"].type = "Double";
// star["Gemma"].type = "Eclipsing Binary";
// star["Procyon"].type = "Double";
// star["Sirius"].type = "Double";
// star["Rigil Kentaurus"].type = "Double";
// star["Deneb"].type = "Supergiant";
// star["Vega"].type = "White Dwarf";
// star["Altair"].type = "White Dwarf";

// star["Polaris"].spectralClass = "F7";
// star["Mizar"].spectralClass = "A1 V";
// star["Aldebaran"].spectralClass = "K5 III";
// star["Rigel"].spectralClass = "B8 Ia";
// star["Castor"].spectralClass = "A1 V";
// star["Albireo"].spectralClass = "K3 II";
// star["Acrux"].spectralClass = "B1 IV";
// star["Gemma"].spectralClass = "A0 V";
// star["Procyon"].spectralClass = "F5 IV";
// star["Sirius"].spectralClass = "A1 V";
// star["Rigil Kentaurus"].spectralClass = "G2 V";
// star["Deneb"].spectralClass = "A2 Ia";
// star["Vega"].spectralClass = "A0 V";
// star["Altair"].spectralClass = "A7 V";

// star["Polaris"].mag = 2.0;
// star["Mizar"].mag = 2.3;
// star["Aldebaran"].mag = 0.85;
// star["Rigel"].mag = 0.12;
// star["Castor"].mag = 1.58;
// star["Albireo"].mag = 3.1;
// star["Acrux"].mag = 0.8;
// star["Gemma"].mag = 2.23;
// star["Procyon"].mag = 0.38;
// star["Sirius"].mag = -1.46;
// star["Rigil Kentaurus"].mag = -0.01;
// star["Deneb"].mag = 1.25;
// star["Vega"].mag = 0.03;
// star["Altair"].mag = 0.77;

// // for (var element in star) {
// //     for (var propt in star[element]) {
// //         console.log(element + ": " + propt + " = " + star[element][propt]);
// //     }
// // }

// alert(star["Polaris"].show());

// var myArray = new Array();
// myArray[0] = "first";
// myArray[1] = "second";
// var newArray = myArray.concat("third");
// alert(newArray)

// // newArray is now [first,second,third]
// // You can also concatenate one array to another, like this:
// var myFirstArray = [51, 67];
// var mySecondArray = [18, "hello", 125];
// var newArray = myFirstArray.concat(mySecondArray)
// // newArray is [51,67,18,"hello",125]

// var star = ["Polaris", "Deneb", "Vega", "Altair"];
// for (var i = 0; i < star.length; i++) {
//     alert(star[i]);
// }

// var star = ["Polaris", "Deneb", "Vega", "Altair"];
// var newstars = ["Aldebaran", "Rigel"];
// var morestars = star.concat(newstars);
// var mStarLength = morestars.length;
// for (var i = 0; i < mStarLength; i++) {
//     alert(morestars[i]);
// }

// two ways to loop through an array

// var candies = ["chocolate", "licorice", "mints"];
// for (var i = 0; i < candies.length; i++) {
//     alert(candies[i]);
// }

// var candies = ["chocolate", "licorice", "mints"];
// candies.forEach(function (candy) {
//     alert(candy);
// });

// 1. Create code to loop through a simple array of four objects, shown here, and display those in an alert() dialog box, one for each element of the array:
// var star = ["Polaris", "Deneb", "Vega", "Altair"];
// 2. Create an object to hold the names of three of your favorite songs.The objects should have properties containing the artist, the song length, and the title for each song.
// 3. The first step - by - step exercise in this chapter used a list of stars and a class to populate those objects, shown here:
// function Star(constell, type, specclass, magnitude) {
//     this.constellation = constell;
//     this.type = type;
// this.spectralClass = specclass;
// this.mag = magnitude;
// }
// star["Polaris"] = new Star("Ursa Minor", "Double/Cepheid", "F7", 2.0);
// star["Mizar"] = new Star("Ursa Major", "Spectroscopic Binary", "A1 V", 2.3);
// star["Aldebaran"] = new Star("Taurus", "Irregular Variable", "K5 III", 0.85);
// star["Rigel"] = new Star("Orion", "Supergiant with Companion", "B8 Ia", 0.12);
// star["Castor"] = new Star("Gemini", "Multiple/Spectroscopic", "A1 V", 1.58);
// star["Albireo"] = new Star("Cygnus", "Double", "K3 II", 3.1);
// star["Acrux"] = new Star("Crux", "Double", "B1 IV", 0.8);
// star["Gemma"] = new Star("Corona Borealis", "Eclipsing Binary", "A0 V", 2.23);
// star["Procyon"] = new Star("Canis Minor", "Double", "F5 IV", 0.38);
// star["Sirius"] = new Star("Canis Major", "Double", "A1 V", -1.46);
// star["Rigil Kentaurus"] = new Star("Centaurus", "Double", "G2 V", -0.01);
// star["Deneb"] = new Star("Cygnus", "Supergiant", "A2 Ia", 1.25);
// star["Vega"] = new Star("Lyra", "White Dwarf", "A0 V", 0.03);
// star["Altair"] = new Star("Aquila", "White Dwarf", "A7 V", 0.77)
// The code then used a simple for loop to move through each of the star objects and displayed the names of the stars, as shown here:
// for (var element in star) {
//     for (var propt in star[element]) {
//         alert(element + ": " + propt + " = " + star[element][propt]);
//     }
// }
// Your task is to modify this code to display one single dialog box containing all the star names rather than display one dialog box for each star.


// let body = document.getElementsByTagName("body")[0];
// for (let prop in navigator) {
//     let elem = document.createElement("p");
//     let text = document.createTextNode(prop + ": " + navigator[prop]);
//     elem.appendChild(text);
//     body.appendChild(elem);
// }

// var body = document.getElementsByTagName("body")[0];
// for (var prop in location) {
//     var elem = document.createElement("p");
//     var text = document.createTextNode(prop + ": " + location[prop]);
//     elem.appendChild(text);
//     body.appendChild(elem);
// }


// jquery dimistified
// $(document).ready(function () {
//     alert('hi');
// });

// getElementById("linkOne");
// $("#linkOne")   // for selecting an id
// $(".specialClass") // for selecting a class name

// $(document).ready(function () {
//     $('tr:odd').css("background-color", "#abacab");
// });


// function changetext() {
//     var p1 = document.getElementById("sometext");
//     alert(p1.innerHTML);
//     p1.innerHTML = "Changed Text";
// }

// $(document).ready(function () {
//     function changetext() {
//         alert($("#sometext").html());
//         $("#sometext").html("Changed Text");
//     }
//     changetext();
// });

// function changecolors() {
//     var a1 = document.getElementsByTagName("td");
//     var a1Length = a1.length;
//     for (var i = 0; i < a1Length; i++) {
//         a1[i].style.background = "#aaabba";
//     }
// }

// function showattribs(e) {
//     var e = document.getElementById("braingialink");
//     var elemList = "";
//     for (var element in e) {
//         var attrib = e.getAttribute(element);
//         elemList = elemList + element + ": " + attrib + "\n";
//     }
//     alert(elemList);
// }

// var newelement = document.createElement("p");
// document.body.appendChild(newelement);
// newelement.appendChild(document.createTextNode("Hello World"));

// var newelement = document.createElement("p");
// newelement.setAttribute("id", "newelement");
// document.body.appendChild(newelement);
// newelement.appendChild(document.createTextNode("Hello World"));

// for (var i = 0; i < 3; i++) {
//     var element = document.createElement("p");
//     element.setAttribute("id", "element" + i);
//     document.body.appendChild(element);
//     element.appendChild(document.createTextNode("Hello World, I'm Element " + i + "."));
// }

// var removeel = document.getElementById("element1");
// document.body.removeChild(removeel);

// $(document).ready(function () {
//     for (var i = 0; i < 3; i++) {
//         $("body").append("<p id=\"element" + i + "\">Hello World, I'm Element " + i + ".</p>");
//     }
//     $("#element1").remove();
// });

// var EHandler = {};
// if (document.addEventListener != "undefined") {
//     EHandler.add = function (element, eType, eFunc) {
//         if (eType == "load") {
//             if (typeof window.onload == "function") {
//                 var existingOnload = window.onload;
//                 window.onload = function () {
//                     existingOnload();
//                     eFunc();
//                 } //end existing onload handler
//             } else {
//                 window.onload = eFunc;
//             }
//         } else {
//             element.addEventListener(eType, eFunc, false);
//         }
//     };
//     EHandler.remove = function (element, eType, eFunc) {
//         element.removeEventListener(eType, eFunc, false);
//     };
// }
// else if (document.attachEvent) {
//     EHandler.add = function (element, eType, eFunc) {
//         if (eType == "load") {
//             if (typeof window.onload == "function") {
//                 var existingOnload = window.onload;
//                 window.onload = function () {
//                     existingOnload();
//                     eFunc();
//                 } //end existing onload handler
//             } else {
//                 window.onload = eFunc;
//             }
//         } else {
//             element.attachEvent("on" + eType, eFunc);
//         }
//     };
//     EHandler.remove = function (element, eType, eFunc) {
//         element.detachEvent("on" + eType, eFunc);
//     };
// }

// $(document).ready(function () {
//     $('#braingiaLink').click(function () {
//         alert("hello");
//         return true;
//     });
//     $('#myDiv').click(function () {
//         $('#braingiaLink').click();
//     });
//     $('#wrapperP').mouseover(function () {
//         $('#braingiaLink').hide();
//     });
//     $('#wrapperP').mouseout(function () {
//         $('#braingiaLink').show();
//     });
// });

// console.log(Number('10'));

// console.log(Number(false));
// console.log(Number(true));

const y = 100 / "Apple";  // y will be NaN (Not a Number)
const a = 4;
const b = 5;
// const result = a / b;
const solution = a * b ** 2
console.log(solution);

