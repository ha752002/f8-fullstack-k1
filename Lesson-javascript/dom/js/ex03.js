
var checkAll = document.querySelector('input[name="check-all"]');
var checkItem = document.querySelectorAll('input[name="check-item"]');

console.log(checkItem);
checkAll.addEventListener('click', function (e) {
    var isChecked = this.checked;
    checkItem.forEach(function (item) {
        item.checked = isChecked;
    })
});

checkItem.forEach(function (item) {
    item.addEventListener('click', function () {
        var checkedItems = document.querySelectorAll('input[name="check-item"]:checked');
        if (checkedItems.length === checkItem.length) {
            checkAll.checked = true;
        } else {
            checkAll.checked = false;
        }
    });
});