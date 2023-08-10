var keyword = "Lorem ";
var title = `<p>Từ khóa tìm kiếm : <b>${keyword}</b> </p>`;

var content = `Lorem  ipsum dolor sit amet consectetur adipisicing elit.Lorem  Sed esse laudantium error vero nobis molestias aspernatur aliquam deleniti ad, praesentium iusto ea accusamus alias doloribus quod hong Ha ratione repellat repudiandae quas soluta corrupti sunt! Adipisci voluptatibus hic, itaque illum et pariatur!`;


var count = 0;

var result = "";

var position = content.toLowerCase().indexOf(keyword.toLowerCase());

while (position !== -1) {
    result +=
        content.slice(0, position) +
        `<span>${content.slice(position, position + keyword.length)}</span>`;
    content = content.slice(position + keyword.length);
    position = content.toLowerCase().indexOf(keyword.toLowerCase());

    count++;
}

console.log(result);
result += content;
var countHtml = `<p>Đã tìm thấy <b>${count}</b> lần với từ khóa <b>${keyword}</b></p>`;

document.write(title + result + countHtml);