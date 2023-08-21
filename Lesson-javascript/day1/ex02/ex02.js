var database = {
    lastNames: ["An", "Anh", "Bảo", "Bình", "Cẩm", "Chi", "Chinh",
        "Diễm", "Dung", "Dương", "Giang", "Hà", "Hải", "Hạnh", "Hiếu", "Hoài", "Hoàng",
        "Hồng", "Huyền", "Khanh", "Khánh", "Lan", "Linh", "Loan", "Ly", "Mai", "Minh",
        "Mỹ", "Nga", "Ngân", "Ngọc", "Nhiên", "Phương", "Quỳnh", "Thảo", "Thiên",
        "Thùy", "Trâm", "Trang", "Tú", "Tuyết", "Uyên", "Vân", "Việt", "Xuân", "Yến",],
    midNames: ["Anh", "Bích", "Bình", "Cẩm", "Diệu", "Đức", "Gia", "Hải", "Hoàng",
        "Hữu", "Khắc", "Kim", "Lâm", "Minh", "Ngọc", "Như", "Phúc", "Quang", "Quốc",
        "Thái", "Thanh", "Thị", "Thuỷ", "Trung", "Tuấn",],
    firstNames: ["Bùi", "Cao",
        "Chủ", "Đặng", "Đinh", "Đỗ", "Đức", "Dương", "Hoàng", "Huỳnh", "Lê", "Lý",
        "Mai", "Ngô", "Nguyễn", "Phạm", "Phan", "Trần", "Trịnh", "Võ", "Vũ",],
};
function removeAccent(str) {
    return str.normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "").replace("đ", "d").replace("Đ", "D");
}

function randomID(fullName) {
    var word = removeAccent(fullName.replaceAll(" ", ""));
    var char = word.split("");
    for (var i = 0; i < char.length; i++) {
        var j = Math.floor(Math.random() * char.length);
        var temp = char[i];
        char[i] = char[j];
        char[j] = temp;
    }
    return char.join("");
}

function randomName(name) {
    return database[name][Math.floor(Math.random() * database[name].length)];
}



var helper = {
    getID: randomID,
    getFirstName: () => randomName("firstNames"),
    getMidName: () => randomName("midNames"),
    getLastName: () => randomName("lastNames"),
    getFullName: (first, mid, last) => `${first} ${mid} ${last}`,
    getEmail: (fullName) => removeAccent(fullName.replaceAll(" ", "").toLowerCase()) + "@gmail.com",
};


var customers = [];

function Customer() {
    var firstName = helper.getFirstName();
    var midName = helper.getMidName();
    var lastName = helper.getLastName();
    var fullName = helper.getFullName(firstName, midName, midName);
    var generateId = () => helper.getID(fullName);
    var generateMail = () => helper.getEmail(fullName);

    return {
        id: generateId(fullName),
        firstName,
        midName,
        lastName,
        fullName,
        email: generateMail(fullName),
    };
}


function customerArr(time) {
    for (var i = 0; i < time; i++) {
        customers.push(new Customer());
    }
    return customers;
}

var renderHtml = `
<table border="1" >
    <thead>
        <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Mid Name</th>
            <th>Last Name</th>
            <th>Full Name</th>
            <th>Email</th>
        </tr>
    </thead>
    <tbody>
        ${customerArr(10).map((customer) => {
    return ` <tr>
    ${Object.keys(customer).map(function (key) {
        return `<td>${customer[key]}</td>`;
    }).join("")}
    </tr>`;
}).join("")}
    </tbody>
    <tfoot>
        <tr>
            <th colspan="5" align="left">Total</th>
            <td colspan="1" >${customers.length}</td>
        </tr>
    </tfoot>
</table>`;







//   <tr>
//     <th>ID</th>
//     <th>First Name</th>
//     <th>Mid Name</th>
//     <th>Last Name</th>
//     <th>Full Name</th>
//     <th>Email</th>
//   </tr>
//   <tr>
//     <td></td>
//     <td></td>
//     <td></td>
//     <td></td>
//     <td></td>
//     <td></td>
//   </tr>
document.write(renderHtml);
