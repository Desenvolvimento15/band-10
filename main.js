
  $(document).ready(function(){
    $('.slick-track').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      adaptiveHeight: true
    });
  });


$(document).ready(function () {
  $(".slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
    rtl: true, // <-- isso faz os slides irem da direita para a esquerda
  });
});
