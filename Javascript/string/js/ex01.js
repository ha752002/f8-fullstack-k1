var keyword = "Hong Ha";
var title = `<p>Từ khóa tìm kiếm : <b>${keyword}</b> </p>`;

var content = `Lorem Hong ha ipsum dolor sit amet consectetur adipisicing elit. Sed esse laudantium error vero nobis molestias aspernatur aliquam deleniti ad, praesentium iusto ea accusamus alias doloribus quod hong Ha ratione repellat repudiandae quas soluta corrupti sunt! Adipisci voluptatibus hic, itaque illum et pariatur!`;


var count = 0;

var result = "";

var position = content.toLowerCase().indexOf(keyword.toLowerCase());

while (position !== -1) {
    //Lưu lại nội dung từ đầu cho đến hết keyword và bổ sung thẻ span
    result +=
        content.slice(0, position) +
        `<span>${content.slice(position, position + keyword.length)}</span>`;

    //Xóa bỏ nội dung đã được lưu vào biến result
    content = content.slice(position + keyword.length);

    //Thực hiện tìm lại với content mới
    position = content.toLowerCase().indexOf(keyword.toLowerCase());

    count++;
}

console.log(result);
// console.log(content);
result += content;
//Trong trường không tìm thấy => Bị thiếu đoạn content cuối

var countHtml = `<p>Đã tìm thấy <b>${count}</b> lần với từ khóa <b>${keyword}</b></p>`;

document.write(title + result + countHtml);