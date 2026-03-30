const img = document.getElementById("image");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const random = Math.floor(Math.random() * 1000);
  img.src = `https://picsum.photos/300?random=${random}`;
});