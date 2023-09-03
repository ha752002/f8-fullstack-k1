var listImages = document.querySelector(".list-images");
var imgs = document.getElementsByTagName("img");
var btnLeft = document.querySelector(".btn-left");
var btnRight = document.querySelector(".btn-right");
var show = document.querySelector(".index-image");
var length = imgs.length;
var current = 0;

// if (imgs.length) {
//     var itemWidth = imgs[0].clientWidth;
//     var totalWidth = itemWidth * imgs.length;
//     listImages.style.width = `${totalWidth}px`;
// }

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

    var width = imgs[0].clientWidth;
    listImages.style.transform = `translateX(${-1 * width * current}px)`;

    updateActiveIndex();
});

btnLeft.addEventListener('click', function () {
    current -= 1;
    if (current < 0) {
        current = 0;
    }
    var width = imgs[0].clientWidth;
    listImages.style.transform = `translateX(${-1 * width * current}px)`;

    updateActiveIndex();
});

function handlerNavigation(index) {
    return function () {
        current = index;
        var width = imgs[0].clientWidth;
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

var pressed = false;
var transitionInProgress = false;
var pullThreshold = (clientWidth * 10) / 100;

listImages.addEventListener('mousedown', function (e) {
    pressed = true;
    console.log(e);
});

// listImages.addEventListener('mouseup', function () {
//     if (pressed) {
//         pressed = false;
//         listImages.style.cursor = 'grab';
//     }
// });

// listImages.addEventListener('mousemove', function (e) {
//     if (pressed) {
//         var diffX = startX - e.clientX;
//         startX = e.clientX;
//         var newTranslateX = startScrollLeft + diffX;
//         listImages.style.transform = `translateX(${newTranslateX}px)`;
//     }
// });