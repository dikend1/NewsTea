let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();

function publish(){
    const title = document.getElementById('write-title-input').value;
    const text = document.getElementById('write-text-input').value;
    const date = year + "-" + month + "-" + day;
    if( title === '' ){
        alert("Please enter a title");
        return;
    }
    if( text === '' ){
        alert("You didn't enter any text for this page.");
        return;
    }

    const id = title.replaceAll(' ', '_') + '_' + crypto.randomUUID();

    const stories = JSON.parse(localStorage.getItem('stories') || '[]');
    stories.push({ id, title, main: text , date: date });
    localStorage.setItem('stories', JSON.stringify(stories));

    open('main.html');
    close();
}