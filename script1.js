const form = document.getElementById("form");
const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const orderNumber = document.getElementById("order-no");
const productCode = document.getElementById("product-code");
const quantity = document.getElementById("quantity");
const complaintsGroup = document.getElementById('complaints-group');
const complaintDescription = document.getElementById("complaint-description");
const solutionsGroup = document.getElementById("solutions-group");
const solutionDescription = document.getElementById("solution-description");

const validateForm = () => {
  const emailRegex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}$/;
  const orderNumberRegex = /^2024\d{6}$/;
  const productCodeRegex = /^[a-zA-Z]{2}\d{2}-[a-zA-Z]{1}\d{3}-[a-zA-Z]{2}\d{1}$/;
  const checkboxes = complaintsGroup.querySelectorAll('input[type="checkbox"]');
  const otherComplaint = document.getElementById("other-complaint");
  const radios = solutionsGroup.querySelectorAll('input[type="radio"]');
  const otherSolution = document.getElementById("other-solution");

  return {
    "full-name": fullName.value ? true : false,
    "email": emailRegex.test(email.value),
    "order-no": orderNumberRegex.test(orderNumber.value),
    "product-code": productCodeRegex.test(productCode.value),
    "quantity": !isNaN(quantity.value) && quantity.value > 0,
    "complaints-group": Array.from(checkboxes).some(checkbox => checkbox.checked),
    "complaint-description": otherComplaint.checked && complaintDescription.value.length >= 20,
    "solutions-group": Array.from(radios).some(radio => radio.checked),
    "solution-description": otherSolution.checked && solutionDescription.value.length >= 20,
  };
};

const isValid = (formValidation) => {
  return Object.values(formValidation).every(value => value === true);
};

fullName.addEventListener("change", () => fullName.style.borderColor = validateForm()["full-name"] ? "green" : "red");
email.addEventListener("change", () => email.style.borderColor = validateForm()["email"] ? "green" : "red");
orderNumber.addEventListener("change", () => orderNumber.style.borderColor = validateForm()["order-no"] ? "green" : "red");
productCode.addEventListener("change", () => productCode.style.borderColor = validateForm()["product-code"] ? "green" : "red");
quantity.addEventListener("change", () => quantity.style.borderColor = validateForm()["quantity"] ? "green" : "red");
complaintsGroup.addEventListener("change", () => complaintsGroup.style.borderColor = validateForm()["complaints-group"] ? "green" : "red");
complaintDescription.addEventListener("change", () => complaintDescription.style.borderColor = validateForm()["complaint-description"] ? "green" : "red");
solutionsGroup.addEventListener("change", () => solutionsGroup.style.borderColor = validateForm()["solutions-group"] ? "green" : "red");
solutionDescription.addEventListener("change", () => solutionDescription.style.borderColor = validateForm()["solution-description"] ? "green" : "red");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formValidation = validateForm();

  if (isValid(formValidation)) {
    console.log("form submitted.");
    console.log(formValidation);
  } else {
    console.log("form declined.");
    console.log(formValidation);
  }
});
