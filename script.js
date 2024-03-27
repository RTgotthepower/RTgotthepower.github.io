// You can add JavaScript functionality here
// For example, to create a slideshow in the gallery section:
const images = document.querySelectorAll('.gallery img');
let current = 0;

function nextSlide() {
    images[current].style.display = 'none';
    current = (current + 1) % images.length;
    images[current].style.display = 'block';
}

setInterval(nextSlide, 3000); // Change image every 3 seconds
