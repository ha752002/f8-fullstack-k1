// # Bài 04
// Cho trước 1 mảng số nguyên và thực hiện các yêu cầu sau
// Sắp xếp mảng theo thứ tự tăng dần
// Chèn thêm 1 số vào bất kỳ vị trí nào trong mảng
// mà không làm thay đổi thứ tự sắp xếp của mảng

var arr = [5, 3, 8, 1, 2],
    numberToInsert = 6,
    insertIndex = 2;

arr.sort(function (a, b) {
    return a - b;
});

arr.splice(insertIndex, 0, numberToInsert);

console.log(arr);

