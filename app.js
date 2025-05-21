function saveNote() {
  const noteText = document.getElementById('note').value.trim();
  if (noteText) {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];

    const newNote = {
      id: Date.now(), // unique ID based on timestamp
      text: noteText
    };

    notes.push(newNote);
    localStorage.setItem('notes', JSON.stringify(notes));
    document.getElementById('note').value = ''; // Clear input
    renderNotes();
  }
}

function deleteNote(id) {
  let notes = JSON.parse(localStorage.getItem('notes')) || [];
  notes = notes.filter(note => note.id !== id);
  localStorage.setItem('notes', JSON.stringify(notes));
  renderNotes();
}

function renderNotes() {
  const notes = JSON.parse(localStorage.getItem('notes')) || [];
  const notesList = document.getElementById("notes-list");
  notesList.innerHTML = "";

  notes.forEach(note => {
    const li = document.createElement("li");
    li.textContent = note.text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.onclick = () => deleteNote(note.id);

    li.appendChild(deleteBtn);
    notesList.appendChild(li);
  });
}

// Initial render
renderNotes();


function clearNotes() {
  localStorage.removeItem('notes');
  renderNotes();
}
