// hàm con 
// var getMessage = function (msg) {

//     var msgValue = "Toi la " + msg;
//     var display = function () {
//         var a = 10;
//         console.log("Hoang An " + msg);
//         console.log(msgValue);
//     }

//     display();
// }

// getMessage("F8");

/**CLOSURE */
// var sum = function (a) {
//     // console.log(a);
//     // console.log(b);
//     return function (b) {
//         console.log(a, b);
//         return a + b;
//     };
// };

// var add = sum(10);
// console.log(add());
// var sum = 0;
// for (var i = 1; i < 10; i++) {
//     console.log(sum);
//     sum = sum + i;

// }

// console.log(sum);

function showNumber(n) {
    if (n > 1) {
        console.log(n)
        return n + showNumber(n - 1);

    } else {
        console.log(n)
        return n;
    }
}

console.log(showNumber(10));
