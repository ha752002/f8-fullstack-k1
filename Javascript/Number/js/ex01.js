
//Number: Kiểu dữ liệu nguyên thủy
//Hàm tạo của number là Number
// console.log(Number.prototype);
// console.log([Number]);
// var a = 10.5;
// console.log(a);

//Kiểm tra 1 biến có phải kiểu number hay không?
// if (a === 0 || (a && a.constructor.name === "Number")) {
//     console.log("Đây là số");
// } else {
//     console.log("Đây không phải số");
// }

//Số NaN = Not A Number
// var a = 10;
// var b = "a";
// var c = a / b;
// if (Number.isNaN(c)) {
//   console.log("Không có phải là số");
// } else {
//   console.log(c);
// }

//Số Infinity

// Tổng kết:
// 1. Kiểm tra 1 số
// - Không phải NaN
// - Không phải Infinity
// - typeof là number

// var a = 2;
// if (!isNaN(a) && a !== Infinity && typeof a === "number") {
//     console.log("Là số");
// } else {
//     console.log("Không phải là số");
// }


//Ép kiểu số nguyên
// var a = "10a123";
// a = Number.parseInt(a);
// console.log(a, typeof a);


//Ép kiểu số thực
// var a = "10.5123a123";
// a = Number.parseFloat(a);
// console.log(a, typeof a);


//Ép kiểu số
// var a = "10.5a";
// a = +a;
// console.log(a, typeof a);


//Chuyển số thành chuỗi
// var a = 10;
// // a += "";
// a = a.toString();
// console.log(a, typeof a);

//Làm tròn và lấy số lượng phần thập phân
// var a = 10.556;
// a = a.toFixed(2);
// console.log(a);

// var price = 102000000.123;
// price = price.toLocaleString("vi", { style: "currency", currency: "VND" });
//Chuyển về chuỗi
// console.log(price);
