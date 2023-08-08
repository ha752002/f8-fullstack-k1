// # Bài 5: Vẽ tam giác số
// Vẽ tam giác số sau với N dòng
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

var n = 5;
var count = 0;

for (var i = 0; i <= n; i++) {
    for (var j = 1; j <= i; j++) {
        document.write(`${++count} \n`);
    }
    document.write("</br>");
}

