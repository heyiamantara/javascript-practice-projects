const input = document.getElementById("noteInput");
const addBtn = document.getElementById("addBtn");
const notesDiv = document.getElementById("notes");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

function displayNotes() {
  notesDiv.innerHTML = "";

  notes.forEach((note, index) => {
    const div = document.createElement("div");
    div.className = "note";

    div.innerHTML = `
      <p>${note}</p>
      <button onclick="deleteNote(${index})">Delete</button>
    `;

    notesDiv.appendChild(div);
  });
}

addBtn.addEventListener("click", () => {
  const text = input.value;

  if (text === "") return;

  notes.push(text);
  localStorage.setItem("notes", JSON.stringify(notes));

  input.value = "";
  displayNotes();
});

function deleteNote(index) {
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  displayNotes();
}

displayNotes();