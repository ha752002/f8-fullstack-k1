// Object.prototype.message = "FullStack";

// var user = {
//     name: "Ha",
//     email: "ha@gmail.com",
// };


// Object.keys(user).forEach(function (key) {
//     console.log(key);
// });


// var query = {
//     name: "Ha ",
//     email: " ha@gmail.com",
//     category: 1
// }

// Chuyển object trên thành dạng query string

// console.log(query);
// console.log(Object.entries(query));


// var newQuery = Object.entries(query).map(function (element) {
//     // console.log(element);
//     return element.join("=");
// }).join("&");


// console.log(newQuery.replaceAll(" ", "+"));

Array.prototype.map2 = function (fn) {
    // console.log(callback);
    var newarr = [];
    var arr = this;
    for (var user in arr) {
        newarr.push(arr[user]);
    }

    return newarr;

};

var users = ["User 1", "User 2", "User 3"];

var newArr = users.map2(function (user, index) {
    return `<h2>${user}</h2>`;
});

console.log(newArr);