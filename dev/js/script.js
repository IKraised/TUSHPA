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
            responsive: [
                {
                  breakpoint: 400,
                  settings: {
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                  }
                }
              ]
        });

    });
    $(document).find('.product-card__cart').on('click', function(e) {
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
