
/*
Bài 4:
Input: Cho trước 2 số a, b
Output: Kiểm tra 2 số cùng dấu hay không và hiển thị kết quả ra màn hình
*/
function checkNumbers(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        if (a * b > 0) {
            console.log(`${a}, ${b} cùng dấu`);
        } else {
            console.log(`${a}, ${b}  khác dấu`);
        }
    } else {
        console.log(`Đầu vào  kp là số ! Vui lòng nhập lại `);
    }
}

checkNumbers(-1, 1);
