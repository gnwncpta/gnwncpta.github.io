const nav = document.querySelectorAll('header ul li a');

nav.forEach((e) => {
    e.addEventListener('mouseover', (el) => {
        const target = el.target;

        if(target.classList.contains('none')){
            target.classList.remove('none')
            target.classList.add('dot');
        } 
       
        if(target.classList.contains('sign-up')){
            target.classList.remove('dot');
        }

        target.addEventListener('mouseleave', () => {
            if(target.classList.contains('home')){
                target.classList.add('dot');
            } else if (target.classList.contains('dot')){
                target.classList.add('none');
                target.classList.remove('dot');
            } else { 
                target.classList.remove('dot');
            }

            
        });
    });
});