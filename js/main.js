// ============== SLIDER =============
$(function () {
    $('.my-slick__inner').slick({
        arrows: true,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3500,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        // fade: true,
        // centerMode:true,
        // slidesToShow: 2,
        // slidesToScroll: 2,
        // speed: 900,
        // easing: 'ease', // animation
        // initialSlide:1,
        // draggable:false,
        // swipe:false, // swipe for mobiles
    });
});

// ============= SCROLL ================
$('a[href^="#"]').on('click', function () {
    let href = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 400,
    });
    return false;
});

// ============= BURGER ================
$(function () {
    let menu = $('.burger-menu');
    let button = $('.burger-menu__button');
    let list = $('.burger-menu__list');

    button.on('click', () => {
        toggleMenu();
    });

    list.on('click', () => toggleMenu());

    function toggleMenu() {
        menu.toggleClass('burger-active');

        if(menu.hasClass('burger-active')){
            $('body').css('overflow', 'hidden');
        }else{
            $('body').css('overflow', 'visible');
        }
    }
});

// ============== BUTTON-UP ==============
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

// =====================================