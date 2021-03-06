(function ($) {

  $(document).ready(function() {

    var totalPoints = parseInt($('.launchlist li').length);
    var checkedPoints = 0;
    var ready = 0;

    $('.toggle__input').on('change', function() {
      if ($(this).is(':checked')) {
        $(this).parent().addClass('toggle--is-active');
        checkedPoints++;
        ready = Math.round(checkedPoints*100/totalPoints);
        if (ready === 100) {
          $('.status__comand').html('ПОЕХАЛИ!');
        }
        $('.status__ready').html(ready + '%');
        return false
      } else {
        $(this).parent().removeClass('toggle--is-active');
        checkedPoints--;
        ready = Math.round(checkedPoints*100/totalPoints)
        $('.status__ready').html(ready + '%');
        return false
      }
    })

    $('.js-show-modal span').on('click', function() {
      var target = $(this).parent().attr('id');
      $('.modal#'+target).addClass('modal--is-visible');
      $('body').addClass('modal-shown');
    })

    $('.modal__close').on('click', function() {
      $(this).parents('.modal').removeClass('modal--is-visible');
      $('body').removeClass('modal-shown');
    })

  });

})(jQuery);
