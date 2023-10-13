/**
 * Authentication : Xác thực
 * -> Đăng nhập , đăng ký
 * 
 * 
 * Authorization : Vai trò , ủy quyền 
 * => đc làm gì , quyền hạn ra sao
 * 
 * 
 * 
 * 1.Authentication 
 * Session-based Authentication
 * 
 * 
 * token trả về phía clent -> dựa vào dó lưu lại ở trình duyệt (clent)
 * => lúc này đã có thông tin -> muốn lấy requesyt khác thì gửi key:headers:"Authorization":"Bearer ${WT_TOKEN"
 * 
 * 
 * JWT : đc mã hóa bằng base 64(header, payload, signature)
 * payload :chưas thông tin cần mã hóa
 * signature: chữ kí của chúng ta, mã số bí mật , chỉ backend mất
 * 
 * 
 * b1: Authentication + API()=> be xác thực -> trả về acces và refresh token => lưu lại 
 *  gửi request kèm access => trả về data
 * 
 * b2 : data rq + key chính -> nếu hết hạn , sử dụng refresh token -> trả về new acess và refresh token
 * (nếu gửi request mới thì lèm access mới)
 * 
 *  b3: key chính và key phụ hết hạn thì  -> re-Authentication(đnhap lại )
 */



/*
Authentication -> Xác thực
    - Đăng nhập
    - Đăng ký

Authorization -> Vai trò, ủy quyền 
    - Quyền hạn trong phịm vi ntn
*/

/*
1. Authenication
- Session-based authentication
- Token-based authentication
*/

/*
Research:
- JWT
- Session and Cookie
- Bearer: Xác thực API
- Xử lý thủ công: Copy session base từ domain này sang cross domain khác
- Cấu trúc của JWT
- JWT: https://jwt.io/
- Access token và Refresh: Khi gửi request lên server sẽ trả về 2 token 
- Fake API: https://fakeapi.platzi.com/
*/

import { config } from "./config.js";
import { client } from "./client.js";

const { SERVER_AUTH_API } = config;
// console.log(SERVER_AUTH_API);

client.setUrl(SERVER_AUTH_API);
// console.log(client);


const root = document.querySelector("#root");

const render = () => {
  const loginHTML = `<div class="container py-3">
    <h2 class="text-center">Đăng nhập</h2>
    <hr />
    <form action="" class="login">
      <div class="mb-3">
        <label for="">Email</label>
        <input
          type="email"
          class="form-control email"
          value="john@mail.com"
        />
      </div>
      <div class="mb-3">
        <label for="">Password</label>
        <input
          type="password"
          class="form-control password"
          value="changeme"
        />
      </div>
      <div class="d-grid">
        <button class="btn btn-primary">Đăng nhập</button>
      </div>
    </form>
    </div>`;
  const welcomeHTML = `<div class="container py-3">
    <h2 class="text-center">hello world</h2>
    <ul class = "profile list-unstyled d-flex gap-2">
        <li>Chào bạn: </li>
        <li><a href="#" class="logout">Đăng xuất</a></li>
    </ul>
    </div>`;

  if (localStorage.getItem("access_token")) {
    root.innerHTML = welcomeHTML;
    const logout = root.querySelector(".profile .logout");
    console.log(root);
    logout?.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("auth_token");
      render();
    });
  } else {
    root.innerHTML = loginHTML;

    // bắt sự kiện submit
    const loginForm = document.querySelector(".login");
    console.log(loginForm);
    loginForm?.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailEl = e.target.querySelector(".email");
      const passEl = e.target.querySelector(".password");
      const email = emailEl.value;
      const password = passEl.value;
      //   console.log(email, pass);

      handleLogin({ email, password });
      emailEl.value = "";
      passEl.value = "";
    });
  }
};
render();

const getProfile = async () => {
  const token = localStorage.getItem("access_token");
  const { data } = client.get("/auth/profile", token);
  console.log(data);
};

const handleLogin = async (data) => {
  const { data: tokens } = await client.post("/auth/login", data);
  //   console.log(tokens);
  //   "email": "john@mail.com",
  //   "password": "changeme"
  const { access_token, refresh_token } = tokens;
  localStorage.setItem("access_token", access_token);
  localStorage.setItem("refresh_token", refresh_token);

  render();
};

/*
Storage
1. localStorage: lưu trữ vĩnh viễn
2. sessionStorage: Lưu trữ theo phiên
3. cookieStorage: Lưu trữ có thời hạn

-> chỉ lưu trữ text, phải chuyển về hết JSON
-> trong bài hnay sử dụng localStorage
*/

// Đăng xuất
/*
Storage
1. localStorage: Lưu trữ vĩnh viễn
2. sessionStorage: Lưu trữ theo phiên
3. cookie: Lưu trữ có thời hạn

-> Chỉ lưu trữ Text
*/

/**
 * Storage
 * localStorage và sessionStorage : dễ bị tấn công Xss
 * cookie: dễ bị tấn công bởi css và ...
 * 
 * - 3 thz này chỉ lưu trữ text 
 * -sessionStorage và localStorage: lưu trữ nhiều hơn
 * localStorage phụ thuộc token trên server => nếu token trên server hết thì nó cx hết
 * 
 * 1.localStorage : Lưu trữ vĩnh viễn
 * 2: sessionStorage : lưu trữ theo phiên 
 * 3: cookie : lưu trữ có giới hạn 
 */


