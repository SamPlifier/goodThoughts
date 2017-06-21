const hamburger = document.getElementsByClassName('hamburger')[0];
const nav = document.getElementById('myTopNav');

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
hamburger.addEventListener('click', addRespClass, false);
