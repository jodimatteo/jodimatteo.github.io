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
                    scrollTop: target.offset().top - 100
                }, 1000, "easeInOutQuad");
            return false;
            }
        }
    })
});

$(document).ready(function(){
    $('#map').addClass('scrolloff');
    $('#home').on('click', function() {
        $('#map').removeClass('scrolloff');
    });
    $('#home').on('mouseleave', function() {
        $('#map').addClass('scrolloff');
    })
})