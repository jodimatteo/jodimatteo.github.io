var API_KEY = "AIzaSyCscG5LzyJWMr1PQWfVLmzBECSgfTkW3G4";

// Google Maps Options
// options = $.extend({
//     scrollwheel: false,
// }, options);

// function httpGetAsync(url, callback)
// {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.onreadystatechange = function() { 
//         if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
//             callback(xmlHttp.responseText);
//     }
//     xmlHttp.open("GET", url, true); // true for asynchronous 
// }

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname == this.pathname && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 80
                }, target.length * 1000, "easeInOutQuad");
            return false;
            }
        }
    });
});

function selector_event_switch(selector, target, Class, enter, exit) {
    jQuery(function($){
        $(target).addClass(Class);
        $(selector).on(enter, function() {
            $(target).removeClass(Class);
        });
        $(selector).on(exit, function() {
            $(target).addClass(Class);
        });
    });
}

$(document).ready(
    selector_event_switch('#mapsec','#map','scrolloff','click','mouseleave')
);

$(function(){
    $(document).on('scroll load', function(){
        if ($(this).scrollTop() >= $('.section-text#about').height() - 110){
            $('.topbutt').css({
                'opacity' : '1'
            });
            $('.topbutt').removeClass('scrolloff');
        }
        else {
            $('.topbutt').css({
                'opacity' : '0'
            });
            $('.topbutt').addClass('scrolloff');
        }
    });
});