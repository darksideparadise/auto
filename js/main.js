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
    })
    $('.reviews__slider-prev').on('click', function(e) {
        e.preventDefault()
        $('.reviews__slider').slick('slickPrev')
    }) 
    $('.reviews__slider-next').on('click', function(e) {
        e.preventDefault()
        $('.reviews__slider').slick('slickNext')
    })


})   
