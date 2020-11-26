'use strict';

$(document).ready(function () {

    // sliders
    $('[data-slider="items"]').each(function (index, slider) {
        $(slider).find('[data-sliders]').slick({
            slidesToShow: +$(slider).data('count'),
            slidesToScroll: 1,
            arrows: false,
            variableWidth: true,
            // prevArrow: $(slider).find('[data-arrow="back"]'),
            // nextArrow: $(slider).find('[data-arrow="next"]'),
            responsive: [{
                breakpoint: 400,
                settings: {
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }]
        });
    });
    $(document).find('.product-card__cart').on('click', function (e) {
        e.preventDefault();
        $(this).find('.product-card__basket_ico').addClass('open');
        $(this).find('.product-card__counter').addClass('open');
    });
    $('.product-card__counter-minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.product-card__counter-plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImVhY2giLCJpbmRleCIsInNsaWRlciIsImZpbmQiLCJzbGljayIsInNsaWRlc1RvU2hvdyIsImRhdGEiLCJzbGlkZXNUb1Njcm9sbCIsImFycm93cyIsInZhcmlhYmxlV2lkdGgiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiY2VudGVyTW9kZSIsImNlbnRlclBhZGRpbmciLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFkZENsYXNzIiwiY2xpY2siLCIkaW5wdXQiLCJwYXJlbnQiLCJjb3VudCIsInBhcnNlSW50IiwidmFsIiwiY2hhbmdlIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQUEsRUFBRUMsUUFBRixFQUFZQyxLQUFaLENBQWtCLFlBQVk7O0FBRTFCO0FBQ0FGLE1BQUUsdUJBQUYsRUFBMkJHLElBQTNCLENBQWdDLFVBQVVDLEtBQVYsRUFBaUJDLE1BQWpCLEVBQXlCO0FBQ3JETCxVQUFFSyxNQUFGLEVBQVVDLElBQVYsQ0FBZSxnQkFBZixFQUFpQ0MsS0FBakMsQ0FBdUM7QUFDbkNDLDBCQUFjLENBQUNSLEVBQUVLLE1BQUYsRUFBVUksSUFBVixDQUFlLE9BQWYsQ0FEb0I7QUFFbkNDLDRCQUFnQixDQUZtQjtBQUduQ0Msb0JBQVEsS0FIMkI7QUFJbkNDLDJCQUFlLElBSm9CO0FBS25DO0FBQ0E7QUFDQUMsd0JBQVksQ0FDUjtBQUNFQyw0QkFBWSxHQURkO0FBRUVDLDBCQUFVO0FBQ1JDLGdDQUFZLElBREo7QUFFUkMsbUNBQWUsTUFGUDtBQUdSVCxrQ0FBYztBQUhOO0FBRlosYUFEUTtBQVB1QixTQUF2QztBQW1CSCxLQXBCRDtBQXFCQVIsTUFBRUMsUUFBRixFQUFZSyxJQUFaLENBQWlCLHFCQUFqQixFQUF3Q1ksRUFBeEMsQ0FBMkMsT0FBM0MsRUFBb0QsVUFBU0MsQ0FBVCxFQUFZO0FBQzVEQSxVQUFFQyxjQUFGO0FBQ0FwQixVQUFFLElBQUYsRUFBUU0sSUFBUixDQUFhLDJCQUFiLEVBQTBDZSxRQUExQyxDQUFtRCxNQUFuRDtBQUNBckIsVUFBRSxJQUFGLEVBQVFNLElBQVIsQ0FBYSx3QkFBYixFQUF1Q2UsUUFBdkMsQ0FBZ0QsTUFBaEQ7QUFDSCxLQUpEO0FBS0FyQixNQUFFLDhCQUFGLEVBQWtDc0IsS0FBbEMsQ0FBd0MsWUFBWTtBQUNoRCxZQUFJQyxTQUFTdkIsRUFBRSxJQUFGLEVBQVF3QixNQUFSLEdBQWlCbEIsSUFBakIsQ0FBc0IsT0FBdEIsQ0FBYjtBQUNBLFlBQUltQixRQUFRQyxTQUFTSCxPQUFPSSxHQUFQLEVBQVQsSUFBeUIsQ0FBckM7QUFDQUYsZ0JBQVFBLFFBQVEsQ0FBUixHQUFZLENBQVosR0FBZ0JBLEtBQXhCO0FBQ0FGLGVBQU9JLEdBQVAsQ0FBV0YsS0FBWDtBQUNBRixlQUFPSyxNQUFQO0FBQ0EsZUFBTyxLQUFQO0FBQ0gsS0FQRDtBQVFBNUIsTUFBRSw2QkFBRixFQUFpQ3NCLEtBQWpDLENBQXVDLFlBQVk7QUFDL0MsWUFBSUMsU0FBU3ZCLEVBQUUsSUFBRixFQUFRd0IsTUFBUixHQUFpQmxCLElBQWpCLENBQXNCLE9BQXRCLENBQWI7QUFDQWlCLGVBQU9JLEdBQVAsQ0FBV0QsU0FBU0gsT0FBT0ksR0FBUCxFQUFULElBQXlCLENBQXBDO0FBQ0FKLGVBQU9LLE1BQVA7QUFDQSxlQUFPLEtBQVA7QUFDSCxLQUxEO0FBTUgsQ0EzQ0QiLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG5cbiAgICAvLyBzbGlkZXJzXG4gICAgJCgnW2RhdGEtc2xpZGVyPVwiaXRlbXNcIl0nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgc2xpZGVyKSB7XG4gICAgICAgICQoc2xpZGVyKS5maW5kKCdbZGF0YS1zbGlkZXJzXScpLnNsaWNrKHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogKyQoc2xpZGVyKS5kYXRhKCdjb3VudCcpLFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcbiAgICAgICAgICAgIC8vIHByZXZBcnJvdzogJChzbGlkZXIpLmZpbmQoJ1tkYXRhLWFycm93PVwiYmFja1wiXScpLFxuICAgICAgICAgICAgLy8gbmV4dEFycm93OiAkKHNsaWRlcikuZmluZCgnW2RhdGEtYXJyb3c9XCJuZXh0XCJdJyksXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNDAwLFxuICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzQwcHgnLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDFcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG5cbiAgICB9KTtcbiAgICAkKGRvY3VtZW50KS5maW5kKCcucHJvZHVjdC1jYXJkX19jYXJ0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQodGhpcykuZmluZCgnLnByb2R1Y3QtY2FyZF9fYmFza2V0X2ljbycpLmFkZENsYXNzKCdvcGVuJyk7XG4gICAgICAgICQodGhpcykuZmluZCgnLnByb2R1Y3QtY2FyZF9fY291bnRlcicpLmFkZENsYXNzKCdvcGVuJyk7XG4gICAgfSk7XG4gICAgJCgnLnByb2R1Y3QtY2FyZF9fY291bnRlci1taW51cycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICRpbnB1dCA9ICQodGhpcykucGFyZW50KCkuZmluZCgnaW5wdXQnKTtcbiAgICAgICAgdmFyIGNvdW50ID0gcGFyc2VJbnQoJGlucHV0LnZhbCgpKSAtIDE7XG4gICAgICAgIGNvdW50ID0gY291bnQgPCAxID8gMSA6IGNvdW50O1xuICAgICAgICAkaW5wdXQudmFsKGNvdW50KTtcbiAgICAgICAgJGlucHV0LmNoYW5nZSgpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgJCgnLnByb2R1Y3QtY2FyZF9fY291bnRlci1wbHVzJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgJGlucHV0ID0gJCh0aGlzKS5wYXJlbnQoKS5maW5kKCdpbnB1dCcpO1xuICAgICAgICAkaW5wdXQudmFsKHBhcnNlSW50KCRpbnB1dC52YWwoKSkgKyAxKTtcbiAgICAgICAgJGlucHV0LmNoYW5nZSgpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG59KTtcbiJdfQ==
