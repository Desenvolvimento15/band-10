
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
 const totalSections = sections.length;
 const containerWidth = 200 * totalSections;

 gsap.set(container, { width: `${containerWidth}vw` });

 gsap.to(container, {
   xPercent: -200 * (totalSections - 1),
   ease: "none",
   scrollTrigger: {
     trigger: ".horizontal-scroll-wrapper",
     pin: true,
     scrub: 1,
     snap: 1 / (totalSections - 1),
     end: () => "+=" + window.innerWidth * (totalSections - 1),
   },
 });