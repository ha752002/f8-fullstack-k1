// Làm phẳng mảng 

// depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

// var flatArr = depthArray.reduce(function (flatOutput, depthItem) {
//     return flatOutput.concat(depthItem);
// }, [])

// console.log(flatArr);



//Bt 2: Lấy ra các khóa học đưa vào 1 mảng mới;

var topics = [
    {
        topic: "Front-end",
        courses: [
            {
                id: 1,
                title: "HTML, CSS"
            }, {
                id: 2,
                title: "Js, PHP"
            }, {
                id: 3,
                title: "Reactjs"
            }

        ]

    }, {
        topic: "Back-end",
        courses: [
            {
                id: 1,
                title: "Angular"
            }, {
                id: 2,
                title: "Java"
            }

        ]

    }
];


var newCourse = topics.reduce(function (course, topic) {
    return course.concat(topic.courses);
}, []);


var newTitle = newCourse.map(function (course) {
    return course.title;
})

console.log(newTitle);