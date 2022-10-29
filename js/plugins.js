$(document).ready(function() {
    // content on main area
    mark_content();

    // secondary nav menu
    secondary_nav();

    // skitter-slider
    $('.box_skitter_large').skitter({});

    // rslides
    $('.rslides').responsiveSlides();

    // mobile nav
    show_nav();

    // animations
    animate_elements();

    // swapping elements
    swap_elements();

    // $(window).resize(function(){})
    execute_functions_on_window_resize();

    // $(window).scroll(function(){})
    window_on_scroll_functions();
});

// declare variables
var window_width = $(window).width();
var hamburger = $('.hamburger-container');
var hamburger_close = $('.hamburger-close');
var main_nav = $('.page-nav');
var main_nav_mobile = $('.page-nav-mobile');
var webHeight = $(document).height();
var toggle_secondary_button = $('.page-nav li span');

// content on main area
function mark_content() {
    $("main * :not('h1'), #banner, aside, #middle, #bottom1, #bottom2, #bottom3, footer p").not('.woocommerce *').each(function() {
        var regex1 = /(?![^<]+>)((\+\d{1,2}[\s.-])?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{6})/g;
        var regex2 = /(?![^<]+>)((\+\d{1,2}[\s.-])?\(?\d{3}\)?[\s.-]?\d{4}[\s.-]?\d{4})/g;
        var regex = /(?![^<]+>)((\+\d{1,2}[\s.-])?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4})/g;
                $(this).html(
                        $(this).html()
                        .replace(/Company Name/gi, "<mark class='comp'>$&</mark>")
                        .replace(regex1, "<mark class='main_phone'>$&</mark>").replace(regex2, "<mark class='main_phone'>$&</mark>").replace(regex, "<mark class='main_phone'>$&</mark>"));
        });
    
        $("main a[href]").each(function() {
            var newHref = $(this).attr('href').replace("<mark class='comp'>", "").replace("</mark>", "");
                $(this).attr('href', newHref);
        });
    
        // Forms on content area
        var form = $('main').find('#myframe');
            if(form.length > 0) {
            document.getElementById('myframe').onload = function(){
                calcHeight();
        };
    }
}

// mobile menu functionality
function show_nav() {   
    if(window_width <= 800) {
        hamburger.click(function() {
            main_nav_mobile.addClass('show-nav');
            $('body').addClass('no-scroll');
            $('.mobile-menu').addClass('show');
        });
        hamburger_close.click(function() {
            main_nav_mobile.removeClass('show-nav');
            $('body').removeClass('no-scroll');
            $('.mobile-menu').removeClass('show');
        });
    } else {
        main_nav_mobile.removeClass('show-nav');
        $('body').removeClass('no-scroll');
        $('.mobile-menu').removeClass('show');
    }
}

// secondary nav menu
function secondary_nav() {
    // Add class to tab having drop down
    $( ".page-nav li:has(ul)").find('span i').addClass("fa-caret-down");


    //Multi-line Tab
    toggle_secondary_button.click(function(){
        $(this).parent('li').siblings('li').children('ul').slideUp(400, function() {
            $(this).removeAttr('style');
        });

        $(this).parent('li').siblings('li').find('.fa').removeClass("fa-caret-up").addClass("fa-caret-down");

        $(this).parent('li').children('ul').slideToggle();
        $(this).children().toggleClass("fa-caret-up").toggleClass("fa-caret-down");
    });
}

// animations
function animate_elements() {
    if(window_width > 1000) {
        new WOW().init();
    }
}

// swapping elements (DOM manipulation)
function swap_elements() {

    // window-width: 800px and below
    if(window_width <= 800) {
        $('header').insertAfter('#nav-area');
        main_nav.insertAfter('.hamburger-close-container');
        $('.main-logo').prependTo('#nav-area .wrapper');

        // window-width: 1000px -> 801px
    } else if(window_width > 800 && window_width <= 1000) {
        $('header').insertBefore('#nav-area');
        main_nav.insertBefore('.mobile-menu');
        $('.main-logo').insertBefore('.head-info');

        // window-width: 1001px and up
    } else {
        $('header').insertBefore('#nav-area');
        main_nav.insertBefore('.mobile-menu');
        $('.main-logo').insertBefore('.head-info');
    }

}


// window resize || switching device orientation
function execute_functions_on_window_resize() {
    $(window).resize(function(){
        window_width = $(this).width();
        swap_elements();
        show_nav();
        animate_elements();
    });
}

// back to top
$('.back-to-top').click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 900);
    return false;
});

// window scroll
function window_on_scroll_functions() {
    
    // hide back to top button by default
    $(".back-to-top").fadeOut();
    
    $(window).scroll(function() {
        var windowScroll = $(this).scrollTop();

        if (windowScroll > (webHeight * 0.5) && window_width <= 600 ) {
            $(".back-to-top").fadeIn();
        } else{
            $(".back-to-top").fadeOut();
        };

        // For (AddThis) Plugins
        if($('body #at-share-dock').hasClass('at-share-dock')) {
            $('.back-to-top').addClass('withAddThis_plugins');
            $('.footer-bottom').addClass('withAddThis_ftr_btm');
        } else {
            $('.back-to-top').removeClass('withAddThis_plugins');
            $('.footer-bottom').removeClass('withAddThis_ftr_btm');
        }
        // End (AddThis) Plugins
    });
}
