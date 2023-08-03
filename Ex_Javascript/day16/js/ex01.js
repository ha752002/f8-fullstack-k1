// # Bài 1: Hoán vị 2 số
// Input: Cho trước 2 số a, b
// Output: Thực hiện hoán vị 2 số
// không dùng biến trung gian

function permutation(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    console.log(a, b);
}

permutation(2, 3);
