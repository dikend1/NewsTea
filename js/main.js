let parent = document.getElementById("main-center");

let stories = JSON.parse(localStorage.getItem("stories"));


for (let i = 0; i < stories.length; i++) {
    let href = document.createElement("a");
    href.href = "../html/Card.html?id=" + stories[i].id;
    href.style = "text-decoration: none; color: black;";
    let story = document.createElement("article");
    story.className = "news-card";
    let profile = document.createElement("div");
    profile.className = "news-profile";
    let profileImg = document.createElement("img");
    profileImg.src = "../img/myself.JPG";
    let profileText = document.createElement("p");
    profileText.innerText = stories[i].author;
    profile.appendChild(profileImg);
    profile.appendChild(profileText);
    let title = document.createElement("h2");
    title.innerText = stories[i].title;
    title.className = "news-title";
    let text = document.createElement("p");
    text.innerText = stories[i].main;
    text.className = "news-text";
    let date = document.createElement("div");
    date.className = "news-meta";
    date.innerText = stories[i].date;
    story.appendChild(profile);
    story.appendChild(title);
    story.appendChild(text);
    story.appendChild(date);
    href.appendChild(story);
    parent.appendChild(href);
}


// <article class="news-card">
//     <div class="news-profile">
//         <img src="../img/pfp.png" alt="not found"/>
//         <p class="news-author">Maksatov Dias</p>
//     </div>
//     <h2 class="news-title">
//         Kazakhstan Launches New Satellite Made Entirely of Recycled Laptops from 2008.
//     </h2>
//     <p class="news-text">
//         October 23rd 2025 Kazakhstan's first satellite has been launched.
//         The satellite was made entirely from laptops of recycled materials.
//         The satellite is named...
//     </p>
//     <div class="news-meta">
//         65 min read
//     </div>
// </article>