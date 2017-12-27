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
            $(this).addClass("field-filled");
        } else {
            $(this).removeClass("field-filled");
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
});

