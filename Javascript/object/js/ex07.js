// var a = {
//     name: "Hoang An",
//     email: "hoangan@gmail.com",
// };


// sao chép object

// var b = Object.assign({}, a);cấp ngoài
// var a = { ...a }; cấp ngoài

// tất cả các câps
// var b = JSON.parse(JSON.stringify(a));


// b.name = "Hoang An F8";

// console.log(a);
// console.log(b);

/**
 *copy arr
 */

// var a = ["Hoang an", "hoangan@gmail.com"];


// var b = JSON.parse(JSON.stringify(a));

// b[0] = "Ha";

// console.log(a);
// console.log(b);


//  Option Chaining


// var a = null;
// console.log(a?.name)

// var arr = "Hoang an";
// if (arr.length) {
//     arr.forEach?.(function (item) {
//         console.log(item);
//     });
// }

// var a = { name: "Hoang an", age: 31 };
// var b = { name: "Hoang an", age: 31 };
// console.log(JSON.stringify(a) === JSON.stringify(b));