

// Creating variables for the password criteria
var length = 0;
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var symbolsArr = ['!','@','#','$','%','&','*','=','+','?',];
var numbersArr = ['0','1','2','3','4','5','6','7','8','9',];


// Generate password length
function generatePasswordChoice() {
 
  length = prompt("How long do you want your password? Password MUST be between 8 and 128 characters");
  if (length < 8 || length > 128){
    alert("NO PASSWORD FOR YOU");
    return null;
  }
 //  return length;
 var lower = confirm("click ok if you to include lowercase in pw");
 var upper = confirm("click ok if you to include uppercase in pw");
 var symbols = confirm("click ok if you to include symbols in pw");
 var numbers = confirm("click ok if you to include numbers in pw");
 if(lower === false && upper === false && symbols === false && numbers === false) {
   alert("TRY AGAIN")
   return;
 }
 var passwordChoice = {
   length:length, 
   lower:lower,
   upper:upper,
   symbols:symbols,
   numbers:numbers,

 }
 return passwordChoice

} 

function randomChoice(array) {
  var randomI = Math.floor(Math.random()* array.length) 
  var randomE = array [randomI];
  return randomE
  
}

function generatePassword() {
  var choice = generatePasswordChoice();
  var results = []
  var pChar = []
  var gChar = []
  if (choice.lower) {
    pChar = pChar.concat (lowerCase)
    gChar.push(randomChoice(lowerCase))
  }
  if (choice.upper) {
    pChar = pChar.concat (upperCase)
    gChar.push(randomChoice(upperCase))
  }
  if (choice.symbols) {
    pChar = pChar.concat (symbolsArr)
    gChar.push(randomChoice(symbolsArr))
  }
  if (choice.numbers) {
    pChar = pChar.concat (numbersArr)
    gChar.push(randomChoice(numbersArr))
  }
  for (var i = 0; i < choice.length; i++){
    var myChar = randomChoice(pChar)
    results.push(myChar)
  }
  for (var i = 0; i < gChar.length; i++) {
    results [i] = gChar [i]
  }
  return results.join("");
  
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

  
generateBtn.addEventListener ("click", writePassword);
