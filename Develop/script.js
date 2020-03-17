// Write a function that takes user input and creates a password
// based on that input and returns it
function generatePassword() {

  // Create an object to store user input in seperate properties
  var input = {
    length: prompt("Password length: "),
    lowercase : confirm("Do you want to include lowercase letters?"),
    uppercase : confirm("Do you want to include uppercase letters?"),
    numbers : confirm("Do you want to include numbers?"),
    special : confirm("Do you want to include special characters?"),

    // Object method to check input length
    checkLength : function() {
      if (this.length < 8 || this.length > 128) {
        alert("Password must be at least 8 characters in length");
        this.length = prompt("Password length: ");
      };
    },

    // Object method to check that user selected at least one character type
    checkForInput : function () {
      if (this.lowercase === false && this.uppercase === false && this.numbers === false && this.special === false) {
        alert("You must choose at least 1 criteria");
        this.lowercase = confirm("Do you want to include lowercase letters?");
        this.uppercase = confirm("Do you want to include uppercase letters?");
        this.numbers = confirm("Do you want to include numbers?");
        this.special = confirm("Do you want to include special characters?");
      }
    }
  };

  // Calls method to check inputed password length
  input.checkLength();

  // Calls method to check if user chose any criteria
  input.checkForInput();

  // Create an object to store possible character sets based on user input
  var choices = {
    lowercase: ["abcdefghijklmnopqrstuvwxyz", null],
    uppercase: ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", null],
    numbers: ["0123456789", null],
    special: ["!'#$%&()*+-_/@?/[]{}^.,|:;", null]
  }

  // Defines a function that checks which character sets (choices) should be included in password based on user input
  function inputChecker(input, choices) {
    if (input === true) {
      // if user wants these characters included
      addToSet = choices[0]
    } else {
      // if user does not want these characters included
      addToSet = choices[1];
    };
    // Returns which set of characters should be included in password
    return addToSet;
  };

  // Calls function on each set of characters, save output to variable
  var lowercaseSet = inputChecker(input.lowercase, choices.lowercase);
  var uppercaseSet = inputChecker(input.uppercase, choices.uppercase);
  var numberSet = inputChecker(input.numbers, choices.numbers);
  var specialSet = inputChecker(input.special, choices.special);


  // Create a function that randomly generates password 
  function genPassword(length) {
    var result = "";
    // Creates variable to bring together all included character sets into one string (they could either contain characters or be null)
    var choicesSet = lowercaseSet + uppercaseSet + numberSet + specialSet;
    // Creates a loop that generates random character in a string until the desired string length is reached
    for (var i = 0; i < length; i++) {
      result += choicesSet[Math.floor(Math.random() * choicesSet.length)];
    }
    // Returns randomly generated password
    return result;
  };

  // Returns the outputed value of genPassword with the user input length passed in as an argument
  return genPassword(input.length);
};



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