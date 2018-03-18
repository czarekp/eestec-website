//scroll to the top on refresh
$(window).on('beforeunload', function () {
    $(window).scrollTop(0);
});

$(document).ready(function () {
    const navbar = $('nav');

    //invoking events on scroll
    var updateWebsiteOnScroll = setInterval(function () {
        $(window).scroll(function () {
            //setting another styling for navbar
            if ($(window).scrollTop() >= 3 / 4 * $(window).height()) {
                navbar.css({
                    'color': '#ee2229',
                    'background-color': 'rgb(255, 255, 255)',
                    'box-shadow': '0px 2px 8px 0px #552229'
                });
            } else {
                navbar.css({
                    'color': 'rgb(255, 255, 255)',
                    'background-color': 'transparent',
                    'box-shadow': '0px 2px 8px 0px transparent'
                });
            }
        });
    }, 300);
});
