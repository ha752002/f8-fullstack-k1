// bai 1 Yêu cầu: Viết hàm getError(field) có tham số truyền vào là field
//  tương ứng với nhóm cần lấy lỗi. Tuy nhiên, chỉ trả về 1 chuỗi là 
// lỗi đầu tiên tìm được(lỗi đầu tiên đúng) của 1 nhóm

var errors = {
    name: {
        required: "Vui lòng nhập họ tên",
        min: "Họ tên phải từ 5 ký tự"
    },
    email: {
        email: "Định dạng email không hợp lệ",
        unique: "Email đã có người sử dụng",
        required: "Vui lòng nhập địa chỉ email"
    },
    password: {
        required: "Vui lòng nhập mật khẩu",
        same: "Mật khẩu phải khớp với mật khẩu nhập lại"
    }
}


var getError = function (field) {
    return errors[field] ?
        Object.values(errors[field])[0]
        : "Lỗi không tồn tại";

}


console.log(getError('email'));
