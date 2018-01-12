$(document).ready(function () {
// Исправление бага в IE на телефонах
// Copyright 2014-2017 The Bootstrap Authors
// Copyright 2014-2017 Twitter, Inc.
// Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement('style');
        msViewportStyle.appendChild(
            document.createTextNode(
                '@-ms-viewport{width:auto!important}'
            )
        );
        document.head.appendChild(msViewportStyle)
    }

    $(".ui-field").change(function () {
        if ($(this).val().trim().length) {
            $(this).parent().addClass("field-filled");
        } else {
            $(this).parent().removeClass("field-filled");
        }
    });

    $('.file-style, select').styler();

    var swiper = new Swiper('.partners-carousel', {
        slidesPerView: 4,
        spaceBetween: 50,
        navigation: {
            nextEl: '.partners-carousel-next',
            prevEl: '.partners-carousel-prev'
        },
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });


    var headerSearch = $('.header-search'),
        headerSearchOpened = 'header-search-opened';

    $('.header-icon').click(
        function () {
            headerSearch.toggleClass(headerSearchOpened);
        }
    );

    $('.header-cancel').click(
        function () {
            headerSearch.removeClass(headerSearchOpened);
        }
    );

    var headerNav = $('.header-nav');

    $('.nav-active').click(
        function () {
            headerNav.toggleClass('header-nav__open');
        }
    );


    //навигация - плавный скроллинг к якорю
    $(".home-integrations__quest .btn").on("click", function (event) {
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

