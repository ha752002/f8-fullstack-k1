//Dom Navigation


// 1.parentElement => chọn cấp cha từ element hiên tại
// ngoài ra : parentNode => Học kỹ ở DOM Node
// var btn = document.querySelector('.btn');
// btn.addEventListener('click', function () {
//     console.log(this);
//     console.log(this.parentElement);
//     console.log(this.parentElement.parentElement);
// })


// var product = document.querySelector('.product');
// var btn = document.querySelectorAll('.remove');


// btn.addEventListener('click', function () {
//     btn.parentElement.remove();
// });

// btn.forEach(function (element) {
//     element.addEventListener('click', function () {
//         element.parentElement.remove();
//     });
// });

// 2.children : lấy dsach ptu con gần nhất
// click vào item ở menu treen , nêu item có menu con =>
// đổi màu nền của menu con và đổi màu chữ của thằng cha

// var linkList = document.querySelectorAll('.menu a');

// if (linkList.length) {
//     linkList.forEach(function (link) {
//         link.addEventListener("click", function (e) {
//             console.log(e);
//             e.preventDefault();
//             // this.style.color = 'red';
//             var children = this.parentElement.children;
//             if (children.length === 2) {
//                 children[1].style.background = "pink";
//             } else {
//                 this.style.color = "red";
//             }
//         })
//     })
// }


var menu = document.querySelector('.menu');

console.log(menu.children[1].children[1].children[1].children[0].innerText);