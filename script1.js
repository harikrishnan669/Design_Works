const designPosts = [
    {
        title: "ARDUIQUIZ",
        content: "Arduino exploration with their captivating ArduiQuiz via Instagram polls.",
        image:'./my images/arduiquiz.jpg'
    },
    {
        title: "WOMENS DAY",
        content: "Women are considered the loveliest embodiment of talent in the world. They embody a magnificent fusion of qualities capable of making a profound impact.",
        image: './my images/Photo from Harikrishnan R.jpg'
    },
    {
        title: "BLOG",
        content: " Exciting opportunity for bloggers. Let your creativity shine as you envision the possibilities, challenges, and ethical considerations of a future where robots replace humans in the workforce.",
        image: './my images/blog.jpg'
    },
    {
        title: "PHOTOSHOP",
        content: "Tour of Design Tools🎨🖌️, starting with its debut episode focusing on Adobe Photoshop",
        image: "./my images/photoshop.jpg"
    },
    {
        title: "GITHUB",
        content:"GitHub is an essential tool in every budding programmer’s toolkit.",
        image:"./my images/github.jpg"
    },
    {
        title: "ROBOTIC ARM BUILDING",
        content:"Hands on workshop on Robotic Arm Bulding",
        image:"./my images/rab.png"
    }


];

let currentPostIndex = 0;
const postsPerLoad = 3;


function loadPosts() {
    const designContainer = document.getElementById("design-container");
    for (let i = currentPostIndex; i < currentPostIndex + postsPerLoad && i < designPosts.length; i++) {
        const post = designPosts[i];
        const postDiv = document.createElement("div");
        postDiv.className = "design-post";

        postDiv.innerHTML = `
            <h3>${post.title}</h3>
            <img src="${post.image}" alt="${post.title}" class="post-image">
            <p class="post-content">${post.content.slice(0, 100)}...</p>
            <button class="read-more-btn">Read More</button>
            <p class="full-content" style="display: none;">${post.content}</p>
            <button class="read-less-btn" style="display: none;">Read Less</button>
        `;

        designContainer.appendChild(postDiv);
    }
    currentPostIndex += postsPerLoad;

    // Toggle button visibility
    document.getElementById("load-more").style.display =
        currentPostIndex < designPosts.length ? "block" : "none";
    document.getElementById("load-less").style.display =
        currentPostIndex > postsPerLoad ? "block" : "none";
}


function loadLessPosts() {
    const designContainer = document.getElementById("design-container");
    designContainer.innerHTML = "";
    currentPostIndex = 0;
    loadPosts();

    // Toggle button visibility
    document.getElementById("load-less").style.display = "none";
}

// Event listeners for buttons
document.getElementById("load-more").addEventListener("click", loadPosts);
document.getElementById("load-less").addEventListener("click", loadLessPosts);

// Event delegation for Read More / Read Less buttons
document.getElementById("design-container").addEventListener("click", (event) => {
    if (event.target.classList.contains("read-more-btn")) {
        const postContent = event.target.previousElementSibling;
        const fullContent = event.target.nextElementSibling;
        const readLessBtn = fullContent.nextElementSibling;

        postContent.style.display = "none";
        fullContent.style.display = "block";
        event.target.style.display = "none";
        readLessBtn.style.display = "inline-block";
    }

    if (event.target.classList.contains("read-less-btn")) {
        const fullContent = event.target.previousElementSibling;
        const postContent = fullContent.previousElementSibling;
        const readMoreBtn = postContent.nextElementSibling;

        fullContent.style.display = "none";
        postContent.style.display = "block";
        readMoreBtn.style.display = "inline-block";
        event.target.style.display = "none";
    }
});

// Load initial posts
loadPosts();
