// console.log(Array.prototype);


var users = ["Hi", "Hello", "Bye"];
console.log(users);

//1 at() => lấy phần tử mảng theo index;
// console.log(users.at(0));

//2 concat() => nối mảng và trả về mảng mới sau khi nối
//k đc dùng dấu + 2 mảng ở js
// thêm 1 ptu mơi
// console.log(users.concat([1, 2, 3], ['hi', 'hello']));
// console.log(users.concat("Hi"));

//3 indexOf(value) => Tìm vị trí xuất hiện đầu tiên của phần tử mảng theo giá trị
// console.log(users.indexOf("Hello"));


// 4. lastindexOf(value) => Tìm vị trí xuất hiện cuối của phần tử mảng theo giá trị


// 5. includes(value) = > Tìm ptu trong mảng và trả về true/false


// 6.slice(start,end) => trả về 1 mảng bao gồm các phần tử từ start => End
// console.log(users.slice(1, 3));
// console.log(users.slice(2));
// console.log(users.slice(-2));


// 7. join() => gộp các phần tử mảng thành chuỗi
// console.log(users.join(" "));


// thay đổi mảng ban đầu;

// 8. push => thêm phần tử vào cuối mảng và trả về số lượng sau khi thêm
// console.log(users);

// users.push("a", "b")
// console.log(users);


// 9 Unshift() => Them phan tu vào đầu mảng

// 10 .pop() => Xóa ptu cuối mảng và trả về gtri ptu vừa xóa


// var value = users.pop();
// console.log(users, value);


// 11. shift() => Xóa phần tử đầu mảng
// var value = users.shift();
// console.log(users, value);


// 12. reverse() => đảo ngược mảng

// users.reverse();
// console.log(users);


// 13. sort() => sx mảng theo thứ tự tăng dần


// var numbers = [5, 1, 10, 1000];
// numbers.sort(function (a, b) {
//     return a - b;
// });
// console.log(numbers);


// 14. fill thay thế tất cả các phần tử thành 1 giá trị
// console.log(users.fill("An"));


//15.forEach() => Duyệt từng phần tử
// k trả về giá trị
// k dừng đc , k có break , k return
// users.forEach(function (users, index) {
//     console.log(users, index)
// })


// 16. map() => Duyệt các phần tử và trả về 1 mảng
// var result = users.map(function (user, index) {
//     console.log(user, index)
//     return ` ${user}`;
// })

// console.log(result);


// 17. some()
//-trả về true nếu có 1 phần tử return về true
// trả về false nếu koong có phần tử nào return về true


//18 every
//trả về true  nếu tất cả các phần tywr trả về true
// trả về false nếu ít nhất 1 phần tử trả về false


//19 filter()
// trả về 1 mảng
// lấy ra các phần tử đc return true

// var result = users.filter(function (user) {
//     if (user === "Hi") {
//         return true;
//     }
// });


// console.log(result);


// 20 find()
/**
 * trả về 1 phần tử của mảng
 * thỏa mãn điều kiện phần tử đầu tiên return true
 */

// var result = users.find(function (user) {
//     if (user === "Hi") {
//         return true;
//     }
// });


// console.log(result);

// 21.findLast() trả về 1 phần của mảng
// thỏa mãn đk phần tử cuối return true


// 22.findIndex() Tìm vị trí index đầu tiên thỏa mãn đk return


// 23. findLastIndex() Tìm vị trí index cuối cùng thỏa mãn đk return true

// var resuilt = users.findLastIndex