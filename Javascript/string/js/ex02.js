//B1:  var email = 'hoangan.web@gmail.com';

//lấy username của email
// console.log(email.slice(0, email.indexOf("@")));

// B1: var fullname = 'TẠ HOÀNG An';

// if (fullname === fullname.toLocaleUpperCase()) {
//     console.log("Viet hoa");
// } else {
//     console.log("k Viet hoa");

// }

var fullname = 'tạ hoàng an';
fullname = fullname.charAt(0).toLocaleUpperCase() + fullname.slice(1);

var result = "";
var index;

for (var i = 0; i < fullname.length; i++) {
    var char = fullname.charAt(i);
    var charNext = fullname.charAt(i + 1);

    if (char === " " && charNext !== " ") {
        index = i + 1;
    }

    if (i === index) {
        result += char.toUpperCase();
    } else {
        result += char;
    }
}

console.log(result);

