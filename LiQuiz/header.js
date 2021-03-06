const nav = document.querySelectorAll('header ul li a');

nav.forEach((e) => {
    console.log(e);
    e.addEventListener('mouseover', (el) => {
        const target = el.target;
        target.classList.add('dot');
       
        if(target.classList.contains('sign-up')){
            target.classList.remove('dot');
        }

        if(target.classList.contains('login')){
            target.classList.remove('dot');
        }

        target.addEventListener('mouseleave', (e) => {
            if(target.classList.contains('home')){
                target.classList.add('dot');
            }else { target.classList.remove('dot'); }

            
        });
    });
});