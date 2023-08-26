

/** chọc vào prototype định nghĩa ra map2()
 * - gán cho map 2  một fn()
 * - làm sao ở trong Array lấy ra course để lặp ?
 * - trong fn() có 1 từ khóa là this.
 * thì this trong này chính là cái cái thz gọi đến map2 => this sẽ là course
 *  việc 1 là lặp
 * việc 2 : gọi về callback, trả về item và index
 * muốn gọi lại đc thì map 2 phải trả về 1 fn
 * truyên courses.map2 => .prototype.map2  sẽ nhận đc
 */


// Array.prototype.map2 = function (callback) {
//     var output = [], arrayLength = this.length;
//     for (var i = 0; i < arrayLength; i++) {
//         var result = callback(this[i], i);
//         output.push(result);
//     }

//     return output;
// }
// var courses = ['Js', 'PHP', 'Ruby'];
// var html = courses.map2(function (course) {
//     return `<h2>${course}</h2>`;
// });

// console.log(html.join(``));

Array.prototype.myMap = function (cb) {
    var Output = [], arrLength = this.length;
    for (var i = 0; i < arrLength; i++) {
        var result = cb(this[i], i);
        Output.push(result);
    }
    return Output;
}



// Expected results
const numbers = [1, 2, 3];

console.log(numbers.myMap(function (number) {
    return number * 2;
}));