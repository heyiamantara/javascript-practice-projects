const buttons = document.querySelectorAll(".filter-btn");

const cards = document.querySelectorAll(".card");

buttons.forEach(button => {

  button.addEventListener("click", () => {

    buttons.forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");

    const category = button.getAttribute("data-category");

    cards.forEach(card => {

      const cardCategory = card.getAttribute("data-category");

      if (category === "all") {
        card.style.display = "block";
      }

      else if (category === cardCategory) {
        card.style.display = "block";
      }

      else {
        card.style.display = "none";
      }

    });

  });

});