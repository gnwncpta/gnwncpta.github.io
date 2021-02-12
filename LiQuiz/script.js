const nav = document.querySelectorAll('header ul li a');

nav.forEach((e) => {
    e.addEventListener('mouseover', (el) => {
        const target = el.target;
        target.classList.add('dot');
       
        if(target.classList.contains('sign-up')){
            target.classList.remove('dot');
        }

        target.addEventListener('mouseleave', (e) => {
            target.classList.remove('dot');
        });
    });
});

