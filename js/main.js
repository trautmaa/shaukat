$.fn.isGone = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom <= viewportTop;
};

$.fn.isTop = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();

  return (elementTop <= viewportTop && viewportTop <= elementBottom);
};

$(window).on('resize scroll', function() {

  // Iterate through menu items
  $('h2.menu').each(function() {


      // Reveal / hide on fixed sidenav
      var activeSlug = $(this).attr('id');
      var activeLink = "a." + activeSlug;
      if ( $(this).isGone() ) {
        $(activeLink).css("display", "block");
      } else {
        $(activeLink).css("display", "none");
      }

      // Grow the active menu item
      var activeSection = "div." + activeSlug;
      if ( $(activeSection).isTop() ) {
        $(activeLink).addClass("active");
      } else {
        $(activeLink).removeClass("active");
      }

  });



});
