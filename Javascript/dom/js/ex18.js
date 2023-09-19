// var btn = document.querySelector('.btn');
// var countEl = document.querySelector('.count');
// var message = document.querySelector('.message');


// var countEvent = new Event('count');

// btn.addEventListener('click', function () {
//     countEl.innerText++;

//     // nếu count = 10 thì hiển thị nội dung "hello F8" vapf thẻ div message
//     if (+countEl.innerText === 10) {
//         // message.innerText = 'hello F8';
//         countEl.dispatchEvent(countEvent);
//     }

// })

//Giữ chuột vào btn thì số count tự động tăng dùng customEvent

// countEl.addEventListener('count', function () {
//     console.log('success');
// })

// var increEvent = new Event('increment');


// btn.addEventListener('mousedown', function () {
//     isMouseDown = true;
//     handleIncrement(countEl);
// });

// btn.addEventListener('mouseup', function () {
//     isMouseDown = false;
// });

// var isMouseDown = false;
// var handleIncrement = function (current) {
//     current.innerText++;
//     var id = setTimeout(function () {
//         handleIncrement(current);
//     }, 1000);
//     if (!isMouseDown) {
//         clearTimeout(id);
//     }
// }
// countEl.addEventListener('increment', function () {

// })


var quantity = document.querySelector('.quantity')

var quantityInput = quantity.querySelector('input');

var minusBtn = quantityInput.previousElementSibling;

var plusBtn = quantityInput.nextElementSibling;

var changeEvent = new Event('change');

plusBtn.addEventListener('click', function () {
    quantityInput.value++;
    quantityInput.dispatchEvent(changeEvent);
});

minusBtn.addEventListener('click', function () {
    quantityInput.value--;
    if (quantityInput.value < 1) {
        quantityInput.value = 1;
    }
    quantityInput.dispatchEvent(changeEvent);
});


quantityInput.addEventListener('change', function () {
    console.log(this.value);
})



var timer = document.querySelector('.timer');
// timer.addEventListener('change', function () {
//     console.log(this.value);
// });


var initialValue = null;
var dragEvent;

// timer.addEventListener('mousedown', function () {
//     isDrag = true;
// });
document.addEventListener('mouseup', function () {
    initialValue = null
})

timer.addEventListener('input', function () {
    if (!initialValue) {
        initialValue = this.value;
        dragEvent = new CustomEvent('drag', {
            detail: {
                initialValue: initialValue,
            },
        });
    }



    if (this.value !== initialValue) {
        timer.dispatchEvent(dragEvent);
    }

})



timer.addEventListener('drag', function (e) {
    // console.log(this.value);
    console.log(this.value, e.detail.initialValue);
    // e là event object 

})

