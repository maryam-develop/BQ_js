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

