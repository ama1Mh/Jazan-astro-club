(function ($) {
  "use strict";

  // Store logo state to prevent unnecessary DOM manipulation
  var logoChanged = false;

  // Define the onScroll function with error handling
  function onScroll() {
    var scrollPos = $(document).scrollTop();
    $('.scroll-to-section a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      
      // Check if element exists and is visible
      if (refElement.length && refElement.is(':visible')) {
        if (refElement.position().top <= scrollPos + 1 && 
            refElement.position().top + refElement.height() > scrollPos) {
          $('.scroll-to-section a').removeClass("active");
          currLink.addClass("active");
        } else {
          currLink.removeClass("active");
        }
      }
    });
  }

  // Header Type = Fixed
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var box = $('.header-text').height();
    var header = $('header').height();

    if (scroll >= box - header) {
      $("header").addClass("background-header");
      // Change logo when scrolled
      if (!logoChanged) {
        $(".logo img").attr("src", "assets/images/clogo.png");
        logoChanged = true;
      }
    } else {
      $("header").removeClass("background-header");
      // Revert logo when at top
      if (logoChanged) {
        $(".logo img").attr("src", "assets/images/wlogo.png");
        logoChanged = false;
      }
    }
    
    // Call onScroll function
    onScroll();
  });

  // Initialize with white logo
  $(".logo img").attr("src", "assets/images/wlogo.png");

  $('.loop').owlCarousel({
    center: true,
    items:1,
    loop:true,
    autoplay: true,
    nav: true,
    margin:0,
    responsive:{ 
      1200:{
        items:5
      },
      992:{
        items:3
      },
      760:{
        items:2
      }
    }
  });

  // Menu Dropdown Toggle
  if($('.menu-trigger').length){
    $(".menu-trigger").on('click', function() { 
      $(this).toggleClass('active');
      $('.header-area .nav').slideToggle(200);
    });
  }

  // Menu elevator animation with error handling
  $('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function(e) {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {
        var width = $(window).width();
        if(width < 991) {
          $('.menu-trigger').removeClass('active');
          $('.header-area .nav').slideUp(200);  
        }
        
        $('html, body').stop().animate({
          scrollTop: target.offset().top + 1
        }, 500, 'swing', function() {
          window.location.hash = this.hash;
        }.bind(this));
      }
    }
  });

  $(document).ready(function () {
    // Initialize scrollspy
    $(document).on("scroll", onScroll);
    
    // Activate first menu item by default
    $('.scroll-to-section a:first').addClass('active');
  });

  // Acc
  $(document).on("click", ".naccs .menu div", function() {
    var numberIndex = $(this).index();

    if (!$(this).is(".active")) {
      $(".naccs .menu div").removeClass("active");
      $(".naccs ul li").removeClass("active");

      $(this).addClass("active");
      $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

      var listItemHeight = $(".naccs ul")
        .find("li:eq(" + numberIndex + ")")
        .innerHeight();
      $(".naccs ul").height(listItemHeight + "px");
    }
  });

  // Page loading animation
  $(window).on('load', function() {
    $('#js-preloader').addClass('loaded');
  });

  // Window Resize Mobile Menu Fix
  function mobileNav() {
    var width = $(window).width();
    $('.submenu').on('click', function() {
      if(width < 767) {
        $('.submenu ul').removeClass('active');
        $(this).find('ul').toggleClass('active');
      }
    });
  }

})(window.jQuery);