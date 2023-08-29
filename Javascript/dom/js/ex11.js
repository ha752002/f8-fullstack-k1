
// chọn thành phần kế tiếp
// nextElementSibling=>trả về element ở trước
// nextSibling => trả về node => học sau
// previousElementSibling => trả về element ở sau
// previousSibling =>  trả về node => học sau
var productActive = document.querySelector(".products .active");
var product = document.querySelector(".products");
console.log(product);
// console.log(productActive);
// console.log(productActive.previousElementSibling);


var btnNext = document.querySelector(".next");
var btnPrev = document.querySelector(".prev");

var handleNext = function () {
    var nextElement = productActive.nextElementSibling;
    if (nextElement === null) {
        nextElement = document.querySelector(".products h2");
    }
    nextElement.classList.add("active");
    productActive.classList.remove("active");
    productActive = nextElement;
};

btnNext.addEventListener("click", function () {
    var nextElement = productActive.nextElementSibling;
    if (nextElement === null) {
        nextElement = document.querySelector(".products h2");
    }
    nextElement.classList.add("active");
    productActive.classList.remove("active");
    productActive = nextElement;
});

btnPrev.addEventListener("click", function () {
    var prevElement = productActive.previousElementSibling;
    if (prevElement === null) {
        prevElement = document.querySelector(".products h2:last-child");
    }
    prevElement.classList.add("active");
    productActive.classList.remove("active");
    productActive = prevElement;
});
var isHover = false;

setInterval(function () {
    if (!isHover) {
        handleNext();
    }
}, 1000);

product.addEventListener('mouseover', function () {
    isHover = true;
});

product.addEventListener('mouseout', function () {
    isHover = false;
});

