////////////////////////////////////
////////////////////////////////////
// FINALLY WORKING!!!
////////////////////////////////////
////////////////////////////////////

// ===================================
// GIVEN CODES
// ===================================

var generateBtn = document.querySelector("#generate");
console.log(generateBtn);

generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// ===================================
// List down all arrays 
// ===================================

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// ===================================
// Variable Declaration 
// ===================================

var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// ===================================
// Prompt password length
// ===================================

function generatePassword() {

  // Trigger the first prompt
  var confirmLength = (prompt("Choose the length of your password. It must be at least 8 characters and not more than 128 characters."));

  // Loop if password length != condition
  while (confirmLength <= 7 || confirmLength >= 128) {

    alert("Please read the instruction carefully. Password must be be at least 8 characters and not more than 128 characters.");
    
    // Repeat prompt
    var confirmLength = (prompt("Choose the length of your password. It must be at least 8 characters and not more than 128 characters."));

  }

  // Confirm user's password length 
  alert("Your password will have " + confirmLength + " characters.");
  console.log(confirmLength + " characters");


  // ===================================
  // Confirm password characters
  // ===================================

  // Determine parameters of password 
  var confirmSpecialCharacter = confirm("Include special characters?");
  var confirmNumericCharacter = confirm("Include numbers?");
  var confirmLowerCase = confirm("Include lowercase?");
  var confirmUpperCase = confirm("Include uppercase?");

  // Loop if answer is outside the parameters 
  while (confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {

    alert("You must choose at least one parameter!");

    // Determine again the parameters of password 
    var confirmSpecialCharacter = confirm("Include special characters?");
    var confirmNumericCharacter = confirm("Include numbers?");
    var confirmLowerCase = confirm("Include lowercase?");
    var confirmUpperCase = confirm("Include uppercase?");
  }

  // ===================================
  // After confirming characters to include
  // ===================================

  var passwordCharacters = []; // Array placeholder where we store the chosen random password

  if (confirmSpecialCharacter) {
    passwordCharacters = passwordCharacters.concat(specialChar);
  }

  if (confirmNumericCharacter) {
    passwordCharacters = passwordCharacters.concat(number);
  }

  if (confirmLowerCase) {
    passwordCharacters = passwordCharacters.concat(alphaLower);
  }

  if (confirmUpperCase) {
    passwordCharacters = passwordCharacters.concat(alphaUpper);
  }

  console.log(passwordCharacters);

  // Fill up the empty string with the confirm characters
  var randomPassword = "";

  for (var i = 0; i < confirmLength; i++) {
    randomPassword += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    // repeat until password length is met
  }
  return randomPassword;// final




} // Close the function