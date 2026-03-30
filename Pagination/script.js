const list = document.getElementById("list");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const pageText = document.getElementById("page");

const items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

let currentPage = 1;
const perPage = 5;

function showPage(page) {
  list.innerHTML = "";

  const start = (page - 1) * perPage;
  const end = start + perPage;

  const pageItems = items.slice(start, end);

  pageItems.forEach(item => {
    const div = document.createElement("div");
    div.className = "item";
    div.textContent = item;
    list.appendChild(div);
  });

  pageText.textContent = `Page ${page}`;
}

prev.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
  }
});

next.addEventListener("click", () => {
  if (currentPage < Math.ceil(items.length / perPage)) {
    currentPage++;
    showPage(currentPage);
  }
});

showPage(currentPage);