const input = document.getElementById("username");
const btn = document.getElementById("btn");
const profile = document.getElementById("profile");

btn.addEventListener("click", async () => {
  const user = input.value;

  if (user === "") {
    profile.innerHTML = "Enter username";
    return;
  }

  const res = await fetch(`https://api.github.com/users/${user}`);
  const data = await res.json();

  if (data.message === "Not Found") {
    profile.innerHTML = "User not found";
    return;
  }

  profile.innerHTML = `
    <img src="${data.avatar_url}">
    <h3>${data.login}</h3>
    <p>Followers: ${data.followers}</p>
  `;
});