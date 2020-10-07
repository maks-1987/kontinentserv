$(function () {
    $('.my-slick__inner').slick({
        arrows: true,
        // dots: true,
        // fade: true,
        infinite: true,
        variableWidth: true,
        adaptiveHeight:true,
        slidesToShow: 2,
        slidesToScroll: 2,
        speed: 900,
        easing: 'ease', // animation
        initialSlide:1,
        autoplay: true,
        autoplaySpeed: 3500,
        pauseOnFocus:true,
        pauseOnHover:true,
        pauseOnDotsHover:true,
        // draggable:false,
        // swipe:false, // swipe for mobiles


    });
});