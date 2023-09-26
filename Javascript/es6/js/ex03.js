// Destructuring -> phá vỡ cấu trúc của array , object để
// có thể truy cập các phần tử và lưu thành các biến riêng biệt

// const user = {
//     name: 'Ha',
//     email: 'ha@example.com',
//     age: 31,
//     address: 'Ho Chi Minh'
// }

// const name = user.name;
// const email = user.email;
// console.log(name, email);


// const { name: _name, email, ...rest } = user;
// console.log(_name, email);
// console.log(rest);

// const user = [
//     'Ha',
//     'ha@example.com',
//     31,
//     'Ho Chi Minh'
// ];


// const [username, email, , address] = user;
// console.log(username, email, address);

// const [username, email, ...rest] = user;
// console.log(username, email);
// console.log(rest);


var customers = [
    {
        id: 1,
        name: 'Nguyen Van A'
    },
    {
        id: 2,
        name: 'Nguyen Van B'
    }
];



var html = customers.map(({ id, name }) => ` 
<h3> ${id} - ${name}</h3>`).join('');

console.log(html);


let a = 10;
let b = 20;

[a, b] = [b, a];
console.log(`a = ${a}`);
console.log(`b = ${b}`);


//spread


const oldObj = {
    name: 'Ha',
    email: 'ha@example.com',
}


const newObj = {
    course: 'fullstack',
    teacher: 'Ha',
    ...oldObj
}


// console.log(newObj);


const oldArr = [
    'Ha F8',
    'ha@example.com'
]

const newArr = [
    'fullstack',
    'Ha',
    ...oldArr
]


// console.log(newArr);


const getTotal = (a, b) => {
    console.log(a, b);
}


var values = [5, 10];

getTotal(...values) 