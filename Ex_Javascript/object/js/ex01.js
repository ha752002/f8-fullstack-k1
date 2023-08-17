// Cho object user = {
//     ten: 'tung'
//     tuoi: 20
//     };
//     a, hãy in ra tên và tuổi của user
//     b, hãy thêm cho user họ là "nguyễn"
//     c, hãy thay đổi tuổi thành 30

user = {
    name: 'tung',
    age: 20,
};
//     a, hãy in ra tên và tuổi của user
console.log(`1) name : ${user.name}, age :${user.age}`)

//     b, hãy thêm cho user họ là "nguyễn"
user.Surname = 'nguyễn';
console.log(user);

//     c, hãy thay đổi tuổi thành 30
user.age = 20;
console.log(user);

