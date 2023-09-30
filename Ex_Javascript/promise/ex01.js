
// bước 1 : khởi tạo promise
// bước 2 :executor
// và phải gọi 1 trong 2 : resole hoặc reject

/**
 * 3 Trạng thái: 
 *  Pendding : chờ;
 *  Fulfilled : Hiểu là thành công
 * reject: thất bại
 */
var promise = new Promise( // function ở đây là executor
    function (resole, reject) { //resole : thành công , giải quyết, reject: thất bại, từ chối
        // logic :
        /**
         * thành công thì gọi đến resole
         * thất bại thì gọi đến reject
         */


        // vd Fake API

        // resole([
        //     {
        //         id: 1,
        //         name: 'Js'
        //     }
        // ]);

        reject('coloi');
    }
);


/** .then()
    .catch()
    .finally()
    - đều nhận callback
    - khi nào callback đc thực thi ?
    */

// khi //resole thì then đc gọi, khi reject thì catch đc gọi , gọi cái nào thì finally cx đc gọi
promise
    .then(function (course) {
        console.log(course);

    })

    .catch(function (error) {
        console.log(error);// bắt lỗi bẫy lỗi

    })
    .finally(function () {
        console.log('Done!');

    })