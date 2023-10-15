(function($) {
  "use strict";
 
  // preloader
  $(window).on("load", function (){
    $('#prealoder').fadeOut(500);
  });


  // sticky nav
  $(window).scroll(function(){
    if($(this).scrollTop()>200){
        $('.skicky-header').addClass("sticky")   
    }
    else{
        $('.skicky-header').removeClass("sticky")
    }
  });
  // for color
  $(window).scroll(function(){
    if($(this).scrollTop()>5500){
        $('.skicky-header').addClass("color")   
    }
    else{
        $('.skicky-header').removeClass("color")
    }
  });
 
  // scroll-top top 
  var btn = $('.scroll-up'); 
  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('scrolltop');
    } else {
      btn.removeClass('scrolltop');
    }
  }); 
  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });
  

  


  // Mobile nenu
  $('.humg-btn').click(function(){
    $('.humg-btn').toggleClass('humgbMenu')
  });
  $('.humg-btn').click(function(){
    $('.mobile-menu').toggleClass('menuActivve')
  }); 


  // mainSlider
  function mainSlider() {
    var BasicSlider = $(".slider-active");
    BasicSlider.on("init", function(e, slick) {
      var $firstAnimatingElements = $(".single-slider:first-child").find(
        "[data-animation]"
      );
      doAnimations($firstAnimatingElements);
    });
    BasicSlider.on("beforeChange", function(e, slick, currentSlide, nextSlide) {
      var $animatingElements = $(
        '.single-slider[data-slick-index="' + nextSlide + '"]'
      ).find("[data-animation]");
      doAnimations($animatingElements);
    });
    BasicSlider.slick({
      autoplay: false,
      autoplaySpeed: 10000,
      dots: true,
      fade: true,
      arrows: false, 
      responsive: [
        { breakpoint: 767, settings: { dots: false, arrows: false } }
      ]
    });

    function doAnimations(elements) {
      var animationEndEvents =
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
      elements.each(function() {
        var $this = $(this);
        var $animationDelay = $this.data("delay");
        var $animationType = "animated " + $this.data("animation");
        $this.css({
          "animation-delay": $animationDelay,
          "-webkit-animation-delay": $animationDelay
        });
        $this.addClass($animationType).one(animationEndEvents, function() {
          $this.removeClass($animationType);
        });
      });
    }
  }
  mainSlider();

  // owlCarousel
  $(".music-slider").owlCarousel({
    loop: true,
    margin: 30,
    items: 5,  
    autoplay:true,
    autoplaySpeed: 1500,
    center: true,
    responsive: {
      0: {
        items: 2,
        center: false
      },
      767: {
        items: 3
      },
      992: {
        items: 5
      }
    }
  });
 
  /* magnificPopup video view */
  $(".mfp-play").magnificPopup({
    type: "iframe"
  });

  // counter
  $('.counter').counterUp({
    delay: 50,
    time: 2000
  });

  // isotop
  $(".grid").imagesLoaded(function() {
    // init Isotope
    var $grid = $(".grid").isotope({
      itemSelector: ".grid-item",
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: ".grid-item"
      }
    });

    // filter items on button click
    $(".portfolio-menu").on("click", "button", function() {
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({ filter: filterValue });
    });

    //for menu active class
    $(".portfolio-menu button").on("click", function(event) {
      $(this)
        .siblings(".active")
        .removeClass("active");
      $(this).addClass("active");
      event.preventDefault();
    });
  });
 
  //  AOS animation
  AOS.init({ 
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 20, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });
 





})(jQuery);
