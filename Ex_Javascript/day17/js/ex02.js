// viết chương trình tiền điện hàng tháng theo yêu cầu sau
// Input: Số điện tiêu thụ hàng tháng
// Output: Hiển thị số tiền phải đóng

step1 = 1678;
step2 = 1734;
step3 = 2014;
step4 = 2536;
step5 = 2834;
step6 = 2927;

kWh = 100;
var electricityPrice;
if (kWh > 0 && !isNaN(kWh)) {
    if (kWh > 50) {
        if (kWh > 100) {
            if (kWh > 200) {
                if (kWh > 300) {
                    if (kWh > 400) {
                        electricityPrice = `electricity to pay: ${step6 * kWh}đ `;
                    } else {
                        electricityPrice = `electricity to pay: ${step5 * kWh}đ `;
                    }
                } else {
                    electricityPrice = `electricity to pay: ${step4 * kWh}đ `;
                }
            } else {
                electricityPrice = `electricity to pay: ${step3 * kWh}đ `;
            }
        } else {
            electricityPrice = `electricity to pay: ${step2 * kWh}đ `;
        }
    } else {
        electricityPrice = `electricity to pay: ${step1 * kWh}đ `;
    }
} else {
    electricityPrice = " nhap sai định dạng!Nhap lai";
}

console.log(electricityPrice);
