// var  i = 1 ;
// var n = 10;
// while ( i <= 10) {
//     console.log(`f8: ${i}`);
//     i++;
// }


// for( var i = 1; i <= 10; i++){
//     console.log(i);

//     if( i === 5 ) {
//         break;
//     }
// }


/**
 * break:
 * -Tối ưu hiệu năng
 * - đảm bảo tính đúng
 */

var begin = 3;
var end = 100;

// Tìm số chẵn nhỏ nhất tromg khoảng begin -> end


var result;
for ( var i = begin; i <= end; i++){
    if( i % 2 == 0){
        result = i ;
        break;
    }
}

console.log(result);