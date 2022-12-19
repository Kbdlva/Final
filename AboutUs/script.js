$(document).ready(function () {
  $('.header_burger').click(function (event) {
    $('.header_burger').toggleClass('active');
    $('.navbar').toggleClass('active');
    $('body').toggleClass('lock');
  });
});


//animation boxes

const boxes = document.querySelectorAll('.box');
window.addEventListener('scroll', checkBoxes);

function checkBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4;

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  })
}


//scroll back to top 

var mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//zoom back-img

const bg = document.querySelector(".m1");
window.addEventListener('scroll', function () {
  bg.style.backgroundSize = 100 - +window.pageYOffset / 700 + '%';
  bg.style.opacity = 1 - +window.pageYOffset / 700 + '';
})

// //whatsapp 
//   $('#myDiv').floatingWhatsApp({
//     phone: '5491133359850',
//     popupMessage: 'Hello, how can we help you?',
//     message: "I'd like to order a pizza",
//     showPopup: true,
//     showOnIE: false,
//     headerTitle: 'Welcome!',
//     headerColor: 'crimson',
//     backgroundColor: 'crimson',
//     buttonImage: '<img src="burger.svg" />'
// });

$(document).ready(function () {
  $('.btn').click(function (event) {

    if ($("#name").val() != '' && $("#phone").val() != '') {
      $('.footer').toggleClass('active');
      $(".div2").show()
    }
    else {

      if ($("#name").val() == '' || $("#phone").val() == '') {
        $('.msg').text("Вы заполнили нe все поля")
        $('.msg').show().delay(3000).fadeOut();
      }


      if ($("#name").val() == '' && $("#phone").val() == '') {
        $('.msg').text("Вы не заполнили ни одно поле")
        $('.msg').show().delay(3000).fadeOut();
      }


    }
  });
});




//whatsapp 
/*   $('#myDiv').floatingWhatsApp({
    phone: '5491133359850',
    popupMessage: 'Hello, how can we help you?',
    message: "I'd like to order a pizza",
    showPopup: true,
    showOnIE: false,
    headerTitle: 'Welcome!',
    headerColor: 'crimson',
    backgroundColor: 'crimson',
    buttonImage: '<img src="burger.svg" />'
}); */
deleteCookie('number');
checkCookie('number');
//Login cookie handler
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
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
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function deleteCookie(cname){
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

