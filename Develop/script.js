// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// password generation
function generatePassword(){
// set maximum length of password, user prompt?
// repeat prompt is length is less than 8 or larger than 128 characters


// bool prompt for lowercase characters


// bool prompt for upper case characters


// bool prompt for numerical characters


// bool prompt for special characters


// log out validation of user choices (desk-check purposes only)



}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
