// console.log(`moneycal.js file added`);
function getTextElementValueById(elementId) {
  const textElement = document.getElementById(elementId);
  const textElementValueString = textElement.innerText;
  const textElementValue = parseFloat(textElementValueString);

  return textElementValue;
}
function getcalculateInputField(inputFieldId) {
  const getcalculateInputField = document.getElementById(inputFieldId);
  const getcalculateInputFieldString = getcalculateInputField.value;
  const calculateInputField = parseFloat(getcalculateInputFieldString);
  getcalculateInputField.value = "";
  return calculateInputField;
}

function setElementValue(elementId, newValue) {
  const setElementValue = document.getElementById(elementId);
  setElementValue.innerText = newValue;
}
function setInputField(fieldId, newValue) {
  const field = document.getElementById(fieldId);
  field.value = newValue;
}
// function limitDecimalPlaces(num, maxDigit = 10000000) {
//   return Math.round(num * maxDigit) / maxDigit;
// }
/* target*/
document
  .getElementById("calculate-button")
  .addEventListener("click", function () {
    const income = getcalculateInputField("total-income");
    const foodCost = getcalculateInputField("food-cost");
    const rentCost = getcalculateInputField("rent-home");
    const clothCost = getcalculateInputField("cloth-cost");

    const totalExpenses = foodCost + rentCost + clothCost;
    const balance = income - totalExpenses;
    if (income < totalExpenses) {
      alert("Please check your  income ");
    } else if (balance > 0) {
      setElementValue("total-expenses", totalExpenses);
      setElementValue("rest-amount", balance);
    } else {
      alert("Please fill up the input field !!");
    }
  });

document.getElementById("saving-button").addEventListener("click", function () {
  const savingField = getcalculateInputField("saving-field");
  const income = getcalculateInputField("total-income");
  const balance = getTextElementValueById("rest-amount");

  const savingAmount = ((income * savingField) / 100).toFixed(2);
  const remainingBalance = balance - savingAmount;

  if (savingField <= 100) {
    setElementValue("saving-amount", savingAmount);
    setElementValue("remaining-balance", remainingBalance);
  } else {
    alert("You can't saving more than 100% !!");
  }
});
