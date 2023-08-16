// Làm phẳng array sau (Chuyển về mảng 1 chiều)
// var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
// Kết quả
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]


var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

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
console.log(flattenedArr);