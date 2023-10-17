// 1. localStorage -> lưu trữ vô thời hạn
// 1.1 set localStorage : localStorage.setItem('key', 'value')
//1.2 get localStorage : localStorage.getItem('key')
// 1.3 remove localStorage : localStorage.removeItem('key')
// 1.4 . xóa rấ cả localStorage : localStorage.clear('key')

// 2 sessionStorage -> lưu trữ theo phiên (tắt trình duyệt tự xóa)
// tương tự localStorage

// 3 cookie -> lưu trữ theo phiên , lưu trữ theo thời gian

// if (typeof Storage !== 'undefined') {
//     console.log(localStorage.getItem('userName'));

//     sessionStorage.setItem('userName', 'hoangan.web@gmail.com');
// }

// cookie tự động đính kèm vào http request vs đk dùng trình duyệt
// chuỗi cookie : key1 = value , key2 = value2;
// 1.cookie
// expire sẽ chấp nhận định dạng thời gian UTC
const expires = new Date('2023-10-16 09:00:00').toUTCString();
// console.log(expires);
// document.cookie = 'username=hoangan.web; expire=${expires}';
// document.cookie = 'email= ha@gmail.com';
document.cookie = 'username=hongha2002;path=/';
document.cookie = 'username=hongha2002;HttpOnly=true';


// 2. đọc cookie
// console.log(document.cookie);
// document.cookie = 'username=hongha2002';


// 4.xóa cookie
// document.cookie = `username=;expires=${new Date().toUTCString()}`;
// cookie để xây dựng tính năng trải nghiệm ng dùng



/**
 * httpOnly: 
 * xây dựng web dễ bị tấn công , (lấy cookie) 
 * -> fix là chỉ cho phép BE lấy cookie(lấy thông qua HTTP)
 * secure -> chỉ lấy đc cookie  nếu sd https
 * 
 */


