const stars = document.querySelectorAll(".star");

const ratingText = document.getElementById("rating");

let rating = 0;

stars.forEach((star) => {
  star.addEventListener("click", function () {
    rating = this.getAttribute("data-value");
    ratingText.textContent = "Rating: " + rating;
    updateStars();
  });
});

function updateStars() {
  stars.forEach((star) => {
    const value = star.getAttribute("data-value");

    if (value <= rating) {
      star.classList.add("active");
      star.classList.remove("fa-regular");
      star.classList.add("fa-solid");
    } else {
      star.classList.remove("active");
      star.classList.remove("fa-solid");
      star.classList.add("fa-regular");
    }
  });
}