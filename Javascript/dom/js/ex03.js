var btn = document.querySelector('.btn');
var complete = document.querySelector('.complete');

var handleClick = function () {
    console.log('đki khóa hoc');
}
btn.addEventListener('click', handleClick)//k đc đưa lời gọi hàm


complete.addEventListener('click', function () {
    btn.removeEventListener('click', handleClick);
});

// btn.addEventListener('click', function () {
//     console.log('đki khóa hoc2');
// })

var items = document.querySelectorAll("ul li");
items.forEach(function (item) {
    item.addEventListener('click', function () {
        console.log(this);
    })
})