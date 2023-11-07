/**
 *Câu lệnh rẽ nhánh if( 4 loại)

 1. câu lệnh if thiếu 
 // Nếu thoả mãn điều kiện thì thực hiẹn nội dung
 if(dieukien) {
    noi dung
 }

 2. câu lệnh if đầy đủ

 if(dieukien) {
    ndung đúng
 } else {
    nội dung sai
 }

 3. câu lệnh if nhiều nhánh
 */

var total = 15000000,
    tax,
    income;

if (total < 5000000) {
    tax = 1;
} else if (total > 15000000) {
    tax = 5;
} else {
    tax = 3;
}

income = total - (total * tax) / 100;

console.log(income);
