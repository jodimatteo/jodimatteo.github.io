//$(document).ready( function() {
//    $('.box').click( function() {
//        $(this).fadeOut('slow');
//    });
//    
//});

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname == this.pathname && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 120
                    }, 1000, "easeInOutQuad");
                    return false;
                }
        }
    });
});