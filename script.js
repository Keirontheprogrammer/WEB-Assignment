const heroSection = document.querySelector('.hero');

const images = [
  "https://mubas.ac.mw/images/slider/slide1.jpg",
  "https://mubas.ac.mw/images/slider/slide2.jpg",
  "https://mubas.ac.mw/images/slider/slide3.jpg"
];

let currentIndex = 0;

setInterval(() => {
  currentIndex = (currentIndex + 2) % images.length;
  heroSection.style.backgroundImage = `url(${images[currentIndex]})`;
}, 3000); // 5 seconds
