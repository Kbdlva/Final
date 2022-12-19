$(document).ready(function () {
    $('.header_burger').click(function (event) {
        $('.header_burger').toggleClass('active');
        $('.navbar').toggleClass('active');
        $('body').toggleClass('lock');


    });
});

$(document).ready(function () {
    $('#call_btn').click(function (event) {
        console.log($("#mobile_code").val().length)


        if ($("#mobile_code").val() == '') {
            $('.popup').show().delay(2000).fadeOut();
            $('#msg').text("Пожулайста, заполните поле")
            console.log($("#mobile_code").val())
        }

        if ($("#mobile_code").val().length < 11) {
            $('#msg').text("Слишком короткое значение")
            $('.popup').show().delay(2000).fadeOut();
        }

        else{
            $('.sentMSG').fadeIn();
            // $('body').css('overflow','hidden')
            jQuery(document).ready(function() {
                $('input').val('');
              });
        }
    });
});

$(document).ready(function () {
    $('#cross').click(function (event) {
        $('.sentMSG').fadeOut();
        // $('body').css('overflow','auto')
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
