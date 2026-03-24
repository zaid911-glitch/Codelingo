// script.js

// Smooth scroll behavior
const smoothScroll = (target) => {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
};

// Scroll animations with Intersection Observer
const boxes = document.querySelectorAll('.box');

const options = {
    root: null,
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, options);

boxes.forEach(box => {
    observer.observe(box);
});

// Call to action (CTA) button functionality
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('click', () => {
    smoothScroll('#form-section');
});

// Form submission handling
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    console.log('Form submitted!', Object.fromEntries(formData));
});

// Parallax effects for the hero section
const parallax = () => {
    const heroSection = document.querySelector('.hero');
    const scrollPosition = window.scrollY;
    heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
};

window.addEventListener('scroll', parallax);