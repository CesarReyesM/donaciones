const images = [
    "build/img/Genero.jpg",
    "build/img/Genero2.jpg",
    "build/img/header.jpg",
    "build/img/Genero3.jpg",
    "build/img/Genero4.jpg"
];


let currentIndex = 0;
const imageContainer = document.getElementById("imageContainer");
const imageElement = document.getElementById("image");

function changeImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    const imageUrl = images[currentIndex];
    imageElement.src = imageUrl;
}

setInterval(changeImage, 4000);