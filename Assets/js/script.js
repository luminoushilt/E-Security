function mobileMenu() {
    var menuToggle = $('.mobile-nav-toggle');
    var menu = $('.navi');

    menuToggle.on('click', function() {
        $(this).toggleClass('is-open');
        menu.toggleClass('menu-open');
    });
}

function backToTop() {
    var $page = $('html, body');
	var $back2top = $('.back-to-top');
    var duration = 300;

	$back2top.click(function (jump) {
		$page.animate({
			scrollTop: 0
		}, duration);
		jump.preventDefault();
	});

	$(window).scroll( function () {
		var $self = $(this),
			height = 0,
			top = $self.scrollTop();

		console.log(top);

		if (top > height) {
			if (!$back2top.is(':visible')) {
				$back2top.fadeIn(duration);
				}
			} else {
				$back2top.hide();
			}

		});
}

function serviceSwap() {
    var resBtn = $(".res-btn, [href='#Residential']");
    var comBtn = $(".com-btn, [href='#Commercial']");
    var services = $('section.services');

    resBtn.click(function(jump) {
        services.load('residential.html');
        jump.preventDefault();
    });

    comBtn.click(function(jump) {
        services.load('commercial.html');
        jump.preventDefault();
    });
}

$(document).ready(function() {
    mobileMenu();
    backToTop();
    serviceSwap();
});
