// Write a function that takes user input and creates a password
// based on that input and returns it
function generatePassword() {

  // Create an object to store user input in seperate properties
  var input = {
    length: prompt("Password length: "),
    lowercase: confirm("Do you want to include lowercase letters?"),
    uppercase: confirm("Do you want to include uppercase letters?"),
    numbers: confirm("Do you want to include numbers?"),
    special: confirm("Do you want to include special characters?"),

    // Object method to check if length is valid
    checkLength: function() {
      if (this.length < 8 || this.length > 128) {
        alert("Password must be at least 8 characters in length, and no more than 128 characters in length.");
        this.length = prompt("Password length: ");
      };
    },

    // Object method to check that user selected at least one character type
    checkForInput: function () {
      if (this.lowercase === false && this.uppercase === false && this.numbers === false && this.special === false) {
        alert("You must select at least 1 criteria");
        this.lowercase = confirm("Do you want to include lowercase letters?");
        this.uppercase = confirm("Do you want to include uppercase letters?");
        this.numbers = confirm("Do you want to include numbers?");
        this.special = confirm("Do you want to include special characters?");
      }
    }
  };

  // Calls method to check valid password length
  input.checkLength();

  // Calls method to check if user chose any criteria
  input.checkForInput();

  // Create an object to store character sets
  var characterSet = {
    lowercase: ["abcdefghijklmnopqrstuvwxyz", null],
    uppercase: ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", null],
    numbers: ["0123456789", null],
    special: ["!'#$%&()*+-_/@?/[]{}^.,|:;", null]
  };

  // Defines a function that decides if a character set should be included in password based on user input. Returns character set string if true, returns null if false (won't be included in password).
  function inputChecker(input, characterSet) {
    if (input === true) {
      include = characterSet[0]
    } else {
      include = characterSet[1];
    };
    return include;
  };

  // Calls function on each set of characters, saves output to variable
  var lowercaseSet = inputChecker(input.lowercase, characterSet.lowercase);
  var uppercaseSet = inputChecker(input.uppercase, characterSet.uppercase);
  var numberSet = inputChecker(input.numbers, characterSet.numbers);
  var specialSet = inputChecker(input.special, characterSet.special);


  // Defines a function that randomly generates characters from full character set until desired string length is reached, returns randomly generated password.
  function genPassword(length) {
    var password = "";
    // fullSet comprised of each character set (will be null if user did not want to include)
    var fullSet = lowercaseSet + uppercaseSet + numberSet + specialSet;
    for (var i = 0; i < length; i++) {
      password += fullSet[Math.floor(Math.random() * fullSet.length)];
    }
    return password;
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