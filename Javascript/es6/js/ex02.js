//Function
// 1. Arrow Function -> Hàm mũi tên



// Arrow Function k có tham số
// var getMessage = () => {
//     return 'Hello Ha';
// }


// console.log(getMessage());

// Arrow Function  có 1 tham số
// var getMessage = msg => {
//     return msg;
// }

// console.log(getMessage('Hello'));


// Arrow Function  có nhiều  tham số
// var getMessage = (msg, type = 'success') => {
//     console.log(`type: ${type}`);
//     console.log(`msg: ${msg}`);
// }


// getMessage('Hello', 'error ');


//Arrow Function có return
// var getTotal = (a, b) => a + b;

// console.log(getTotal(10, 20));

// Chú ý nếu return về 1 object => bọc cặp ngoặc ()


// var getCustomer = () => ({ name: 'Hoàng An', email: 'hoangan.web@gmail.com' });
// console.log(getCustomer());

// var users = [
//     {
//         name: 'Nguyễn Văn A',
//         email: 'nguyenvana@gmail.com',
//     },

//     {
//         name: 'Nguyễn Văn B',
//         email: 'nguyenvanb@gmail.com',
//     },

//     {
//         name: 'Nguyễn Văn C',
//         email: 'nguyenvanc@gmail.com',
//     },
// ];

// var html = users
//     .map(
//         (user) => `
// <h3>${user.name}</h3>
// <h3>${user.email}</h3>
// `
//     )
//     .join('');

// document.body.innerHTML = html;

/**
 * Lưu ý khi sdung arrow function
 *
 * - Lưu ý k bind đc this, argument
 */

// var btn = document.querySelector('.btn');
// var content = document.querySelector('.content');

// btn.addEventListener('click', () => {
//     console.log(this);
// });


// content.addEventListener('click', function () {
//     btn.addEventListener('click', (() => {
//         console.log(this);
//     }).bind(btn));
// });



var products = document.querySelectorAll('.products h2');
// console.log(products);
// products.forEach((item) => {
//     item.addEventListener('click', () => {
//         console.log(this);
//     })
// })

// for (var i = 0; i < products.length; i++) {
//     products[i].addEventListener('click', () => {
//         console.log(this);
//     })
// }


// var getMax = function () {
//     console.log(arguments);
// }

// getMax(5, 10, 15);


// var user = {
//     name: 'Hoang An',
//     email: 'hoangan@gmail.com',
//     getName: () => {
//         return this.email;
//     }
// }

// console.log(user.getName());


// var Customer = () => {
//     this.name = 'Hoang An';
//     this.getName = function () {
//         return 'Hoang An'
//     }
// }


// var customer = new Customer();
var getMin = (msg, ...args) => {
    console.log(args);
};


getMin(`Min là`, 5, 10, 15);