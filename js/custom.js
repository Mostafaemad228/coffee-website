
// /////////////////////////////////////////
$(document).ready(function() {
    $('select').niceSelect();
  });
  // /////////////////////////////////////////
  window.addEventListener("scroll" , function () {    
    var navbar =  document.querySelector("nav");
    navbar.classList.toggle("sticky",window.scrollY >350);
  })
  // /////////////////////////////////////////////////////////////
  $('.book_date').datepicker({
    'format': 'm/d/yyyy',
    'autoclose': true
  });

  
  $(document).ready(function(){
    $('input.timepicker').timepicker({});
});  
  
  (function ($)
    { "use strict"
    
    /* 1. Proloder */
        $(window).on('load', function () {
          $('#preloader-active').delay(450).fadeOut('slow');
          $('body').delay(850).css({
            'overflow': 'visible'
          });
        });
    
    /* 2. sticky And Scroll UP */
        $(window).on('scroll', function () {
          var scroll = $(window).scrollTop();
          if (scroll < 100) {
            $("#ftco-navbar").removeClass("sticky-bar");
            $('#back-top').fadeOut(500);
          } else {
            $("#ftco-navbar").addClass("sticky-bar");
            $('#back-top').fadeIn(500);
          }
        });
    
      // Scroll Up
        $('#back-top a').on("click", function () {
          $('body,html').animate({
            scrollTop: 0
          }, 800);
          return false;
        });
      
  
        $(function () {
          $("#carsour-teste").owlCarousel({
              dots:true,
              responsiveBaseElement:window,
              items:1,
              autoplay:true,
              smartSpeed:700,
              loop:true,
              autoPlayHoverPause:true
          });
          
      });
  
        



      // $(function () {
      //   'use stract';
        
      //   (function autoChange () {
            
        
      //       $('.test .active').each(function () {
        
      //          if (!$(this).is(':last-child')) {
                   
      //              $(this).delay(1000).fadeout(1000);
        
      //          } 
          
      //       })
        
      //   }());
        
        
        
        
      //   });



    })(jQuery);
    
  
    
    $(function () {
      $('#datetimepicker2').datetimepicker({
          locale: 'ru'
      });
  });
  
  
  jQuery(document).ready(function(){
    // This button will increment the value
    $(".plus").click( function(e) {
    
        e.preventDefault();
        
        // Define field variable
        field = "input[name=" + $(this).attr("field") + "]";
        
        // Get its current value
        var currentVal = parseInt($(field).val());
        
        // If is not undefined
        if ( !isNaN(currentVal) && currentVal < 20 ) {
    
            // Increment
            $(field).val(currentVal + 1);
    
        }
        
    });
    
    // This button will decrement the value till 0
    $(".minus").click( function(e) {
    
        e.preventDefault();
        
        // Define field variable
        field = "input[name=" + $(this).attr("field") + "]";
        
        // Get its current value
        var currentVal = parseInt($(field).val());
        
        // If it isn't undefined or its greater than 0
        if ( !isNaN(currentVal) && currentVal > 1 ) {
            // Decrement one
            $(field).val(currentVal - 1);
        }
        
    });
    });
  
  
  
  
  
  //   ::after {
  //     content: "";
  //     width: 100px;
  //     position: absolute;
  //     margin: 0 auto;
  //     height: 3px;
  //     background: #ffdc12;
  //     left: 0;
  //     right: 0;
  //     bottom: -10px;
  // }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  