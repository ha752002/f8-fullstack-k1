

// for( var  i = 1; i <= 10; i++) {
//     console.log(i);
// }

// ex 1: tinh gia tri bieu thưc
// var results = 0
// for( var i = 1; i <= 10 ; i++) {
//      results += i;
// }

// console.log(results);

// var total = 0
// var subtotal = 1;
// for(var i = 1;i <= 5 ; i++) {
//     subtotal  *= i;
//     console.log(`total= ${total}, subtotal = ${subtotal}`);
//     total += subtotal;
//     console.log(`total= ${total}, subtotal = ${subtotal}`);

// }

// console.log(`subtotal = ${subtotal}`);


var n = 15;
var check = true;


if( n <= 1 || n % 1 !== 0){
    check = false;
} else {
    for (var i = 2; i < n ; i++){
        if(n % i === 0){
            check = false;
            i = n;
        }
    }
}


if(check) {
    console.log(`${n} la so nguyen to`);
}else {
    console.log(`${n} kp la so nguyen to`);
}

