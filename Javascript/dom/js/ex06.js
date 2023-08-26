var btn = document.querySelector('.btn');
var modalBox = document.querySelector('.modal-box');
var closeBtn = modalBox.querySelector('.modal .close');

console.log(closeBtn);
btn.addEventListener('click', function () {
    modalBox.classList.add('show');
})


closeBtn.addEventListener('click', function () {
    modalBox.classList.remove('show');
})
