
// object constructor
// từ khóa new sẽ trả về cho bạn 1 đối tượng => lưu vào promise
// promise sẽ nhận vào constructor 1 function
var promise = new Promise(
    //Executor
    // khi gọi new Promise thì ngay lập lập tức nó gọi đến function bên dưới
    // function này trả về 2 tham số khi nó được thực thi 
    // 2 tham số này đều là function , đều là hàm
    function (resolve, reject) {
        // thành công : resolve
        // thất bại : reject
        resolve();
    }
);


// 2 bước tạo ra 1 Promise
// b1: khỏi tại Promise
// b2 : tạo ra Executor 


// promise trả cho bạn 3 pthuc rất thường sd
// then(), catch(), finally()
// 3 method này đều nhận vào callback fn
/**
 * khi nào các cb này được thực thi?
 * 
 */
promise
    .then(function () {
        return 1;
    })
    .then(function (data) {
        console.log(data);
        return 2;
    })
    .catch(function () {
        console.log('Error');
    })
    .finally(function () {
        console.log('Done!');
    })


