const userList = document.getElementById("userList");

function displayUser(users) {

    userList.innerHTML = "";

    users.forEach(user => {
        const li = document.createElement("li");
        li.textContent = user.name;
        userList.appendChild(li);
    });
}

function getUsersXHR() {

    const xhr = new XMLHttpRequest();

     xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

     xhr.onload = function () {
        if (xhr.status == 200) {
            const data = JSON.parse(xhr.responseText); 
            displayUser(data);
        }
     };
     xhr.send();
}

function getUsersFetch() {

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => displayUser(data))
        .catch(err => console.log(err))
}

async function getUsersAsync() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users"); 
        const data = await res.json();
         displayUser(data);
    } catch (err) {
        console.log(err);
    }
}