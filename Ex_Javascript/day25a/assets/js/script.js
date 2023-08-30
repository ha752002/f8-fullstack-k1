
// Các phần tử HTML
var listImages = document.querySelector(".list-images");
var imgs = document.getElementsByTagName("img");
var btnLeft = document.querySelector(".btn-left");
var btnRight = document.querySelector(".btn-right");
var indexItems = document.querySelectorAll(".index-item");

var length = imgs.length;
var current = 0;

indexItems.forEach(function (item, index) {
    item.addEventListener('click', function () {
        current = index;

        var width = imgs[0].offsetWidth;
        listImages.style.transform = `translateX(${width * -1 * current}px)`;

        indexItems.forEach(function (item) {
            item.classList.remove('active');
        });
        item.classList.add('active');
    });
});

btnRight.addEventListener('click', function () {
    current = current + 1;
    if (current >= length) {
        current = length - 1;
    }
    var width = imgs[0].offsetWidth;
    listImages.style.transform = `translateX(${-1 * width * current}px)`;

    updateActiveIndex();
});

btnLeft.addEventListener('click', function () {
    current = current - 1;
    if (current < 0) {
        current = 0;
    }
    var width = imgs[0].offsetWidth;
    listImages.style.transform = `translateX(${-1 * width * current}px)`;

    updateActiveIndex();
});


function updateActiveIndex() {
    indexItems.forEach(function (item, index) {
        if (index === current) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

var pressed = false;
var startX = 0;
var startScrollLeft = 0;

listImages.addEventListener('mousedown', function (e) {
    pressed = true;
    startX = e.clientX;
    console.log(`startX = ${startX}`);
    startScrollLeft = listImages.scrollLeft;
    this.style.cursor = 'grabbing';
});

listImages.addEventListener('mouseup', function (e) {
    if (pressed) {
        pressed = false;
        listImages.style.cursor = 'grab';
    }
});

listImages.addEventListener('mousemove', function (e) {
    if (pressed) {
        var diffX = startX - e.clientX;
        console.log(`diffX = ${diffX}`);
        startX = e.clientX;
        listImages.scrollLeft = startScrollLeft + diffX;
    }
});


