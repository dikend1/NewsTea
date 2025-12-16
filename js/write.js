let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();

function publish() {
    const title = document.getElementById('write-title-input').value;
    const text = document.getElementById('write-text-input').value;
    const date = year + "-" + month + "-" + day;
    const author = "myself";
    if (title === '') {
        alert("Please enter a title");
        return;
    }
    if (text === '') {
        alert("You didn't enter any text for this page.");
        return;
    }

    let stories = JSON.parse(localStorage.getItem('stories') || '[]');

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    if (id) {
        const storyIndex = stories.findIndex(s => s.id === id);
        if (storyIndex !== -1) {
            stories[storyIndex].title = title;
            stories[storyIndex].main = text;
            stories[storyIndex].date = date;
            stories[storyIndex].author = author;
        }
    } else {
        // Create new story
        const newId = title.replaceAll(' ', '_') + '_' + crypto.randomUUID();
        stories.push({ id: newId, title, main: text, date: date, author: author });
    }

    localStorage.setItem('stories', JSON.stringify(stories));

    open('main.html');
    close();
}


let parent = document.getElementById('main-content');
let stories = JSON.parse(localStorage.getItem("stories")) || [];

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

let story;


for( let i = 0; i < stories.length; i++ ) {
    if(stories[i].id === id) {
        story = stories[i];
        break;
    }
}
// Find the textareas
const titleInput = parent.querySelector("#write-title-input");
const mainInput = parent.querySelector("#write-text-input");

// Set their values to the loaded story
titleInput.value = story.title;
mainInput.value = story.main;


//  <div class="title-container">
//         <label for="write-title-input">
//             <textarea id="write-title-input" placeholder="Title"></textarea>
//         </label>
//     </div>
//
//     <div class="maintext-container">
//         <label for="write-text-input">
//             <textarea id="write-text-input" placeholder="Your Story" rows="10" cols="50"></textarea>
//         </label>
//     </div>