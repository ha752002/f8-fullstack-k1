// khai báo object 
// var user = {};

// var user = {
//     name: "hoang an",
//     email: "hoangan.@gmail.com",
//     getName: function () {
//         return "Hoang An";
//     }
// }

//Truy cập vào key của object
// console.log(user.name());


// thêm key cho object
// user.country = " Viet Nam";
// user["address"] = "Cau giay - Ha Noi";


// sửa giá trị của key trong object 

// user.name = " Hoang An F8";

// xóa key
// delete user.getName;


// lấy key 
// for (var key in user) {
//     if (typeof user[key] === "function") {
//         console.log(user[key]());
//     } else {
//         console.log(user[key]);
//     }
// }

// console.log("===================");

// Object.key(user).forEach(function (key) {
//     if (typeof user[key] === "function") {
//         console.log(user[key]());
//     } else {
//         console.log(user[key]);
//     }
// })

var users = [
    {
        id: 1,
        name: "Hoang An",
        email: "hoangan@gmail.com",
    },
    {
        id: 2,
        name: "SonD",
        email: "SonD@gmail.com",
    },
    {
        id: 3,
        name: "Duong",
        email: "Duong@gmail.com",
    }
]

console.log(users);

var html = `<table with="100%" border="1"> 
    <tr > 
        <th>ID</th>
        <th>Ten</th>
        <th>Email</th>
    </tr>
    ${users.map(function (user) {
    return `<tr>
        <th>${user.id}</th>
        <th>${user.name}</th>
        <th>${user.email}</th>
            </tr>`;
})
    }
    </table > `;

document.write(html);