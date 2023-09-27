// Assignment Code
console.log("hello generator");
var generateBtn = document.querySelector("#generate");
// Get input data from prompt commands
// Start with number of characters
let numChar = Number(window.prompt("Please enter the number of characters you want in your password (at least 8 and no more than 128 characters)"));
const typeCharArr = [];
if (numChar < 8 || numChar > 128) {
  alert("Please enter a number between 8 and 128");
  numChar = Number(window.prompt("Please enter the number of characters you want in your password (at least 8 and no more than 128 characters)"));
} 
//ask if lower case characters are desired
let lowCase = prompt("Please type 'yes' or 'no' in all lower case letters: Do you want your password to include lower case letters?");
if (lowCase !== "yes" && lowCase !== "no") {
  alert("Please type you answer using only lower case letters and it must be exactly 'yes' or exactly 'no'. It cannot contain spaces or other characters. ")
  lowCase = prompt("Please type 'yes' or 'no' in all lower case letters: Do you want your password to include lower case letters?");
} 
// I did not do an "else if" here because that resulted in a bug
if (lowCase === "yes") {
  typeCharArr.push("lowCase");
}
// Ask if upper case letters are desired 
let upperCase = prompt("Please type 'yes' or 'no' in all lower case letters: Do you want your password to include upper case letters?");
if (upperCase !== "yes" && upperCase !== "no") {
  alert("Please type you answer using only lower case letters and it must be exactly 'yes' or exactly 'no'. It cannot contain spaces or other characters. ")
  upperCase = prompt("Please type 'yes' or 'no' in all lower case letters: Do you want your password to include lower case letters?");
} 
// I did not do an "else if" here because that resulted in a bug
if (upperCase === "yes") {
  typeCharArr.push("upperCase");
}
// Ask if numbers are desired
let nums = prompt("Please type 'yes' or 'no' in all lower case letters: Do you want your password to include numbers?");
if (nums !== "yes" && nums !== "no") {
  alert("Please type you answer using only lower case letters and it must be exactly 'yes' or exactly 'no'. It cannot contain spaces or other characters. ")
  nums = prompt("Please type 'yes' or 'no' in all lower case letters: Do you want your password to include lower case letters?");
} 
// I did not do an "else if" here because that resulted in a bug
if (nums === "yes") {
  typeCharArr.push("nums");
}
// Ask if special characters are desired
let specChars = prompt("Please type 'yes' or 'no' in all lower case letters: Do you want your password to include special characters?");
if (specChars !== "yes" && specChars !== "no") {
  alert("Please type you answer using only lower case letters and it must be exactly 'yes' or exactly 'no'. It cannot contain spaces or other characters. ")
  specChars = prompt("Please type 'yes' or 'no' in all lower case letters: Do you want your password to include lower case letters?");
} 
// I did not do an "else if" here because that resulted in a bug
if (specChars === "yes") {
  typeCharArr.push("specChars");
}
if (typeCharArr.length === 0) {
  alert("Please refresh the browser to start again. You must include at least one character type.");
}
console.log(numChar, lowCase, upperCase, nums, specChars, typeCharArr);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

