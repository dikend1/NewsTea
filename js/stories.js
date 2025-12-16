let parent = document.getElementById("stories-section");

let stories = JSON.parse(localStorage.getItem("stories"));

let counter =0;


for (let i = 0; i < stories.length; i++) {
    if(stories[i].author !== "myself"){
        continue;
    }
    let href = document.createElement("a");
    href.href = "../html/Write.html?id=" + stories[i].id;
    href.style = "text-decoration: none; color: black;";
    let article = document.createElement("article");
    article.className = "stories-card";
    let info = document.createElement("div");
    info.className = "stories-info";
    let title = document.createElement("h2");
    title.className = "stories-title"
    title.innerText = stories[i].title;
    let date = document.createElement("div");
    date.className = "stories-meta"
    date.innerText = stories[i].date + " - " + stories[i].main.length;
    info.appendChild(title);
    info.appendChild(date);
    article.appendChild(info);
    href.appendChild(article);
    parent.appendChild(href);
    counter++;
    document.getElementById("counter").innerText = counter;
}

// <article class="stories-card">
//                 <div class="stories-info">
//                     <h2 class="stories-title">New Story</h2>
//                     <div class="stories-meta">
//                         Oct 12 · <span class="words">0</span>
//                     </div>
//                 </div>
//             </article>