** start of script.js **

let num = 5;

function factorialCalculator(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
}

let factorial = factorialCalculator(num);
let resultMsg = "Factorial of " + num + " is " + factorial;

console.log(resultMsg);


** end of script.js **

