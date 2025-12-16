let parent = document.getElementById("mainbody-card");

let stories = JSON.parse(localStorage.getItem("stories")) || [];

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

let story;


for (let i = 0; i < stories.length; i++) {
    if (stories[i].id === id) {
        story = stories[i];
        break;
    }
}

parent.querySelector(".card-author").innerHTML = `<img src="../img/pfp.png" alt="Profile" class="avatar"/>
                                                            ${story.author}
                                                            <button id = "follow-button"> Follow </button>`
parent.querySelector(".card-title").innerText = story.title;
parent.querySelector(".card-content").innerText = story.main;


document.addEventListener("click", function (e) {
    if (e.target.closest(".like-button")) {
        const likeBtn = e.target.closest(".like-button");
        const countP = likeBtn.nextElementSibling;
        let count = parseInt(countP.innerText);

        if (!likeBtn.classList.contains("liked")) {
            count++;
            likeBtn.classList.add("liked");
        } else {
            count--;
            likeBtn.classList.remove("liked");
        }

        countP.innerText = count;
    }
});


const inputComment = document.getElementById("comment-input");
const commentContent = document.getElementById("comms-content");

inputComment.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && inputComment.value.trim() !== "") {
        // Create main comment container
        let comment = document.createElement("div");
        comment.className = "comm";

        // Create user info
        let userDiv = document.createElement("div");
        userDiv.style = "display: flex;\n" +
            "    flex-direction: row;\n" +
            "    align-items: center;\n" +
            "    gap: 1rem;\n" +
            "    padding: 16px 0;\n";
        let img = document.createElement("img");
        img.src = "../img/pfp.png";
        img.alt = "Profile";
        img.className = "avatar";
        userDiv.appendChild(img);
        let username = document.createElement("span");
        username.innerText = "myself";
        userDiv.appendChild(username);

        // Create comment text
        let commentText = document.createElement("span");
        commentText.innerText = inputComment.value;

        let likeComm = document.createElement("div");
        likeComm.className = "like-comm";

        // Like button
        let likeDiv = document.createElement("div");
        likeDiv.className = "inside-like-comm";
        let likeBtn = document.createElement("button");
        likeBtn.className = "like-button";
        likeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6" id="small-svg">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                 d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"/>
                         </svg>`;
        let likeCount = document.createElement("p");
        likeCount.innerText = "0";
        likeDiv.appendChild(likeBtn);
        likeDiv.appendChild(likeCount);

        // Append like/dislike to likeComm
        likeComm.appendChild(likeDiv);

        // Append all
        comment.appendChild(userDiv);
        comment.appendChild(commentText);
        comment.appendChild(likeComm);

        // Add to container
        commentContent.appendChild(comment);

        // Clear input
        inputComment.value = "";
    }
});


//  <div class="comms-content">
//
//                 <div class="comm">
//                     <div style="display: flex; flex-direction: row; align-items: center; gap: 1rem;">
//                         <img src="../img/pfp.png" alt="Profile" class="avatar"/>
//                         some_new_user
//                     </div>
//                     <span>
//                         Some comment test
//                     </span>
//                     <div class="like-comm">
//                         <div class="inside-like-comm">
//                             <button class="like-button" onclick="incrementLikeComment()">
//                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
//                                      stroke="currentColor" class="size-6" id="small-svg">
//                                     <path stroke-linecap="round" stroke-linejoin="round"
//                                           d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"/>
//                                 </svg>
//                             </button>
//                             <p id="like-count-comm">0</p>
//                         </div>
//                         <div class="inside-like-comm">
//                             <button class="like-button" onclick="incrementLikeComment()">
//                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
//                                      stroke="currentColor" class="size-6" id="small-svg-flip">
//                                     <path stroke-linecap="round" stroke-linejoin="round"
//                                           d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"/>
//                                 </svg>
//                             </button>
//                             <p id="dislikelike-count-comm">0</p>
//                         </div>
//
//                     </div>
//                 </div>

// <div class="mainbody-card">
//         <div class="card-title">
//             This is the title of the article
//         </div>
//
//         <div class="card-author">
//
//             <img src="../img/pfp.png" alt="Profile" class="avatar"/>
//             Reyanshicodes
//             <button id="follow-button"> Follow</button>
//         </div>
//
//         <div class="card-info">
//             <div class="like-comm">
//                 <div class="inside-like-comm">
//                     <button class="like-button" onclick="incrementLike()">
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
//                              stroke="currentColor" class="size-6" id="small-svg">
//                             <path stroke-linecap="round" stroke-linejoin="round"
//                                   d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"/>
//                         </svg>
//                     </button>
//                     <p id="like-count">88</p>
//                 </div>
//
//                 <div class="inside-like-comm">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 32 32"
//                          version="1.1"
//                          id="small-svg">
//                         <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
//                             <g id="Icon-Set" transform="translate(-204.000000, -255.000000)" fill="#000000">
//                                 <path d="M228,267 C226.896,267 226,267.896 226,269 C226,270.104 226.896,271 228,271 C229.104,271 230,270.104 230,269 C230,267.896 229.104,267 228,267 L228,267 Z M220,281 C218.832,281 217.704,280.864 216.62,280.633 L211.912,283.463 L211.975,278.824 C208.366,276.654 206,273.066 206,269 C206,262.373 212.268,257 220,257 C227.732,257 234,262.373 234,269 C234,275.628 227.732,281 220,281 L220,281 Z M220,255 C211.164,255 204,261.269 204,269 C204,273.419 206.345,277.354 210,279.919 L210,287 L217.009,282.747 C217.979,282.907 218.977,283 220,283 C228.836,283 236,276.732 236,269 C236,261.269 228.836,255 220,255 L220,255 Z M212,267 C210.896,267 210,267.896 210,269 C210,270.104 210.896,271 212,271 C213.104,271 214,270.104 214,269 C214,267.896 213.104,267 212,267 L212,267 Z M220,267 C218.896,267 218,267.896 218,269 C218,270.104 218.896,271 220,271 C221.104,271 222,270.104 222,269 C222,267.896 221.104,267 220,267 L220,267 Z"
//                                       id="comment-3">
//                                 </path>
//                             </g>
//                         </g>
//                     </svg>
//                     <p id="comm-count">1</p>
//                 </div>
//             </div>
//             <div>
//
//             </div>
//         </div>
//
//         <div class="card-content">
//             <p>My article is open to everyone; non-member readers can click this link to read the full text.</p>
//             <p>Still writing your own utility classes?</p>
//             <p>You’re being left behind by Spring Boot!</p>
//         </div>
//
//         <div class="card-info">
//             info
//         </div>
//
//         <div class="card-author">
//             author
//         </div>
//
//
//     </div>