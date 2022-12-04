//animation boxes

const boxes = document.querySelectorAll('.box');
window.addEventListener('scroll', checkBoxes);

function checkBoxes(){
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottom){
            box.classList.add('show');
        }else{
            box.classList.remove('show');
        }
    })
}


//scroll back to top 

var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

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
window.addEventListener('scroll', function(){
    bg.style.backgroundSize = 100 - +window.pageYOffset/700 + '%';
    bg.style.opacity = 1 - +window.pageYOffset/700 + '';
})

//whatsapp 
  $('#myDiv').floatingWhatsApp({
    phone: '5491133359850',
    popupMessage: 'Hello, how can we help you?',
    message: "I'd like to order a pizza",
    showPopup: true,
    showOnIE: false,
    headerTitle: 'Welcome!',
    headerColor: 'crimson',
    backgroundColor: 'crimson',
    buttonImage: '<img src="burger.svg" />'
});






