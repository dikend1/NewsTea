let parent = document.getElementById("main-center");

let title = localStorage.getItem("stories")
parent.querySelector(".news-title").innerText = title;


function incrementLike(){

    let likeCount = document.getElementById("like-count");
    let number = likeCount.innerHTML;
    number++;
    likeCount.innerHTML = number;
    document.getElementById("like-count").id = "like-stop";

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