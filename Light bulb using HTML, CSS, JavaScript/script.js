var lightBulb = document.getElementById('bulb');
var btn = document.getElementById('lightToggle');
var click = 1;
btn.innerText = "ON";

function toggle(){
    if(click % 2 != 0){
        lightBulb.classList.add('light');
        btn.innerText = "OFF";
    }
    else{
        lightBulb.classList.remove('light');
        btn.innerText = "ON";
    }
    click++;
}