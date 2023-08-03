/*
Bài 3:
Input: Cho trước 3 số a, b, c
Output: Tìm số lớn nhất trong 3 số và hiển thị kết quả.
*/

function maxNumbers(a, b, c) {
    maxNumber = a;
    if (maxNumber < b && c < b) {
        maxNumber = b;
    } else if (maxNumber < c && b < c) {
        maxNumber = c;
    }
    return maxNumber;
}

var result = maxNumbers(2, 1, -3);
console.log(`so lon nhat la ${result}`);


