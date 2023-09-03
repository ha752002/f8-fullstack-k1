document.querySelector('div').onclick = function () {
    console.log('Div');
}

document.querySelector('button').onclick = function (e) {
    e.stopPropagation();
    console.log('clickme');
}