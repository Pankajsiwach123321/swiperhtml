const mySwiper = new Swiper('.swiper-container', {
    effect: 'flip',
    navigation: "true",
    pagination: "true",
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


});