// Day 1a 6 April(class practice):

//ALERT

// alert("Assalam 0 Alikum " )

//PROMPT 

//  var userName = prompt("your good name please" , "Maryam" , "anwer");

//CONSOLE

//  var user = "Maryam";
//  var fuser = "Anwer";
//  console.log("Hi " + user+ " " + fuser);


// var sawera rasheed; SYTAX ERROR : MISSING

//  how to make variable name

// saweraRashid camelCase probably use
// SaweraRashid PascalCase
// sawera_rashid snake_case

//MATHEMATICAL EXPRESSION

// console.log(2+5); console.log(5-1); console.log(3*3); console.log(5/2);

// // ** POWER 
// console.log(2**5);

// var EXPRESSION = (8 + (7 / 4) - (10 / 7) * (4 - 8)) + 4;
// console.log(EXPRESSION);

// var age = + prompt("Your Age Please");
// var fage = + prompt("Your Father Age Please");

// alert(age + fage);

// alert(Number(age)+ Number(fage));
// alert(Number(age));

// console.log(typeof age);




// Day 1b 6 April:


// alert ( "hi" );
// prompt ("your email","mary@gmail.com")
// prompt ("your email"," ");
// alert("user")

// var ace =["welcome","hi"]

// document.write("ace")

// console.log("ace");
// var name = "MarY";

// document.write(name);


// var weight = 150;
// weight + 25;
// var weight = weight + 25;

// console.log(weight);

// var originalNum = 23;
// var nymToBeAdded = 15;
// var newNum = originalNum  + nymToBeAdded;

// console.log(newNum);

// var originalNum = 90;
//  originalNum = originalNum + 10;

//  console.log(originalNum);

//  var originalNum = "90";
//  var newNum  = originalNum + 7;

//  console.log(newNum);

// var 1stPresident = "Washington"; illegal 
// var prezWhoCame1st = "Washington"; legal
// alert(144);


//  var caseQty = 144;
//  alert(caseQty);

//  var popularNumber = 4;

//  console.log(popularNumber);
//  var popularNumber = 2 + 2;
//  console.log(popularNumber);

//  alert(2 + 2);


// var popularNumber = 12 - 24;
// console.log(popularNumber); it showa Numbers
// console.log("popularNumber"); it shows string b/c inverted commas

// var whatsLeftOver = 100 % 13;

// console.log(whatsLeftOver);

// var num = 1;
//  var newNum = num++;
// console.log(newNum);

// var num = 1;
//  var newNum = ++num;
// console.log(newNum);


// var num = 1;
//  var newNum = --num;
// console.log(newNum);

// var num = 1;
//  var newNum = num--;
// console.log(newNum);

// var message = "Thanks, ";
// // var userName = "mary";
// var banger = "!";
// var show = message + userName + banger;
// var show = message + "maryam" + banger;

// alert(show);

// alert("2" + "2");
// alert("2 plus 2 equals " + 2 + 2);

// var spec = prompt("Your species?", "human");

// var question = "Your species?";
// var defaultAnswer = "human";
// var spec = prompt(question, defaultAnswer);

// var numberOfCats = prompt("How many cats? ");
// var tooManyCats = numberOfCats + 1;

// console.log(tooManyCats);


//  var numberOfCats = window.prompt("How many cats? ");
//  var tooManyCats = numberOfCats + 1;

//  console.log(tooManyCats);

// DAy 2 Assignment practice

// Make a variable named zakat percentage and store a value of 2.5 % (hint: 2.5 % means 0.025)
// Make one more variable named as user input and take the input from the user using the prompt. 
// Make sure the input value should be of type number (hint: use the way by which we can convert a string prompt to a number)
// Make a variable named as a result and assign it the value that should be the multiple of the zakat percentage and user input.
// At the last alert, this result shows a message like "your zakat value is xxx"


// SOLUTION

var zakat_percetage =0.025; //2.5%
// var user_input = prompt("Enter Your Amount");
var user_input = Number(prompt("Enter Your Amount"));
var result = zakat_percetage * user_input;

alert("your zakat value is " + result);