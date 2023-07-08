$(".ab").click(function (){
    $(".searchbox").toggleClass("searchboxani")
})
// banner part start
$(".banner-slider").slick({
    nextArrow:'<i class="fa-solid fa-angle-right next"></i>',
    prevArrow:'<i class="fa-solid fa-angle-left prev"></i>',
})




// banner part end

// capital -paret start

$(".capital-slider").slick({
    slidesToShow: 5,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 1000,
})

// capital -paret start


// checkout -paret start

$(".checkout-slider").slick({
    slidesToShow: 4,
    nextArrow:'<i class="fa-solid fa-angle-right next2"></i>',
    prevArrow:'<i class="fa-solid fa-angle-left prev2"></i>',
})
// checkout -paret end
// testimonial-part start

$(".testimonial-slider").slick({
    slidesToShow: 3,
    arrows: false,
})
// testimonial-part end

// trusted-part start

$('.js-tilt').tilt({
    maxTilt:        5,
 });
// trusted-part end
// service-part start

$('.js-tilt').tilt({
    maxTilt:        5,
 });

// service-part end


$('.counter').counterUp({
    delay: 10,
    time: 1000
});