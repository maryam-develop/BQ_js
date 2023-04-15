// task1

// Calculate the zakat value, first, create a variable named "zakatPercentage" and
// store the value of 2.5% in it (hint: 2.5% means 0.025). Next, create another variable
// named "userInput" and take the input from the user using the prompt. Make sure
// the input value is of a type number by converting the input string to a number
// using a suitable method. Then, create a variable named "result" and assign its value
// to the multiplication of the zakat percentage and user input. Finally, use an alert
// message to display the calculated zakat value. The message should look like this:
// "Your zakat value is xxx".

// SOLUTION:
// var zakat_percetage =0.025; //2.5%
// // var user_input = prompt("Enter Your Amount");
// var user_input = Number(prompt("Enter Your Amount"));
// var result = zakat_percetage * user_input;

// alert("your zakat value is " + result);

// task2
// calculate the fitrah amount, first, ask the user to enter the total number of family
// members using the prompt and store the value in a variable called
// "familyMembers". Next, ask the user to choose a fitrah method by providing them
// options using the prompt, and store the selected method and its price in variables.
// Then, use an if-else block to check the user's input and calculate the fitrah amount
// by multiplying the selected method's price with the number of family members.
// Finally, display the calculated fitrah amount using an alert message.


// SOLUTION:

// var method1 = " 1. flour" ;
// var method2 = " 2. barley" ;
// var method3 = " 3. dates" ;
// var method4 = " 4. raisin" ;
// var familyMembers = +prompt("Total Family Members");
// var fitMethod = +prompt("Choose A Fitrah Method " +" " + method1 + " " + " " + method2 + " " + method3 + " " + method4);
// if (fitMethod == 1) {
//     alert("your fitrah amount is " + familyMembers * 250);

// } else if (fitMethod == 2) {
//     alert("your fitrah amount is " + familyMembers * 450);
// } else if (fitMethod == 3) {
//     alert("your fitrah amount is " + familyMembers * 2100);
// } else if (fitMethod == 4) {
//     alert("your fitrah amount is " + familyMembers * 2800);
// } else {
//     alert("you chhose wrong option");
// }


// task3

// Create a program that generates a random number between 1 and 10 and stores it
// in a variable called "secretNumber". Then, ask the user to enter a guess for the
// secret number using a prompt.
// Use an if-else statement to check if the user's guess matches the secret number. If
// the guess is correct, display a message using an alert saying "Congratulations! You
// guessed the secret number". Otherwise, if the guess is too high or too low, display
// an appropriate message informing the user to guess again.

// SOLUTION:

// var secretNumber = 6;
// var user_input = +prompt("Guess The NUM");

// // console.log(secretNumber + " is" +" Secret Numebre and you choose "+ user_input + " Number ");
// if (secretNumber == user_input) {
//     alert("Congratulations! You guessed the secret number");
// } else if ( user_input >= secretNumber  && user_input == 8) {
//     alert(" You guessed too high number");
// } else if (user_input <= secretNumber  && user_input == 4) {
//     alert("Try Again! You guessed too low number");
// } else {
//     alert("Please Guess Again");
// }

// Task 4:
// Create a program that asks the user to enter a name, and then prints out the name
// with the first letter capitalized (Make your name in capitalized case).

// SOLUTION:

// var userName = prompt("Enter You Good Name");
// userName.toLowerCase();
// var firtChar = userName.slice(0,1);
// firtChar = firtChar.toUpperCase();
// alert(firtChar+userName.toLowerCase()); print using alert
// document.write(firtChar+userName.toLowerCase()); print using document
// console.log(firtChar+userName.toLowerCase()); print using console


// task 5
// In this task, you will be creating two empty arrays called "contactNumbers" and
// "contactNames". Using the prompt, you will ask the user to enter a contact number
// and contact name. You will then push these values into their respective arrays
// using the push method. After adding all the contacts, you will display the contact
// numbers and names in the console. To do this, you will need to use a for loop to
// iterate through both arrays and log each element to the console.
// Make sure to use descriptive variable names and comment on your code for clarity.

// SOLUTION:

// var contactNumbers = [];
// var contactNames = [];

// for (let i = 0; i < 3; i++) {
//    var num = +prompt("enter your Number");
//    var name = prompt("Enter your Name");

//    contactNames.push(name);
//    contactNumbers.push(num);
// }



// for (let i = 0; i < contactNumbers.length; i++) {
//      console.log("contact " + [i+1], contactNames[i], contactNumbers[i ]);

// }

// Task 6:
// Create an Array that contains different products, and get input from the user in which you
// ask your user to give the position of that element he/she wants. Now remove that Item
// from your array and console the removed item, Also display the remaining items in the
// array and total number of items remaining.

// SOLUTION:

// var breakFast = ["bread", "milk" , "milkshake", "tea", "coffee", "egg", "juice", "paratha", "rusk"]
// var userInput= +prompt("what You want , how to arrange this position " + breakFast);
// var newBrkFast = breakFast.slice(userInput,0)
// // newBrkFast.slice(userInput,0);

// // console.log(breakFast);
// console.log(newBrkFast);

// Task 7:
// Create a program that asks the user for their nationality, gender, and age using the prompt
// function. The program should then use nested if-else statements to determine if the
// person is eligible to vote.
// First, the program should check if the person is Pakistani or Indian. If they are not, the
// program should display a message saying they are not eligible to vote.
// If they are Pakistani or Indian, the program should then check their gender. If the person is
// male and over the age of 18, they are eligible to vote. If the person is female and over the
// age of 18, the program should ask if they are married. If they are married, they are eligible
// to vote. If they are not married, they are not eligible to vote.
// If the person is under 18, the program should display a message saying they are not eligible
// to vote.

// SOLUTION:

// var nationality = prompt("are you pakistani or indian");
// var age = +prompt("your age please");
// var gender = prompt("are you Male or Female");

// if (nationality == "Pakistani" || nationality == "Indian" || nationality == "pakistani" || nationality == "indian" ) {
//     if (age >= 18) {
//         if ( gender == "male" || gender == "Male") {
//             console.log("you are eligible to vote")
//         }
        
//         else if (gender == "female" || gender == "Female") {
//             var status = prompt("married or unmarried");
//          if (age >= 18 && status == "married") {
//             console.log("you are eligible to vote")
//          } else {
//             console.log("you are un married you are not eligible")
//          }
//         }
//         }  else {
//         console.log("you are under age")
//     }
    
// } else {
//     console.log("you are not eligible to vote")
// }



// Task 8:
// You have an array of that contains the name of Pakistani Teams Player selected for
// WorldCup (15 Players) named as WorldCupSquad. Now tomorrow we have a match with
// India, So make an array of final team players (11 Players) that will be playing in tomorrows
// match from the WorldCupSquad array.
// (Hint : Make sure it should not disturb the array that contains 15 players instead you have
// to make a copy of this array)

// SOLUTION:
// var worldCupSquad = ["Ahmed Shehzad", "Azhar Ali", "Babar Azam", "Fahim Ashraf", "Fakhar Zaman", "Haris Sohail", "Hasan Ali", "Imad Wasim", "Junaid Khan", "Mohammad Amir", "Mohammad Hafeez"," Rumman Raees", "Sarfraz Ahmed (capt & wk)", "Shadab Khan", "Shoaib Malik"];
// var worldCupTeam = worldCupSquad.slice(1,12);

// console.log(worldCupSquad);
// console.log(worldCupTeam);
