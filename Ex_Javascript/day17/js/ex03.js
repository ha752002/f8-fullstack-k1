// # Bài 3: Tính giá trị biểu thức
// Cho trước số nguyên n.Tính giá trị biểu thức sau

// S = 1 * 2 + 2 * 3 + 3 * 4 + ... + n * (n + 1)

var n = 4;
var sum = 0;
if (!isNaN(n)) {
    for (var i = 0; i <= n; i++) {
        sum += i * (i + 1);
    }
    console.log(sum);
} else {
    console.log("n kp phải là số ! Nhập lại");
}

