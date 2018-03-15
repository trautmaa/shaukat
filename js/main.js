// Scroll to section
$(".nav-item").click(function() {
    var offset = -5; //Offset of 20px
    var activeSlug = $(this).attr("data-slug");
    console.log(activeSlug);
    $('html, body').animate({
        scrollTop: $(".section." + activeSlug).offset().top + offset
    }, 500);
});

// Check if an element lies across the top of the viewport
$.fn.isGone = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementTop <= viewportTop;
};

// Check if an element lies across the vertical middle of the viewport
$.fn.isMid = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportMid = viewportTop + $(window).height() / 2;

  return (elementTop <= viewportMid && viewportMid <= elementBottom);
};

$(window).on('resize scroll', function() {

  // Iterate through menu items
  $('h2.menu').each(function() {


      // Reveal / hide on fixed sidenav
      var activeSlug = $(this).attr('data-slug');
      var activeLink = "a." + activeSlug;
      if ( $(this).isGone() ) {
        $(activeLink).css("display", "block");
      } else {
        $(activeLink).css("display", "none");
      }

      // Grow the active menu item
      var activeSection = "div." + activeSlug;
      if ( $(activeSection).isMid() ) {
        $(activeLink).addClass("active");
      } else {
        $(activeLink).removeClass("active");
      }

  });



});
