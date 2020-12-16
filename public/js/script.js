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
    /* Локализация datepicker */

    $('.datepicker-here').datepicker({
        // Можно выбрать тольо даты, идущие за сегодняшним днем, включая сегодня
        minDate: new Date()
    });

    // Фильтр товаров

    $(document).on('click', '.mobile-filter', function (e) {
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
    });

    // Выбор доставки 

    $(document).on('click', '.order-delivery__choice', function (e) {
        e.preventDefault();
        $(document).find('.order-delivery__choice').removeClass('order-delivery__choice_select');
        $(this).addClass('order-delivery__choice_select');
    });

    // Выбор времени 

    $(document).on('click', '.order-time__btn', function (e) {
        e.preventDefault();
        $(document).find('.order-time__btn').removeClass('order-time__btn_select');
        $(this).addClass('order-time__btn_select');
    });

    // Выбор способа оплаты

    $(document).on('click', '.payment-method__item', function (e) {
        e.preventDefault();
        $(document).find('.payment-method__item').removeClass('payment-method__item_select');
        $(this).addClass('payment-method__item_select');
    });

    // ОФормление заказа

    $(document).on('click', '.order-bottom__btn', function (e) {
        e.preventDefault();
        $(document).find('.order-mobile__message').toggleClass('order-mobile__message_open');
        if ($(document).find('.order-mobile__message').hasClass('order-mobile__message_open')) {
            $(document).find('.header').addClass('header_fixed');
            $(document).find('body').css('overflow', 'hidden');
            $(document).find('.message-back__btn').addClass('message-back__btn_open');
        } else {
            $(document).find('.header').removeClass('header_fixed');
            $(document).find('body').css('overflow', '');
            $(document).find('.message-back__btn').removeClass('message-back__btn_open');
        }
    });
    $(document).on('click', '.message-back__btn', function (e) {
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
    $(document).on('click', '.js-open-burger', function (e) {
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
    $(document).on('click', '.btn-close__menu', function (e) {
        $(document).find('.navigation-mobile').fadeOut();
        $(document).find('.breadcrumbs__item').removeClass('header_fixed');
        $(document).find('body').css('overflow', '');
        $(document).find('.navigation-mobile__open').removeClass('navigation-mobile__open');
        $(document).find('.navigation-mobile__back').removeClass('btn-close__menu');
    });

    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        // личный кабинет  личные данные
        $(document).on('click', '.lk__box', function (e) {
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
        $(document).on('click', '.mobile-back__btn-arrow', function (e) {
            e.preventDefault();
            $(document).find('.lk-mobile__data').fadeOut();
            $(document).find('.mobile-back__btn').removeClass('mobile-back__btn_open');
            $(document).find('.header').removeClass('header_fixed');
            $(document).find('body').css('overflow', '');
            $(document).find('.lk-mobile__data_open').removeClass('lk-mobile__data_open');
        });
        // личный кабинет сохранённые адреса
        $(document).on('click', '.lk__address', function (e) {
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
        $(document).on('click', '.mobile-back__btn-arrow', function (e) {
            e.preventDefault();
            $(document).find('.lk-mobile__address').fadeOut();
            $(document).find('.mobile-back__btn').removeClass('mobile-back__btn_open');
            $(document).find('.header').removeClass('header_fixed');
            $(document).find('body').css('overflow', '');
            $(document).find('.lk-mobile__address_open').removeClass('lk-mobile__address_open');
        });
        // личный кабинет  история заказов
        $(document).on('click', '.lk__history', function (e) {
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
        $(document).on('click', '.mobile-back__btn-arrow', function (e) {
            e.preventDefault();
            $(document).find('.lk-mobile__history').fadeOut();
            $(document).find('.mobile-back__btn').removeClass('mobile-back__btn_open');
            $(document).find('.header').removeClass('header_fixed');
            $(document).find('body').css('overflow', '');
            $(document).find('.lk-mobile__history_open').removeClass('lk-mobile__history_open');
        });

        // Сортировка товаров

        $(document).on('click', '.catalog .sort-filter', function (e) {
            e.preventDefault();
            $(this).toggleClass('mobile-filter__open');
            if ($(this).hasClass("mobile-filter__open")) {
                $(document).find('.mobile-filter__bottom').fadeIn();
            } else {
                $(document).find('.mobile-filter__bottom').fadeOut();
            }
        });
    }
    // Закрытие модалки на мобилке

    $(document).on('click', '.btn-nav__menu', function (e) {
        $('[data-modal]').iziModal('close');
    });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImVhY2giLCJpbmRleCIsInNsaWRlciIsImZpbmQiLCJzbGljayIsInNsaWRlc1RvU2hvdyIsImRhdGEiLCJzbGlkZXNUb1Njcm9sbCIsImFycm93cyIsInZhcmlhYmxlV2lkdGgiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFkZENsYXNzIiwiJGlucHV0IiwicGFyZW50IiwiY291bnQiLCJwYXJzZUludCIsInZhbCIsImNoYW5nZSIsInRhcmdldCIsImxlbmd0aCIsImZhZGVJbiIsImZhZGVPdXQiLCJkYXRlcGlja2VyIiwibWluRGF0ZSIsIkRhdGUiLCJ0b2dnbGVDbGFzcyIsImhhc0NsYXNzIiwiY3NzIiwicmVtb3ZlQ2xhc3MiLCJpemlNb2RhbCIsIiR0aGlzIiwiY2xvc2VzdCIsImlkIiwiYXR0ciIsIm1vZGFsIiwiY2xvbmUiLCJhcHBlbmRUbyIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxFQUFFQyxRQUFGLEVBQVlDLEtBQVosQ0FBa0IsWUFBWTs7QUFFMUI7QUFDQUYsTUFBRSx1QkFBRixFQUEyQkcsSUFBM0IsQ0FBZ0MsVUFBVUMsS0FBVixFQUFpQkMsTUFBakIsRUFBeUI7QUFDckRMLFVBQUVLLE1BQUYsRUFBVUMsSUFBVixDQUFlLGdCQUFmLEVBQWlDQyxLQUFqQyxDQUF1QztBQUNuQ0MsMEJBQWMsQ0FBQ1IsRUFBRUssTUFBRixFQUFVSSxJQUFWLENBQWUsT0FBZixDQURvQjtBQUVuQ0MsNEJBQWdCLENBRm1CO0FBR25DQyxvQkFBUSxLQUgyQjtBQUluQ0MsMkJBQWU7O0FBSm9CLFNBQXZDO0FBUUgsS0FURDs7QUFXQTtBQUNBWixNQUFFQyxRQUFGLEVBQVlZLEVBQVosQ0FBZSxPQUFmLEVBQXdCLHFCQUF4QixFQUErQyxVQUFTQyxDQUFULEVBQVk7QUFDdkRBLFVBQUVDLGNBQUY7QUFDQWYsVUFB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QUFSLENBQW9CLHFCQUFwQjtBQUNBLGdCQUFJOUIsRUFBRSxJQUFGLEVBQVErQixRQUFSLENBQWlCLHFCQUFqQixDQUFKLEVBQTZDO0FBQ3pDL0Isa0JBQUVDLFFBQUYsRUFBWUssSUFBWixDQUFpQix3QkFBakIsRUFBMkNtQixNQUEzQztBQUNILGFBRkQsTUFFTztBQUNIekIsa0JBQUVDLFFBQUYsRUFBWUssSUFBWixDQUFpQix3QkFBakIsRUFBMkNvQixPQUEzQztBQUNIO0FBQ0osU0FSRDtBQVNIO0FBQ0Q7O0FBRUExQixNQUFFQyxRQUFGLEVBQVlZLEVBQVosQ0FBZSxPQUFmLEVBQXdCLGdCQUF4QixFQUEwQyxVQUFTQyxDQUFULEVBQVk7QUFDbERkLFVBQUUsY0FBRixFQUFrQmtDLFFBQWxCLENBQTJCLE9BQTNCO0FBQ0gsS0FGRDtBQUlILENBclFEIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuXG4gICAgLy8g0KHQu9Cw0LnQtNC10YBcbiAgICAkKCdbZGF0YS1zbGlkZXI9XCJpdGVtc1wiXScpLmVhY2goZnVuY3Rpb24gKGluZGV4LCBzbGlkZXIpIHtcbiAgICAgICAgJChzbGlkZXIpLmZpbmQoJ1tkYXRhLXNsaWRlcnNdJykuc2xpY2soe1xuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiArJChzbGlkZXIpLmRhdGEoJ2NvdW50JyksXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlLFxuICAgICAgICAgICBcbiAgICAgICAgfSk7XG5cbiAgICB9KTtcblxuICAgIC8vINCf0L7QutCw0Lcg0LLRi9Cx0L7RgNCwINC60L7Quy3QstC+INC90LAg0LrQsNGA0YLQvtGH0LrQtVxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcucHJvZHVjdC1jYXJkX19jYXJ0JywgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQodGhpcykuZmluZCgnLnByb2R1Y3QtY2FyZF9fYmFza2V0X2ljbycpLmFkZENsYXNzKCdvcGVuJyk7XG4gICAgICAgICQodGhpcykuZmluZCgnLnByb2R1Y3QtY2FyZF9fY291bnRlcicpLmFkZENsYXNzKCdvcGVuJyk7XG4gICAgfSk7XG5cbiAgICAgLy8g0KHRh9C10YLRh9C40Log0LrQvtC7LdCy0L4g0LzQuNC90YPRgVxuICAgICQoJy5wcm9kdWN0LWNhcmRfX2NvdW50ZXItbWludXMnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAkaW5wdXQgPSAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJ2lucHV0Jyk7XG4gICAgICAgIHZhciBjb3VudCA9IHBhcnNlSW50KCRpbnB1dC52YWwoKSkgLSAxO1xuICAgICAgICBjb3VudCA9IGNvdW50IDwgMSA/IDEgOiBjb3VudDtcbiAgICAgICAgJGlucHV0LnZhbChjb3VudCk7XG4gICAgICAgICRpbnB1dC5jaGFuZ2UoKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gICAgLy8g0KHRh9C10YLRh9C40Log0LrQvtC7LdCy0L4g0L/Qu9GO0YFcbiAgICAkKCcucHJvZHVjdC1jYXJkX19jb3VudGVyLXBsdXMnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAkaW5wdXQgPSAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJ2lucHV0Jyk7XG4gICAgICAgICRpbnB1dC52YWwocGFyc2VJbnQoJGlucHV0LnZhbCgpKSArIDEpO1xuICAgICAgICAkaW5wdXQuY2hhbmdlKCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vINCS0YvQv9Cw0LTQsNGO0YnQuNC5INC/0L7QuNGB0LpcbiAgICAkKGRvY3VtZW50KS5vbigna2V5dXAnLCAnLmhlYWRlcl9fc2VhcmNoLWlucHV0IGlucHV0JywgZnVuY3Rpb24oZSl7XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZigkKGUudGFyZ2V0KS52YWwoKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICQoJy5zZWFyY2gtYmFyJykuZmFkZUluKCk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgJCgnLnNlYXJjaC1iYXInKS5mYWRlT3V0KCk7XG4gICAgICAgIH1cblxuICAgIH0pXG4gICAgLyog0JvQvtC60LDQu9C40LfQsNGG0LjRjyBkYXRlcGlja2VyICovXG5cbiAgIFxuICAgICQoJy5kYXRlcGlja2VyLWhlcmUnKS5kYXRlcGlja2VyKHtcbiAgICAgICAgLy8g0JzQvtC20L3QviDQstGL0LHRgNCw0YLRjCDRgtC+0LvRjNC+INC00LDRgtGLLCDQuNC00YPRidC40LUg0LfQsCDRgdC10LPQvtC00L3Rj9GI0L3QuNC8INC00L3QtdC8LCDQstC60LvRjtGH0LDRjyDRgdC10LPQvtC00L3Rj1xuICAgICAgICBtaW5EYXRlOiBuZXcgRGF0ZSgpXG4gICAgfSlcblxuICAgIC8vINCk0LjQu9GM0YLRgCDRgtC+0LLQsNGA0L7QslxuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5tb2JpbGUtZmlsdGVyJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ21vYmlsZS1maWx0ZXJfX29wZW4nKTtcbiAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJtb2JpbGUtZmlsdGVyX19vcGVuXCIpKSB7XG4gICAgICAgICAgICAkKGRvY3VtZW50KS5maW5kKCcuY2F0YWxvZy1uYXYnKS5mYWRlSW4oKTtcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLmZpbmQoJy5oZWFkZXInKS5hZGRDbGFzcygnaGVhZGVyX2ZpeGVkJyk7XG4gICAgICAgICAgICAkKGRvY3VtZW50KS5maW5kKCdib2R5JykuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLmZpbmQoJy5jYXRhbG9nLW5hdicpLmZhZGVPdXQoKTtcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLmZpbmQoJy5oZWFkZXInKS5yZW1vdmVDbGFzcygnaGVhZGVyX2ZpeGVkJyk7XG4gICAgICAgICAgICAkKGRvY3VtZW50KS5maW5kKCdib2R5JykuY3NzKCdvdmVyZmxvdycsICcnKTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyDQktGL0LHQvtGAINC00L7RgdGC0LDQstC60LggXG4gICAgXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5vcmRlci1kZWxpdmVyeV9fY2hvaWNlJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJChkb2N1bWVudCkuZmluZCgnLm9yZGVyLWRlbGl2ZXJ5X19jaG9pY2UnKS5yZW1vdmVDbGFzcygnb3JkZXItZGVsaXZlcnlfX2Nob2ljZV9zZWxlY3QnKTtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnb3JkZXItZGVsaXZlcnlfX2Nob2ljZV9zZWxlY3QnKTtcbiAgICB9KTtcblxuICAgIC8vINCS0YvQsdC+0YAg0LLRgNC10LzQtdC90LggXG5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm9yZGVyLXRpbWVfX2J0bicsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQoZG9jdW1lbnQpLmZpbmQoJy5vcmRlci10aW1lX19idG4nKS5yZW1vdmVDbGFzcygnb3JkZXItdGltZV9fYnRuX3NlbGVjdCcpO1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdvcmRlci10aW1lX19idG5fc2VsZWN0Jyk7XG4gICAgfSk7XG5cbiAgICAvLyDQktGL0LHQvtGAINGB0L/QvtGB0L7QsdCwINC+0L/Qu9Cw0YLRi1xuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5wYXltZW50LW1ldGhvZF9faXRlbScsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQoZG9jdW1lbnQpLmZpbmQoJy5wYXltZW50LW1ldGhvZF9faXRlbScpLnJlbW92ZUNsYXNzKCdwYXltZW50LW1ldGhvZF9faXRlbV9zZWxlY3QnKTtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygncGF5bWVudC1tZXRob2RfX2l0ZW1fc2VsZWN0Jyk7XG4gICAgfSk7IFxuICAgIFxuXG4gICAgLy8g0J7QpNC+0YDQvNC70LXQvdC40LUg0LfQsNC60LDQt9CwXG5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm9yZGVyLWJvdHRvbV9fYnRuJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJChkb2N1bWVudCkuZmluZCgnLm9yZGVyLW1vYmlsZV9fbWVzc2FnZScpLnRvZ2dsZUNsYXNzKCdvcmRlci1tb2JpbGVfX21lc3NhZ2Vfb3BlbicpO1xuICAgICAgICBpZiAoICQoZG9jdW1lbnQpLmZpbmQoJy5vcmRlci1tb2JpbGVfX21lc3NhZ2UnKS5oYXNDbGFzcygnb3JkZXItbW9iaWxlX19tZXNzYWdlX29wZW4nKSkge1xuICAgICAgICAgICAgJChkb2N1bWVudCkuZmluZCgnLmhlYWRlcicpLmFkZENsYXNzKCdoZWFkZXJfZml4ZWQnKTtcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLmZpbmQoJ2JvZHknKS5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpXG4gICAgICAgICAgICAkKGRvY3VtZW50KS5maW5kKCcubWVzc2FnZS1iYWNrX19idG4nKS5hZGRDbGFzcygnbWVzc2FnZS1iYWNrX19idG5fb3BlbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChkb2N1bWVudCkuZmluZCgnLmhlYWRlcicpLnJlbW92ZUNsYXNzKCdoZWFkZXJfZml4ZWQnKTtcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLmZpbmQoJ2JvZHknKS5jc3MoJ292ZXJmbG93JywgJycpO1xuICAgICAgICAgICAgJChkb2N1bWVudCkuZmluZCgnLm1lc3NhZ2UtYmFja19fYnRuJykucmVtb3ZlQ2xhc3MoJ21lc3NhZ2UtYmFja19fYnRuX29wZW4nKTtcbiAgICAgICAgfVxuICAgIH0pOyBcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm1lc3NhZ2UtYmFja19fYnRuJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAkKGRvY3VtZW50KS5maW5kKCcuaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2hlYWRlcl9maXhlZCcpO1xuICAgICAgICAkKGRvY3VtZW50KS5maW5kKCdib2R5JykuY3NzKCdvdmVyZmxvdycsICcnKTtcbiAgICAgICAgJChkb2N1bWVudCkuZmluZCgnLm1lc3NhZ2UtYmFja19fYnRuJykucmVtb3ZlQ2xhc3MoJ21lc3NhZ2UtYmFja19fYnRuX29wZW4nKTtcbiAgICAgICAgJChkb2N1bWVudCkuZmluZCgnLm9yZGVyLW1vYmlsZV9fbWVzc2FnZScpLnJlbW92ZUNsYXNzKCdvcmRlci1tb2JpbGVfX21lc3NhZ2Vfb3BlbicpO1xuICAgIH0pO1xuXG5cbiAgICAvLyDQnNC+0LTQsNC70YzQvdGL0LUg0L7QutC90LBcblxuICAgICQoJ1tkYXRhLW1vZGFsXScpLml6aU1vZGFsKCk7XG5cbiAgICAkKCdbZGF0YS1tb2RhbC1vcGVuXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyICR0aGlzID0gJChlLnRhcmdldCkuY2xvc2VzdCgnW2RhdGEtbW9kYWwtb3Blbl0nKSxcbiAgICAgICAgICAgIGlkID0gJHRoaXMuYXR0cignZGF0YS1tb2RhbC1vcGVuJyksXG4gICAgICAgICAgICBtb2RhbCA9ICQoJ1tkYXRhLW1vZGFsPVwiJyArIGlkICsgJ1wiXScpO1xuXG4gICAgICAgIG1vZGFsLml6aU1vZGFsKCdvcGVuJyk7XG5cbiAgICAgICAgLy8gZmlsdGVyIGluIG1vZGFsc1xuICAgICAgICBpZiAoaWQgPT09ICdmaWx0ZXInKSB7XG4gICAgICAgICAgICAkKCcuZmlsdGVyLW1vZGFsJykuY2xvbmUodHJ1ZSkuYWRkQ2xhc3MoJ2ZpbHRlci1tb2RhbF9tb2RhbCcpLmFwcGVuZFRvKCcubW9kYWxfX2ZpbHRlcicpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyAg0J7RgtC60YDRi9GC0LjQtSDQsdGD0YDQs9C10YDQsFxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuanMtb3Blbi1idXJnZXInLCAgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciAkdGhpcyA9ICQoZG9jdW1lbnQpLmZpbmQoJy5uYXZpZ2F0aW9uLW1vYmlsZScpO1xuICAgICAgICAkdGhpcy50b2dnbGVDbGFzcygnbmF2aWdhdGlvbi1tb2JpbGVfX29wZW4nKTtcbiAgICAgICAgaWYgKCR0aGlzLmhhc0NsYXNzKFwibmF2aWdhdGlvbi1tb2JpbGVfX29wZW5cIikpIHtcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLmZpbmQoJy5uYXZpZ2F0aW9uLW1vYmlsZScpLmZhZGVJbigpO1xuICAgICAgICAgICAgJChkb2N1bWVudCkuZmluZCgnLmhlYWRlcicpLmFkZENsYXNzKCdoZWFkZXJfZml4ZWQnKTtcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLmZpbmQoJ2JvZHknKS5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xuICAgICAgICAgICAgJChkb2N1bWVudCkuZmluZCgnLm5hdmlnYXRpb24tbW9iaWxlX19iYWNrJykuYWRkQ2xhc3MoJ2J0bi1jbG9zZV9fbWVudScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChkb2N1bWVudCkuZmluZCgnLm5hdmlnYXRpb24tbW9iaWxlJykuZmFkZU91dCgpO1xuICAgICAgICAgICAgJChkb2N1bWVudCkuZmluZCgnLmJyZWFkY3J1bWJzX19pdGVtJykucmVtb3ZlQ2xhc3MoJ2hlYWRlcl9maXhlZCcpO1xuICAgICAgICAgICAgJChkb2N1bWVudCkuZmluZCgnYm9keScpLmNzcygnb3ZlcmZsb3cnLCAnJyk7XG4gICAgICAgICAgICAkKGRvY3VtZW50KS5maW5kKCcubmF2aWdhdGlvbi1tb2JpbGVfX2JhY2snKS5yZW1vdmVDbGFzcygnYnRuLWNsb3NlX19tZW51Jyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmJ0bi1jbG9zZV9fbWVudScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgJChkb2N1bWVudCkuZmluZCgnLm5hdmlnYXRpb24tbW9iaWxlJykuZmFkZU91dCgpO1xuICAgICAgICAkKGRvY3VtZW50KS5maW5kKCcuYnJlYWRjcnVtYnNfX2l0ZW0nKS5yZW1vdmVDbGFzcygnaGVhZGVyX2ZpeGVkJyk7XG4gICAgICAgICQoZG9jdW1lbnQpLmZpbmQoJ2JvZHknKS5jc3MoJ292ZXJmbG93JywgJycpO1xuICAgICAgICAkKGRvY3VtZW50KS5maW5kKCcubmF2aWdhdGlvbi1tb2JpbGVfX29wZW4nKS5yZW1vdmVDbGFzcygnbmF2aWdhdGlvbi1tb2JpbGVfX29wZW4nKTtcbiAgICAgICAgJChkb2N1bWVudCkuZmluZCgnLm5hdmlnYXRpb24tbW9iaWxlX19iYWNrJykucmVtb3ZlQ2xhc3MoJ2J0bi1jbG9zZV9fbWVudScpO1xuICAgIH0pO1xuXG4gICBcbiAgICBpZigvaVBob25lfGlQYWR8aVBvZHxBbmRyb2lkL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSl7XG4gICAgICAgICAvLyDQu9C40YfQvdGL0Lkg0LrQsNCx0LjQvdC10YIgINC70LjRh9C90YvQtSDQtNCw0L3QvdGL0LVcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5sa19fYm94JywgIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQoZG9jdW1lbnQpLmZpbmQoJy5say1tb2JpbGVfX2RhdGEnKTtcbiAgICAgICAgICAgICR0aGlzLnRvZ2dsZUNsYXNzKCdsay1tb2JpbGVfX2RhdGFfb3BlbicpO1xuICAgICAgICAgICAgaWYgKCR0aGlzLmhhc0NsYXNzKFwibGstbW9iaWxlX19kYXRhX29wZW5cIikpIHtcbiAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS5maW5kKCcubW9iaWxlLWJhY2tfX2J0bicpLmFkZENsYXNzKCdtb2JpbGUtYmFja19fYnRuX29wZW4nKTtcbiAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS5maW5kKCcubGstbW9iaWxlX19kYXRhJykuZmFkZUluKCk7XG4gICAgICAgICAgICAgICAgJChkb2N1bWVudCkuZmluZCgnLmhlYWRlcicpLmFkZENsYXNzKCdoZWFkZXJfZml4ZWQnKTtcbiAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS5maW5kKCdib2R5JykuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChkb2N1bWVudCkuZmluZCgnLmxrLW1vYmlsZV9fZGF0YScpLmZhZGVPdXQoKTtcbiAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS5maW5kKCcubW9iaWxlLWJhY2tfX2J0bicpLnJlbW92ZUNsYXNzKCdtb2JpbGUtYmFja19fYnRuX29wZW4nKTtcbiAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS5maW5kKCcuaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2hlYWRlcl9maXhlZCcpO1xuICAgICAgICAgICAgICAgICQoZG9jdW1lbnQpLmZpbmQoJ2JvZHknKS5jc3MoJ292ZXJmbG93JywgJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5tb2JpbGUtYmFja19fYnRuLWFycm93JywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgJChkb2N1bWVudCkuZmluZCgnLmxrLW1vYmlsZV9fZGF0YScpLmZhZGVPdXQoKTtcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLmZpbmQoJy5tb2JpbGUtYmFja19fYnRuJykucmVtb3ZlQ2xhc3MoJ21vYmlsZS1iYWNrX19idG5fb3BlbicpO1xuICAgICAgICAgICAgJChkb2N1bWVudCkuZmluZCgnLmhlYWRlcicpLnJlbW92ZUNsYXNzKCdoZWFkZXJfZml4ZWQnKTtcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLmZpbmQoJ2JvZHknKS5jc3MoJ292ZXJmbG93JywgJycpO1xuICAgICAgICAgICAgJChkb2N1bWVudCkuZmluZCgnLmxrLW1vYmlsZV9fZGF0YV9vcGVuJykucmVtb3ZlQ2xhc3MoJ2xrLW1vYmlsZV9fZGF0YV9vcGVuJyk7XG4gICAgICAgIH0pO1xuICAgICAgICAgIC8vINC70LjRh9C90YvQuSDQutCw0LHQuNC90LXRgiDRgdC+0YXRgNCw0L3RkdC90L3Ri9C1INCw0LTRgNC10YHQsFxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmxrX19hZGRyZXNzJywgIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQoZG9jdW1lbnQpLmZpbmQoJy5say1tb2JpbGVfX2FkZHJlc3MnKTtcbiAgICAgICAgICAgICR0aGlzLnRvZ2dsZUNsYXNzKCdsay1tb2JpbGVfX2FkZHJlc3Nfb3BlbicpO1xuICAgICAgICAgICAgaWYgKCR0aGlzLmhhc0NsYXNzKFwibGstbW9iaWxlX19hZGRyZXNzX29wZW5cIikpIHtcbiAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS5maW5kKCcubW9iaWxlLWJhY2tfX2J0bicpLmFkZENsYXNzKCdtb2JpbGUtYmFja19fYnRuX29wZW4nKTtcbiAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS5maW5kKCcubGstbW9iaWxlX19hZGRyZXNzJykuZmFkZUluKCk7XG4gICAgICAgICAgICAgICAgJChkb2N1bWVudCkuZmluZCgnLmhlYWRlcicpLmFkZENsYXNzKCdoZWFkZXJfZml4ZWQnKTtcbiAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS5maW5kKCdib2R5JykuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChkb2N1bWVudCkuZmluZCgnLmxrLW1vYmlsZV9fYWRkcmVzcycpLmZhZGVPdXQoKTtcbiAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS5maW5kKCcubW9iaWxlLWJhY2tfX2J0bicpLnJlbW92ZUNsYXNzKCdtb2JpbGUtYmFja19fYnRuX29wZW4nKTtcbiAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS5maW5kKCcuaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2hlYWRlcl9maXhlZCcpO1xuICAgICAgICAgICAgICAgICQoZG9jdW1lbnQpLmZpbmQoJ2JvZHknKS5jc3MoJ292ZXJmbG93JywgJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5tb2JpbGUtYmFja19fYnRuLWFycm93JywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgJChkb2N1bWVudCkuZmluZCgnLmxrLW1vYmlsZV9fYWRkcmVzcycpLmZhZGVPdXQoKTtcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLmZpbmQoJy5tb2JpbGUtYmFja19fYnRuJykucmVtb3ZlQ2xhc3MoJ21vYmlsZS1iYWNrX19idG5fb3BlbicpO1xuICAgICAgICAgICAgJChkb2N1bWVudCkuZmluZCgnLmhlYWRlcicpLnJlbW92ZUNsYXNzKCdoZWFkZXJfZml4ZWQnKTtcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLmZpbmQoJ2JvZHknKS5jc3MoJ292ZXJmbG93JywgJycpO1xuICAgICAgICAgICAgJChkb2N1bWVudCkuZmluZCgnLmxrLW1vYmlsZV9fYWRkcmVzc19vcGVuJykucmVtb3ZlQ2xhc3MoJ2xrLW1vYmlsZV9fYWRkcmVzc19vcGVuJyk7XG4gICAgICAgIH0pO1xuICAgICAgICAgIC8vINC70LjRh9C90YvQuSDQutCw0LHQuNC90LXRgiAg0LjRgdGC0L7RgNC40Y8g0LfQsNC60LDQt9C+0LJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5sa19faGlzdG9yeScsICBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgJHRoaXMgPSAkKGRvY3VtZW50KS5maW5kKCcubGstbW9iaWxlX19oaXN0b3J5Jyk7XG4gICAgICAgICAgICAkdGhpcy50b2dnbGVDbGFzcygnbGstbW9iaWxlX19oaXN0b3J5X29wZW4nKTtcbiAgICAgICAgICAgIGlmICgkdGhpcy5oYXNDbGFzcyhcImxrLW1vYmlsZV9faGlzdG9yeV9vcGVuXCIpKSB7XG4gICAgICAgICAgICAgICAgJChkb2N1bWVudCkuZmluZCgnLm1vYmlsZS1iYWNrX19idG4nKS5hZGRDbGFzcygnbW9iaWxlLWJhY2tfX2J0bl9vcGVuJyk7XG4gICAgICAgICAgICAgICAgJChkb2N1bWVudCkuZmluZCgnLmxrLW1vYmlsZV9faGlzdG9yeScpLmZhZGVJbigpO1xuICAgICAgICAgICAgICAgICQoZG9jdW1lbnQpLmZpbmQoJy5oZWFkZXInKS5hZGRDbGFzcygnaGVhZGVyX2ZpeGVkJyk7XG4gICAgICAgICAgICAgICAgJChkb2N1bWVudCkuZmluZCgnYm9keScpLmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoZG9jdW1lbnQpLmZpbmQoJy5say1tb2JpbGVfX2hpc3RvcnknKS5mYWRlT3V0KCk7XG4gICAgICAgICAgICAgICAgJChkb2N1bWVudCkuZmluZCgnLm1vYmlsZS1iYWNrX19idG4nKS5yZW1vdmVDbGFzcygnbW9iaWxlLWJhY2tfX2J0bl9vcGVuJyk7XG4gICAgICAgICAgICAgICAgJChkb2N1bWVudCkuZmluZCgnLmhlYWRlcicpLnJlbW92ZUNsYXNzKCdoZWFkZXJfZml4ZWQnKTtcbiAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS5maW5kKCdib2R5JykuY3NzKCdvdmVyZmxvdycsICcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubW9iaWxlLWJhY2tfX2J0bi1hcnJvdycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLmZpbmQoJy5say1tb2JpbGVfX2hpc3RvcnknKS5mYWRlT3V0KCk7XG4gICAgICAgICAgICAkKGRvY3VtZW50KS5maW5kKCcubW9iaWxlLWJhY2tfX2J0bicpLnJlbW92ZUNsYXNzKCdtb2JpbGUtYmFja19fYnRuX29wZW4nKTtcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLmZpbmQoJy5oZWFkZXInKS5yZW1vdmVDbGFzcygnaGVhZGVyX2ZpeGVkJyk7XG4gICAgICAgICAgICAkKGRvY3VtZW50KS5maW5kKCdib2R5JykuY3NzKCdvdmVyZmxvdycsICcnKTtcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLmZpbmQoJy5say1tb2JpbGVfX2hpc3Rvcnlfb3BlbicpLnJlbW92ZUNsYXNzKCdsay1tb2JpbGVfX2hpc3Rvcnlfb3BlbicpO1xuICAgICAgICB9KTtcblxuICAgICAgICAgLy8g0KHQvtGA0YLQuNGA0L7QstC60LAg0YLQvtCy0LDRgNC+0LJcblxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNhdGFsb2cgLnNvcnQtZmlsdGVyJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnbW9iaWxlLWZpbHRlcl9fb3BlbicpO1xuICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJtb2JpbGUtZmlsdGVyX19vcGVuXCIpKSB7XG4gICAgICAgICAgICAgICAgJChkb2N1bWVudCkuZmluZCgnLm1vYmlsZS1maWx0ZXJfX2JvdHRvbScpLmZhZGVJbigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS5maW5kKCcubW9iaWxlLWZpbHRlcl9fYm90dG9tJykuZmFkZU91dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICAvLyDQl9Cw0LrRgNGL0YLQuNC1INC80L7QtNCw0LvQutC4INC90LAg0LzQvtCx0LjQu9C60LVcblxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYnRuLW5hdl9fbWVudScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgJCgnW2RhdGEtbW9kYWxdJykuaXppTW9kYWwoJ2Nsb3NlJyk7XG4gICAgfSk7XG5cbn0pO1xuIl19
