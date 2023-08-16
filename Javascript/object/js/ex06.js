// var obj1 = {
//     name: "Ha",
//     email: "ha@gmail.com",
// };


// var obj2 = {
//     job: "Ha",
//     salary: "ha@gmail.com",
// };


// for (var key in obj2) obj1[key] = obj2[key];


// console.log([obj1]);


// var content = 'Lorem, ipsum lorem';
// var words = content
//     .replaceAll(".", "")
//     .replaceAll(",", "")
//     .replaceAll("!", "")
//     .split(" ");


// var result = {};

// words.forEach(function (word) {
//     if (!result[word.toLowerCase()]) {
//         result[word.toLowerCase()] = 1;
//     } else {
//         result[word.toLowerCase()]++;

//     }
// });

// console.log(result);

// var a = {
//     name: "Ha",
//     email: "ha@gmail.com",
// };


// var b = {
//     job: "Ha",
//     salary: "ha@gmail.com",
// };


// var result = Object.assign(a, b);
// console.log(result);
// console.log(a);


//Tạo Object k có prototype


var a = Object.create(null);
console.log(a);