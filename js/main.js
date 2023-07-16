$(function () {

    $(".rateYo").rateYo({
        rating: 4.5,
        starWidth: "36.228px",
        normalFill: "#E2E6E9",
        ratedFill: "#FFB648",
        halfStar: true,
        spacing: "4px",
    });
    var mixer = mixitup('.blog__list');
    $('.reviews__slider').slick({
        arrows: false,
        slidesToShow: 2,
        draggable: false,
        waitForAnimate: false,
        dots: true,
        appendDots: $('.reviews__dots'),
    })
    $('.reviews__slider-prev').on('click', function (e) {
        e.preventDefault()
        $('.reviews__slider').slick('slickPrev')
    })
    $('.reviews__slider-next').on('click', function (e) {
        e.preventDefault()
        $('.reviews__slider').slick('slickNext')
    })


    $('.questions__accordeon-link').on('click', function (e) {
        e.preventDefault()
        if ($(this).hasClass('questions__accordeon-link--active')) {
            $(this).removeClass('questions__accordeon-link--active')
            $(this).children('.accordeon__text').slideUp()
        } else {
            $('.questions__accordeon-link').removeClass('questions__accordeon-link--active')
            $('.accordeon__text').slideUp()
            $(this).addClass('questions__accordeon-link--active')
            $(this).children('.accordeon__text').slideDown()
        }
    })

    $(".header__nav-list, .header__btn-button, .footer__nav-list, .contact-us__button").on("click", "a", function (e) {
        e.preventDefault()
        var id = $(this).attr('href'),
            top = $(id).offset().top
        $('body,html').animate({ scrollTop: top }, 800)
    })

    
    setInterval(() => {
        if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
            $('.burger').addClass('burger--follow')
        } else {
            $('.burger').removeClass('burger--follow')
        }
    }, 0);
    $('.burger, .overlay').on('click', function (e) {
        e.preventDefault()
        $('.header__top').toggleClass('header__top--open')
        $('.overlay').toggleClass('overlay--show')
    })



})




function init() {
    let map = new ymaps.Map('map', {
        center: [40.720798450598984, -74.00263538378908],
        zoom: 12
    });
    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('fullscreenControl');
    map.controls.remove('geolocationControl');
    map.controls.remove('zoomControl');
}
ymaps.ready(init);