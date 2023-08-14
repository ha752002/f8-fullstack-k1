// # Bài 03
// Cho trước 1 mảng bất kỳ, nếu trong mảng
//  có các phần tử trùng nhau thì chỉ
//   giữa lại 1 (Gọi là lọc trùng). In ra mảng sau khi đã xử lý


var arrs = [1, 3, 1, 4, 5, "i", "h", "i"];

var newArrs = arrs.reduce(function (arr, element) {
    if (!arr.includes(element)) {
        arr.push(element);
    }
    return arr;
}, []);

console.log(newArrs);