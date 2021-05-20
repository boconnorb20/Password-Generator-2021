
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Creating variables for the password criteria
var length = 0;
var charTypes = ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789");
var charSymbols = ("!@#$%^&*?");


// Generate password length
function generatePassword() {
 
  length = prompt("How long do you want your password? Password MUST be between 8 and 128 characters");
  if (length < 8 || length > 128){
    alert("NO PASSWORD FOR YOU");
    return null;
  }
 return length;
} 

function generateCharType() {

  charTypes = prompt("Password must contain Uppercase, Lowercase and Numerical characters, Still between 8 and 128 Characters");
}



  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
