$.fn.isGone = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom <= viewportTop;
};

$(window).on('resize scroll', function() {
  $('h2.menu').each(function() {
      var activeMenuItem = $(this).attr('id');
      if ($(this).isGone()) {
        $("a." + activeMenuItem).css("display", "block");
      } else {
        $("a." + activeMenuItem).css("display", "none");
      }
  });
});
