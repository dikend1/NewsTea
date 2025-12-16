const months = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

const d = new Date();
const month = months[d.getMonth()];
const day = d.getDate();


const overlay = document.getElementById("overlay");
const popup = document.getElementById("popup");
const titleInput = document.getElementById("input-title");
const descInput = document.getElementById("input-description");
const descBtn = document.getElementById("button-description");


function openOnClick() {
  overlay.style.display = "block";
  popup.style.display = "block";
  descInput.type = "hidden";
  descBtn.style.display = "block";
}


function openDescription() {
  descInput.type = "text";
  descBtn.style.display = "none";
}


function closeOnClick() {
  overlay.style.display = "none";
  popup.style.display = "none";
  titleInput.value = "";
  descInput.value = "";
  descInput.type = "hidden";
  descBtn.style.display = "block";
}


function createLibrary() {
  const title = titleInput.value.trim();

  if (title === "") {
    alert("Please enter a title");
    return;
  }

  const librarySection = document.querySelector(".library");
  const firstCard = librarySection.querySelector(".list-card");

  const card = document.createElement("article");
  card.className = "list-card";

  card.innerHTML = `
    <img src="../img/myself.JPG" class="avatar" />
    <div class="list-info">
      <span class="list-author">Dias Maksatov</span>
      <h2 class="list-title">${title}</h2>
      <p class="list-description" style="padding-bottom: 5px;">${descInput.value.trim()}</p>
      <span class="list-meta">${month} ${day} · 5 min read</span>
    </div>
  `;

  librarySection.insertBefore(card, firstCard);
  closeOnClick();
}
