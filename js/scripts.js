(function ($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        
        event.preventDefault();
    });
    
    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 100
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function () {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 50
        }
    });
    $('#mainNav').on('affix.bs.affix', function(){
	    $('.logo').attr('src','img/yubuy.svg');
    });
    $('#mainNav').on('affix-top.bs.affix', function(){
	    $('.logo').attr('src','img/yubuyWhite.svg');
    });
	$('#countdown').countdown('2017/03/30', function(event) {
		$(this).html(event.strftime('<span class="weeks">%w</span> <span class="weeks-txt">semanas</span> <span class="days">%d</span> <span class="days-txt">dias</span> <span class="hours">%H:%M:%S</span>'));
	});

}(jQuery)); // End of use strict
