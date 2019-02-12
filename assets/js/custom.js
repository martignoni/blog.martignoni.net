/*************************************************
 *  Core JS functions and initialization.
 **************************************************/

(function($){

  /* Toggle search dialog. */
  function toggleSearchDialog() {
    if ($('body').hasClass('searching')) {
      $('[id=search-query]').blur();
      $('body').removeClass('searching');
    } else {
      $('body').addClass('searching');
      $('.search-results').css({opacity: 0, visibility: 'visible'}).animate({opacity: 1}, 200);
      $('#search-query').focus();
    }
  }

  $(window).on('load', function() {
    // On search icon click toggle search dialog.
    $('.js-search').click(function(e) {
      e.preventDefault();
      toggleSearchDialog();
    });
    $(document).on('keydown', function(e){
      if (e.which == 27) {
        // `Esc` key pressed.
        if ($('body').hasClass('searching')) {
          toggleSearchDialog();
        }
      } else if (e.which == 191 && e.shiftKey == false && !$('input,textarea').is(':focus')) {
        // `/` key pressed outside of text input.
        e.preventDefault();
        toggleSearchDialog();
      }
    });
  });

})(jQuery);
