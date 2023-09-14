$(function() {
    $('ul.online__tabs-tab').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.info').find('div.online__cards').removeClass('active').eq($(this).index()).addClass('active');
    });
});





var swiper = new Swiper(".mySwiper", {
    slidesPerView:1,
    loop:true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    speed: 1500,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
