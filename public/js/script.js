'use strict';

$(document).ready(function () {

    // Слайдер
    $('[data-slider="items"]').each(function (index, slider) {
        $(slider).find('[data-sliders]').slick({
            slidesToShow: +$(slider).data('count'),
            slidesToScroll: 1,
            arrows: false,
            variableWidth: true

        });
    });

    // Показ выбора кол-во на карточке
    $(document).on('click', '.product-card__cart', function (e) {
        e.preventDefault();
        $(this).find('.product-card__basket_ico').addClass('open');
        $(this).find('.product-card__counter').addClass('open');
    });

    // Счетчик кол-во минус
    $('.product-card__counter-minus').on('click', function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });

    // Счетчик кол-во плюс
    $('.product-card__counter-plus').on('click', function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    // Выпадающий поиск
    $(document).on('keyup', '.header__search-input input', function (e) {

        e.preventDefault();
        if ($(e.target).val().length > 0) {
            $('.search-bar').fadeIn();
        } else {
            $('.search-bar').fadeOut();
        }
    });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImVhY2giLCJpbmRleCIsInNsaWRlciIsImZpbmQiLCJzbGljayIsInNsaWRlc1RvU2hvdyIsImRhdGEiLCJzbGlkZXNUb1Njcm9sbCIsImFycm93cyIsInZhcmlhYmxlV2lkdGgiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFkZENsYXNzIiwiJGlucHV0IiwicGFyZW50IiwiY291bnQiLCJwYXJzZUludCIsInZhbCIsImNoYW5nZSIsInRhcmdldCIsImxlbmd0aCIsImZhZGVJbiIsImZhZGVPdXQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxFQUFFQyxRQUFGLEVBQVlDLEtBQVosQ0FBa0IsWUFBWTs7QUFFMUI7QUFDQUYsTUFBRSx1QkFBRixFQUEyQkcsSUFBM0IsQ0FBZ0MsVUFBVUMsS0FBVixFQUFpQkMsTUFBakIsRUFBeUI7QUFDckRMLFVBQUVLLE1BQUYsRUFBVUMsSUFBVixDQUFlLGdCQUFmLEVBQWlDQyxLQUFqQyxDQUF1QztBQUNuQ0MsMEJBQWMsQ0FBQ1IsRUFBRUssTUFBRixFQUFVSSxJQUFWLENBQWUsT0FBZixDQURvQjtBQUVuQ0MsNEJBQWdCLENBRm1CO0FBR25DQyxvQkFBUSxLQUgyQjtBQUluQ0MsMkJBQWU7O0FBSm9CLFNBQXZDO0FBUUgsS0FURDs7QUFXQTtBQUNBWixNQUFFQyxRQUFGLEVBQVlZLEVBQVosQ0FBZSxPQUFmLEVBQXdCLHFCQUF4QixFQUErQyxVQUFTQyxDQUFULEVBQVk7QUFDdkRBLFVBQUVDLGNBQUY7QUFDQWYsVUFBRSxJQUFGLEVBQVFNLElBQVIsQ0FBYSwyQkFBYixFQUEwQ1UsUUFBMUMsQ0FBbUQsTUFBbkQ7QUFDQWhCLFVBQUUsSUFBRixFQUFRTSxJQUFSLENBQWEsd0JBQWIsRUFBdUNVLFFBQXZDLENBQWdELE1BQWhEO0FBQ0gsS0FKRDs7QUFNQztBQUNEaEIsTUFBRSw4QkFBRixFQUFrQ2EsRUFBbEMsQ0FBcUMsT0FBckMsRUFBOEMsWUFBWTtBQUN0RCxZQUFJSSxTQUFTakIsRUFBRSxJQUFGLEVBQVFrQixNQUFSLEdBQWlCWixJQUFqQixDQUFzQixPQUF0QixDQUFiO0FBQ0EsWUFBSWEsUUFBUUMsU0FBU0gsT0FBT0ksR0FBUCxFQUFULElBQXlCLENBQXJDO0FBQ0FGLGdCQUFRQSxRQUFRLENBQVIsR0FBWSxDQUFaLEdBQWdCQSxLQUF4QjtBQUNBRixlQUFPSSxHQUFQLENBQVdGLEtBQVg7QUFDQUYsZUFBT0ssTUFBUDtBQUNBLGVBQU8sS0FBUDtBQUNILEtBUEQ7O0FBU0E7QUFDQXRCLE1BQUUsNkJBQUYsRUFBaUNhLEVBQWpDLENBQW9DLE9BQXBDLEVBQTZDLFlBQVk7QUFDckQsWUFBSUksU0FBU2pCLEVBQUUsSUFBRixFQUFRa0IsTUFBUixHQUFpQlosSUFBakIsQ0FBc0IsT0FBdEIsQ0FBYjtBQUNBVyxlQUFPSSxHQUFQLENBQVdELFNBQVNILE9BQU9JLEdBQVAsRUFBVCxJQUF5QixDQUFwQztBQUNBSixlQUFPSyxNQUFQO0FBQ0EsZUFBTyxLQUFQO0FBQ0gsS0FMRDs7QUFPQTtBQUNBdEIsTUFBRUMsUUFBRixFQUFZWSxFQUFaLENBQWUsT0FBZixFQUF3Qiw2QkFBeEIsRUFBdUQsVUFBU0MsQ0FBVCxFQUFXOztBQUU5REEsVUFBRUMsY0FBRjtBQUNBLFlBQUdmLEVBQUVjLEVBQUVTLE1BQUosRUFBWUYsR0FBWixHQUFrQkcsTUFBbEIsR0FBMkIsQ0FBOUIsRUFBZ0M7QUFDNUJ4QixjQUFFLGFBQUYsRUFBaUJ5QixNQUFqQjtBQUNILFNBRkQsTUFFSztBQUNEekIsY0FBRSxhQUFGLEVBQWlCMEIsT0FBakI7QUFDSDtBQUVKLEtBVEQ7QUFVSCxDQWxERCIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcblxuICAgIC8vINCh0LvQsNC50LTQtdGAXG4gICAgJCgnW2RhdGEtc2xpZGVyPVwiaXRlbXNcIl0nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgc2xpZGVyKSB7XG4gICAgICAgICQoc2xpZGVyKS5maW5kKCdbZGF0YS1zbGlkZXJzXScpLnNsaWNrKHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogKyQoc2xpZGVyKS5kYXRhKCdjb3VudCcpLFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcbiAgICAgICAgICAgXG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cbiAgICAvLyDQn9C+0LrQsNC3INCy0YvQsdC+0YDQsCDQutC+0Lst0LLQviDQvdCwINC60LDRgNGC0L7Rh9C60LVcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnByb2R1Y3QtY2FyZF9fY2FydCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAkKHRoaXMpLmZpbmQoJy5wcm9kdWN0LWNhcmRfX2Jhc2tldF9pY28nKS5hZGRDbGFzcygnb3BlbicpO1xuICAgICAgICAkKHRoaXMpLmZpbmQoJy5wcm9kdWN0LWNhcmRfX2NvdW50ZXInKS5hZGRDbGFzcygnb3BlbicpO1xuICAgIH0pO1xuXG4gICAgIC8vINCh0YfQtdGC0YfQuNC6INC60L7Quy3QstC+INC80LjQvdGD0YFcbiAgICAkKCcucHJvZHVjdC1jYXJkX19jb3VudGVyLW1pbnVzJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgJGlucHV0ID0gJCh0aGlzKS5wYXJlbnQoKS5maW5kKCdpbnB1dCcpO1xuICAgICAgICB2YXIgY291bnQgPSBwYXJzZUludCgkaW5wdXQudmFsKCkpIC0gMTtcbiAgICAgICAgY291bnQgPSBjb3VudCA8IDEgPyAxIDogY291bnQ7XG4gICAgICAgICRpbnB1dC52YWwoY291bnQpO1xuICAgICAgICAkaW5wdXQuY2hhbmdlKCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vINCh0YfQtdGC0YfQuNC6INC60L7Quy3QstC+INC/0LvRjtGBXG4gICAgJCgnLnByb2R1Y3QtY2FyZF9fY291bnRlci1wbHVzJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgJGlucHV0ID0gJCh0aGlzKS5wYXJlbnQoKS5maW5kKCdpbnB1dCcpO1xuICAgICAgICAkaW5wdXQudmFsKHBhcnNlSW50KCRpbnB1dC52YWwoKSkgKyAxKTtcbiAgICAgICAgJGlucHV0LmNoYW5nZSgpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICAvLyDQktGL0L/QsNC00LDRjtGJ0LjQuSDQv9C+0LjRgdC6XG4gICAgJChkb2N1bWVudCkub24oJ2tleXVwJywgJy5oZWFkZXJfX3NlYXJjaC1pbnB1dCBpbnB1dCcsIGZ1bmN0aW9uKGUpe1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYoJChlLnRhcmdldCkudmFsKCkubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAkKCcuc2VhcmNoLWJhcicpLmZhZGVJbigpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICQoJy5zZWFyY2gtYmFyJykuZmFkZU91dCgpO1xuICAgICAgICB9XG5cbiAgICB9KSAgICBcbn0pO1xuIl19
