const input = document.getElementById("qrText");
const button = document.getElementById("generateBtn");
const qrImage = document.getElementById("qrImage");

button.addEventListener("click", () => {

  const text = input.value.trim();

  if (text === "") {
    alert("Please enter text!");
    return;
  }

  qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;

});