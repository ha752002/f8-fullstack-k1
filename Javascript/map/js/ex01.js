var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 0,
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 1,
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
// cần tuyền vào 3 tham số
// index : là key tương ứng khi nó lặp qua
//originArray trả về arr gốc ban đầu
// tham số thứ 1 là item , tham số thứ 2 là index
function courseHandler(course, index, originArray) {
    return {
        id: course.id,
        name: `khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
        index: index,
        originArray: originArray,
    }

}
var newCourses = courses.map(courseHandler);

console.log(newCourses);