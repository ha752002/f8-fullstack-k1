
Array.prototype.map2 = function (callback) {
    if (typeof callback != 'function') {
        return;
    }
    var arr = this;
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        var result = callback(element, i);
        newArr[newArr.length] = result;
    }
    return newArr;
}

var users = ["User 1", "User 2", "User 3"];

var newArr = users.map2(function (user, index) {
    return `<h2>${index} - ${user}</h2>`;
});


console.log(newArr);