const slides = document.querySelectorAll(".slide");

const prev = document.getElementById("prev");

const next = document.getElementById("next");

let currentIndex = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));

    slides[index].classList.add("active");
}

showSlide(currentIndex);

next.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }   

    showSlide(currentIndex);
});

prev.addEventListener("click", () => { 
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }

    showSlide(currentIndex);
});