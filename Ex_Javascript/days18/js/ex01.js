var content = "Lorem ipsum dolor";

var contentArray = content.split(" ");

var currentIndex = 0;
var textColor = 'black';

function changeTextColor() {
    if (currentIndex < contentArray.length) {
        textColor = 'red';
        var newText = '';
        for (var i = 0; i < contentArray.length; i++) {
            console.log(newText);

            if (i === currentIndex) {
                newText += `<span style="color: ${textColor};">${contentArray[i]}</span>`;
            } else {
                newText += contentArray[i];
            }


            if (i !== contentArray.length - 1) {
                newText += ' ';
            }
        }

        document.getElementById("text").innerHTML = newText;

        setTimeout(function () {
            textColor = 'black';
            currentIndex++;

            changeTextColor();
        }, 1000);
    } else {
        currentIndex = 0;
        setTimeout(changeTextColor, 100);
    }
}

changeTextColor();