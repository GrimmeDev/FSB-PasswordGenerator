// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// password generation
function generatePassword() {
  // //#region VariableDeclarations

  // will be using .toLowerCase() and .toUpperCase() based on user choice
  var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  // list of all numbers 0-9
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  // list of all special characters NOT counting space (" ") as most passwords disallow it
  var specials = ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",",
    "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_",
    "`", "{", "|", "}", "~"]

  var numericalCheck = /^[0-9]+$/; //Regular expression containing only numbers
  var isValid = false; //used to break out of the do/while loop if all conditions are true
  //#endregion

  // set maximum length of password, user prompt
  // repeat prompt is length is less than 8 or larger than 128 characters
  // validate input to make sure it is numerical as well
  // #region LengthSet
  do {
    var length = prompt("Please enter the length of the password to generate.");
    length = parseInt(length);

    // try/catch is used to catch exceptions in case the user inputs a wrong character
    try {
      if ((length < 8) || (length > 128))
        alert("Please pick a number between 8 and 128.");
      else {
        for (var i = 0; i < length.length; i++) {
          if (length[i].value.match(numericalCheck))
            console.log(length[i] + "is a numerical value");
          else
            console.log(length[i] + "is NOT a numerical value");
        }
        //assumes all values match correct numbers
        alert("You have picked a length of " + length + " characters for your password.");
        isValid = true;
      }
    } catch (err) {
      alert("Please enter only a numerical value between 8 and 128.")
    }
  } while (!isValid);
  //#endregion

  // bool confirm for lower case characters


  // bool confirm for upper case characters


  // bool confirm for numerical characters


  // bool confirm for special characters


  // confirm if user did select atleast ONE choice
  // use array for alphabet, randomNum generator for syncing
  // singular array containing concatenated arrays for alphabet, numerical, and special characters
  // if user selects both lower and upper case, add alpha array twice (once with .toLowerCase() and with .toUpperCase())



  // log out validation of user choices (desk-check purposes only)
  // return concatenated string after password generation


}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
