$(function (){      
      $('.multiple-items').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            // autoplay: true,
            autoPlay:false,
            autoplaySpeed: 2000,
            dots:true,
            centerMode:true,
            centerPadding:'0',
            nextArrow: $('.next-arrow'),
            prevArrow: $('.prev-arrow'),
     });
});