const button = document.getElementById("toggleBtn");

button.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        button.textContent = "Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        button.textContent = "Dark Mode";
        localStorage.setItem("theme", "light");
    }
});

window.onload = () => {
    const savedTheme = localStorage.getItem("theme");


    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        button.textContent = "Light Mode";
    } else {
        document.body.classList.remove("dark");
        button.textContent = "Dark Mode";
    }   
}