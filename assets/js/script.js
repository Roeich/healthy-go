$(document).ready(function() {
    
    /* _________________ start home page _________________ */
    
    // ... side menu
    $(".menu_toggleBtn,.header_backDrop").click(function() {
        $(".header").toggleClass("active_header");
    });
    
    // ... our diet programs slider
    $(".diet-programs-slider").owlCarousel({
        items:1,
        loop:true,
        center:true,
        nav:true,
        dots:false,
        stagePadding:50,
        responsive:{
            576:{
                items:2,
                stagePadding:0
            },
            992:{
                items:3,
                stagePadding:0
            }
        }
    });
    
    // ... testimonials slider
    $(".testimonials-slider").owlCarousel({
        items:1,
        loop:false,
        center:true,
        nav:true,
        dots:false
    });

    // loading youtube video dynamically
    $('.video-load-button').on('click', function() {
        var videoBox = $(this).closest('.video-box');
        var iframeSrc = videoBox.data('iframe-src');
        var iframe = $('<iframe>', {
          src: iframeSrc,
          width: '560',
          height: '315',
          allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
          allowfullscreen: true,
          title: 'Introduction Video',
          loading: 'lazy' // Lazy loading for the iframe
        });
        videoBox.html(iframe);
    });
    // increasing page Accessibility
    setTimeout(function() {
        $('.owl-prev').attr({
          'aria-label': 'Previous slide',
          'tabindex': '0' 
        });
        $('.owl-next').attr({
          'aria-label': 'Next slide',
          'tabindex': '0' 
        });
        $('.owl-prev, .owl-next').removeAttr('role');
    }, 500);

    /* _________________ end home page _________________ */
    
});