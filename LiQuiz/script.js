// WELCOME ALERT
const darkBG = document.getElementById('dark-bg');
const welcome = document.querySelector('.welcome');
const buttonWelcome = welcome.querySelector('.close');

document.body.classList.add('stop-scrolling');

if(localStorage.getItem('welcome') == 'YES'){
    document.body.removeChild(welcome);
    document.body.removeChild(darkBG);
    document.body.classList.remove('stop-scrolling');
} else {
    buttonWelcome.addEventListener('click', (e) => {
        // welcome.style.display = 'none';
        // darkBG.style.display = 'none';
    
        document.body.removeChild(welcome);
        document.body.removeChild(darkBG);
        document.body.classList.remove('stop-scrolling');
        
        localStorage.setItem('welcome', 'YES');
        e.preventDefault();

        // BEFORE WORK
        // if(localStorage.getItem('welcome', 'YES')){
        //     welcome.style.disply = 'none';
        //     darkBG.style.disply = 'none';
        // } else {
        //     const welcomeHide = localStorage.setItem('welcome', 'YES')
        // }
    });
}