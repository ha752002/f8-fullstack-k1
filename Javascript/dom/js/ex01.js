
// DOM = Document Object Model

// 1. DOM Element: Truy xuất vào các thẻ html => Tạo đối tượng HTML

// 2. DOM CSS: Thay đổi CSS Inline của thẻ html

// 3. DOM HTML: Thay đổi nội dung, thuộc tính thẻ html

// 4. DOM Event: Gán sự kiện cho các thẻ HTML

// 5. DOM Event Listener: Lắng nghe các sự kiện

// 6. DOM Navigation: Thao tác với các element phân cấp

// 7. DOM Node: Thao tác với các thẻ HTML thông qua Node (Object)


// 1 Truy xuất thông qua id:
// document.getElementById(id)


// var title = document.getElementById("title");
// title.innerText = "Ha";
// console.log(title);

// 2 Truy xuất thông qua class
// document.getElementsByClassName(class)

// var titleList = document.getElementsByClassName("title");
// console.log(titleList);
// for (var index = 0; index < titleList.length; index++) {
//     console.log(titleList[index]);
// }

// 3- Truy xuất thông qua tag name
// document.getElementsByTagName(tag)
// var titleList = document.getElementsByTagName("h1");
// console.log(titleList);

// 4- Truy xuất thông qua css selector(Chỉ lấy selector đầu tiên)

// var title = document.querySelector("#title");

// console.log(title)
// title.innerHTML = "F8 ";

// 5-  Truy xuất thông qua css selector( selector lấy tất cả)
// var titleList = document.querySelectorAll(".title");
// titleList.forEach(function (title) {
//     console.log(title.innerText);
// });


var content = document.querySelector(".content");
var productHeading = content.querySelector(".product-heading");
console.log(productHeading);

var fullname = document.register.fullname;
console.log(fullname);

