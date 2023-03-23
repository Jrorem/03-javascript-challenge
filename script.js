// Assignment Code
var generateBtn = document.querySelector("#generate")

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var special = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"]
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var userPass = []
var result = []
var length
var confirmNumber
var confirmSpecial
var confirmUpper
var confirmLower

// can use "8-128 characters" as a number
function generatePassword() {
  result = []
  var length = parseInt(prompt("How many characters do you want to use?", "8-128 characters"))

  if (length > 128) {
    alert("Must be between 8 and 128 characters")
    generatePassword()
  }
  if (length < 8) {
    alert("Must be between 8 and 128 characters")
    generatePassword()
  }
  //isnan
  // if (length < 8) {
  //   alert("Must be between 8 and 128 characters")
  //   generatePassword()
  // }


  var confirmNumber = confirm("Use numbers?")

  var confirmSpecial = confirm("Use special characters?")

  var confirmUpper = confirm("Use upper case letters?")

  var confirmLower = confirm("Use lower case letters?")

  if (!confirmNumber && !confirmSpecial && !confirmUpper && !confirmLower) {
    alert("Choose at least one modifier")
    generatePassword()
  }




  
  
  if (confirmNumber) {
    userPass = userPass.concat(number)
  }

  if (confirmSpecial) {
    userPass = userPass.concat(special)
  }

  if (confirmUpper) {
    userPass = userPass.concat(upper)
  }

  if (confirmLower) {
    userPass = userPass.concat(lower)
  }
// subtract guaranteed char variable from length in for loop
  console.log(userPass)
  for (var i = 0; i < length ; i++) {
    var random = userPass[Math.floor(Math.random() * userPass.length)]
    //console.log(random)
    result.push(random)
  }
  //console.log(typeof result)
  //console.log(result)
  return result.join('')

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password")

  passwordText.value = password;

}



// Add event listener to generate button


generateBtn.addEventListener("click", writePassword)





