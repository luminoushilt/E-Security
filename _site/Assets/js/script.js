jQuery.noConflict();var esecurity=function(n){function o(){var o=n(".mobile-nav-toggle"),e=n(".navi"),t=n(".intro-img, .intro"),i=n("a");o.on("click",function(){n(this).toggleClass("is-open"),e.toggleClass("menu-open"),t.toggleClass("menu-open")}),i.on("click",function(){e.toggleClass("menu-open"),o.toggleClass("is-open"),t.toggleClass("menu-open")})}function e(){var o=n("html, body"),e=n(".back-to-top"),t=300;e.click(function(n){o.animate({scrollTop:0},t),n.preventDefault()}),n(window).scroll(function(){var o=n(this),i=0,l=o.scrollTop();console.log(l),l>i?e.is(":visible")||e.fadeIn(t):e.hide()})}function t(){var o=n(".res-btn, [href='#Residential']"),e=n(".com-btn, [href='#Commercial']"),t=n("#Commercial");o.click(function(o){n(".mobile-nav-toggle"),n(".navi"),n(".intro-img, .intro");t.load("residential.html"),i(),o.preventDefault()}),e.click(function(o){n(".mobile-nav-toggle"),n(".navi"),n(".intro-img, .intro");t.load("commercial.html"),i(),o.preventDefault()})}function i(){var o=n("a[href*=#]:not([href=#])"),e=300,t=n(".navi"),i=n(".hero-unit");o.on("click",function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var o=n(this.hash),l=n("html, body");if(o=o.length?o:n("[name="+this.hash.slice(1)+"]"),i.removeClass("is-open"),t.removeClass("is-open"),o.length)return l.animate({scrollTop:o.offset().top},e),!1}})}n(document).ready(function(){o(),e(),t(),i()})}(jQuery);