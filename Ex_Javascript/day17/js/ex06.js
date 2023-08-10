// # Bài 6: Vẽ bàn cờ vua
// Học viên sử dụng kiến thức
//  đã học về vòng lặp,
//  câu lệnh rẽ nhánh để vẽ bàn cờ vua

var boardSize = 8;
var chessboard = document.getElementById("chessboard");
var chessboardHTML = "";

for (var row = 1; row <= boardSize; row++) {
    for (var col = 1; col <= boardSize; col++) {
        var squareColor = (row + col) % 2 === 0 ? "white-square" : "black-square";
        chessboardHTML += `<div class="${squareColor}"></div>`;
    }
}

chessboard.innerHTML = chessboardHTML;