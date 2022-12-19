$(document).ready(function () {
    $('.header_burger').click(function (event) {
        $('.header_burger').toggleClass('active');
        $('.navbar').toggleClass('active');
        $('body').toggleClass('lock');


    });
});

$(document).ready(function() {
    console.log("readuy");
    $("#txt1").animate({"opacity": "1", "top":"0" },1000);
    $("#txt2").animate({"opacity": "1", "top":"0" },2000);

});


$(document).ready(function () {
    $('.price_btn').click(function (event) {

        if ($("#name").val() != '' && $("#phone").val() != '') {
            $('.price').toggleClass('active');
            console.log("works?")
        }
        else {
            if ($("#name").val() == '' || $("#phone").val() == '') {
                $(".message").show()
                console.log("fill it")
            }
        }

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