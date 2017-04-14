jQuery.noConflict();
var esecurity = (function($) {

    // Toggles Mobile Menu
    function mobileMenu() {
        var $menuToggle = $('.mobile-nav-toggle');
        var $menu = $('.navi');
        var $intro = $('.intro-img, .intro');
        var $target = $('a');

        $menuToggle.on('click', function() {
            $(this).toggleClass('is-open');
            $menu.toggleClass('menu-open');
            $intro.toggleClass('menu-open');
        });

        $target.on('click', function() {
            $menu.toggleClass('menu-open');
            $menuToggle.toggleClass('is-open');
            $intro.toggleClass('menu-open');
        });
    }

    function backToTop() {
        var $page = $('html, body');
        var $back2top = $('.back-to-top');
        var duration = 300;
​
        $back2top.click(function (jump) {
            $page.animate({
                scrollTop: 0
            }, duration);
            jump.preventDefault();
        });
​
        $(window).scroll( function () {
            var $self = $(this),
                height = 0,
                top = $self.scrollTop();
​
            console.log(top);
​
            if (top > height) {
                if (!$back2top.is(':visible')) {
                    $back2top.fadeIn(duration);
                    }
                } else {
                    $back2top.hide();
                }
​
            });
    }

    // Loads different services sections upon demand/click
    function serviceSwap() {
        var $resBtn = $(".res-btn, [href='#Residential']");
        var $comBtn = $(".com-btn, [href='#Commercial']");
        var $services = $('.services');

        $resBtn.click(function(jump) {
            var $menuToggle = $('.mobile-nav-toggle');
            var $menu = $('.navi');
            var $intro = $('.intro-img, .intro');

            $services.load('residential.html');
            smoothScroll();
            jump.preventDefault();
        });

        $comBtn.click(function(jump) {
            var $menuToggle = $('.mobile-nav-toggle');
            var $menu = $('.navi');
            var $intro = $('.intro-img, .intro');

            $services.load('commercial.html');
            smoothScroll();
            jump.preventDefault();
        });
    }

    // Auto scrolling
    function smoothScroll() {
        var anchorTags = $('a[href*=#]:not([href=#])');
        var duration = 300;
        var menu = $('.navi');
        var hero = $('.hero-unit');

        anchorTags.on('click', function() {
            if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                var page = $('html, body');

                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                hero.removeClass('is-open');
                menu.removeClass('is-open');
                if(target.length) {
                    page.animate({
                        scrollTop: target.offset().top
                    }, duration);
                    return false;
                }
            }
        });
    }

    //image slider
    function securitySlider(event) {
        $('#slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            prevArrow: $('#prev-0'),
            nextArrow: $('#next-0')
        });

        event.preventDefault();
    }

    $(document).ready(function() {
        mobileMenu();
        backToTop();
        serviceSwap();
        smoothScroll();
        securitySlider();
    });

})(jQuery);