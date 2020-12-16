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
    /* Локализация datepicker */

   
    $('.datepicker-here').datepicker({
        // Можно выбрать тольо даты, идущие за сегодняшним днем, включая сегодня
        minDate: new Date()
    })

    // Фильтр товаров

    $(document).on('click', '.mobile-filter', function(e) {
        e.preventDefault();
        $(this).toggleClass('mobile-filter__open');
        if ($(this).hasClass("mobile-filter__open")) {
            $(document).find('.catalog-nav').fadeIn();
            $(document).find('.header').addClass('header_fixed');
            $(document).find('body').css('overflow', 'hidden');
        } else {
            $(document).find('.catalog-nav').fadeOut();
            $(document).find('.header').removeClass('header_fixed');
            $(document).find('body').css('overflow', '');
        }
    })

    // Выбор доставки 
    
    $(document).on('click', '.order-delivery__choice', function(e){
        e.preventDefault();
        $(document).find('.order-delivery__choice').removeClass('order-delivery__choice_select');
        $(this).addClass('order-delivery__choice_select');
    });

    // Выбор времени 

    $(document).on('click', '.order-time__btn', function(e){
        e.preventDefault();
        $(document).find('.order-time__btn').removeClass('order-time__btn_select');
        $(this).addClass('order-time__btn_select');
    });

    // Выбор способа оплаты

    $(document).on('click', '.payment-method__item', function(e){
        e.preventDefault();
        $(document).find('.payment-method__item').removeClass('payment-method__item_select');
        $(this).addClass('payment-method__item_select');
    }); 
    

    // ОФормление заказа

    $(document).on('click', '.order-bottom__btn', function(e){
        e.preventDefault();
        $(document).find('.order-mobile__message').toggleClass('order-mobile__message_open');
        if ( $(document).find('.order-mobile__message').hasClass('order-mobile__message_open')) {
            $(document).find('.header').addClass('header_fixed');
            $(document).find('body').css('overflow', 'hidden')
            $(document).find('.message-back__btn').addClass('message-back__btn_open');
        } else {
            $(document).find('.header').removeClass('header_fixed');
            $(document).find('body').css('overflow', '');
            $(document).find('.message-back__btn').removeClass('message-back__btn_open');
        }
    }); 
    $(document).on('click', '.message-back__btn', function(e) {
        $(document).find('.header').removeClass('header_fixed');
        $(document).find('body').css('overflow', '');
        $(document).find('.message-back__btn').removeClass('message-back__btn_open');
        $(document).find('.order-mobile__message').removeClass('order-mobile__message_open');
    });


    // Модальные окна

    $('[data-modal]').iziModal();

    $('[data-modal-open]').on('click', function (e) {
        e.preventDefault();
        var $this = $(e.target).closest('[data-modal-open]'),
            id = $this.attr('data-modal-open'),
            modal = $('[data-modal="' + id + '"]');

        modal.iziModal('open');

        // filter in modals
        if (id === 'filter') {
            $('.filter-modal').clone(true).addClass('filter-modal_modal').appendTo('.modal__filter');
        }
    });

    //  Открытие бургера
    $(document).on('click', '.js-open-burger',  function(e) {
        e.preventDefault();
        var $this = $(document).find('.navigation-mobile');
        $this.toggleClass('navigation-mobile__open');
        if ($this.hasClass("navigation-mobile__open")) {
            $(document).find('.navigation-mobile').fadeIn();
            $(document).find('.header').addClass('header_fixed');
            $(document).find('body').css('overflow', 'hidden');
            $(document).find('.navigation-mobile__back').addClass('btn-close__menu');
        } else {
            $(document).find('.navigation-mobile').fadeOut();
            $(document).find('.breadcrumbs__item').removeClass('header_fixed');
            $(document).find('body').css('overflow', '');
            $(document).find('.navigation-mobile__back').removeClass('btn-close__menu');
        }
    });
    $(document).on('click', '.btn-close__menu', function(e) {
        $(document).find('.navigation-mobile').fadeOut();
        $(document).find('.breadcrumbs__item').removeClass('header_fixed');
        $(document).find('body').css('overflow', '');
        $(document).find('.navigation-mobile__open').removeClass('navigation-mobile__open');
        $(document).find('.navigation-mobile__back').removeClass('btn-close__menu');
    });

   
    if(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)){
         // личный кабинет  личные данные
        $(document).on('click', '.lk__box',  function(e) {
            e.preventDefault();
            var $this = $(document).find('.lk-mobile__data');
            $this.toggleClass('lk-mobile__data_open');
            if ($this.hasClass("lk-mobile__data_open")) {
                $(document).find('.mobile-back__btn').addClass('mobile-back__btn_open');
                $(document).find('.lk-mobile__data').fadeIn();
                $(document).find('.header').addClass('header_fixed');
                $(document).find('body').css('overflow', 'hidden');
            } else {
                $(document).find('.lk-mobile__data').fadeOut();
                $(document).find('.mobile-back__btn').removeClass('mobile-back__btn_open');
                $(document).find('.header').removeClass('header_fixed');
                $(document).find('body').css('overflow', '');
            }
        });
        $(document).on('click', '.mobile-back__btn-arrow', function(e) {
            e.preventDefault();
            $(document).find('.lk-mobile__data').fadeOut();
            $(document).find('.mobile-back__btn').removeClass('mobile-back__btn_open');
            $(document).find('.header').removeClass('header_fixed');
            $(document).find('body').css('overflow', '');
            $(document).find('.lk-mobile__data_open').removeClass('lk-mobile__data_open');
        });
          // личный кабинет сохранённые адреса
        $(document).on('click', '.lk__address',  function(e) {
            e.preventDefault();
            var $this = $(document).find('.lk-mobile__address');
            $this.toggleClass('lk-mobile__address_open');
            if ($this.hasClass("lk-mobile__address_open")) {
                $(document).find('.mobile-back__btn').addClass('mobile-back__btn_open');
                $(document).find('.lk-mobile__address').fadeIn();
                $(document).find('.header').addClass('header_fixed');
                $(document).find('body').css('overflow', 'hidden');
            } else {
                $(document).find('.lk-mobile__address').fadeOut();
                $(document).find('.mobile-back__btn').removeClass('mobile-back__btn_open');
                $(document).find('.header').removeClass('header_fixed');
                $(document).find('body').css('overflow', '');
            }
        });
        $(document).on('click', '.mobile-back__btn-arrow', function(e) {
            e.preventDefault();
            $(document).find('.lk-mobile__address').fadeOut();
            $(document).find('.mobile-back__btn').removeClass('mobile-back__btn_open');
            $(document).find('.header').removeClass('header_fixed');
            $(document).find('body').css('overflow', '');
            $(document).find('.lk-mobile__address_open').removeClass('lk-mobile__address_open');
        });
          // личный кабинет  история заказов
        $(document).on('click', '.lk__history',  function(e) {
            e.preventDefault();
            var $this = $(document).find('.lk-mobile__history');
            $this.toggleClass('lk-mobile__history_open');
            if ($this.hasClass("lk-mobile__history_open")) {
                $(document).find('.mobile-back__btn').addClass('mobile-back__btn_open');
                $(document).find('.lk-mobile__history').fadeIn();
                $(document).find('.header').addClass('header_fixed');
                $(document).find('body').css('overflow', 'hidden');
            } else {
                $(document).find('.lk-mobile__history').fadeOut();
                $(document).find('.mobile-back__btn').removeClass('mobile-back__btn_open');
                $(document).find('.header').removeClass('header_fixed');
                $(document).find('body').css('overflow', '');
            }
        });
        $(document).on('click', '.mobile-back__btn-arrow', function(e) {
            e.preventDefault();
            $(document).find('.lk-mobile__history').fadeOut();
            $(document).find('.mobile-back__btn').removeClass('mobile-back__btn_open');
            $(document).find('.header').removeClass('header_fixed');
            $(document).find('body').css('overflow', '');
            $(document).find('.lk-mobile__history_open').removeClass('lk-mobile__history_open');
        });

         // Сортировка товаров

        $(document).on('click', '.catalog .sort-filter', function(e) {
            e.preventDefault();
            $(this).toggleClass('mobile-filter__open');
            if ($(this).hasClass("mobile-filter__open")) {
                $(document).find('.mobile-filter__bottom').fadeIn();
            } else {
                $(document).find('.mobile-filter__bottom').fadeOut();
            }
        })
    }
    // Закрытие модалки на мобилке

    $(document).on('click', '.btn-nav__menu', function(e) {
        $('[data-modal]').iziModal('close');
    });

});
