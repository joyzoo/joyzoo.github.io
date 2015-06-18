$(document).ready(function () {
  var DURATION = 300;

  backToTop();

  function backToTop() {
    $('.back-to-top').on('click', function () {
      $('html, body').animate({
        scrollTop: 0
      }, DURATION);
    });
  }

});
