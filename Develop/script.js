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
  //#region VariableDeclarations

  // use array for alphabet, randomNum generator for syncing
  // will be using .toLowerCase() and .toUpperCase() based on user choice
  var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  // list of all numbers 0-9
  var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  // list of all special characters NOT counting space (" ") as most passwords disallow it
  var specialsArray = ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",",
    "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_",
    "`", "{", "|", "}", "~"]

  // singular array containing concatenated arrays for alphabet, numerical, and special characters
  var passArray = []; // declared but unitizialized array which will contain all array elements from user choices

  // empty var to contain the full password after generation
  var pass = "";

  var numericalCheck = /^[0-9]+$/; //Regular expression containing only numbers
  var isValid = false; //used to break out of the do/while loop if all conditions are true

  //boolean variables declared but left uninitialized for now
  var lowerAlpha, upperAlpha, numerical, special;
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
        //assumes all values match correct numbers
        alert("You have picked a length of " + length + " characters for your password.");
        isValid = true;
      }
    } catch (err) {
      alert("Please enter only a numerical value between 8 and 128.")
    }
  } while (!isValid);
  // console.log("Pass Length: " + length);
  //#endregion

  //#region charSelection
  isValid = false; // resets isValid to false for second selection process
  do {
    // bool confirm for lower case characters
    var lowerAlpha = confirm("Would you like to use lower case characters?");

    // bool confirm for upper case characters
    var upperAlpha = confirm("Would you like to use upper case characters?");

    // bool confirm for numerical characters
    var numerical = confirm("Would you like to use numerical characters?");

    // bool confirm for special characters
    var special = confirm("Would you like to use special characters?");
    // confirm if user did select atleast ONE choice
    if ((lowerAlpha == false) && (upperAlpha == false) && (numerical == false) && (special == false))
      alert("Please select at least one option.");
    else
      isValid = true;

  } while (!isValid);
  // console.log("Lower: " + lowerAlpha);
  // console.log("Upper: " + upperAlpha);
  // console.log("Numbers: " + numerical);
  // console.log("Special: " + special);
  //#endregion

  // if user selects both lower and upper case, add alpha array twice (once with .toLowerCase() and with .toUpperCase())
  if (lowerAlpha == true)
    for(var i of alphabet){
      passArray.push(i.toLowerCase());
    }
  if (upperAlpha == true)
    for(var i of alphabet){
      passArray.push(i.toUpperCase());
    }
  if (numerical == true)
    for(var i of numbersArray){
      passArray.push(i);
    }
  if (special == true)
    for(var i of specialsArray){
      passArray.push(i);
    }

console.log(passArray);
  // generate random number equal to length of passArray + 1
  for (var i = 0; i < length; i++) {
    pass += passArray[Math.floor(Math.random() * passArray.length + 1)];
  }
  // console.log(pass);
  // return concatenated string after password generation
  return pass;


}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
