const buttons = document.querySelectorAll('[data-carousel-btn]');

buttons.forEach((button) =>
  button.addEventListener('click', () => {
    const offset = button.dataset.carouselBtn === 'next' ? 1 : -1;
    const slides = button.closest('.carousel').querySelector('.slides');

    // console.log(slides.children);

    let activeSlide = document.querySelector('.slide.active');
    let newSlide = [...slides.children].indexOf(activeSlide) + offset;
    if (newSlide >= slides.children.length) newSlide = 0;
    if (newSlide < 0) newSlide = slides.children.length - 1;

    slides.children[newSlide].classList.add('active');
    activeSlide.classList.remove('active');
  })
);

const dotsContainer = document.querySelector('.pagination-dots');
const slidesContainer = document.querySelector('.slides');
const slides = [...slidesContainer.children];

dotsContainer.addDot = function (index) {
  const dot = document.createElement('input');
  dot.type = 'radio';
  dot.name = 'slide';
  dot.setAttribute('data-slide-index', index);
  dot.classList.add('dot');
  dotsContainer.appendChild(dot);

  dot.addEventListener('click', () => {
    let activeSlide = document.querySelector('.slide.active');
    let newSlideIndex = parseInt(dot.getAttribute('data-slide-index'));

    if (activeSlide != slides[newSlideIndex]) {
      activeSlide.classList.remove('active');
      slides[newSlideIndex].classList.add('active');
    }
  });
};

slides.forEach((slide, index) => {
  dotsContainer.addDot(index);
});

// Making images not draggable
const images = document.querySelectorAll('.slide img');
images.forEach((image) => (image.draggable = false));
