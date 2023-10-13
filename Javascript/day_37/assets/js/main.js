
import { config } from "./config.js";
import { getAllBlogs, postBlog } from "./blogProvider.js";
import { client } from "./client.js";

const { SERVER_AUTH_API } = config;

client.setUrl(SERVER_AUTH_API);
const root = document.querySelector("#root");



const getProfile = () => {
  const name = localStorage.getItem("name");
  return { name };
};

const render = () => {
  if (localStorage.getItem("access_token")) {
    checkExpired();
    renderHome();

  } else {
    renderLoginPage();
  }
};

const getBlogsData = async () => {
  const blogsData = await client.get("/blogs");
  return blogsData.data.data;
}

const renderBlogsData = async () => {
  const blogsData = await getBlogsData();

  var htmls = blogsData.map((blog) => {
    let date = new Date(blog.createdAt).getDate();
    return `<section>
      <p>Date: ${date}</p>
      <p>Name: ${blog.userId.name}</p>
      <p>Title: ${blog.title}</p>
      <p>Content: ${blog.content}</p>

    </section>`
  })

  const html = htmls.join(' ');
  const container = document.querySelector('.container');
  container.insertAdjacentHTML("beforeend", html);

  // var html = htmls.innerHTML;
  // document.get
}

const renderForm = () => {

  const formElement = document.createElement('form');
  formElement.classList.add('form-post', 'container', 'py-3', 'border-0');

  const divElement = document.createElement('div');
  divElement.className = 'form';

  const labelElement = document.createElement('label');
  labelElement.textContent = 'Enter Your title';

  const inputElement = document.createElement('input');
  inputElement.name = 'title';
  inputElement.type = 'text';
  inputElement.style.display = 'block';
  inputElement.classList.add('form-control', 'mb-3',);


  const textareaElement = document.createElement('textarea');
  textareaElement.name = 'content'
  textareaElement.className = 'border';
  textareaElement.style.padding = '20px';
  textareaElement.style.display = 'block';

  const buttonElement = document.createElement('button');
  buttonElement.classList.add('btn', 'btn-primary', 'd-block');
  buttonElement.type = 'submit';
  buttonElement.style.display = 'block';
  buttonElement.textContent = 'Write new!';


  const imgElement = document.createElement('img');
  imgElement.src = 'https://i.pinimg.com/originals/47/97/b0/4797b05c719a01b177114e93c177d960.gif';



  divElement.appendChild(labelElement);
  divElement.appendChild(inputElement);
  formElement.appendChild(divElement);
  formElement.appendChild(textareaElement);
  formElement.appendChild(buttonElement);
  formElement.appendChild(formElement);
  const profile = document.querySelector('.profile ');
  // console.log(profile);
  profile.insertAdjacentElement("afterend", formElement);




  formElement.addEventListener('submit', (e) => {
    const input = document.querySelector("input[name=title]");
    const textarea = document.querySelector("textarea[name=content]");

    const title = input.value;
    const content = textarea.value;
    e.preventDefault();
    postBlog({ title, content }).then(() => {
      render();
    });
  });

}

render();

const handleLogin = async (data) => {
  const { data: dataResponse, response: response } = await client.post("/auth/login", data);

  if (response.status === 200) {
    const { accessToken, refreshToken, name, email } = dataResponse.data;
    localStorage.setItem("access_token", accessToken);
    localStorage.setItem("refresh_token", refreshToken);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);

    render();

  } else {
    alert(dataResponse.message);
  }
}

function renderHome() {

  renderBlogsData();

  const userInfo = getProfile();


  const welcomeHTML = `<div class="container py-3">
    <ul class = "profile list-unstyled d-flex gap-2">
        <li> <span>Chào bạn:</span> ${userInfo.name} </li>
        <li><a href="#" class="logout">Đăng xuất</a></li>
    </ul>
    </div>`;

  root.innerHTML = welcomeHTML;
  const logout = root.querySelector(".profile .logout");
  // console.log(root);
  logout?.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    render();
  })

  if (checkLogin()) {
    renderForm();
  }



};




function renderLoginPage() {

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

  root.innerHTML = loginHTML;

  // bắt sự kiện submit
  const loginForm = document.querySelector(".login");
  loginForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailEl = e.target.querySelector(".email");
    const passEl = e.target.querySelector(".password");
    const email = emailEl.value;
    const password = passEl.value;
    //   console.log(email, pass);

    handleLogin({ email, password });
    // emailEl.value = "";
    // passEl.value = "";
  });

}


function checkLogin() {
  if (localStorage.getItem("access_token")) {
    return true;
  }

  return false;
}


function checkExpired() {
  const token = localStorage.getItem("access_token");
  const jsonDecode = parseJwt(token);
  const currentDate = new Date();
  console.log(jsonDecode.exp);
  console.log(currentDate.getTime());

  if (jsonDecode.exp <= currentDate.getTime()) {
    return true;
  }

  return false;
}

function parseJwt(token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}

