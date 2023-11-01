import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);

//main: nhận request từ index.html => gọi component App => Render nội dung component App vào thẻ div root

/*
Bài tập: Tạo thẻ ul, li -> Chèn vào sau thẻ h1
<ul class="menu">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
  <li>Item 5</li>
  <li>Item 6</li>
  <li>Item 7</li>
</ul>

Component: hàm, class có chữ đầu tiên viết hoa
-> Gọi: <TenHam /> hoặc <TenHam></TenHam>
*/
