//scroll to the top on refresh
$(window).on('beforeunload', function () {
    $(window).scrollTop(0);
});

$(document).ready(function () {
    const navbar = $('nav');
    const hamburger = $('nav button');

    //arrow buttons
    const arrowButtonToAboutUs = $('#move-to-about-us');
    const arrowButtonToOurProjects = $('#move-to-our-projects');
    const arrowButtonToEuropeMap = $('#move-to-europe-map');
    const arrowButtonToJoinUs = $('#move-to-join-us');
    const arrowButtonToTop = $('#move-to-top');

    //animations for each section
    const welcomeAnimations = function () {
        $('#welcome img').animate({
            width: '75%',
            opacity: 1
        }, 1000);

        $('#welcome h1').delay(1000).css({
            '-webkit-transform': 'translate(0)'
        });

        $('#move-to-about-us').delay(1000).animate({
            opacity: 1
        }, 750);

        $('#move-to-about-us').delay(1500).css('visibility', 'visible');
    };

    const aboutUsAnimations = function () {
        $('html, body').animate({
            scrollTop: $('#about-us').offset().top
        }, 1000);

        arrowButtonToOurProjects.delay(1000).animate({
            opacity: 1
        }, 750);

        arrowButtonToOurProjects.css('visibility', 'visible');
    };

    const ourProjectsAnimations = function (event) {
        $('html, body').animate({
            scrollTop: $('#our-projects').offset().top
        }, 1000);

        arrowButtonToEuropeMap.delay(1000).animate({
            opacity: 1
        }, 750);

        arrowButtonToEuropeMap.delay(1500).css('visibility', 'visible');
    };

    const europeMapAnimations = function (event) {
        $('html, body').animate({
            scrollTop: $('#europe-map').offset().top
        }, 1000);

        arrowButtonToJoinUs.delay(1000).animate({
            opacity: 1
        }, 750);

        arrowButtonToJoinUs.delay(1500).css('visibility', 'visible');
    };

    const joinUsAnimations = function (event) {

        $('html, body').animate({
            scrollTop: $('#join-us').offset().top
        }, 1000);


        arrowButtonToTop.delay(1000).animate({
            opacity: 1
        }, 750);

        arrowButtonToTop.delay(1500).css('visibility', 'visible');
    };

    const moveToTopAnimations = function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);

        navbar.css('opacity', '0');

        navbar.delay(1200).animate({
            opacity: 1
        }, 500);
    };

    welcomeAnimations();

    //invoking animations for arrow buttons
    arrowButtonToAboutUs.click(aboutUsAnimations);
    arrowButtonToOurProjects.click(ourProjectsAnimations);
    arrowButtonToEuropeMap.click(europeMapAnimations);
    arrowButtonToJoinUs.click(joinUsAnimations);
    arrowButtonToTop.click(moveToTopAnimations);

    //invoking events on scroll
    var updateWebsiteOnScroll = setInterval(function () {
        $(window).scroll(function () {
            //setting styles for navbar
            if ($(window).scrollTop() >= 3 / 4 * $(window).height()) {
                navbar.css({
                    'color': '#ee2229',
                    'background-color': 'rgb(255, 255, 255)',
                    'box-shadow': '0px 2px 8px 0px #552229'
                });
                hamburger.css({
                    'color': '#ee2229'
                });
            } else {
                navbar.css({
                    'color': 'rgb(255, 255, 255)',
                    'background-color': 'transparent',
                    'box-shadow': '0px 2px 8px 0px transparent'
                });
                hamburger.css({
                    'color': '#ffffff'
                });
            }
        });
    }, 300);
});
