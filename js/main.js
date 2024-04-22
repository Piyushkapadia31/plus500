$(document).ready(function(){
    var owl = $('.owl-carousel');

    owl.owlCarousel({
      loop:true,
      margin:10,
      nav: true,
      navText: ["1"],
      // dots:false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      },
      onInitialized: counter,
      onTranslated: counter 
    });
$('.custom-next').click(function() {
        $('.owl-carousel').trigger('next.owl.carousel');
        $('.custom-next').addClass('active'); 
        $('.custom-prev').removeClass('active'); 
    });

    $('.custom-prev').click(function() {
        $('.owl-carousel').trigger('prev.owl.carousel');
        $('.custom-prev').addClass('active'); 
        $('.custom-next').removeClass('active'); 
    });

    function counter(event) {
      var element = event.target; 
      var items = event.item.count;
      var item = event.page.index+1  || 1;
      $('.slide-counter').html(item + '.');
    }
  });

// Function to start counter animation when element comes into view
function startCounterAnimation(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        $('.stat-number').each(function () {
          var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
          $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
          }, {
            duration: 5000,
            step: function (func) {
              $(this).text(parseFloat(func).toFixed(size));
            }
          });
        });
        observer.unobserve(entry.target);
      }
    });
  }
  

  // Create an intersection observer
  var observer = new IntersectionObserver(startCounterAnimation, {
    threshold: 0.2 // Adjust the threshold as needed
  });
  
  // Target the section you want to observe
  var target = document.querySelector('.cfd');
  
  // Observe the target section
  if (target) {
    observer.observe(target);
  }

  // trade section
  $(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      dots:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      },
      onInitialized: counter,
      onTranslated: counter
    });
});

  gsap.registerPlugin(ScrollTrigger);

gsap.to(".trade-smarter-content-item", {
  yPercent: -100, 
  y: () => 1,
  ease: "none",
  scrollTrigger: {
    trigger: ".tools-slide",
    start: "top top",
    end: () => innerHeight * 10,
    scrub: true,
    pin: true,
    invalidateOnRefresh: true,
    anticipatePin: 2,
  },
});
   AOS.init();
AOS.init({
// Global settings:
disable: false, 
startEvent: 'DOMContentLoaded',
initClassName: 'aos-init', 
animatedClassName: 'aos-animate', 
useClassNames: false, 
disableMutationObserver: false, 
debounceDelay: 50, 
throttleDelay: 99, 


offset: 120, 
delay: 0, 
duration: 800, 
easing: 'ease', 
once: false, 
mirror: false, 
anchorPlacement: 'top-bottom', 

});
