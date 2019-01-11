jQuery(document).ready(function($) {
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww >= 400) {
      $(".test").removeClass("navbar-light");
    } else if (ww < 400) {
      $(".test").addClass("navbar-light");
    }
  };
  $(window).resize(function() {
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
});
