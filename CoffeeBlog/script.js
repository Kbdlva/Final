

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");
const popups = document.querySelectorAll(".popup-screen");
const opens = document.querySelectorAll(".open");
const closes = document.querySelectorAll(".closeBtn");


var sliderNav = function (manual) {
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    contents.forEach((content) => {
        content.classList.remove("active");
    });
    opens[manual].addEventListener('click', () => {
        popups[manual].classList.add('popup-screen-active');
    })
    closes[manual].addEventListener('click', () => {
        popups[manual].classList.remove('popup-screen-active');
    })
    closes[manual]
    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");

}
sliderNav(0);
btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        console.log(i);
        sliderNav(i);
    })
});

$(document).ready(function () {
    $('.header_burger').click(function (event) {
        $('.header_burger').toggleClass('active');
        $('.navbar').toggleClass('active');
        $('body').toggleClass('lock');

    });
});









