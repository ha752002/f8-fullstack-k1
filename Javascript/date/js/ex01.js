// Xử lý thời gian
// const today = new Date();
// console.log(today);
const dateDisplay = document.getElementById('dateDisplay');

const targetDate = new Date("2023-11-20");
console.log(targetDate);

const days = ["Chủ Nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];

setInterval(() => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    const output = `${days[today.getDay()]}, ngày ${today.getDate()}, tháng ${today.getMonth() + 1}, năm ${today.getFullYear()}`;
    const dateDisplay = document.getElementById('dateDisplay');
    dateDisplay.innerHTML = output;
}, 1000);