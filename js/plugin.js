/*jslint browser: true*/
/*global $, window, console, */
$(function () {
    'use strict';
    // slider height
    $('.slider').height($(window).height() - ($('.upper-bar').innerHeight() + $('navbar').innerHeight()));
    
    //.feotureed-work
    $('.feotureed-work ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === '.all') {
            $('.slid-image .col-sm').css('opacity', '1');
        } else {
            $('.slid-image .col-sm').css('opacity', '.08');
            $($(this).data('class')).parent().css('opacity', 1);
        }
    });
    
    var classList    = ['class-one', 'class-tow', 'class-three', 'class-fuor', 'class-fifth'],
        randKey      = Math.floor(Math.random() * classList.length),
        now          = new Date(),
        hours        = now.getHours(),
        minuts       = now.getMinutes(),
        scrolTop     = $("#scroll"),
        seconds      = now.getSeconds();
    document.body.setAttribute('class', classList[randKey]);
    document.getElementById('clocke').textContent = hours + ':' + minuts + ':' + seconds;
    $(window).scroll(function () {
        
        if ($(this).scrollTop() >= 500) {
            scrolTop.show();
        } else {
            scrolTop.hide();
        }
    });
    scrolTop.click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 700);
    });
    
});

function clockTime() {
    'use strict';
    var now     = new Date(),
        hours   = now.getHours(),
        minuts  = now.getMinutes(),
        seconds = now.getSeconds();
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minuts < 10) {
        minuts = '0' + minuts;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    document.getElementById('clocke').textContent = hours + ':' + minuts + ':' + seconds;
}
window.onload = function () {
    'use strict';
    setInterval(clockTime, 500);

};