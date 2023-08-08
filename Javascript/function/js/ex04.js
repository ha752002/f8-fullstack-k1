//Đệ Quy 

// var showNumber = function (n) {
//     if (n === 1) {
//         return 1;
//     }

//     return n + showNumber(n - 1);
// }

// console.log(showNumber(10));


var fibonaci = function (n) {
    if (n === 1 || n === 2) {
        return 1;
    }

    return fibonaci(n - 1) + fibonaci(n - 2);
}

console.log(fibonaci(11));