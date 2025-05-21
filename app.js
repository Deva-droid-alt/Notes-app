function saveNote() {
  const note = document.getElementById('note').value;
  if (note) {
    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));
    showNotes();
  }
}

function showNotes() {
  const notes = JSON.parse(localStorage.getItem('notes')) || [];
  const notesDiv = document.getElementById('notes');
  notesDiv.innerHTML = notes.map(n => `<p>${n}</p>`).join('');
}

showNotes();

function clearNotes() {
  localStorage.removeItem('notes');
  showNotes();
}


let notes = [
  { id: 1, text: "First note" },
  { id: 2, text: "Second note" },
];

function renderNotes() {
  const notesList = document.getElementById("notes-list");
  notesList.innerHTML = "";

  notes.forEach(note => {
    const li = document.createElement("li");
    li.textContent = note.text;

    // Create Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.marginLeft = "10px";

    // On click, delete the note
    deleteBtn.onclick = () => {
      deleteNote(note.id);
    };

    li.appendChild(deleteBtn);
    notesList.appendChild(li);
  });
}

function deleteNote(id) {
  // Filter out the note with the matching id
  notes = notes.filter(note => note.id !== id);
  renderNotes();
}

// Initial render
renderNotes();

