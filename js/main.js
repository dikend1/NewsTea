let parent = document.getElementById("main-center");

let stories = JSON.parse(localStorage.getItem("stories"));


for (let i = 0; i < stories.length; i++) {
    let story = document.createElement("article");
    story.id = stories[i].id;
    story.className = "news-card";
    let title = document.createElement("h2");
    title.innerText = stories[i].title;
    title.className = "news-title";
    let text = document.createElement("p");
    text.innerText = stories[i].main;
    text.className = "news-text";
    let date = document.createElement("div");
    date.className = "news-meta";
    date.innerText = stories[i].date;
    story.appendChild(title);
    story.appendChild(text);
    story.appendChild(date);
    parent.appendChild(story);
}


// <article className="news-card">
//     <h2 className="news-title">
//         Kazakhstan Launches New Satellite Made Entirely of Recycled Laptops from 2008.
//     </h2>
//     <p className="news-text">
//         October 23rd 2025 Kazakhstan's first satellite has been launched.
//         The satellite was made entirely from laptops of recycled materials.
//         The satellite is named...
//     </p>
//     <div className="news-meta">
//         65 min read
//     </div>
// </article>