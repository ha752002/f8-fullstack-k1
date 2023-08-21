
function users(name, password, email) {
    this.name = name;
    this.password = password;
    this.email = email;
}

//hàm register
var inforResters = [];
function register(name, password, email) {
    if (!name || !password || !email) {
        console.log("thông tin không đủ !");
        return;
    }

    var checkuser = inforResters.find(function (user) {
        return user.email === email;
    });

    if (checkuser) {
        console.log("Email này đã tồn tại ! ");
        return;
    }

    var newUser = new users(name, password, email);
    newUser.roll = "user";
    inforResters.push(newUser);
    console.log("Tài Khoản đăng ký thành công!");
    return newUser;
}

function login(email, password) {
    for (var element of inforResters) {
        if (element.email === email && element.password === password)
            return element;
    }
    return " thông tin đăng nhập không hợp lệ";
}



register("Ha", "123455", "ha2002@gmail.com");
register("Phat", "099955", "phat2009@gmail.com");
console.log(inforResters);
login("ha2002@gmail.com", "aa");
