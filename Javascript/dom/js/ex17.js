var header = document.querySelector(".header");
var body = document.body;

var headerHeight = header.clientHeight;
var currentY = 0;
var scrollType;


window.addEventListener("scroll", function () {
    var y = this.window.scrollY;

    if (y > currentY) {
        scrollType = "down";
    } else if (y < currentY) {
        scrollType = "up";
    }

    currentY = y;

    if (y >= headerHeight) {
        header.classList.add("fixed");
        body.style.paddingTop = `${headerHeight + 15}px`;
    }


    if (scrollType == "up") {
        header.classList.remove("fixed");
        body.style.paddingTop = 0;
    }
});

// xác định hành động kéo scrollY  lên thì header bỏ fixed
//Scroll to section 

var navItems = header.querySelectorAll(".menu li a");

navItems.forEach(function (navItem) {
    navItem.addEventListener("click", function (e) {
        e.preventDefault();
        var has = this.getAttribute("href");
        var section = document.querySelector(has);

        var sectionOffsetTop = section.offsetTop;

        window.scrollTo(0, sectionOffsetTop - headerHeight - 15);
    })
});



