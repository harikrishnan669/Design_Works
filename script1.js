const designPosts = [
    { image: "./my images/prevent.png" },
    { image: "./my images/new.png" },
    { image: "./my images/website.png" },
    { image: "./my images/arduiquiz.jpg" },
    { image: "./my images/Photo from Harikrishnan R.jpg" },
    { image: "./my images/blog.jpg" },
    { image: "./my images/photoshop.jpg" },
    { image: "./my images/github.jpg" },
    { image: "./my images/rab.png" },
    { image: "./my images/leadership.jpg" },
    { image: "./my images/ros.jpg" },
    { image: "./my images/cv.jpg" },
    { image: "./my images/sps.jpg" }
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
            <img src="${post.image}" alt="Design Image" class="post-image" onclick="openLightbox('${post.image}')">
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
    document.getElementById("load-less").style.display = "none";
}


function openLightbox(imageSrc) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    lightbox.style.display = "flex";
    lightboxImg.src = imageSrc;
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}


document.getElementById("load-more").addEventListener("click", loadPosts);
document.getElementById("load-less").addEventListener("click", loadLessPosts);


loadPosts();
