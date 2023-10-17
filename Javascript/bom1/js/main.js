/**
 * muốn mở số mới bằng window.open
 * có opition
 */


const btn = document.querySelector('.btn');
const close = document.querySelector('.close');
// let website;

// btn.addEventListener('click', () => {
//     // window.open('http://vnexpress.net', "", "width=200;height=200;top = 100px");
//     website = window.open('http://vnexpress.net');

//     console.log(website);

// })

// close.addEventListener('click', () => {
//     window.close();

// })


// trả về thông tin của url
//hash : là sau giống #
// search : là sau dấu ?

// console.log(window.location);



// 3 history
// .back là nút back
// . là  đi tới trang kế tiếp

btn.addEventListener('click', () => {
    window.location.pushState({}, "", "/San pham");
})