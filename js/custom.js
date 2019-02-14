$(document).ready(function(){
  // Add smooth scrolling to all links
    
    //$("section.body").hide(0);
    
  $(".scroll a").on('click', function(event) {
      
      //$("section.body").show(0);
      
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      //$('html, body').animate({
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
          //$("section.hero").hide(0);
      });
    } // End if
      
    $("section.hero").hide(0);
  });
});

//==================================================

/*$(document).ready(function(){
// Select all links with hashes
    $("section.body").hide(0);
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  //.not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    $("section.body").show(0);
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
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
            $("section.hero").hide(0);
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
});*/