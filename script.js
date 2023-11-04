// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
var number = '0123456789'.split('');
var specialChar = '@%+/\'!#$^?:,)(}{][~_.'.split('');

function prompts() {
  var valid = false;
  do {
    var length = prompt("Please enter how long you want your password to be (between 8 and 128).");
    var upperCasePromt = confirm("Press 'OK' if you want uppercase letters.");
    var lowerCasePromt = confirm("Press 'OK' if you want lowercase letters.")
    var numberPromt = confirm("Press 'OK' if you want numbers.");
    var specialCharPromt = confirm("Press 'OK' if you want special characters.");
    var alerts = {
      length: length,
      upperCasePromt: upperCasePromt,
      lowerCasePromt: lowerCasePromt,
      numberPromt: numberPromt,
      specialCharPromt: specialCharPromt
    }
    if ((length < 8 || length > 128))
    alert("Make sure you choose a password between 8 and 128 characters.");
    else if((!upperCasePromt)&&(!lowerCasePromt)&&(!numberPromt)&&(!specialCharPromt))
    alert("Need to select at least one of the given promts.");
  else valid = true;
  
} while(!valid);
return alerts;
}

function generatePassword() {
  var passwordSelctions = prompts();
  var combinations = [];
  var validPassword = "";

  if (passwordSelctions.upperCasePromt) {
    for (var i of upperCase)
    combinations.push(i);
  }
  if (passwordSelctions.lowerCasePromt) {
    for (var i of lowerCase)
    combinations.push(i);
  }
  if (passwordSelctions.numberPromt) {
    for (var i of number)
    combinations.push(i);
  }
  if (passwordSelctions.specialCharPromt) {
    for (var i of specialChar)
    combinations.push(i);
  }

  console.log(combinations);

  for (var i = 0; i < passwordSelctions.length; i++) {
    validPassword += combinations[Math.floor(Math.random() * combinations.length)];
  }

  console.log(validPassword);
  return validPassword;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
