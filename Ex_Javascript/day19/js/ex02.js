// Cho trước 1 mảng số nguyên, 
// tính trung bình các số nguyên tố trong mảng.
// Nếu trong mảng không có số nguyên tố
//  thì hiển thị “Không có số nguyên tố”

var Primes = [2, 1, 6, 4, 3, 7, 11, 13];
// var Primes = [6, 4];


function averagePrimes(Primes) {
    var primeNumbers = Primes.filter(function (Prime) {
        if (Prime <= 1) {
            return false;
        }

        for (let i = 2; i <= Math.sqrt(Prime); i++) {
            if (Prime % i === 0) {
                return false;
            }
        }

        return true;
    });

    if (primeNumbers.length === 0) {
        return `khong có so nguyen to nao cả`;
    }

    var sum = primeNumbers.reduce(function (total, prime) {
        return total + prime;
    }, 0);

    return ` trung bình số nguyên tố của arr là ${sum / primeNumbers.length}`;
}

console.log(averagePrimes(Primes));


