// Biểu thức chính quy:
// - Tập hợp các ký hiệu theo 1 quy tắc nhất định để xử lý chuỗi
//     - Viết bằng ngôn ngữ Perl

// Tác dụng:
// - So khớp -> test() 
// - Cắt chuỗi -> match()
//- Thay thế -> replace()


// Cú pháp: /regex/modifier
//- regex => Các ký hiệu của biểu thức chính quy
//- modifier => Cấu hình cho biểu thức chính quy
// + g: global.
// + i: không phân biệt chữ hoa chữ thường.
// + m: multi line - khớp nhiều dòng.
// + s: single line - khớp 1 dòng.

// Các ký hiệu cơ bản:
// - char -> Tìm chuỗi char trong chuỗi gốc
//  - ^ -> Khớp đầu chuỗi
//  - $ -> Khớp cuối chuỗi
//  - [A - Z], [a - z], [0 - 9], [charList](các ký tự chỉ định,
// khớp theo điều kiện hoặc) -> Khớp ký tự đại diện

// - Khớp độ dài: Mặc định các biểu thức chỉ có độ dài là 1
// + { min, max } -> Độ dài từ min đến max.
// + { min, } -> Độ dài từ min đến vô cùng.
// + { max } -> Độ dài cố định

// - Ký hiệu viết tắt của độ dài
//     + { 0, 1} -> ?
//     + { 1, } -> +
//     + { 0, } -> *

//- Nếu muốn so khớp các ký hiệu bị trùng với ký hiệu của biểu thức chính quy -> Thêm dấu \ phía trước
//+ Dấu chấm(.)
//+ Dấu ngoặc vuông([])
//+ Dấu gạch chéo(/)


//+ dấu cộng phải có ít nhất 1 lần

// - Các ký hiệu viết tắt:
// + \d -> [0 - 9]
// + \D -> Các ký tự không phải là số.
// + \s -> Khoảng trắng.
// + \S -> Không phải khoảng trắng.
// + \w -> A - Z, a - z, 0 - 9, _
// + \W -> Ngược lại của w

// - Phủ định: ^
// - Hoặc: |



//dấu ngoặc đơn() được sử dụng để tạo một nhóm biểu thức.
//Nhóm này cho phép bạn áp dụng các toán tử hoặc quy tắc regex cụ thể cho các phần của biểu thức


// const str = "http:/hongha.gmail";
// const pattern = /http|https:\/\/[a-z-_0-9\.]+\.[a-z]{2,}$/;
// const check = pattern.test(str);
// console.log(check);


// khẳng định : a >0 || b > 0 || c > 0
// phủ định :a <= 0 || b <= 0 || c <= 0


// const str = "https://www.youtube.com/watch?v=JdqL89ZZwFw";

// // yêu cầu check chuỗi str xem phải của Youtube hay k (Regex)
// const pattern = /^(http|https):\/\/(www\.)*(youtube\.com\/.+|youtu\.be\/.+)$/;
// const check = pattern.test(str);
// console.log(check);


//-> Capturing Group: lấy 1 phần của biểu thức chính quy 


// cắt chuối
// const content = 'Hello 03388875179, abcd 0123456789'
// const content = 'ABC hongha.web@gmail.com acd hoangan@fullstack.edu.vn xyz hoangan@yahoo.com'
// const pattern = /[a-z\.0-9-_]{3,}@[a-z-_\.0-9]+\.[a-z]{2,}/g;
// const result = content.match(pattern);
// const domainList = result.map((email) => {
//     const pattern = /([a-z\.0-9-_]{3,})@[a-z-_\.0-9]+\.[a-z]{2,}/;
//     const domain = email.match(pattern);
//     return domain[1];

// })
// console.log(domainList);


// None-capturing Group
// const url = "https://fullstack.edu.vn/khoa-hoc/fullstack-offline";
// const pattern = /^(?:http|https):\/\/[a-z-_0-9\.]+\.([a-z]{2,})\/.*$/;

// const result = url.match(pattern);
// console.log(result);

//Greedy

// thay thế
let content = `số điện thoại của tôi là: 0385669003. thêm số là : +84783992288`;
const pattern = /((0|\+84)\d{9})/g;
content = content.replace(pattern, `<a href="tel:$1" data-start="$2">$1</a>`);
document.body.innerHTML = content;