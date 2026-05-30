// Use prompt() in browser or readline in Node.js
// Here we use Node.js version with readline for compatibility

// Import readline module to take input from user
const readline = require("readline");

// Create interface for input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask the user to enter their age
rl.question("Enter your age: ", function (age) {
  // Convert input (string) to number
  age = parseInt(age);

  // Check if age is >= 18
  if (age >= 18) {
    console.log("You are an adult.");
  } else {
    console.log("You are not an adult.");
  }

  // Close input stream
  rl.close();
});
