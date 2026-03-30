const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const button = document.getElementById("calculateBtn");
const result = document.getElementById("result");

button.addEventListener("click", () => {
  const bill = parseFloat(billInput.value);
  const tipPercent = parseFloat(tipInput.value);

  if (isNaN(bill) || isNaN(tipPercent)) {
    result.textContent = "Please enter valid numbers";
    return;
  }

  const tipAmount = (bill * tipPercent) / 100;
  const total = bill + tipAmount;

  result.textContent = `Tip: ₹${tipAmount.toFixed(2)} | Total: ₹${total.toFixed(2)}`;
});