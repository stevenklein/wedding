//= require jquery
//= require bootstrap
//= require jquery_ujs
//= require turbolinks
//= require_tree .





$(function() { // makes sure hero is correct height
  var heroHeight = function() {

    var windowHeight = window.innerHeight - 104
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
    if (flag == 13) {
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

  $('.layout-header').find('[data-related-section]').on('click', function() {
    var $this = $(this)
      , $relatedSection = $('[data-section-name="' + $this.attr('data-related-section') + '"]');

    $('html, body').animate({
        scrollTop: ($relatedSection.offset().top - headerHeight)
    }, 500);

    return false; 
  });
});



$(function() { // add a new row in the rsvp modal
  var counter = 1;

  $.fn.conditionFields = function() {
    this.find('input').each(function() {
      $(this).attr('id', $(this).attr('id').replace('***', counter));
      $(this).attr('name', $(this).attr('name').replace('***', counter));
    });

    counter++;

    return this;
  };


  var newRSVP = function() {
    $('#new-rsvp-template').clone().insertBefore('#add-new-rsvp').removeAttr('id').css('display', 'block').conditionFields();
  }

  $('#add-new-rsvp').on('click', function() {
    newRSVP();
    return false;
  });
})


$(function() { // delete button to remove attendee rows
  $('.modal-body').on('click', '.delete', function() {
    $(this).parent().remove();
  });
});



$(function() { // form behavior after submit button
  var $button = $('#submit-button')
    , $body = $('.modal-body');

    
  $button.tooltip({trigger: 'manual'});

  var ensureFullData = function() {
    var flag = true;
    $body.find('.rsvp-row').not('#new-rsvp-template').each(function() {
      if ($(this).find('.span4').eq(0).find('input[type="text"]').val().trim() == '') {
        flag = false;
      }
      if ($(this).find('.span4').eq(1).find('input[type="text"]').val().trim() == '') {
        flag = false;
      }
      if (!$(this).find('.span4').eq(2).find('input[type="radio"]').filter(':checked').length) {
        flag = false;
      }
    });
    return flag;
  }

  //setInterval(ensureFullData, 5000);

  $button.on('click', function(e) {
    e.preventDefault();

    if (!ensureFullData()) {
      $button.tooltip('show');
      setTimeout(function() {
        $button.tooltip('hide');
      }, 3000);
    }
    else {
      $('#new-rsvp-template').remove()
      setTimeout(function() {
        $('#new_rsvp').submit();
      }, 150);
    }
  });
})
