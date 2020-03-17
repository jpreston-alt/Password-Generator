// Write a function that takes user input and creates a password
// based on that input and returns it
function generatePassword() {

  // create empty string to store generated password
  var genPassword = "";

  // Prompt user for password length
  var length = prompt("Password length: ")

  // make sure the user input is between 8 and 128 characters, if so store unput in length variable and if not as again
  if (length >= 8 && length <= 128) {
    genPassword.length = length;
  } else {
    alert("Password must be at least 8 characters in length");
    length = prompt("Password length: ");
  }

  // Ask user what they want to include in their password, store answers (true/false) in separate variables (user input variables)
  var lowercase = confirm("Do you want to include lowercase letters?");
  var uppercase = confirm("Do you want to include uppercase letters?");
  var numbers = confirm("Do you want to include numbers?");
  var special = confirm("Do you want to include special characters?");

  // create arrays for lowercase, uppercase, and special characters
  var lowercaseChoices = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChoices = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberChoices = "0123456789";
  var specialChoices = "!'#$%&()*+-/@?/[]{}^";

  // create number variables using Math.random
  // use Math.random number variables to choose characters from arrays based on user input variables

  // Set conditions for generated password depending on user input variables
  // Use .push to push items into genPassword empty string




  console.lowercaseChoices + uppercaseChoices + numberChoices + specialChoices;
  console.log(length);
  console.log(lowercase);
  console.log(uppercase);
  console.log(numbers);
  console.log(special);

  return genPassword;
  // return "sometext";
}



//////////////////////////////////////////////////////////////
// DO NOT TOUCH THE CODE BELOW
//////////////////////////////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);