** start of script.js **

// Define the isLeapYear function
function isLeapYear(year) {
  // Check if the year is divisible by 4, but not by 100, unless it is divisible by 400
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year} is a leap year.`;
  } else {
    return `${year} is not a leap year.`;
  }
}

// Declare the variable year to store the value you want to check
let year = 2024;  // You can change this value to test different years

// Call the isLeapYear function and assign the result to a variable named result
let result = isLeapYear(year);

// Output the result to the console
console.log(result);


** end of script.js **

