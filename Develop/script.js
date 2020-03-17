// Write a function that takes user input and creates a password
// based on that input and returns it
function generatePassword() {

  // create empty string to store generated password
  var genPassword = "";

  // Create an object to store user input in separate properties
  var input = {
    lowercase : confirm("Do you want to include lowercase letters?"),
    uppercase : confirm("Do you want to include uppercase letters?"),
    numbers : confirm("Do you want to include numbers?"),
    special : confirm("Do you want to include special characters?"),
    length: prompt("Password length: "),

    // Object method to check input length
    checkLength : function() {
      if (this.length < 8 || this.length > 128) {
        alert("Password must be at least 8 characters in length");
        length = prompt("Password length: ");
      };
    }
  };

  // Calls method to check inputed password length
  input.checkLength();

  // Create an object to store possible character sets
  var choices = {
    lowercase: ["abcdefghijklmnopqrstuvwxyz", ""],
    uppercase: ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", ""],
    numbers: ["0123456789", ""],
    special: ["!'#$%&()*+-/@?/[]{}^", ""]
  }

  // Based on user input, define a function that checks whether each character set should be included in the final set of characters to generate a random password from
  function inputChecker(input, choices) {
    var correctSet;
    if (input === true) {
      addToSet = choices[0]
    } else {
      addToSet = choices[1];
    };
    // Return which set of characters the user input asked to include: string of characters if true, empty string if false
    return addToSet;
  };

  // Call function on each set of characters, save output to variable
  var lowercaseSet = inputChecker(input.lowercase, choices.lowercase);
  var uppercaseSet = inputChecker(input.uppercase, choices.uppercase);
  var numberSet = inputChecker(input.numbers, choices.numbers);
  var specialSet = inputChecker(input.special, choices.special);

  // create variable that holds all character choices together in one string
  var choicesSet = lowercaseSet + uppercaseSet + numberSet + specialSet;
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