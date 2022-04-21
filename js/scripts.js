// window.addEventListener("DOMContentLoaded", (function () {
//     var e = document.querySelector(".mobile-menu"),
//         t = document.querySelector(".header-nav"),
//         s = document.querySelector(".mobile-menu-line-1"),
//         i = document.querySelector(".mobile-menu-line-2"),
//         c = document.querySelector(".mobile-menu-line-3");
//     e.addEventListener("click", (function () {
//         t.classList.contains("nav-active") ? (this.style.position = "absolute", t.classList.remove("nav-active"), s.classList.remove("switched"), i.classList.remove("switched"), c.classList.remove("switched")) : (this.style.position = "fixed", t.classList.add("nav-active"), s.classList.add("switched"), i.classList.add("switched"), c.classList.add("switched"))
//     }))
// }));

$(document).ready(function() {
    // Меню
    $('.mobile-menu, .header-menu li a').on('click', function () {
        if (!$('.header-nav').hasClass('nav-active')) {
            $('.mobile-menu').css('position', 'fixed');
            $('.header-nav').addClass('nav-active');
            $('.mobile-menu-line-1,.mobile-menu-line-2,.mobile-menu-line-3').addClass('switched')
        } else {
            $('.mobile-menu').css('position', 'absolute');
            $('.header-nav').removeClass('nav-active')
            $('.mobile-menu-line-1,.mobile-menu-line-2,.mobile-menu-line-3').removeClass('switched')
        }
    })
        /* Якорь */
        $(".header-menu li a, .footer-menu li a").click(function (h) {
            h.preventDefault();
            var f = $(this).attr("href"),
                g = $(f).offset().top;
            $("body,html").animate({
                scrollTop: g
            }, 1500)
        });
        // $('.header-menu li a').on('click', function(){

        // })
        // Проверка форм
    $(function () {
        var check = $('.check', this),
            email = $('.input-mail', this),
            message = $('.alert-message', this),
            button = $('.button-form', this);
        $(".form").on("submit", function () {
            var check = $('.check', this),
                message = $('.alert-message', this),
                reNone = /.+/,
                email = $('.input-mail', this),
                button = $('.button-form', this);
            if (!email.val().match(reNone)) {
                message.text('Введите email').slideDown(500);
                return false;
            }
            if (!check.prop("checked")) {
                check.next().css({
                    'color': 'red',
                    'transition': 'all .4s ease'
                });
                check.next().children().css({
                    'color': 'red',
                    'transition': 'all .4s ease'
                });
                message.text('Подтвердите соглашение').slideDown(500);
                return false;
            }
            if (email.val() && check) {

                button.text('Отправляем...');
                setTimeout(function () {
                    button.text('Отправлено!');
                }, 500);
                return true
            }
        });
        email.click(function () {
            // email.css({"borderColor": "rgb(25, 10, 12)",'transition':'all .4s ease'});
            message.slideUp(500);
        });
        check.click(function () {
            check.next().css({
                "color": "#000",
                'transition': 'all .4s ease'
            });
            check.next().children().css({
                "color": "#000",
                'transition': 'all .4s ease'
            });
            message.slideUp(500);
        });
    });
        // Модалка
        $('.button-up').magnificPopup({
            type: 'inline',
            midClick: true,
            mainClass: 'mfp-fade'
        });
        $('.text-rev-link-modal').magnificPopup({
            type: 'image',
            mainClass: 'mfp-fade',
            gallery: {
                enabled: true
            }
        });
        // Отзывы
    $('.revs-slider-text').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        speed: 300,
        arrows: true,
        centerPadding: '20px',
        // adaptiveHeight: true,
        centerMode: true,
        // appendArrows: '.video-revs-arrows-2',
        responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1
            }}
            // {
            // breakpoint: 992,
            // settings: {
            //     slidesToShow: 3
            // }
        // }
        ]
    });


/*Конец документа*/
});