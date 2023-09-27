// Assignment Code
console.log("hello generator");
var generateBtn = document.querySelector("#generate");
// Get input data
let numChar = Number(window.prompt("Please enter the number of characters you want in your password (at least 8 and no more than 128 characters)"));
const typeChar = [];
if (numChar < 8 || numChar > 128) {
  alert("Please enter a number between 8 and 128");
  numChar = Number(window.prompt("Please enter the number of characters you want in your password (at least 8 and no more than 128 characters)"));
} else {
  console.log(numChar);
}
console.log(numChar);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

