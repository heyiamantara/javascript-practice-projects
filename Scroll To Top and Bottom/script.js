const topBtn = document.getElementById("topBtn");
const bottomBtn = document.getElementById("bottomBtn");

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

bottomBtn.addEventListener("click", () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});