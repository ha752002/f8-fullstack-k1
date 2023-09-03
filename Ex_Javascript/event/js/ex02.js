
//1. input[type="text"]
// var inputElement = document.querySelector('input[type="text"]');

// var inputValue;
// inputElement.addEventListener('input', function (e) {
//     inputValue = e.target.value;
// });


//2. input[type="checkbox"]
var inputElement = document.querySelector('input[type="checkbox"]');

inputElement.addEventListener('change', function (e) {
    console.log(e.target.checked);
});
