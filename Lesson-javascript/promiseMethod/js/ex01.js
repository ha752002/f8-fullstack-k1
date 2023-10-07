

var promise1 = new Promise(function (resole) {
    setTimeout(function () {
        resole([1]);
    }, 2000);
})


var promise2 = new Promise(function (resole) {
    setTimeout(function () {
        resole([2, 3]);
    }, 5000);
})



//promise sẽ nhận đối số là 1 cái mảng 
// bản thân Promise.all trả về cho bạn 1 promise 
Promise.all([promise1, promise2])
    .then(function (result) {
        var result1 = result[0];
        var result2 = result[1];

        return result1.concat(result2);
    }).then(function (data) {
        console.log(data);
    })


