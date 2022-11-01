document.onmousemove = function(){
    element1 = document.getElementById('div1');
    element1.classList.add('class1');
    element2 = document.getElementById('div2');
    element2.classList.add('class2');
    element3 = document.getElementById('div3');
    element3.classList.add('class3');
    element4 = document.getElementById('div4');
    element4.classList.add('class4');
    element5 = document.getElementById('div5');
    element5.classList.add('class5');
    element6 = document.getElementById('div6');
    element6.classList.add('class6');
}
document.onmouseout = function(){
    element1 = document.getElementById('div1');
    element1.classList.remove('class1');
    element2 = document.getElementById('div2');
    element2.classList.remove('class2');
    element3 = document.getElementById('div3');
    element3.classList.remove('class3');
    element4 = document.getElementById('div4');
    element4.classList.remove('class4');
    element5 = document.getElementById('div5');
    element5.classList.remove('class5');
    element6 = document.getElementById('div6');
    element6.classList.remove('class6');
}