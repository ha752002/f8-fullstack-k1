// # Bài 1: N số fibonaci
// Hiển thị N số Fibonaci đầu tiên
// Ví dụ: Gán n = 10 sẽ hiển thị danh sách 10 số fibonaci
// Yêu cầu: Không dùng vòng lặp



function showFibonaci(n) {
    if (n == 0) {
        return 0;
    } else if (n == 1 || n == 2) {
        return 1;
    } else {
        return showFibonaci(n - 1) + showFibonaci(n - 2);

    };
};

console.log(showFibonaci(6));
