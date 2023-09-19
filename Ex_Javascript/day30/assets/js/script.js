document.addEventListener("DOMContentLoaded", function () {
    var btnPrimary = document.querySelector('.btn-primary');
    var dropdownMenu = document.querySelector('.dropdown-menu');
    var content = document.querySelector('#content');
    var charCount = document.querySelector('.quantity span:nth-child(1)');
    var wordCount = document.querySelector('.quantity span:nth-child(2)');
    var controlBtnContainer = document.querySelector('.control-btn-container');
    // console.log(controlBtnContainer);

    btnPrimary.addEventListener('click', function () {
        dropdownMenu.classList.toggle('show');
    });

    content.setAttribute("contenteditable", "true");

    content.addEventListener('input', function () {
        var text = content.textContent.trim();

        charCount.textContent = "Số ký tự: " + text.length;

        var words = text.split(/\s+/);
        var filteredWords = words.filter(function (word) {
            return word.length > 0;
        });
        wordCount.textContent = "Số từ: " + filteredWords.length;
    });

    const buttons = controlBtnContainer.querySelectorAll("button");
    console.log(buttons);

    // function execCommand(aCommandName, aShowDefaultUI, aValueArgument) {
    //     console.log(111);
    //     document.execCommand(aCommandName, aShowDefaultUI, aValueArgument);
    // }

    // var execCommand = (aCommandName, aShowDefaultUI, aValueArgument) => {
    //     document.execCommand(aCommandName, aShowDefaultUI, aValueArgument);

    // }

    // buttons.forEach(function (button) {
    //     button.addEventListener("click", () => {
    //         console.log('sss');

    //         execCommand(button.id, false, null)
    //     });
    // })


    // console.log(pasteTarget);
    // for (const button of buttons) {
    //     const elementName = button.getAttribute("data-el");
    //     button.addEventListener("click", () =>
    //         insertText(`<${elementName}></${elementName}>`, pasteTarget),
    //     );
    // }

    // function insertText(newText, selector) {
    //     const content = document.querySelector(selector);
    //     content.focus();

    //     let pasted = true;
    //     try {
    //         if (!document.execCommand("insertText", false, newText)) {
    //             pasted = false;
    //         }
    //     } catch (e) {
    //         console.error("error caught:", e);
    //         pasted = false;
    //     }

    //     if (!pasted) {
    //         console.error("paste unsuccessful, execCommand not supported");
    //     }
    // }


});

var bold = document.querySelector("#bold");
console.log(bold);

bold.addEventListener("click", () => {
    console.log(123);
    document.execCommand("bold")
})

