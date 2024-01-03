const audio = document.querySelector('audio');
const body = document.body;
const images = document.querySelectorAll('.image img');
let currentImageIndex = 0;

audio.addEventListener('play', () => {
  body.classList.add('play-music');
  startImageSlider();
});

audio.addEventListener('pause', () => {
  body.classList.remove('play-music');
  stopImageSlider();
});

function startImageSlider() {
  imageSliderInterval = setInterval(() => {
    images[currentImageIndex].classList.remove('visible');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add('visible');
  }, 3000); // Adjust the interval (in milliseconds) as needed
}

function stopImageSlider() {
  clearInterval(imageSliderInterval);
}

// Initial setup
images[currentImageIndex].classList.add('visible');
