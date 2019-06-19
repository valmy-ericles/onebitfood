export default {
  speed: 500,
  slidesToShow: 5,
  slidesToSroll: 4,
  initialSlide: 0,
  dots: false,
  infinite: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToSroll: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToSroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToSroll: 1
      }
    }
  ]
};
