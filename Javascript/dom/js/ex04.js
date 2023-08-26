//DomHTML

var content = document.querySelector('.content');
var btn = document.querySelector('.btn');
var result = document.querySelector('.result');
var btnText = document.querySelector('.text');
var btnNumber = document.querySelector('.number');
var count = 0;


var handleClick = function () {
    if (result.innerText === '') {
        result.innerHTML = content.innerHTML;
        content.innerHTML = '';
        // btn.innerText = 'lên';
        btnText.innerText = 'lên';

    } else {
        content.innerHTML = result.innerHTML;
        result.innerHTML = '';
        // btn.innerText = 'xuống';
        btnText.innerText = 'xuống';


    }

    btnNumber.innerText = ++count;
}

btn.addEventListener('click', handleClick);
