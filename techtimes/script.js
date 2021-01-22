const menuToggle = document.querySelector('.menu-toggle input');
const route = document.querySelector('.navigation .route');

menuToggle.addEventListener('click', function() {
    route.classList.toggle('slide');
});