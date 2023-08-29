var carousel = document.querySelector(".carousel");

var carouselInner = carousel.querySelector(".carousel-inner");

var carouselNav = carousel.querySelector(".carousel-nav");

var navNext = carouselNav.querySelector(".next");
var navPrev = carouselNav.querySelector(".prev");

//Tính toán số lượng ảnh

var carouselItems = carouselInner.querySelectorAll(".item");

if (carouselItems.length) {
    //Xử lý
    //Lấy chiều rộng của 1 item
    var itemWidth = carouselInner.clientWidth; //Trả về chiều cộng của element
    console.log(itemWidth);

    //Tính tổng chiều rộng các item
    var totalWidth = itemWidth * carouselItems.length;

    //Cập nhật CSS cho carousel-inner
    carouselInner.style.width = `${totalWidth}px`;

    //Xử lý chuyển slide khi click vào nút next
    var position = 0;
    navNext.addEventListener("click", function () {
        if (Math.abs(position) < totalWidth - itemWidth) {
            position -= itemWidth;
            carouselInner.style.translate = `${position}px`;
        }
    });

    navPrev.addEventListener("click", function () {
        if (position < 0) {
            position += itemWidth;
            carouselInner.style.translate = `${position}px`;
        }
    });
}