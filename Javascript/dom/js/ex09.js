var checkAll = document.querySelector(".check-all");

var checkItems = document.querySelectorAll(".check");

checkAll.addEventListener("change", function () {
    count = checkAll.checked ? checkItem.length : 0;
    checkItem.forEach(function (checkItem) {
        checkItem.checked = checkAll.checked;
    });
});

var count = 0;
checkItems.forEach(function (checkItem) {
    checkItem.addEventListener("change", function () {
        if (checkItem.checked) {
            count++;
        } else {
            count--;
        }

        if (count === checkItems.length) {
            checkAll.checked = true;
        } else {
            checkAll.checked = false;
        }
    });
});




