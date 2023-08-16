// # Bài 1
// Lấy kết quả giao giữa 2 mảng
// var arrA = [1, 4, 3, 2];
// var arrB = [5, 2, 6, 7, 1];
// Kết quả[1,2]

var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];

var newArr = arrA.map(function (arrItem) {
    if (arrB.includes(arrItem)) {
        return arrItem;
    }
});

newArr = newArr.filter(function (item) {
    return item !== undefined;
});


console.log(newArr);