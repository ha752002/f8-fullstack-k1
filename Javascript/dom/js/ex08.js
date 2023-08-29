/**
 * Event object
 */

var btn = document.querySelector(".btn");
var nameEl = document.querySelector(".name");

btn.addEventListener("click", function (e) {
    console.log(this);
    console.log(e);
    if (!e.ctrlkey) {
        this.style.background = "green";
    } else {
        this.style.background = "red";

    }
});

var isDown = false;
btn.addEventListener('mousedown', function (e) {
    if (e.which === 1) {
        isDown = true;
        offsetX = e.offsetX;
        offsetY = e.offsetY;
    }
});


document.addEventListener('mousemove', function (e) {
    if (isDown) {
        // console.log("đang kéo");
        // console.log(e.clientX, e.clientY);
        var css = {
            top: `${e.clientY - offsetY}px`,
            left: `${e.clientX - offsetX}px`,
        }

        Object.assign(btn.style, css);
    }
});

document.addEventListener('mouseup', function () {
    isDown = false;

});


// nameEl.addEventListener('input', function (e) {
//     console.log(e);

// })

// nameEl.addEventListener('keyup', function (e) {
//     console.log(e);
// })

// btn.addEventListener('mouseup', function (e) {
//     console.log(e);
// })

// var link = document.querySelector(".link");
// link.addEventListener("click", function (e) {
//     e.preventDefault();
//     console.log(this.href);
// })

// document.addEventListener('contextmenu', function (e) {
//     e.preventDefault();
// })

// var content = document.querySelector(".content");
// var span = content.querySelector("span");

// content.addEventListener("click", function () {
//     console.log('Content clicked');
// })

// span.addEventListener("click", function (e) {
//     e.stopPropagation();
//     console.log('Span clicked');
// })

// content.addEventListener("click", function (e) {
//     console.log(this);
//     console.log(e.target);
// })