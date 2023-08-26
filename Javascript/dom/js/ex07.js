//DOM CSS 
// var content = document.querySelector(".content");

// content.style = `color:red; font-weight:bold`;
// var css = {
//     color: "blue",
//     fontStyle: "italic",
//     fontWeight: "bold",
//     backgroundColor: "Black",
// }

// Object.assign(content.style, css);

// console.log(content.style)
// content.style.color = "blue";
// content.style.fontStyle = "Italic";
// content.style.fontWeight = "bold";
// content.style.backgroundColor = "black";
// content.style.lineHeight = "1.5";

var btn = document.querySelector(".btn");
var content = document.querySelector(".content");


var countClick = 0;
btn.addEventListener('click', function () {
    if (content.style.display === '') {
        content.style.display = 'none';
        this.innerHTML = 'Hiện';
    } else {
        content.style.display = '';
        this.innerHTML = 'Ẩn'
    }
    countClick++;
    if (countClick >= 5) {
        this.disabled = true;
    }
});

