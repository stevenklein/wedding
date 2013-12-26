//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .





$(function() { // makes sure hero is correct height
  var heroHeight = function() {
    $('.layout-content .hero').css({
      'height':window.innerHeight + 'px',
      'line-height':window.innerHeight + 'px',
    });
  }
  $(window).on('resize', heroHeight);
  heroHeight();
});


$(function() { // rotate between heros
  var flag = 0;

  var getThenChangeFlag = function() {
    if (flag == 7) {
      flag = 0;
      return 0;
    }
    else {
      flag++
      return flag;
    }
  }
  var nextImage = function() {
    $('.hero').find('.img').removeClass('active').eq(getThenChangeFlag()).addClass('active');
  }

  setInterval(function() {
    nextImage()
  }, 5000);
});