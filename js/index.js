
console.log("You index.js file is loaded correctly!");

/* nav bar */
$('.nav_item').hover(function() {
    $(this).stop().animate({ fontSize : '24px' });
},
function() {
    $(this).stop().animate({ fontSize : '14px' });
});

/* button alert */
$( "button" ).click(function() {
    alert( "Page Coming Soon!" );
  });

/*
  $(document).ready(function(){
    // Add smooth scrolling to all links
    $(".about").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
       /* $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  

            
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
        $("html, body").animate({
            scrollTop: $('#profile_info').offset().top + $('#profile_info').outerHeight(true)
          }, 500);
      } // End if
    });
  });
*/



 // Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('body').animate({
        scrollTop: target.offset().top
      }, 800, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});