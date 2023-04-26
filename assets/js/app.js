// add note function
const addNote = (event) => {
    event.preventDefault();
    let addNoteText = document.getElementById('addNoteText').value;
    document.getElementById('note_display').innerHTML = `
    <div class="bg-light p-3 rounded">
        <p class="mb-0">${addNoteText}</p>
    </div>
`;
}