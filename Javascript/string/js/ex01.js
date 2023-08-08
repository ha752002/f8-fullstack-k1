//Khai bao chuoi
var fullname = "ha";

// console.log(fullname, typeof fullname);

// var fullname2 = String("Ha f8");

var str = "Hong Ha  F8";

//1.length => lấy độ dài cuả chuỗi

// console.log(str.length);


// 2. charAt(index) => trả về kí thự theo index

// console.log(str.charAt(5))

// 3. charCodeAt(index) => mã AsCII của ký tự theo index// console.log(str.charAt(5))
// console.log(str.charCodeAt(2));

//4. concat(str2, str3,...);=> Nối chuỗi
// console.log(str.concat(" ", "A"));


//.5 indexOf(subStr) => Tìm vị trí đầu tiên chuỗi subStr trong chuỗi cha
// Nếu tìm thấy trả về index k tìm thấy tra về -1
//

// 6. lastIndex0f(subStr) => Tìm vị trú cuối

// console.log(str.lastIndexOf("F8"));

// 7. includes(subStr) tìm chuỗi nhưng trả về True False
// console.log(str.includes("F8"));

// 8 .slice(start, end) => Cắt chuỗi start => end;
// console.log(str.slice(0, 2))
// console.log(str.slice(-5))

// 9. replace(search, with) => tìm và thay thế
// và chỉ thay thế vị trí đầu tiên
//Việc tìm kiếm trong hàm này sẽ có
// hộ trợ cả biểu thức chính quy(regex)
// console.log(str.replace("F8", "F88"));
// console.log(str.replace(/F8/g, "F88"));


// 10.replaceAll(search, with) => tìm và thay thế
// và thay thế tất cả

// console.log(str.replaceAll("F8", "F9"))

// 11.split(char) => Tách chuỗi thành mảng
// console.log(str.split(" "));


// 12. match(pattern) => cắt chuỗi dựa vào biểu thức chính quy


// 13. tolowerCase() => Chuyển thành hcuwx thường
// 14. toUpperCase() => chuyển thành chữ hoa
// 15. trim() => Loại bỏ khoảng trắng đầu và cuối chuỗi
// 16. trimStart() => loại bỏ khoảng trắng đầu chuỗi
// 17. trimEnd() => loại bỏ khoảng trắng cuõi chuỗi 
