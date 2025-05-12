function getAverage(scores) {
  let total = scores.reduce((sum, score) => sum + score, 0);
  return total / scores.length;
}

function getGrade(score) {
  if (score === 100) return "A+";
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

function studentMsg(scores, studentScore) {
  let average = getAverage(scores);
  let grade = getGrade(studentScore);
  let passed = hasPassingGrade(studentScore);
  
  let result = `Class average: ${average.toFixed(2)}. Your grade: ${grade}. `;
  result += passed ? "You passed the course." : "You failed the course.";
  
  return result;
}
