let upletters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lowletters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
i = Math.floor(Math.random() * 25);
j = Math.floor(Math.random() * 25);
k = Math.floor(Math.random() * 25);
l = Math.floor(Math.random() * 25);
m = Math.floor(Math.random() * 25);
n = Math.floor(Math.random() * 25);
o = Math.floor(Math.random() * 25);
p = Math.floor(Math.random() * 25);
txt = upletters[m] + lowletters[i] + " " + upletters[o] + lowletters[j] + lowletters[l] + " " + upletters[p] + lowletters[n] + lowletters[k] + lowletters[m] + " " + upletters[j] + lowletters[p] + lowletters[k] + lowletters[m] + lowletters[o];
document.getElementById('line').innerText = txt;
let time=0;
setInterval(() => {
    time=time+1;
    document.getElementById('time').innerText="Second:"+time;
}, 1000);
document.onkeydown = function (e) {
    if (e.code == "Enter") {
        let inp = document.getElementById('type').value;
        if (txt == inp) {
            document.getElementById('print').innerText = "You typed: " + inp;
            document.getElementById('check').innerText="Correct";
            document.getElementById('check').style.color="green";
            document.getElementById('check').style.borderWidth="5px";
            document.getElementById('check').style.borderRadius="10px";
            document.getElementById('check').style.borderStyle="inset";
            document.getElementById('check').style.borderColor="#006400";
            setTimeout(() => {
                window.location.href="https://My-Gamez.github.io/file/TypeMaster";
            }, 2000);
            let element=document.getElementById('check');
            element.classList.add('checkani');
        }
        else{
            document.getElementById('print').innerText = "You typed: " + inp;
            document.getElementById('check').innerText="Wrong";
            document.getElementById('check').style.color="red";
            document.getElementById('check').style.borderWidth="5px";
            document.getElementById('check').style.borderRadius="10px";
            document.getElementById('check').style.borderStyle="inset";
            document.getElementById('check').style.borderColor="#800000";
            setTimeout(() => {
                window.location.href="http://127.0.0.1:5500/index.html";
            }, 2000);
            let element=document.getElementById('check');
            element.classList.add('checkani');
        }

    }
}
