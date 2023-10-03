// Try catch dung  xu ly  lỗi ngoại lệ (Exception)
var a = 10;
try {
    if (a < 20) {
        throw new Error('Biến a phải từ 20 trở lên ');
    }
    console.log(a);
} catch (exception) {
    console.log(exception.message);
} finally {
    console.log('Hoàn thành');
}