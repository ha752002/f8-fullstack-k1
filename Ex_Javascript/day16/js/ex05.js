// # Bài 5: Sắp xếp 3 số
// Input:Cho trước 3 số a, b, c
// Output:Thực hiện đổi chỗ 3 số a, b, c sao cho 3 số có thứ tự tăng dần

var a = 3,
    b = 4,
    c = 8,
    temp;
if (a > b) {
    temp = a;
    a = b;
    b = temp;
}
if (a > c) {
    temp = a;
    a = c;
    c = temp;
}
if (b > c) {
    temp = b;
    b = c;
    c = temp;
}

console.log(`Kết quả sắp xếp theo thứ tự tăng dần là: ${a}, ${b}, ${c} `);