

// console.log(listCourseBlock);

var courseApi = 'http://localhost:3000/courses';

function start() {
    getCourse(renderCourse);
    handleCreateForm();
}

start();


//Functions
function getCourse(callback) {
    fetch(courseApi)
        .then(function (respone) {
            return respone.json();
        })
        .then(callback);
}

function createCourse(data, callback) {
    var option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }
    fetch(courseApi, option)
        .then(function (respone) {
            respone.json();
        })
        .then(callback);

}


function renderCourse(courses) {
    var listCourseBlock = document.querySelector('#list-courses');

    var html = courses.map(function (course) {
        return `
        <li>
            <h4>${course.name}</h4>
            <p>${course.desc}</p>
        </li>
        `;
    })

    listCourseBlock.innerHTML = html.join(' ');
}


function handleCreateForm() {
    var createBtn = document.querySelector('#create');


    createBtn.addEventListener('click', function () {
        var name = document.querySelector('input[name="name"]').value;
        var desc = document.querySelector('input[name="desc"]').value;

        var formData = {
            name: name,
            desc: desc
        }

        // console.log(formData);
        createCourse(formData, function () {
            getCourse(renderCourse);
        });
    })
}