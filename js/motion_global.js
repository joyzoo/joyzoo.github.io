$(document).ready(function () {
  var body = $('body');
  
  LogoAndMenuMotion();
  postsListMotion();
  backToTopMotion();
  searchMotion();

  function LogoAndMenuMotion() {
    var sequence = [
      { e: $('.brand'), p: { opacity: 1 }, o: { duration: 100 } },
      { e: $('.logo'), p: { opacity: 1, top: 0 }, o: { duration: 50} }
    ];

    isMist() && sequence.push(
        { e: $('.logo-line-before i'), p: { translateX: "100%" }, o: { duration: 500, sequenceQueue: false } },
        { e: $('.logo-line-after i'), p: { translateX: "-100%" }, o: { duration: 500, sequenceQueue: false } }
    );

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

  function searchMotion () {
    var $searchForm = $('.site-search form');
    var $searchToggle = $('.site-search-toggle');

    if (isDesktop()) {
      $searchToggle.on('click', function () {
        $searchForm.velocity('stop').velocity({ top: 0 });
      });

      $(document).on('click', function (event) {
        !$(event.target).closest('.site-search').length && $searchForm.velocity('stop').velocity({ top: -50 });
      });
    }
  }
});
