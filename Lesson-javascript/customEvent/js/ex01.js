var btn = document.querySelector('.btn');
var countEl = document.querySelector('.count');
var message = document.querySelector('.message');


var countEvent = new Event('count');


btn.addEventListener('click', function () {
    countEl.innerText++;

    if (+countEl.innerText === 10) {
        message.innerText = 'f8';
    }
})