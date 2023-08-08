// var getA = function (fn, ...args) {
//     if (typeof fn === 'function') {
//         fn(...args);
//     }
// }

// var getB = function (msg, msg2) {
//     console.log(`getB=`, msg, msg2);
// }

// getA(getB, "Hi", "F8");
// getA(getB);


// var sum = function (...args) {
//     console.log(args);
// }


// sum(1, 2, 3, 4, 5, 6, 7);

// setTimeout(function (name, email) {
//     console.log("xin chao", name, email);
// }, 1000, "HA", "NOI");

// var count = 0;
// var id = setInterval(function () {
//     console.log(`xin chao: ${++count}`);
//     if (count === 3) {
//         clearInterval(id);
//     }
// }, 1000)

// var showMessage = function (name) {
//     console.log("showMessage");
//     var display = function () {
//         console.log("Xin chao " + name);
//     }

//     display();
// }


// showMessage("f8");


var sum = function (a) {
    return function (b) {
        return a + b;
    };
};

var add = sum(10);
console.log(add(20));