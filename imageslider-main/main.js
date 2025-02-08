const images = [
    'images/v1.webp',
    'images/v2.webp',
    'images/v3.webp',
    'images/v4.webp',
    'images/v5.webp',
    'images/v6.webp'
];

let currentImage = 0;
const imageTag = document.getElementById("image");
const infoTag = document.getElementById("info");

function updateImage() {
    imageTag.src = images[currentImage];
    infoTag.innerHTML = (currentImage + 1) + " / " + images.length;
}

document.getElementById("next").addEventListener("click", () => {
    currentImage = (currentImage + 1) % images.length;
    updateImage();
});

document.getElementById("prev").addEventListener("click", () => {
    currentImage = (currentImage - 1 + images.length) % images.length;
    updateImage();
});