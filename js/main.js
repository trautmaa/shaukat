$.fn.isGone = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementTop <= viewportTop;
};

$(window).on('resize scroll', function() {
  $('h2.menu').each(function() {
      var activeMenuItem = $(this).attr('id');
      if ($(this).isGone()) {
        console.log($(this).attr('id') + "is gone");
      } else {

      }
  });
});
