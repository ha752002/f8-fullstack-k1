document.addEventListener("DOMContentLoaded", function () {
    var btnPrimary = document.querySelector('.btn-primary');
    var dropdownMenu = document.querySelector('.dropdown-menu');
    var content = document.querySelector('#content');
    var charCount = document.querySelector('.quantity span:nth-child(1)');
    var wordCount = document.querySelector('.quantity span:nth-child(2)');
    var controlBtnContainer = document.querySelector('.control-btn-container');
    var dropdownMenu = document.querySelector('.dropdown-menu');
    var filenameInput = document.querySelector('#filename-input');
    var colorBtn = document.querySelector('#color-btn');
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
    // console.log(buttons);

    function execCommand(aCommandName, aShowDefaultUI, aValueArgument) {
        // console.log(111);
        document.execCommand(aCommandName, aShowDefaultUI, aValueArgument);
    }

    colorBtn.addEventListener('change', function () {
        execCommand('foreColor', false, this.value);
    })
    buttons.forEach(function (button) {
        button.addEventListener("click", () => {
            execCommand(button.id, false, null);
        });
    })


    const button = dropdownMenu.querySelectorAll("button");
    button.forEach(function (button) {
        button.addEventListener('click', function () {

            if (this.id === 'new-btn') {
                console.log(111);
                filenameInput.value = 'untitled';
                content.innerText = '';
            }

            if (this.id === 'txt-btn') {
                const blob = new Blob([content.innerText]);
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = `${filenameInput.value}.txt`;
                link.click();
            }

            if (this.id === 'pdf-btn') {
                html2pdf(content).save(filenameInput.value);
            }
        })
    })

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


