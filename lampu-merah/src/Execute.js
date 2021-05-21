// Buttons Selection
const buttons = document.querySelectorAll('button');

// Lights Selection
const redLight = document.querySelector('.red-light');
const yellowLight = document.querySelector('.yellow-light');
const greenLight = document.querySelector('.green-light');

// Alert Selection
const autoAlertOn = document.querySelector('.auto-alert-on');
const autoAlertOff = document.querySelector('.auto-alert-off');

// Array contains Node
let hidup = [];

function Execute(){
    // Looping the Buttons
    buttons.forEach(button =>  {
        // Event Listener
        button.addEventListener('click', (e) => {

            let raw = e.target; // contains raw target element
            let value = e.target.textContent; // contains textContent of the clicked element

            // if users click contains "Red"
            if(value === "Red"){
                redLight.classList.remove('redup'); // nyalakan lampu merah

                if(hidup.length === 0){
                    redLight.classList.add('hidup');
                    hidup.push(redLight);

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

            // If users click contains "Yellow"
            } else if(value == "Yellow"){
                yellowLight.classList.remove('redup'); // nyalakan lampu kuning

                if(hidup.length === 0){
                    yellowLight.classList.add('hidup');
                    hidup.push(yellowLight);

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

            // If users click contains "Green"
            } else if(value == "Green"){
                greenLight.classList.remove('redup'); // nyalakan lampu hijau
                
                if(hidup.length === 0){
                    greenLight.classList.add('hidup');
                    hidup.push(greenLight);

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

            // If users click contains "Auto"
            } else if(raw.classList.contains('auto')){


                if(value === "Auto On"){
                    console.log('Auto On Running.');

                    raw.innerHTML = "Auto Off";
                    raw.classList.toggle('active');
                    // console.log(raw)
                    autoAlertOn.classList.remove('hidden');
                    autoAlertOn.classList.remove('fade-up');
                    autoAlertOn.classList.add('fade-down');
                    
                    setTimeout(() => {
                        // autoAlertOn.classList.add('hidden');
                        autoAlertOn.classList.remove('fade-down');
                        autoAlertOn.classList.add('fade-up');
                    }, 1500);
                    
                    if(hidup.length > 0){
                        hidup[0].classList.remove('hidup');
                        hidup[0].classList.add('redup');
                        hidup.length = 0;
                    }

                    // Timing function to get movement on Traffic Light
                    let timingLights = {
                        timingOn: setInterval(() => {
                            console.log('RUNNING MAN')
                        }, 2000)
                    }


                } else if(value === "Auto Off"){
                    console.log('Auto Off Running.');
                    clearInterval(timingLights.timingOn);

                    raw.innerHTML = "Auto On";
                    raw.classList.toggle('active');
                    // console.log(raw)
                    autoAlertOff.classList.remove('hidden');
                    autoAlertOff.classList.remove('fade-up');
                    autoAlertOff.classList.add('fade-down');
                    
                    setTimeout(() => {
                        autoAlertOff.classList.remove('fade-down');
                        autoAlertOff.classList.add('fade-up');
                    }, 1500);
                    
                    if(hidup.length > 0){
                        hidup[0].classList.add('redup');
                        hidup[0].classList.remove('hidup');
                        hidup.length = 0;
                    }

                }
            }
        })
    })
}

export default Execute;