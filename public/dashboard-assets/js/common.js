$(document).ready(function () {

    $('.detailleftdiv .showdetail').click(function () {
        $('.detailleftdiv .ssrdiv').slideToggle()        
    });

    $('.markupdiv .inputbox').click(function () {
        var obj = $(this);
        var divflex = $('.markupdiv .divflex');
        if ($(divflex).hide()) {
            obj.find(divflex).show()            
        }
        else {
            obj.find(divflex).hide()
        }
    });
   

    $('.morebtn .plus').click(function () {
        $(this).toggle();
        $('.toggeldiv').toggle()
        $('.morebtn .minus').toggle()
    });
    $('.morebtn .minus').click(function () {
        $(this).toggle();
        $('.toggeldiv').toggle()
        $('.morebtn .plus').toggle()
    });

    var swiper = new Swiper(".flightSwiper", {
        autoplay: true,
        loop: true,
        effect: "fade",
        speed: 1500,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });

    

});

