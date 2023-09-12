// var btn = document.querySelector('.btn');
// var content = document.querySelector('.content');

// var h1 = content.querySelector('h1');


// h1.addEventListener('click', function () {
//     this.style.color = 'red';
// })

// btn.addEventListener('click', function () {
//     content.innerHTML += `<p>Khóa học fullStack</p>`;
// })

/**
 * Tạo mới Element
 * Với cách này thì cái nào thêm vào thì nó ảnh hưởng tất cár
 * cái khác k bị gì cả
 * -=> h1 kp tạo lại
 * .Element đc tạo ra chỉ đc dùng 1 lần
 */
var content = document.querySelector('.content');

var h2 = document.createElement('h2');
h2.innerText = 'Khóa học fullStack';
h2.classList.add('course-name');

// thêm thẻ h2 vào content(thêm cuối cùng)
content.appendChild(h2);


/**
 * ex2: ul li
 */
var content = document.querySelector('.content');


// var ul = document.createElement('ul');
// ul.innerHTML = `
// <li>Nguyễn Thị Hồng Hà</li>
// <li>k1- fullstack</li>
// <li>07/05/2002</li>
//     `;

// content.appendChild(ul);


var ul = document.createElement('ul');

for (var i = 1; i <= 3; i++) {
    var li = document.createElement('li');
    li.innerText = `Item ${i}`;
    ul.appendChild(li);
}

content.appendChild(ul);


// thêm 1 node vào trc 1 node khác

var p = document.createElement('p');
p.innerText = 'Hello F8';

content.insertBefore(p, h2);


// thay thế 1 node bằng 1 node khác

var h3 = document.createElement('h3');
h3.innerText = 'Hello  Ha';
content.replaceChild(h3, p)
