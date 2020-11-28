'use strict';

$(document).ready(function () {

    // Слайдер
    $('[data-slider="items"]').each(function (index, slider) {
        $(slider).find('[data-sliders]').slick({
            slidesToShow: +$(slider).data('count'),
            slidesToScroll: 1,
            arrows: false,
            variableWidth: true,
           
        });

    });

    // Показ выбора кол-во на карточке
    $(document).on('click', '.product-card__cart', function(e) {
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
    $(document).on('keyup', '.header__search-input input', function(e){

        e.preventDefault();
        if($(e.target).val().length > 0){
            $('.search-bar').fadeIn();
        }else{
            $('.search-bar').fadeOut();
        }

    })    
});
