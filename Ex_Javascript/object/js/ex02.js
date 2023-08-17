// Bài tập 1: Tạo đối tượng người
// Hãy tạo một đối tượng "person" với các
//  thuộc tính như tên, tuổi và địa chỉ.

// Bài tập 2: Thêm phương thức
// Thêm một phương thức vào đối tượng "person" để in
//  ra thông tin đầy đủ của người đó (tên, tuổi, địa chỉ).

var person = {
    name: 'Ha',
    age: 21,
    address: "Ha Noi",
    getInfo: function () {
        return `name: ${this.name}
age: ${this.age}
address: ${this.address}
        `;
    },

};

// console.log(person.getInfo())
// Bài tập 3: Đối tượng hình chữ nhật
// Tạo một đối tượng "rectangle" có thuộc tính chiều dài và
// chiều rộng. Thêm phương thức tính diện tích và chu vi.


var rectangle = {
    height: 20,
    width: 20,
    acreage: function () {
        return this.height * this.width;
    },
    perimeter: function () {
        return (this.height + this.width) * 2;
    }

}

console.log(rectangle.acreage());
console.log(rectangle.perimeter());