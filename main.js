const navLink = $('.topNav')[0];
const nav = $('#myTopNav')[0];
const topMenu = $('a[href^="#"]');
topMenu.on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top - 75
        }, 1000);
    }
});
function addRespClass() {
    if (nav.className === 'topNav') {
        nav.className += ' responsive';
        setTimeout(function() {
            nav.className += ' change';
        }, 450);
    } else if (nav.className === 'topNav responsive change') {
        nav.className = 'topNav change';
        setTimeout(function() {
            nav.className = 'topNav';
        }, 450)
    }
}
navLink.addEventListener('click', addRespClass, false);

(function() {
    var quotes = $(".quotes");
    var quoteIndex = -1;
    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(1500)
            .delay(6000)
            .fadeOut(1500, showNextQuote);
    }
    showNextQuote();
})();
