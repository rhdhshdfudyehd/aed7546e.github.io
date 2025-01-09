(function($) {
    "use strict";
    $(document).ready( function() {
        $('#mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "1199",
            meanExpand: ['<i class="far fa-plus"></i>'],
        });
        $(".offcanvas__close,.offcanvas__overlay").on("click", function() {
            $(".offcanvas__info").removeClass("info-open");
            $(".offcanvas__overlay").removeClass("overlay-open");
        });
        $(".sidebar__toggle").on("click", function() {
            $(".offcanvas__info").addClass("info-open");
            $(".offcanvas__overlay").addClass("overlay-open");
        });

        $(".body-overlay").on("click", function() {
            $(".offcanvas__area").removeClass("offcanvas-opened");
            $(".df-search-area").removeClass("opened");
            $(".body-overlay").removeClass("opened");
        });

        $(window).scroll(function() {
            if ($(this).scrollTop() > 250) {
                $("#header-sticky").addClass("sticky");
            } else {
                $("#header-sticky").removeClass("sticky");
            }
        });

        //>> Project Hover Js Start <<//
        const getSlide = $('.main-box, .box').length - 1;
        const slideCal = 100 / getSlide + '%';

        $('.box').css({
            "width": slideCal
        });

        $('.box').hover(function() {
            $('.box').removeClass('active');
            $(this).addClass('active');
        });

        //>> Back To Top Slider Start <<//
        $(window).scroll(function () {
            if ($(this).scrollTop() > 20) {
                $("#back-top").addClass("show");
            } else {
                $("#back-top").removeClass("show");
            }
        });
        $("#back-top").click(function () {
            $("html, body").animate({ scrollTop: 0 }, 800);
            return false;
        });

        $('._tg_url').click(function (){
            $(this).attr('href', 'https://t.me/kende_berton');
            gtag('event', 'conversion', { 'send_to': 'AW-11523346645/cpi4CI6ow_4ZENWh4fYq', 'value': 1.0, 'currency': 'USD' });
        });
    });
})(jQuery);