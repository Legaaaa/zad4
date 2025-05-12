function pyramid(pattern, rows, isInverted) {
  let result = "\n"; /

  if (!isInverted) {
    for (let i = 1; i <= rows; i++) {
      let spaces = " ".repeat(rows - i);
      let patternRow = pattern.repeat(2 * i - 1);
      result += spaces + patternRow + "\n";
    }
  } else {
    for (let i = rows; i >= 1; i--) {
      let spaces = " ".repeat(rows - i);
      let patternRow = pattern.repeat(2 * i - 1);
      result += spaces + patternRow + "\n";
    }
  }

  return result;
}

console.log(pyramid("o", 4, false));  
console.log(pyramid("p", 5, true));  
