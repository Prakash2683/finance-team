"use strict";

// Toggle Start

const hamburgerBtn = document.querySelectorAll('.hamburger-btn');
const navItems = document.getElementById('navItems');

hamburgerBtn.forEach((item) => {
    item.addEventListener('click', function toggleFun() {
        navItems.classList.toggle('visible');
    });
});

// Navbar Button

let navBarItems = document.querySelectorAll('.list-item');
let aboutArea = document.querySelector('.banner-slider');

navBarItems.forEach((items) => {
    items.addEventListener('click', function () {
        navItems.classList.remove('visible');
    })
    items.addEventListener('click', ()=>{
        console.log(aboutArea.getBoundingClientRect());
     })
});



// Page Navigation

navBarItems.forEach((items) => {
    items.addEventListener('click', function (e) {
        const id = items.getAttribute('href');
        console.log(id, e.target);
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    });
});


// Slider Start

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

document.querySelector('.prev-btn').addEventListener('click', () => {
    slideIndex--;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    updateSlide();
});

document.querySelector('.next-btn').addEventListener('click', () => {
    slideIndex++;
    if (slideIndex >= slides.length) slideIndex = 0;
    updateSlide();
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        slideIndex = index;
        updateSlide();
    });
});

function updateSlide() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - slideIndex) * 100}%)`;
    });
    dots.forEach((dot, index) => {
        dot.classList.remove('in');
        if (index === slideIndex) dot.classList.add('in');
    });
}

updateSlide();

// Auto-slide
setInterval(() => {
    slideIndex++;
    if (slideIndex >= slides.length) slideIndex = 0;
    updateSlide();
}, 2500);

// DOM Traversing

/* let h3 = document.querySelector('h3');

console.log(h3.parentElement);
console.log(h3.parentNode);

console.log(h3);


console.log(h3.children);
console.log(h3.childNodes);

console.log(h3.closest('h3').style.backgroundColor='red'); */
