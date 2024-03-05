const slider = document.querySelector('.js-next');
const slides = slider.querySelectorAll('.js-next .slide');

const slideCount = slides.length;
let activeSlide = 0;

setInterval(() => {
    slides[activeSlide].classList.remove('-visible');
    activeSlide++;
    if (activeSlide === slideCount) {
      activeSlide = 0;
    }
    slides[activeSlide].classList.add('-visible');
  }, 5000);