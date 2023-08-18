// # Bài 3
// Tách phần tử trong mảng theo đúng kiểu dữ liệu
// var arr = [["a", 1, true], ["b", 2, false]]
// Kết quả
// [["a", "b"], [1, 2], [true, false]]

var arr = [["a", 1, true], ["b", 2, false]]

function flatArr(arr) {
    return arr.reduce(function (flatOutput, arrItem) {
        if (Array.isArray(arrItem)) {
            return flatOutput.concat(flatArr(arrItem));
        } else {
            return flatOutput.concat(arrItem);
        }
    }, []);
}
var flattenedArr = flatArr(arr);

var result = {};
for (var i in flattenedArr) {
    var value = flattenedArr[i];
    var type = typeof value;
    if (!result[type]) {
        result[type] = [];
    }
    result[type].push(value);
}
console.log(result);

