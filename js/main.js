$(function () {
    $('.my-slick__inner').slick({
        arrows: true,
        // dots: true,
        infinite: true,
        // adaptiveHeight:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 900,
        easing: 'ease', // animation
        // initialSlide:1,
        autoplay: true,
        autoplaySpeed: 3500,
        pauseOnFocus:true,
        pauseOnHover:true,
        pauseOnDotsHover:true,
        // draggable:false,
        // swipe:false, // swipe for mobiles


    });
});