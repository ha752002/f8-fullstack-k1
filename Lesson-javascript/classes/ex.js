// function Courses(name, price) {
//     this.name = name;
//     this.price = price;
// }


class Courses {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    get name() { return this.name; }
}

const phpCourses = new Courses('PHP', 1000);
const jsCourses = new Courses('js', 2000);

console.log(phpCourses);
console.log(jsCourses);