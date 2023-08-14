var content = "Lorem Ipsum is simply";
var textColor = 'black';

var currentIndex = 0;
var content = content.split(" ");
var firstContent = '';

for (var i = 0; i < content.length; i++) {
    (function (index) {
        setTimeout(function () {
            if (content[index] !== " ") {
                firstContent += `<span style={$colortext}>${content[index]}</span>`;
                document.getElementById("text").innerHTML = `${firstContent}`;

                if (i + 1 !== content.length) {
                    firstContent += " ";
                }
            }
        }, 1000 * index);
    })(i);
}
