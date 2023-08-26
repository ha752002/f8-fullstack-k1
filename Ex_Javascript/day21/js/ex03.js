
function users(name, password, email) {
    this.name = name;
    this.password = password;
    this.email = email;
}

//hàm register
var inforDatas = [];
function register(name, password, email) {
    if (!name || !password || !email) {
        console.log("thông tin không đủ !");
        return;
    }

    var checkuser = inforDatas.find?.(function (user) {
        return user.email === email;
    });

    if (checkuser) {
        console.log("Email này đã tồn tại ! ");
        return;
    }

    var newUser = new users(name, password, email);
    newUser.roll = "user";
    inforDatas.push(newUser);
    console.log("Tài Khoản đăng ký thành công!");
    return newUser;
}
function login(email, password) {
    if (inforDatas.length > 0) {
        for (var element of inforDatas) {
            if (element.email === email && element.password === password)
                return element;
        }
        return "Thông tin đăng nhập không hợp lệ";
    } else {
        return "Tài khoản này chưa được đăng ký!";
    }
}



register("Ha", "123455", "ha2002@gmail.com");
register("Phat", "099955", "phat2009@gmail.com");
console.log(inforDatas);
login("ha2002@gmail.com", "aa");
