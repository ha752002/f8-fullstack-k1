var customer = [
    "ha",
    "mai",
    "ta hoang an",
    "luu hoang quan",
    "nguyen hong ha"];

var find = function () {
    var resuilt = customer.filter(element => element.includes("an"));
    console.log(resuilt);
}


find();