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