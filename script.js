// Assignment Code
console.log("hello generator");
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  function generatePassword()  {
    //Get input data from prompt commands
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
    // I did not do an "else if" here because that resulted in a bug when user inputs an incorrect answer
    if (lowCase === "yes") {
      typeCharArr.push("lowCase");
    }
    // Ask if upper case letters are desired 
    let upperCase = prompt("Please type 'yes' or 'no' in all lower case letters: Do you want your password to include upper case letters?");
    if (upperCase !== "yes" && upperCase !== "no") {
      alert("Please type you answer using only lower case letters and it must be exactly 'yes' or exactly 'no'. It cannot contain spaces or other characters. ")
      upperCase = prompt("Please type 'yes' or 'no' in all lower case letters: Do you want your password to include lower case letters?");
    } 
    // I did not do an "else if" here because that resulted in a bug when user inputs an incorrect answer
    if (upperCase === "yes") {
      typeCharArr.push("upperCase");
    }
    // Ask if numbers are desired
    let nums = prompt("Please type 'yes' or 'no' in all lower case letters: Do you want your password to include numbers?");
    if (nums !== "yes" && nums !== "no") {
      alert("Please type you answer using only lower case letters and it must be exactly 'yes' or exactly 'no'. It cannot contain spaces or other characters. ")
      nums = prompt("Please type 'yes' or 'no' in all lower case letters: Do you want your password to include lower case letters?");
    } 
    // I did not do an "else if" here because that resulted in a bug when user inputs an incorrect answer
    if (nums === "yes") {
      typeCharArr.push("nums");
    }
    // Ask if special characters are desired
    let specChars = prompt("Please type 'yes' or 'no' in all lower case letters: Do you want your password to include special characters?");
    if (specChars !== "yes" && specChars !== "no") {
      alert("Please type you answer using only lower case letters and it must be exactly 'yes' or exactly 'no'. It cannot contain spaces or other characters. ")
      specChars = prompt("Please type 'yes' or 'no' in all lower case letters: Do you want your password to include lower case letters?");
    } 
    // I did not do an "else if" here because that resulted in a bug when user inputs an incorrect answer
    if (specChars === "yes") {
      typeCharArr.push("specChars");
    }
    if (typeCharArr.length === 0) {
      alert("Please click on the 'Generate Password' button to start again. You must include at least one character type.");
    } 
    // make an array of possible characters to use based on user input
      let charsToUse = [];
      const lowCaseStr = "abcdefghijklmnopqrstuvwxyz";
      const upperCaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const numStr = "0123456789";
      const specCharStr = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
      for (let i = 0; i < typeCharArr.length; i++) {
        if (typeCharArr[i] === "lowCase") {
          charsToUse = [...charsToUse, ...lowCaseStr];
        }
        if (typeCharArr[i] === "upperCase") {
          charsToUse = [...charsToUse, ...upperCaseStr];
        }
        if (typeCharArr[i] === "nums") {
          charsToUse = [...charsToUse, ...numStr];
        }
        if (typeCharArr[i] === "specChars") {
          charsToUse = [...charsToUse, ...specCharStr]
        }
      }
      //use Math.random in a for loop to generate the characters for the password into an array of specified length
      let passwordCharArr = [];
      for (let j = 0; j < numChar; j++) {
        passwordCharArr.push(charsToUse[Math.floor(Math.random() * charsToUse.length)])
      }
    //convert the array of characters generated into a string with the join method and return it
        return "Your password is:  " + passwordCharArr.join('');
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

