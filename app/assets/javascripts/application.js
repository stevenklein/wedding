//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .





$(function() { // makes sure hero is correct height
  var heroHeight = function() {

    var windowHeight = window.innerHeight - 71
      , textHeight = parseInt($('.hero').find('.text').css('height'));

    $('.hero').css({
      'height':windowHeight + 'px',
      'padding-top':((windowHeight - textHeight) / 2) + 'px'
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



$(function() { // add class="in" to hero text
  setTimeout(function() {
    $('.hero').find('.text').addClass('in');
  }, 500)
});



$(function() { // nav scrolls 
  var headerHeight = $('.layout-header').outerHeight();

  $('.layout-header').find('a').on('click', function() {
    var $this = $(this)
      , $relatedSection = $('[data-section-name="' + $this.attr('data-related-section') + '"]');

    $('html, body').animate({
        scrollTop: ($relatedSection.offset().top - headerHeight)
    }, 500);

    return false; 
  });
});