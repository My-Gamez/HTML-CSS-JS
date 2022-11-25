let sec=0;
let min=0;
let hour=0;
let aud=new Audio('clock.mp3');
aud.play();
setInterval(() => {
    sec=sec+1;
    if(sec>=60){
        sec=1;
        setTimeout(() => {
            min=min+1; 
        }, 0);
    }
    document.getElementById('number').innerText=min+":"+sec;
}, 1000);