let parent = document.getElementById("mainbody");

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

let counter = 0;

inputComment.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && inputComment.value.trim() !== "") {
        let comment = document.createElement("div");
        comment.className = "comm";

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

        let commentText = document.createElement("span");
        commentText.innerText = inputComment.value;

        let likeComm = document.createElement("div");
        likeComm.className = "like-comm";

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

        likeComm.appendChild(likeDiv);

        comment.appendChild(userDiv);
        comment.appendChild(commentText);
        comment.appendChild(likeComm);

        commentContent.appendChild(comment);
        counter++;
        document.getElementById("comm-count").innerText = counter;
        inputComment.value = "";
    }
});