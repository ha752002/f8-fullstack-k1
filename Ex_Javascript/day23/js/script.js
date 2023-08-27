var openLogin = document.querySelector('.open-login');
var modalAuth = document.querySelector('.modal-auth');
var modalOverlay = document.querySelector('.overlay');

var closeModal = function () {
    modal - auth.classList.remove('show');
};

openLogin.addEventListener('click', function () {
    modalAuth.classList.add('show');
});

modalOverlay.addEventListener('click', closeModal);