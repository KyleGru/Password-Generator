// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

function prompts() {
  var valid = false;
  do {
    var length = prompt("Please enter how long you want your password to be (between 8 and 128).");
    var upperCase = confirm("Press 'OK' if you want uppercase letters.");
    var lowerCase = confirm("Press 'OK' if you want lowercase letters.")
    var number = confirm("Press 'OK' if you want numbers.");
    var specialChar = confirm("Press 'OK' if you want special characters.");
    var alerts = {
      length: length,
      upperCase: upperCase,
      lowerCase: lowerCase,
      number: number,
      specialChar: specialChar
    }
    if ((length < 8 || length > 128))
    alert("Make sure you choose a password between 8 and 128 characters.");
    else if((!upperCase)&&(!lowerCase)&&(!number)&&(!specialChar))
    alert("Need to select at least one of the given promts.");
  else valid = true;
  
} while(!valid);
return alerts;
}

function generatePassword() {
  var passwordSelctions = prompts();
  var combonations = [];
  var password = "";

  if (passwordSelctions.upperCase === true) {
    combonations.push(upperCase);
  }
  if (passwordSelctions.lowerCase === true) {
    combonations.push(lowerCase);
  }
  if (passwordSelctions.number === true) {
    combonations.push(number);
  }
  if (passwordSelctions.specialChar === true) {
    combonations.push(specialChar);
  }

  
  
  console.log(combonations);

  for (var i = 0; i < passwordSelctions.length; i++) {
    password += combonations[Math.floor(Math.random() + combonations.length)];
  }

  console.log(password);
  return password;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
