//Bai 1 : lấy tên trong ho va ten 

// var fullName = "Ta Hoang An";


// var firstName = fullName.split(" ").slice(-1).join();

// console.log(firstName);
// var find = function () {
//     var resuilt = customer.filter(element => element.includes("an"));
//     console.log(resuilt);
// }


// find();

//Bai 2: sx danh sachkhach hang tăng dần theo tên 
// var customer = [
//     "nguyễn dương",
//     "nguyễn đại thế",
//     "ta hoang an",
//     "luu hoang quan",
//     "nguyen hong ha"];


// var getFirstName = function (fullName) {
//     return fullName.split(" ").slice(-1).join();
// }



// customer.sort(function (a, b) {
//     if (getFirstName(b) > getFirstName(a)) {
//         return -1;
//     }
// });

// console.log(customer.toString());

// var difference = arr1.reduce((result, currentValue) => {
//     if (!arr2.includes(currentValue)) {
//         result.push(currentValue);
//     }
//     return result;
// }, []);

// console.log(difference);

// bài 3 : Tìm từ khóa theo keyword
// var c = [
//     "ha",
//     "mai",
//     "ta hoang An",
//     "luu hoang quan",
//     "nguyen hong ha"];


// var resuilt = customers.filter(customer => customer.toLowerCase().includes("hoang"));
// console.log(resuilt.toString());

// bài 4

// var numbers = [5, 1, 9, 2, 6];


// var resuilt = numbers.reduce(function (max, number) {
//     return max < number ? number : max;

// })


// console.log(resuilt);



var arr1 = [5, 2, 1, 9];
var arr2 = [3, 2, 9];


var differenceNumbers = arr1.reduce(function (prev, currentValue) {
    if (!arr2.includes(currentValue)) {

        prev.push(currentValue);
    }
    return prev;
}, [])

console.log(differenceNumbers);