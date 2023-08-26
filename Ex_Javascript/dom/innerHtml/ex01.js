var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

function render(courses) {
    var NodeE = document.querySelector('.courses-list');


    var result = courses.map(function (course) {
        return `<li>${course}</li>`;

    }).join(' ');


    NodeE.innerHTML = result;
    return result;
}

render(courses);
