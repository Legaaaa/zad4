** start of script.js **

function maskEmail(email) {

  const atIndex = email.indexOf('@');
  
  
  const firstChar = email[0];
  const lastChar = email[atIndex - 1];
  

  const maskedLocalPart = firstChar + '*'.repeat(atIndex - 2) + lastChar;
  

  const domain = email.slice(atIndex);
  

  return maskedLocalPart + domain;
}


const email = "apple.pie@example.com";


console.log(maskEmail(email)); 

const email2 = "freecodecamp@example.com";
console.log(maskEmail(email2));  


** end of script.js **

