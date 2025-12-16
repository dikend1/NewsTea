const parent = document.getElementById('reading-card-container');
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date();
let month = months[d.getMonth()];
let day = d.getDate();

function openOnClick() {
    document.getElementById('input-description').type = "hidden";
    document.getElementById('button-description').style.display = "block";
    document.getElementById(
        "overlay"
    ).style.display = "block";
    document.getElementById(
        "popup"
    ).style.display = "block";
}

function openDescription(){
    document.getElementById('input-description').type = "text";
    document.getElementById('button-description').style.display = "none";
}

function closeOnClick() {
    document.getElementById(
        "overlay"
    ).style.display = "none";
    document.getElementById('input-title')
        .value = "";
    document.getElementById('input-description')
        .value="";
    document.getElementById(
        "popup"
    ).style.display = "none";
}

function createLibrary() {
    let inputTitle = document.getElementById("input-title").value;
    if(inputTitle === ""){
        alert("Please enter a title!");
        return;
    }
    let inputDescription = document.getElementById("input-description").value;
    let refNode =parent.querySelector('.reading-card');
    let card = document.createElement("article");
    card.classList.add("reading-card");
    console.log('creating library');
    card.innerHTML =  `<div class="rc-header">
                    <div class="rc-author">
                    <img src="../imgs/IMG_4577.jpg" alt="Not found" class="rc-avatar"/>
                    <span class="rc-author-name">Maksatovdias</span>
                    </div>
                    </div>
                    <h3 class="rc-title"></h3>
                    <div class="rc-meta">
                    <span class="date"></span>
                     </div>`;
    card.querySelector('.rc-title').innerText = inputTitle;
    card.querySelector('.date').innerText = month + " " + day;
    parent.insertBefore(card, refNode);
    closeOnClick();
}