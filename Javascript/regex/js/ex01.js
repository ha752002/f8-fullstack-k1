
// Regex(viết tắt của Regular Expression)
// biểu thức chính quy 
/**
 * là tập hợp các kí hiệu , theo 1 quy tăc nhất định , để xử lý chuỗi
 * đc viết bằng ngôn ngữ Perl
 * biểu thức chính quy trong các ngôn ngữ là giống nhau 
 * tác dụng
 -so khớp  -> test()
 - cắt chuỗi  -> match()
 - thay thế -> replace


 cú pháp /regex/modifier
 -regex => kí hiệu của biểu thức chính quy
 - modifier => cấu hình cho biểu thức chính quy 
 +g -> global
 +i -> không phân biệt chữ hoa , chữ thường 
 +m -> nulti line -> khớp nhiều dòng
 +s -> singhle line -> khớp 1 dòng


 char -> Tìm  chuối char trong chuỗi gốc
 khớp đầu chuỗi : ^
 khớp cuối chuỗi: $
 check  có kí tự khớp đầu hay cuối chuỗi k

 [A-> Z] -> chữ hoa
 [a  -> z ] -> chữ thường
 [0 -> 9] -> sô
 [charList] -> các kí tự cjir định (khớp theo điều kiện hoặc )


 - khớp độ dài : Mặc định các biểu thức chỉ có độ dài  
 */


const str = "hoangAn.web@gmail.com";
// pattern là biểu thức chính quy mà bạn muốn viết

const pattern = /[a-zA-Z][a-zA-Z0-9]{1,}@[0-9]{3,}/;
const check = pattern.test(str);
console.log(check);

/**
 -
 */