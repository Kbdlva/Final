$(document).ready(function () {
    $('.header_burger').click(function (event) {
        $('.header_burger').toggleClass('active');
        $('.navbar').toggleClass('active');
        $('body').toggleClass('lock');


    });
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
