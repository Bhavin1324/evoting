const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav-menu');
//hamburger styling
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
});
document.querySelectorAll('.nav-item').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
}));

// carousal
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let counter = 0;
function reset() {
    slides.forEach(slide => {
        slide.style.opacity = '0';
    })
}
function slideShow() {
    reset();
    slides[0].style.opacity = "1";
    setInterval(() => {
        if (counter === slides.length - 1) { counter = -1; }
        rightBtn();
    }, 10000);
}
function leftBtn() {
    reset();
    slides[counter - 1].style.opacity = "1";
    counter--;
}
function rightBtn() {
    reset();
    slides[counter + 1].style.opacity = "1";
    counter++;
}
prevBtn.addEventListener('click', () => {
    if (counter === 0) { counter = slides.length; }
    leftBtn();
})
nextBtn.addEventListener('click', () => {
    if (counter === slides.length - 1) { counter = -1; }
    rightBtn();
})
slideShow();