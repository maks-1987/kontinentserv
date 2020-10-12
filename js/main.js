// ============== SLIDER =============
$(function () {
    $('.my-slick__inner').slick({
        arrows: true,
        dots: true,
        // fade: true,
        infinite: true,
        // variableWidth: true,
        // adaptiveHeight:true,
        // centerMode:true,
        // slidesToShow: 2,
        // slidesToScroll: 2,
        speed: 900,
        easing: 'ease', // animation
        // initialSlide:1,
        // autoplay: true,
        // autoplaySpeed: 3500,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        // draggable:false,
        // swipe:false, // swipe for mobiles


    });
});

// ============== BUTTON-UP ==============
$(function () {
    var btn = $('#button');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 700) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });
})

// ============= BURGER ================
$('.menu a').click(function () {
    $('.trigger').toggle();
    $('.menu').toggleClass('round');
    $('.close').toggle();
    $('.drop-menu').toggleClass('down');
    $('body').toggleClass('lock');
});

// ============= SCROLL ================
$('a[href^="#"').on('click', function () {
    let href = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 400,
    });
    return false;
});