const lengthInput = document.getElementById("length");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const result = document.getElementById("result");
const btn = document.getElementById("generate");

btn.addEventListener("click", () => {
  const length = lengthInput.value;

  let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  if (numbers.checked) {
    chars += "0123456789";
  }

  if (symbols.checked) {
    chars += "!@#$%^&*()";
  }

  let password = "";

  for (let i = 0; i < length; i++) {
    const random = Math.floor(Math.random() * chars.length);
    password += chars[random];
  }

  result.textContent = password;
});