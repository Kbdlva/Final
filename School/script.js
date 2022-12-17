$(document).ready(function(){
    $('.header_burger').click(function(event){
        $('.header_burger').toggleClass('active');
        $('.navbar').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function () {
    $('.btn').click(function (event) {

        if ($("#name").val() != '' && $("#phone").val() != '') {
            $('.form_field').toggleClass('active');
        }
        else {
            if ($("#name").val() == '' || $("#phone").val() == '') {
                $(".message").show()
            }
        }
    });
});
