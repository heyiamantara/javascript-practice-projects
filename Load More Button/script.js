let start = 0;
const limit = 5;

const container = document.getElementById("post-container");
const button = document.getElementById("loadMoreBtn");

async function loadPosts() {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`
    );

    const data = await response.json();

    data.forEach(post => {
      const div = document.createElement("div");
      div.classList.add("post");
      div.innerHTML = `<h4>${post.title}</h4><p>${post.body}</p>`;
      container.appendChild(div);
    });

    start += limit;

    if (data.length < limit) {
      button.style.display = "none";
    }

  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

loadPosts();

button.addEventListener("click", loadPosts);