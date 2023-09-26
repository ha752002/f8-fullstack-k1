document.addEventListener("DOMContentLoaded", function () {
    // Định nghĩa các Event  cho các Element 
    var inputRangeList = document.querySelectorAll('input[type="range"]');

    if (inputRangeList.length) {
        inputRangeList.forEach(function (input) {
            input.addEventListener('mousemove', function (e) {
                var offsetX = e.clientX;
                var value = offsetX * 100 / input.clientX;
                value = value.toFixed(2);

            })
        })
    }
})