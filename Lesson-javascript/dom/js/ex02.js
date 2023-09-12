var btnWrapp = document.querySelector('.btn-wrapp');



var h1 = document.createElement('h1');
h1.innerText = '0';

var btn = document.createElement('button');
btn.innerText = '+';

btnWrapp.appendChild(h1);
btnWrapp.appendChild(btn);


btn.addEventListener('click', function () {
    h1.innerText = parseInt(h1.innerText) + 1;
    console.log(h1.innerText);
})