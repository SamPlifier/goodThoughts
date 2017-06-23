const navLink = $('.topNav')[0];
const nav = $('#myTopNav')[0];
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top - 50
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
            .fadeIn(2000)
            .delay(2000)
            .fadeOut(2000, showNextQuote);
    }

    showNextQuote();

})();
