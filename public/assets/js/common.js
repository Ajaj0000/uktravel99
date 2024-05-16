$(document).ready(function () {
    // bannerSwiper
    var swiper = new Swiper(".bannerSwiper", {
		slidesPerView: 1,
        autoplay: true,
        loop: true,
        // spaceBetween: 30,
        speed: 1500,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });
});

