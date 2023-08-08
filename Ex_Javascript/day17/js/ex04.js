// # Bài 4: Viết hàm kiểm tra số nguyên tố
// Viết 1 hàm kiểm tra 1 số có phải số nguyên tố hay không ?
// Hàm có 1 tham số là số cần kiểm tra
// Hàm có giá trị trả về
// Gọi hàm trong câu điều kiện if else


function checkPrimes(n) {
    if (n < 2) {
        return false;
    } else if (n === 2) {
        return true
    } else if (n > 2) {
        for (var i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }

}

var n = 4;
var c = checkPrimes(n) ? "phai" : "khong phai";
console.log(`${n} : ${c} so nguyen to`);
