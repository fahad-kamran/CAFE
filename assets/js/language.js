const changeLanguage = async (value, title) => {
    localStorage.setItem('CafeLanguage', JSON.stringify({ value, title }));
}
(async function () {
    let lang = await JSON.parse(localStorage.getItem('CafeLanguage'))?.title;
    // bydefault set language English
    if (lang === undefined) {
        lang = 'English';
    }
    document.getElementById('language_name').innerText = lang;
    // get display language div
    let display_language = document.getElementById('language_listing');

    let language_List = [
        {
            value: 'ar',
            title: 'العربية'
        },
        {
            value: 'tr',
            title: 'Türkçe'
        },
        {
            value: 'en',
            title: 'English'
        }
    ];


    // dispplay language value
    language_List.filter((val) => {
        if (val.title !== lang) {
            display_language.innerHTML += `<button onclick=changeLanguage('${val.value}','${val.title}') type="button" class="language_list">${val.title}</button>`
        }
    })
})();