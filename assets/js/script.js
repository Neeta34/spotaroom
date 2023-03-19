const hamburger = document.querySelector('.hamburger-menu');
hamburger.addEventListener('click', function() {

});

const dep = document.querySelector('#menu');

hamburger.addEventListener('click', () => {
    dep.classList.toggle('show');
});