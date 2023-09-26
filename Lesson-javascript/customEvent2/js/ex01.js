var slider = document.querySelector('.slider');
var msg = document.querySelector('.msg');
// 1: change -> khi thay đổi
// slider.addEventListener('change', function () {

// });


//2.input -> khi bấm chuột xuống và kéo
// slider.addEventListener('input', function () {
//     if (+this.value === 100) {
//         msg.innerHTML = 'Hello';
//     } else {
//         msg.innerHTML = '';
//     }
// })


// b1 : Tạo ra 1 biến lưu trữ  object sự kiện , vd tạo ra event là finish
// có 2 tham số : 1 là tên , 2 là option , thường để option là mặc định (để nó giống các sự kiện javascript)
// var finishEvent = new Event('finish');


// b2 :  để lắng nghe đc sự kiện finish trên là gì phải có depart Event
// muốn lắng nghe ở element nào thì cta tác động vô element đó
// slider.addEventListener('input', function () {
//     if (+this.value === 100) {
//         slider.dispatchEvent(finishEvent);
//         // Phản hồi sự kiện
//     } else {
//         msg.innerHTML = '';
//     }
// })

// slider.addEventListener('finish', function () {
//     msg.innerHTML = 'Hello';
// })
