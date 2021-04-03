// Scroll to Top
// jQuery.noConflict();
/*jslint browser: true*/
/*global  jQuery*/
(function ($) {
    'use strict';
    $('body').scroll(function () {
        if ($(this).scrollTop() >= 50) {
            // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200); // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200); // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function () {
        // When arrow is clicked
        $('body,html').animate(
            {
                scrollTop: 0 // Scroll to top of body
            },
            500
        );
    });
}(jQuery));

// jQuery for page scrolling feature - requires jQuery Easing plugin
// jQuery.noConflict();
(function ($) {
    'use strict';
    $(function () {
        $('a.page-scroll').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body')
                .stop()
                .animate(
                    {
                        scrollTop: $($anchor.attr('href')).offset().top
                    },
                    1500,
                    'easeInOutExpo'
                );
            event.preventDefault();
        });
    });
}(jQuery));

jQuery('.skillbar').each(function () {
    'use strict';
    jQuery(this).find('.skillbar-bar').animate({
        width: jQuery(this).attr('data-percent')
    }, 2000);
});
// jQuery.noConflict();
// (function ($) {
//     var offsetTop = document.querySelector('#skills').offset().top;
//     document.querySelector(window).scroll(function () {
//         var height = document.querySelector(window).height();
//         if (document.querySelector(window).scrollTop + height > offsetTop) {
//             jQuery('.skillbar').each(function () {
//                 jQuery(this).find('.skillbar-bar').animate({
//                     width: jQuery(this).attr('data-percent')
//                 }, 2000);
//             });
//         }
//     });

// })(jQuery);


// typer for hello
var TxtRotate = function (el, toRotate, period) {
    "use strict";
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 1) || 1000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
    "use strict";
    var i = this.loopNum % this.toRotate.length, fullTxt = this.toRotate[i], that = this, delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
    if (this.isDeleting) {
        delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum = this.loopNum + 1;
        delta = 200;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};