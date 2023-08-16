//Hàm tạo 
//khai báo các tínhs 

var Person = function (name, email) {
    this.name = name;
    this.email = email;
    this.getName = function () {
        return this.name;
    };
};

Person.prototype.getId = function () {
    return Math.random() * 1000;
}

var person = new Person("An", "an@gmail.com");
person.age = 19;
console.log(person);



// var user = new Person("Ha", "Ha@gmail.com");
// user.age = 19;
// console.log(user);


//kieerm tra 1 biến đc tạo từ hàm tạo nào 

console.log(person.constructor.name);


Person.isPerson = function (variable) {
    return variable && variable.constructor.name === "Person";
};


// var a
if (Person.isPerson(person)) {
    console.log("Đây là person");
} else {
    console.log("Đây kp là person");

}