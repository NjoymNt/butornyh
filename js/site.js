
// MENU GREEN LINE //

$(function () {
    var dropDown = $('.drop-hover-helper');
    var greenLine = $('.bottom-greenline');

    dropDown.hover(
        function(){ greenLine.addClass('bottom-greenline-helper') },
        function(){ greenLine.removeClass('bottom-greenline-helper') }
    );
});

// STEP SLIDER //

$(document).ready(function () {

    var stepLeft = $('.step-left');
    var stepRight = $('.step-right');
    var sliderHolder = $('.step-slider');
    var animSpeed = 500;

    //box counter//
    var stepBox = $('.step-slider-item-box');
    var boxCount = stepBox.length;
    var visibleBox = 4;

    //step width//
    if (window.matchMedia('(min-width: 1200px)').matches) {
        var stepping = '292px';
    }

    if (window.matchMedia('(max-width: 1200px)').matches) {
        var stepping = '242px';
    }

    if (window.matchMedia('(max-width: 992px)').matches) {
        var stepping = '374px';
    }

    //click counter//
    var clickCounter = 0;

    //right steps//
    stepRight.click(function() {
        if (clickCounter >= boxCount - visibleBox ) {
            sliderHolder.animate({'margin-left': '-=0' }, animSpeed);
        } else {
            sliderHolder.animate({'margin-left': '-=' +stepping}, animSpeed);
            clickCounter += 1;
        }
    });

    //left steps//
    stepLeft.click(function() {
        if (clickCounter == 0) {
            sliderHolder.animate({'margin-left': '+=0'}, animSpeed);
        } else {
            sliderHolder.animate({'margin-left': '+=' +stepping}, animSpeed);
            clickCounter -= 1;
        }
    });
});


// BACK TO TOP //

$(document).ready(function() {
    var offset = 250;
    var duration = 300;
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(duration);
        } else {
            $('.back-to-top').fadeOut(duration);
        }
    });

    $('.back-to-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
});


// MOBILE MENU //

(function($) {
    $(document).ready(function() {
        $.slidebars();
    });
}) (jQuery);


// FANCYBOX //

$(function() {
    $('.fancybox').fancybox({
        padding : 0
    });
});

