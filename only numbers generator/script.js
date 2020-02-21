// Assignment Code
//this line beneath uses the onclick .Write a function that when the button is clicked .
//document.getElementById(generate)

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(enterlength) {
 
  //the generatePassword needs a function that runs when the generateBtn is clicked.
  var password = generatePassword();
  var passChar ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
  var temporarySpot = ""
function generatePassword(passwordlength){
  temporarySpot=""
  for(i = 0 ; i < passwordlength; i++)
  temporarySpot+=passChar.charAt(Math.floor(Math.random()*passChar.length))
  return temporarySpot
}
 
  //the line beneath this:the querySelector prints the passwordText var inside
  var passwordText = document.querySelector("#password");

//the line beneath: the passwordText.value will need the length
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 document.getElementById(generatePassword)