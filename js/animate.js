var $animation_elements = $('.animation-element');
var $window = $(window);


function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view');
        } else {
            $element.removeClass('in-view');
        }
    });
}

$window.trigger('scroll');
$window.on('scroll resize', check_if_in_view);


// Check if element is visible on viewport
var $cardClass = $('.card');
var $homeLinkId = $('#homeLink');
var $teamId = $("#team");

window.onscroll = function scrollFunction() {
    if (firtScrollToFlipCard) {
        if (document.body.scrollTop >= $teamId.offset().top - 500) {
            $cardClass.css('transform', 'rotateY(180deg)');
            firstAutorsFlip();
        }
    }
    if (document.body.scrollTop > 200) {
        $homeLinkId.show();
    } else {
        $homeLinkId.hide();
    }
};

// rotation autors name as they apper first time on the screen

function firstAutorsFlip() {
    var cardId;
    var i = 1;
    var temeTimeout = setTimeout(function () {
        var timeInterval = setInterval(function () {
            cardId = '#authorName' + i;
            $(cardId).css('transform', 'rotateY(0deg)');
            i++;
            if (i === 5) {
                clearTimeout(temeTimeout);
                clearTimeout(timeInterval);
                firtScrollToFlipCard = 0;
            }
        }, 300);
    }, 400)
}

// about authors animations

var firtScrollToFlipCard = 1;

$cardClass.hover(function () {
    $(this).css('transform', 'rotateY(180deg)');
}, function () {
    $(this).css('transform', 'rotateY(0deg)');
});