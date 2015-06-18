$(document).ready(function () {
  var body = $('body');
  
  LogoAndMenuMotion();
  postsListMotion();
  backToTopMotion();

  function LogoAndMenuMotion() {
    var sequence = [
      { e: $('.brand'), p: { opacity: 1 }, o: { duration: 100 } },
      { e: $('.logo'), p: { opacity: 1, top: 0 }, o: { duration: 50} }
    ];

    sequence.push({ e: $('.site-title'), p: { opacity: 1, top: 0 }, o: { duration: 200 } });

    $.Velocity.RunSequence(sequence);
    $('.menu-item').velocity('transition.slideDownIn', {display: null});
  }


  function backToTopMotion () {
    var b2top = $('.back-to-top');
    b2top.on('click', function () {
      body.velocity('scroll');
    });
  }

  function postsListMotion () {
    var postMotionOptions = window.postMotionOptions || {stagger: 300, drag: true};
    $('.post').velocity('transition.slideDownIn', postMotionOptions);
  }
});
