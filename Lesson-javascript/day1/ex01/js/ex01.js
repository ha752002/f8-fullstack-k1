
squareRoot(10);
function squareRoot(n) {
    if (Number.isInteger(n)) {
        for (var i = 1; i <= n; i++) {
            if (i ** 2 < n && (i + 1) ** 2 > n) {
                for (var j = i + 0.1; j <= i + 0.9; j += 0.1) {
                    if (j ** 2 < n && (j + 0.1) ** 2 > n) {
                        for (var k = j + 0.01; k <= j + 0.09; k += 0.01) {
                            if (k ** 2 < n && (k + 0.01) ** 2 > n) {
                                console.log(k);
                                break;
                            }
                        }
                        break;
                    }
                }
                break;
            } else if (i ** 2 == n) {
                console.log(i);
                break;
            }
        }

    }
};


