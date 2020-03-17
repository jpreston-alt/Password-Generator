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

  // Create an object to store user input in separate properties
  var input = {
    lowercase : confirm("Do you want to include lowercase letters?"),
    uppercase : confirm("Do you want to include uppercase letters?"),
    numbers : confirm("Do you want to include numbers?"),
    special : confirm("Do you want to include special characters?")
  };

  var choices = {
    lowercase: ["abcdefghijklmnopqrstuvwxyz", ""],
    uppercase: ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", ""],
    numbers: ["0123456789", ""],
    special: ["!'#$%&()*+-/@?/[]{}^", ""]
  }

  // declare variables for different set of character choices
  var incLow, incUp, incNum, incSpec;
  

  // Set conditions for generated password depending on user input variables
  if (input.lowercase === true) {
    incLow = choices.lowercase[0]
  } else {
    incLow = choices.lowercase[1];
  }; 

  if (input.uppercase === true) {
    incUp = choices.uppercase[0]
  } else {
    incUp = choices.uppercase[1];
  }; 

  if (input.numbers === true) {
    incNum = choices.numbers[0]
  } else {
    incNum = choices.numbers[1];
  }; 

  if (input.special === true) {
    incSpec = choices.special[0]
  } else {
    incSpec = choices.special[1];
  }; 


  // function inputChecker(input, choices, correctSet) {
  //   var correctSet;
  //   if (input === true) {
  //     correctSet = choices[0]
  //   } else {
  //     correctSet = choices[1];
  //   };
  // }

  // inputChecker(input.lowercase, choices.lowercase, incLow);
  // inputChecker(input.uppercase, choices.uppercase, incUp);
  // inputChecker(input.numbers, choices.numbers, incNum);
  // inputChecker(input.special, choices.special, incSpec);



  // create variable that holds all choices together in one string
  var choicesSet = incLow + incUp + incNum + incSpec;
  console.log(choicesSet);


  // create number variables using Math.random
  // use Math.random number variables to choose characters from choicesSet



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