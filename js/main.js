$(document).ready(function(){
    var owl = $('.owl-carousel');

    owl.owlCarousel({
      loop:true,
      margin:10,
      nav:false,
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
      var currentItemIndex = event.page.index;
      var actualIndex = currentItemIndex % items; // Correcting the index to cycle back to 0 after reaching the last item
      var item = actualIndex + 1 || 1;
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
disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
initClassName: 'aos-init', // class applied after initialization
animatedClassName: 'aos-animate', // class applied on animation
useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
disableMutationObserver: false, // disables automatic mutations' detections (advanced)
debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
offset: 120, // offset (in px) from the original trigger point
delay: 0, // values from 0 to 3000, with step 50ms
duration: 800, // values from 0 to 3000, with step 50ms
easing: 'ease', // default easing for AOS animations
once: false, // whether animation should happen only once - while scrolling down
mirror: false, // whether elements should animate out while scrolling past them
anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
