const input = document.getElementById("search");
const btn = document.getElementById("btn");
const recipes = document.getElementById("recipes");

btn.addEventListener("click", async () => {
  const query = input.value;

  if (query === "") {
    recipes.innerHTML = "Enter something";
    return;
  }

  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
  const data = await res.json();

  recipes.innerHTML = "";

  if (!data.meals) {
    recipes.innerHTML = "No recipes found";
    return;
  }

  data.meals.forEach(meal => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <h3>${meal.strMeal}</h3>
      <img src="${meal.strMealThumb}">
    `;

    recipes.appendChild(div);
  });
});