//B1: lấy ra chữ @
// var email = 'hoangan.web@gmail.com';

// console.log(email.indexOf("@"));


// console.log(email.slice(0, email.indexOf("@")));


// B2: đổi  từ chữ cái đầu về dạng viết hoa
var fullName = "nguyen thi hong ha";

var fullName = fullName.charAt(0).toLocaleUpperCase() + fullName.slice(1);
var Name = "";
for (var i = 0; i < fullName.length; i++) {
    if (fullName.charAt(i - 1) === " ") {
        Name += fullName.charAt(i).toUpperCase();
        continue;
    }
    Name += fullName.charAt(i);

};

console.log(Name);