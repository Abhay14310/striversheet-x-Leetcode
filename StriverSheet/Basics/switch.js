// Prompt user to enter a number between 1 and 7
const day = parseInt(prompt("Enter a number (1-7):"));

// Switch statement to determine the day
switch (day) {
  case 1:
    console.log("Monday");
    break; // Exit switch after matching case
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    // Executed if input is not between 1 and 7
    console.log("Invalid");
}
