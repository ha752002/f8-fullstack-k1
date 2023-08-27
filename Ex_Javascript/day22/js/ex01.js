// # Bài 1
// Viết 1 hàm tính tổng giá trị biểu thức, tham số truyền vào ở dạng Rest Parameter

// Yêu cầu chi tiết:

// Hàm return về giá trị
// Ép ràng buộc kiểu dữ liệu là số
// Nếu dữ liệu truyền vào không hợp lệ, trả về thông báo lỗi


function sum(...args) {
    var sum = 0;
    if (Number.isNaN(args)) {
        return sum += args;
    }


}

sum(1, 2, 3, 4);