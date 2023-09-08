// window.addEventListener('load', function () {
//     var title = document.querySelector('.title');

// })

// document.addEventListener('DOMContentLoaded', function () {
//     var title = document.querySelector('.title');

// })
/**
 * onload : Web tải xong 
 */

var root = document.querySelector("#root");

//Tao Element node
var h1 = document.createElement('h1');
h1.innerText = 'Hello';
h1.classList.add('title');
// console.log(h1);


//Render Element Node len Ui
// dk : phai co 1 Element that
root.appendChild(h1);

var ul = document.createElement('ul');
var li = document.createElement('li');
li.innerHTML = 'Item1';
ul.appendChild(li);

var li = document.createElement('li');
li.innerText = 'Item2';
ul.appendChild(li);

var li = document.createElement('li');
li.innerText = 'Item3';
ul.appendChild(li);

root.append(ul);

var h2 = document.createElement('h2');
h2.innerText = 'Full Screen';
root.append(h2);

// Thay dodoir noi dung cua  1 node
h1.inertText = 'Hello F888';

h2.remove();

//Vi du : xay dung ung dung Counter dung Dom node

var handleIncrement = function () {
    countNumber.data++;

    if (+countNumber.data === 10) {
        countNumber.remove();
    }
}

var h2Counter = document.createElement('h2');
h2Counter.innerText = 'Count: ';
var countNumber = document.createTextNode(0);
h2Counter.append(countNumber);
root.append(h2Counter);

var btnIncre = document.createElement('button');
btnIncre.innerText = '+';
root.append(btnIncre);
btnIncre.addEventListener('click', handleIncrement);
root.append(btnIncre);


var counterComment = document.createComment('counter comment');

root.append(counterComment);

// theem 1 node ms vao trc 1 node khac
// dung insertBefore
var h2Title = document.createElement('h2');
h2Title.innerText = 'Counter App';
root.insertBefore(h2Title, counterComment);


// thau the node cu bang node moi
var h2TitleNew = document.createElement('h2');

h2TitleNew.innerText = 'Ung dung dem';
root.replaceChild(h2TitleNew, h2Title);