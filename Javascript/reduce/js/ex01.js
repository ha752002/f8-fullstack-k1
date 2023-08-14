var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 100,
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 200,
    }, {
        id: 3,
        name: 'Ruby',
        coin: 1,
    }, {
        id: 4,
        name: 'php',
        coin: 300,
    },
];

// c1 : dùng vòng loop
//gán giá trị ban đầu là 0
// var totalCoin = 0;

// for (var course of courses) {
//     totalCoin += course.coin;

// }

// console.log(totalCoin);


// c2 dùng reduce

// đối số function là đối số bắt buộc , k truyền thì lỗi
// và đối số này sẽ đc gọi lại 
// trong ông reduce sẽ có ông vòng lặp , và khi ông duyệt pt trong mảng thì sẽ gọi ngược ra function  
var i = 0;

function coinHandler(accumulator, currentValue) {
    i++;

    var total = accumulator + currentValue.coin;

    console.table({
        'lượt chạy ': i,
        'Biến tích trữ': accumulator,
        'Gia khoa hoc': currentValue.coin,
        'Tích trữ được': total
    });

    return total;
}
var totalCoin = courses.reduce(coinHandler, 0);

console.log(totalCoin);