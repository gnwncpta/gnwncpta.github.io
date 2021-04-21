const hamburger = document.querySelector('.hamburger');
const closeButton = document.querySelector('.close');
const hamburgerOverlay = document.querySelector('#kls');
const blackScreen = document.querySelector('.soft-black');

hamburger.addEventListener('click', function(){
    hamburgerOverlay.classList.toggle('hide-overlay');
    blackScreen.classList.toggle('hidden');
    hamburgerOverlay.classList.toggle('hamburger-overlay');
})

closeButton.addEventListener('click', function(){
    hamburgerOverlay.classList.toggle('hamburger-overlay');
    blackScreen.classList.toggle('hidden');
    hamburgerOverlay.classList.toggle('hide-overlay');
})