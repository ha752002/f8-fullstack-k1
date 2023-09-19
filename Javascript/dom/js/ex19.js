

// var title = document.querySelector('.title');
// console.log(title);


// var p = document.querySelector('p');

// console.log(p)


// var css = {
//     color: 'red',
// }


// var title = document.querySelector('.title');
// Object.assign(title.style, css);


// var changeCss = function (element, change) {
//     Object.assign(element.style, change);
// }

// changeCss(title, css);

HTMLElement.prototype.changeCSS = function (style) {
    Object.assign(this.style, style);
}
var title = document.querySelector('.title');
title.changeCSS({
    color: 'red'
})


document.querySelector('p').changeCSS({
    color: 'blue'
})