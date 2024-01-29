/*
const accessKey = "4N50HZOUWuECZz8VEZ2zy8WpDRsglFvijYyH17FLB1c";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");

// Get references to selected image overlay elements
const selectedImageOverlay = document.getElementById("selected-image-overlay");
const selectedImage = document.getElementById("selected-image");
const closeSelectedImage = document.getElementById("close-selected-image");

let keyword = "";

async function searchImages(e) {
    e.preventDefault();
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=1&query=${keyword}&client_id=${accessKey}&per_page=9`;

    const response = await fetch(url);
    const data = await response.json();

    searchResult.innerHTML = ""; // Clear previous results

    const results = data.results;

    results.forEach((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;

        // Add click event to each image for selection
        image.addEventListener("click", () => {
            selectedImage.src = result.urls.regular;
            selectedImageOverlay.style.display = "flex"; // Show the overlay

            // Hide the body content while overlay is active
            document.body.style.overflow = "hidden";
        });

        searchResult.appendChild(image);
    });
}

searchForm.addEventListener("submit", searchImages);

// Close selected image overlay
closeSelectedImage.addEventListener("click", () => {
    selectedImageOverlay.style.display = "none"; // Hide the overlay
    document.body.style.overflow = "auto"; // Enable scrolling
});
*/


const accessKey = "4N50HZOUWuECZz8VEZ2zy8WpDRsglFvijYyH17FLB1c";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");

// Get references to selected image overlay elements
const selectedImageOverlay = document.getElementById("selected-image-overlay");
const selectedImage = document.getElementById("selected-image");
const closeSelectedImage = document.getElementById("close-selected-image");

let keyword = "";

async function searchImages(e) {
    e.preventDefault();
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=1&query=${keyword}&client_id=${accessKey}&per_page=9`;

    const response = await fetch(url);
    const data = await response.json();

    searchResult.innerHTML = ""; // Clear previous results

    const results = data.results;

    results.forEach((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;

        // Add click event to each image for selection
        image.addEventListener("click", () => {
            selectedImage.src = result.urls.regular;
            console.log(`${selectedImage.src}`);
            selectedImageOverlay.style.display = "flex"; // Show the overlay

            // Hide the body content while overlay is active
            document.body.style.overflow = "hidden";
        });

        searchResult.appendChild(image);
    });
}

searchForm.addEventListener("submit", searchImages);

// Close selected image overlay
closeSelectedImage.addEventListener("click", () => {
    selectedImageOverlay.style.display = "none"; // Hide the overlay
    document.body.style.overflow = "auto"; // Enable scrolling
});


