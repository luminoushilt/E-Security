jQuery.noConflict();
(function($) {

    var $page = $('html, body');
    var $back2top = $('.back-to-top');
    var duration = 300;
    var $menuToggle = $('.mobile-nav-toggle');
    var $menu = $('.navi');
    var $intro = $('.intro-img, .intro');
    var $target = $('.navi a');
    var $resBtn = $(".res-btn, [href='#Residential']");
    var $comBtn = $(".com-btn, [href='#Commercial']");
    var $services = $('.services');
    var anchorTags = $('a[href*=#]:not([href=#])');
    var hero = $('.hero-unit');

    //Auto scrolling
    anchorTags.on('click', function smoothScroll() {
        if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);

            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            hero.removeClass('is-open');
            $menu.removeClass('is-open');
            if(target.length) {
                $page.animate({
                    scrollTop: target.offset().top
                }, duration);
                return false;
            }
        }
    });

    //image slider
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

    $(window).scroll( function () {
        var $self = $(this),
            height = 0,
            top = $self.scrollTop();

        if (top > height) {
            if (!$back2top.is(':visible')) {
                $back2top.fadeIn(duration);
            }
        } else {
                $back2top.hide();
        }
    });

    // Dynamic Date
    $('.copyright-date').text((new Date).getFullYear() + ' ');

    $menuToggle.on('click', function(event) {
        event.preventDefault();
        $(this).toggleClass('is-open');
        $menu.toggleClass('menu-open');
        $intro.toggleClass('menu-open');
    });

    // Toggles Mobile Menu
    $target.on('click', function() {
        $menu.toggleClass('menu-open');
        $menuToggle.toggleClass('is-open');
        $intro.toggleClass('menu-open');
    });

    $back2top.on('click', function(event) {
        event.preventDefault();
        $page.animate({
                scrollTop: 0
        }, duration);
    });

    $resBtn.on('click', function(event) {
        event.preventDefault();
        $services.load('Assets/include/residential.html');
    });

    $comBtn.on('click', function(event) {
        event.preventDefault();
        $services.load('Assets/include/commercial.html');
    });
})(jQuery);