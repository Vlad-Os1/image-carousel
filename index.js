const buttons = document.querySelectorAll('[data-carousel-btn]');

buttons.forEach((button) =>
  button.addEventListener('click', () => {
    const offset = button.dataset.carouselBtn === 'next' ? 1 : -1;
    const slides = button.closest('.carousel').querySelector('.slides');

    let activeSlide = document.querySelector('.slide.active');
    let newSlide = [...slides.children].indexOf(activeSlide) + offset;
    if (newSlide >= slides.children.length) newSlide = 0;
    if (newSlide < 0) newSlide = slides.children.length - 1;

    slides.children[newSlide].classList.add('active');
    activeSlide.classList.remove('active');
  })
);

// Making images not draggable
const images = document.querySelectorAll('.slide img');
images.forEach((image) => (image.draggable = false));
