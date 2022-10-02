$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 300) {
      $('.name').fadeIn();
    } else {
      $('.name').fadeOut();
    }
  });
