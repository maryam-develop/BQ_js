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




// Day 1b 6 April: book practice


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

// var zakat_percetage =0.025; //2.5%
// // var user_input = prompt("Enter Your Amount");
// var user_input = Number(prompt("Enter Your Amount"));
// var result = zakat_percetage * user_input;

// alert("your zakat value is " + result);

// Day 3a 14 April(class practice):

// var engnum = +prompt("Enter your english obtained marks");
// var mathsnum = +prompt("Enter your maths obtained marks");
// var islnum = +prompt("Enter your islam obtained marks");
// var urdunum = +prompt("Enter your urdu obtained marks");

// var resul = engnum + urdunum + islnum + mathsnum;
// var perentage = (resul / 400) * 100;
// // console.log(perentage);
// if (perentage >= 90) {
//     console.log("Grade A , Well Done");
// } else if (perentage >= 80) {
//     console.log("Grade B");
// } else if (perentage >= 70) {
//     console.log("Grade C");
// } else {
//     console.log("Grade D , unfortunately You are failed, Better luck for next time");
// } 

// var num = +prompt("Enter Your Num")
// if (num == 3) {
//     console.log("true")
// }
// else {
//     console.log("False")
// }

// console.log(num <= 3)

// var username = "MaRyAm";
// console.log(username.toUpperCase());

// console.log(username.toLowerCase());

// var friendlist = ['Halima', 'Sehrish', 'Amna', 'Sadia', 'Ulfat'];

// friendlist [5] = "Benish";

// friendlist.push("benish");
// friendlist.pop();
// friendlist.unshift("Amber", "Maham", "Huma");
// friendlist.shift();
// var newStd = friendlist.slice(2,8)
// var newStd1 = friendlist.slice(0,3);
// friendlist[3] = "Sadi Imam"
// console.log(friendlist[3])
// console.log(friendlist);
// console.log(newStd);
// console.log(newStd1);

// friendlist.splice(3,0,"Kanza", "Fouzia", "Mahnoor");

// console.log(friendlist);

// Day 2b 14 April: book practice

// Day 3a 15 April(book practice):

// var x = prompt("Where does the Pope live?");

// if (x === "Vatican") {
//     alert("Correct!");
//      }








//day 4a 08 May (class practice );

// Chap 22 - 30
// var sentence = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Et eos distinctio illo qui estaliquam excepturi vero numquam aperiam?Accusantium nobis natus sed?Vel architecto, impedit sequi sint itaque quis?";
// var wordReplace =  
''
// console.log(sentence.replace("consectetur adipisicing elit", "maryam"))


// for (var i = 0; i < sentence.length; i++){
// console.log (sentence[i])

//     if (sentence.slice(i, i+9) == "dolor sit" ){
//         sentence = sentence.slice(0,i) + "hello" + sentence.slice(i+9);
//     }
// }

// console.log(sentence);
//  var wordtoReplace = "adipisicing elit"
//     for (var i = 0; i < sentence.length; i++) {
//         if (sentence.slice(i, i + wordtoReplace.length) == wordtoReplace) {
//             sentence = sentence.slice(0, i) + "Hello" + sentence.slice(i + wordtoReplace.length)
//         }
//     }
                    
// console.log(sentence);

// var ghazal = "hum sindh mein rehne wale mehmannawaz hai saree, apni gadi riyo nkalo sath m jana tujh ko bithalun, apni gadi riyo nkalo sath m jana tujh ko bithalun, machli palla khilao tujhe sindho darya k kinare, karachi s kashmore tak dikhao sare nazare, dil s tuko dawat hai kabhi ao sindh hmare"
//  for (let i = 0; i < ghazal.length; i++) {
//     console.log(ghazal[i] );

//     if(ghazal.slice(i, i+11 )== "mehmannawaz" ){
//         ghazal = ghazal.slice(0,i) + "muhafiz e Watan" + ghazal.slice(i+11);
//     }

//  }

// var wordtoReplace = "sindh";
// for (var i = 0; i < ghazal.length; i++){
//     if (ghazal.slice(i, i + wordtoReplace.length) == wordtoReplace) {
//         ghazal = ghazal.slice(0, i) + "Karachi" + ghazal.slice(i + wordtoReplace.length)
//     }
// }

// console.log(ghazal)



// var ghazal = "hum sindh mein rehne wale mehmannawaz hai saree, apni gadi riyo nkalo sath m jana tujh ko bithalun, apni gadi riyo nkalo sath m jana tujh ko bithalun, machli palla khilao tujhe sindho darya k kinare, karachi s kashmore tak dikhao sare nazare, dil s tuko dawat hai kabhi ao sindh hmare"

// console.log(ghazal.replace(/apni/g,"love"))


// var str = "js is not easy dude, js make proper sence";
// var rep =  str.replace("js", "css");
// console.log(rep);

// var string = "golden vidor doers goat";

// var repString = string.replace(/go/g,"GO");
// console.log(repString);

// var string = "Mr Blue has a blue house and a blue car.";
// var repString = string.replace(/blue/gi,"Red");
// console.log(repString);

// var string = "Mr Blue has a blue house and a blue car.";
// var repString = string.replace(/blue/g,"Red");
// console.log(repString);


// var string = "Mr Blue has a blue house and a blue car.";
// var repString = string.replace(/Blue/g,"Red");
// console.log(repString);

// console.log(string.indexOf("blue"));
// console.log(string.lastIndexOf("."));

// var user = "maRyAm";
// console.log(Math.round(67.78));

// console.log(user.charAt(0).toUpperCase()+ user.slice(1).toLowerCase());
//check all math 
// console.log(Math.abs(x=5));
// console.log(Math.clz32(x = 180));

// var fazi = Math.round(Math.random());
// console.log(fazi)

// var myAge ="24.67"
// undefined
// parseInt(myAge);
// 24
// parseFloat(myAge)
// 24.67
// var num = 7863543
// undefined
// num.toString()
// "7863543"
// var numb = 16.987643
// undefined
// numb.toFixed()
// "17"
// numb.toFixed(2)
// "16.99" 

// bool ex 30 

// var current = new Date();
// console.log(currentDate);

// var Days = ['sun', 'mond', 'tues','wed','thur', 'fri', 'sat']

// console.log(current.getDate());
// console.log(current.getDay());
// console.log(current.getFullYear());
// console.log(current.getHours());
// console.log(current.getMilliseconds());
// console.log(current.getMinutes());
// console.log(current.getMonth());
// console.log(current.getSeconds());
// console.log(current.getTime());
// console.log(current.getTimezoneOffset());
// console.log(current.getUTCDate());
// console.log(days[current.getDay()]);

// var myDOB = new Date("june 11, ____ 04:00");
// console.log(myDOB);
// var myDOB = new Date()

// myDOB.setMonth(5);
// myDOB.setDate(11);
// myDOB.setFullYear(2000);
// myDOB.setHours(16,00);

// console.log(myDOB);

// var myAge = current - myDOB;
// console.log(myAge/(1000*60*60*24*365.25))

//age Calculator
// function ageCalculator(userDOB){
// var current= new Date()
//     var myAge = current-userDOB
//     return myAge/(1000/60*60*24*365.25)
// }
// var userDOB = new Date("june 11, 1998 ");
// var myAge = ageCalculator(userDOB);
// console.log(myAge);

function demo(){
    console.log("i am running");
}

