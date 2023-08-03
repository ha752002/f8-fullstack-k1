// # Bài 1: Tính tiền taxi
// Tính tiền cước taxi dựa vào các điều kiện sau
// Số km ≤ 1 giá 15000đ
// 1 < số km ≤ 5 giá 13500đ
// Số km > 5 giá 11000đ
// Nếu số km > 120 km sẽ được giảm 10% trên tổng số tiền

var km = 121,
    moneyTaxi;

if (km > 0) {
    if (km > 1) {
        if (km >= 5) {
            if (km > 120) {
                moneyTaxi = 11000;
                moneyTaxi = (moneyTaxi * km) - (moneyTaxi * km) / 10;
                console.log(`money Taxi = ${moneyTaxi}`);
            }
        } else {
            moneyTaxi = 11000 * km;
            console.log(`money Taxi = ${moneyTaxi}`);
        }
    } else {
        moneyTaxi = 13500 * km;
        console.log(`money Taxi = ${moneyTaxi}`);
    }
} else {
    moneyTaxi = 15000 * km;
    console.log(`money Taxi = ${moneyTaxi}`);
}

console.log(`money Taxi = ${moneyTaxi}`);
