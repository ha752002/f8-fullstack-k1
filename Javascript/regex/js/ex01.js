//Regex
//Regular Expression
//Biểu thức chính quy
/*
Biểu thức chính quy
- Tập hợp các ký hiệu theo 1 quy tắc nhất định để xử lý chuỗi
- Viết bằng ngôn ngữ Perl
Tác dụng: 
- So khớp -> test()
- Cắt chuỗi -> match()
- Thay thế -> replace()
Cú pháp: /regex/modifier
- regex => Các ký hiệu của biểu thức chính quy
- modifier => Cấu hình cho biểu thức chính quy
+ g -> global
+ i -> Không phân biệt chữ hoa, thường
+ m -> multi line -> Khớp nhiều dòng
+ s -> single line -> Khớp 1 dòng
Các ký hiệu cơ bản
- char -> Tìm chuỗi char trong chuỗi gốc
- Khớp đầu chuỗi: ^
- Khớp cuối chuỗi: $
- Khớp ký tự đại diện: 
+ [A-Z] -> Chữ hoa
+ [a-z] -> Chữ thường
+ [0-9] -> Số
+ [charList] -> Các ký tự chỉ định (Khớp theo điều kiện hoặc)
- Khớp độ dài: Mặc định các biểu thức chỉ có độ dài là 1
+ {min, max} -> Độ dài từ min đến max
+ {min,} -> Độ dài từ min đến vô cùng
+ {max} -> Độ dài cố định
- Ký hiệu viết tắt của độ dài
{0, 1} -> ?
{1,} -> +
{0,} -> *
- Nếu muốn so khớp các ký hiệu bị trùng với ký hiệu của biểu thức chính quy => Thêm dấu \ phía trước
+ Dấu chấm (.)
+ Dấu ngoặc vuông ([])
+ Dấu gạch chéo (/)
....
*/

const str = "hoangan.web-@gmail.com";
// const pattern = /^[a-zA-Z][a-zA-Z0-9]+@[0-9]{3,}/;
const pattern = /^[a-z\.0-9-_]{3,}@[a-z-_\.0-9]+\.[a-z]{2,}$/;
const check = pattern.test(str);
console.log(check);