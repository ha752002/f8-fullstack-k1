// # Bài 8: Tính giá trị biểu thức không dùng vòng lặp
// Tính giá trị biểu thức:
//  S = 1 + 1/2 + 1/3 + 1/4 + 1/5 +…+1/N

//Đệ quy
var sums = function (n) {
    if (n === 1) {
        return 1;
    }

    return (1 / n) + sums(n - 1);
}

console.log(sums(2));
