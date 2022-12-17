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
        }
    });
});

$(document).ready(function () {
    $('#cross').click(function (event) {
        $('.sentMSG').fadeOut();
        // $('body').css('overflow','auto')
    });
});


