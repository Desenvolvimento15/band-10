
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

gsap.registerPlugin(ScrollTrigger);

const container = document.querySelector(".scroll-horizontal-content");
const sections = gsap.utils.toArray(".pad15");

// Calcula o scroll necessário
const totalScroll = container.scrollWidth - window.innerWidth;

gsap.to(container, {
  x: -totalScroll,
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal-scroll-wrapper",
    start: "top top",
    end: `+=${totalScroll}`,
    scrub: 1,
    pin: true,
    snap: 1 / (sections.length - 1),
  },
});

