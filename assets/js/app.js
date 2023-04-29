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

// change language function
const changeLanguage = (currentLang) => {
    let prevLang = localStorage.getItem('setAppLanguage');
    localStorage.setItem('setAppLanguage', currentLang);

    let url = window.location.toString();
    window.location = url.replace(`/${prevLang}/`, `/${currentLang}/`);
}