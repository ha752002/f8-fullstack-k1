// # Bài 01
// Cho trước 1 mảng số nguyên, yêu cầu tìm số lớn nhất, nhỏ nhất trong mảng và vị trí


var arrsNumber = [1, 2, 3, 6, 4, 6];


function findMaxMinIndex(arrs) {
    var maxNumber = 0;
    var minNumber = arrs.at(1);
    var indexMaxNumber = 0;
    var indexMinNumber = 0;

    // for (var number in arrs) {
    //     if (arrs[number] >= maxNumber) {
    //         maxNumber = arrs[number];
    //         indexMaxNumber = number;
    //     }

    //     if (arrs[number] <= minNumber) {
    //         minNumber = arrs[number];
    //         indexMinNumber = number;
    //     }
    // }

    arrs.map(function (number, index) {
        if (number >= maxNumber) {
            maxNumber = number;
            indexMaxNumber = index;
        }

        if (number <= minNumber) {
            minNumber = number;
            indexMinNumber = index;
        }
    });

    return `maxNumber = ${maxNumber} indexMaxNumber = ${indexMaxNumber} , 
minNumber = ${minNumber}  indexMinNumber = ${indexMinNumber}
    `;

};

console.log(findMaxMinIndex(arrsNumber));
