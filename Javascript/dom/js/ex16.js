//Scroll events

window.addEventListener('scroll', function () {
    console.log('Scroll event...');
});


//khi chúng ta dừng scroll thì sẽ lắng nghe đc sựu kiện 
// window.addEventListener('scrollend', function () {
//     console.log('scrollend...');
// });


// scroll Y, scroll X

// btn.addEventListener('click', function () {
//     window.scrollTo(0, 100);
// })




/**
 * window.scroll(X, Y) => Vị trí thiết lập scroll theo x , y 
 */
// làm tính năng back to the top
var back = document.querySelector('.back');

window.addEventListener('scroll', function () {
    var position = window.scrollY;
    if (position > 70) {
        back.classList.add('show');
    } else {
        back.classList.remove('show');
    }
});

back.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    scrollToTop();
});

var scrollToTop = function () {
    var currentScrollY = window.scrollY;
    var id = setInterval(function () {
        currentScrollY -= 20;
        window.scrollTo(0, currentScrollY);
        if (currentScrollY <= position) {
            clearInterval(id);
        }
    }, 10);
};
