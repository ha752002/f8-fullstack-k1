var listImages = document.querySelector(".list-images");
var imgs = document.getElementsByTagName("img");
var btnLeft = document.querySelector(".btn-left");
var btnRight = document.querySelector(".btn-right");
var show = document.querySelector(".index-image");
var length = imgs.length;
var current = 0;

for (var i = 0; i < imgs.length; i++) {
    var indexItem = document.createElement("div");
    indexItem.className = `index-item index-item-${i} ${i === 0 ? 'active' : ''}`;
    show.appendChild(indexItem);

    indexItem.addEventListener('click', handlerNavigation(i));
}

btnRight.addEventListener('click', function () {
    current += 1;
    if (current >= length) {
        current = length - 1;
    }

    var width = imgs[0].offsetWidth;
    listImages.style.transform = `translateX(${-1 * width * current}px)`;

    updateActiveIndex();
});

btnLeft.addEventListener('click', function () {
    current -= 1;
    if (current < 0) {
        current = 0;
    }
    var width = imgs[0].offsetWidth;
    listImages.style.transform = `translateX(${-1 * width * current}px)`;

    updateActiveIndex();
});

function handlerNavigation(index) {
    return function () {
        current = index;
        var width = imgs[0].offsetWidth;
        listImages.style.transform = `translateX(${-1 * width * current}px)`;

        updateActiveIndex();
    };
}

function updateActiveIndex() {
    var indexItems = document.querySelectorAll(".index-item");

    indexItems.forEach(function (item, index) {
        if (index === current) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

