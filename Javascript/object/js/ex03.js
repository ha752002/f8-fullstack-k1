

// var user = {
//     name: "Hoang An",
//     email: "hoangan.web@gmail.com",
//     getName: function () {
//         var current = this;
//         return {
//             getInfo: function () {
//                 return `
//                 Name: ${current.name}
//                 Email: ${current.email}
//                 `
//             }
//         }
//     }
// }


// console.log(user.getName().getInfo());


// var user = {
//     name: "Hoang An",
//     email: "hoangan.web@gmail.com",
//     combine: function (...args) {
//         var current = this;
//         var newArr = args.map(function (key) {
//             return current[key];
//         });

//         return newArr;

//     },
// };


// console.log(user.combine("name", "email"));


// Object.prototype.combine = function (...args) {
//     var current = this;
//     var newArr = args.map(function (key) {
//         return current[key];
//     });

//     return newArr;

// };



// var user = {
//     name: "Hoang An",
//     email: "hoangan.web@gmail.com",
//     age: 31,
// }

// console.log(user.combine("name", "email"));

Array.prototype.welcome = "Chao mừng bạn đến F8";


var a = [];
console.log(a.welcome);

