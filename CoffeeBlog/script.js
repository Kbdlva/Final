

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

checkLogin();
function checkLogin() {
    let log = document.querySelector('#log');
    if (getCookie('number') == '') {
        log.innerHTML = 'Log In';
        log.addEventListener('click', () => {
            window.location.href = "../login/index.html";
        });
    }
    else {
        log.innerHTML = 'Log Out';
        log.addEventListener('click', () => {
            deleteCookie('number');
            location.reload();
        });
    }
}


//Cookie handler
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function deleteCookie(cname) {
    let expires = "expires=Thu, 01 Jan 1970 00:00:00 UTC";
    document.cookie = cname + "=" + ";" + expires + ";path=/";
}
function checkCookie(cname) {
    let username = getCookie(cname);
    if (username != "") {
        alert("Welcome again " + username);
    } else {
        username = prompt("Please enter your name:", "");
        if (username != "" && username != null) {
            setCookie("username", username, 365);
        }
    }
}









