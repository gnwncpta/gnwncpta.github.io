import { redLight, yellowLight, greenLight } from './Lights';

function AutoOn(times, status){
    const queueLight = [redLight, yellowLight, greenLight];
    console.log(status);
    var index = 0;
    if(status === "off"){
        delete(index);
    }

    function run(){
        if(index === 0){
            setTimeout(() => {
                queueLight[index].classList.remove('redup');
                queueLight[index].classList.add('hidup');
            }, times)
            
            // this timeout gives the light off
            setTimeout(() => {
                queueLight[index].classList.add('redup');
                queueLight[index].classList.remove('hidup');
                index = 1;
                run()
            }, times * 2);
    
        } else if(index === 1){
            setTimeout(() => {
                queueLight[index].classList.remove('redup');
                queueLight[index].classList.add('hidup');
            }, times)
            
            // this timeout gives the light off
            setTimeout(() => {
                queueLight[index].classList.add('redup');
                queueLight[index].classList.remove('hidup');
                index = 2;
                run()
            }, times * 2);

        } else if(index === 2){
            setTimeout(() => {
                queueLight[index].classList.remove('redup');
                queueLight[index].classList.add('hidup');
            }, times)
            
            // this timeout gives the light off
            setTimeout(() => {
                queueLight[index].classList.add('redup');
                queueLight[index].classList.remove('hidup');
                index = 0;
                run()
            }, times * 2);
        }
    }

    run();
    
}

export default AutoOn;