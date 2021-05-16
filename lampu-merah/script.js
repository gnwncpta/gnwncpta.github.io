const buttons = document.querySelectorAll('button');

const redLight = document.querySelector('.red-light');
const yellowLight = document.querySelector('.yellow-light');
const greenLight = document.querySelector('.green-light');

let hidup = [];

buttons.forEach(button =>  {
    button.addEventListener('click', (e) => {
        let arr = [];
        let value = e.target.textContent;
        if(value === "Red"){
            // if(hidup[0].classList.contains('red-light')){

            // }
            redLight.classList.remove('redup');

            if(hidup.length === 0){
                redLight.classList.add('hidup');
                let lifeLight = redLight;
                hidup.push(lifeLight);
            } else if(hidup.length > 0){
                hidup[0].classList.remove('hidup');
                hidup[0].classList.add('redup');
                hidup.length = 0;

                if(hidup.length === 0){
                    redLight.classList.add('hidup');
                    let lifeLight = redLight;
                    hidup.push(lifeLight);
                }
            }

        } else if(value == "Yellow"){
            yellowLight.classList.remove('redup');

            if(hidup.length === 0){
                yellowLight.classList.add('hidup');
                let lifeLight = yellowLight;
                hidup.push(lifeLight);
            } else if(hidup.length > 0){
                hidup[0].classList.remove('hidup');
                hidup[0].classList.add('redup');
                hidup.length = 0;

                if(hidup.length === 0){
                    yellowLight.classList.add('hidup');
                    let lifeLight = yellowLight;
                    hidup.push(lifeLight);
                }
            }
        } else if(value == "Green"){
            greenLight.classList.remove('redup');
            
            if(hidup.length === 0){
                greenLight.classList.add('hidup');
                let lifeLight = greenLight;
                hidup.push(lifeLight);
            } else if(hidup.length > 0){
                hidup[0].classList.remove('hidup');
                hidup[0].classList.add('redup');
                hidup.length = 0;

                if(hidup.length === 0){
                    greenLight.classList.add('hidup');
                    let lifeLight = greenLight;
                    hidup.push(lifeLight);
                }
            }
        }
    })
})