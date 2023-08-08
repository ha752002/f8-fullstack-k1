// var  i = 1 ;
// var n = 10;
// while ( i <= 10) {
//     console.log(`f8: ${i}`);
//     i++;
// }


// for( var i = 1; i <= 10; i++){
//     console.log(i);

//     if( i === 5 ) {
//         break;
//     }
// }


/**
 * break:
 * -Tối ưu hiệu năng
 * - đảm bảo tính đúng
 */

// var begin = 3;
// var end = 100;

// Tìm số chẵn nhỏ nhất tromg khoảng begin -> end


// var result;
// for (var i = begin; i <= end; i++) {
//     if (i % 2 == 0) {
//         result = i;
//         break;
//     }
// }

// console.log(result);

//Expression Function

// var getMessage = function () {
//     return "F8";
// }

// if (typeof getMessage === 'function') {
//     console.log(getMessage());
// } else {
//     console.log(getMessage);

// }


//IIFE
// (function (name) {
//     console.log("Hoang an", name);
// })('F8');


// var sum = function () {
//     console.log(arguments);
// }

// sum(1, 2, 3, 4, 5, 6)

//Rest parameter

// var getTotal = function (msg, ...args) {
//     console.log(msg)
//     console.log(args);
// }


// getTotal("Tong = ", 5, 6, 7, 8, 9);

// var a = function (name) {
//     console.log(`Hoang An :  ${name}`);
// }

// var b = a;
// console.log(b());


var getA = function (fn) {
    if (typeof fn === "function") {
        fn();
    }
}
var getB = function (name) {
    console.log("getB", name);
}
// var callGetB = function () {
//     getB("F8");
// }

getA(function () {
    getB("F8-2");
}); //CallBack