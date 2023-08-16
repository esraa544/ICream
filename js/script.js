////Slides
jQuery('.card-slider1').slick({
  slidesToShow: 3,
  autoplay: false,
  slidesToScroll: 1,
  dots: false,
  responsive:[
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

jQuery('.card-slider2').slick({
  slidesToShow: 1,
  autoplay: false,
  slidesToScroll: 1,
  dots: true,
  responsive:[
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});