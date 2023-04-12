// task1

// var zakat_percetage =0.025; //2.5%
// // var user_input = prompt("Enter Your Amount");
// var user_input = Number(prompt("Enter Your Amount"));
// var result = zakat_percetage * user_input;

// alert("your zakat value is " + result);

// task2
var method1 = " 1. flour" ;
var method2 = " 2. barley" ;
var method3 = " 3. dates" ;
var method4 = " 4. raisin" ;
var familyMembers = +prompt("Total Family Members");
var fitMethod = +prompt("Choose A Fitrah Method " +" " + method1 + " " + " " + method2 + " " + method3 + " " + method4);
if (fitMethod == 1) {
    alert("your fitrah amount is " + familyMembers * 250);

} else if (fitMethod == 2) {
    alert("your fitrah amount is " + familyMembers * 450);
} else if (fitMethod == 3) {
    alert("your fitrah amount is " + familyMembers * 2100);
} else if (fitMethod == 4) {
    alert("your fitrah amount is " + familyMembers * 2800);
} else {
    alert("you chhose wrong option");
}


// task3

// Create a program that generates a random number between 1 and 10 and stores it
// in a variable called "secretNumber". Then, ask the user to enter a guess for the
// secret number using a prompt.
// Use an if-else statement to check if the user's guess matches the secret number. If
// the guess is correct, display a message using an alert saying "Congratulations! You
// guessed the secret number". Otherwise, if the guess is too high or too low, display
// an appropriate message informing the user to guess again.


