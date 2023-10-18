import { config } from "./config.js";
import { client } from "./client.js";
import { getBlogsData, postBlog } from "./blogProvider.js";
import {
  checkLogin,
  handleLogin,
  handleRegister,
  getProfile
} from "./authProvider.js";


import { formatDate, escapeOutput, calculateSelectedDate } from "./util.js";

const { SERVER_AUTH_API } = config;

client.setUrl(SERVER_AUTH_API);

export const rootRenderUnauthorizedPage = () => {
  const root = document.querySelector('#root');

  const divLogin = document.createElement('div');
  divLogin.classList.add('login-wrapper');
  divLogin.innerText = 'Login';

  const divBlog = document.createElement('div');
  divBlog.classList.add('blog-wrapper');

  root.append(divLogin);
  root.append(divBlog);
}

const root = document.querySelector("#root");

export const render = () => {
  checkLogin().then((check) => {
    if (check) {
      renderHome();
    } else {
      renderRegisterPage();
      renderLoginPage();
    }
  });

  // console.log(check);
  // renderLoginPage();
  // renderHome();
};

const renderBlogsData = async () => {
  const blogsData = await getBlogsData();

  // if()

  // console.log(blogsData);
  var htmls = blogsData.map((blog) => {

    let date = formatDate(blog.createdAt);
    let SelectedDate = formatDate(blog.timeUp);


    // console.log(SelectedDate);
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


  const titleTextareaElement = document.createElement('p');
  titleTextareaElement.className = 'title-textarea';
  titleTextareaElement.textContent = 'Enter your title';

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

  const pElementDate = document.createElement('p');
  pElementDate.classList.add('show-text-date');


  const inputDateElement = document.createElement("input");
  inputDateElement.setAttribute("data-provide", "datepicker");
  inputDateElement.className = 'input-date';
  inputDateElement.type = 'date';
  inputDateElement.name = 'date'



  const imgElement = document.createElement('img');
  imgElement.src = 'https://i.pinimg.com/originals/47/97/b0/4797b05c719a01b177114e93c177d960.gif';

  divElement.appendChild(labelElement);
  divElement.appendChild(inputElement);
  formElement.appendChild(divElement);
  formElement.appendChild(titleTextareaElement);

  formElement.appendChild(textareaElement);
  formElement.appendChild(buttonElement);
  formElement.appendChild(pElementDate);
  formElement.appendChild(inputDateElement);
  formElement.appendChild(imgElement);

  const profile = document.querySelector('.profile ');
  // console.log(profile);
  profile.insertAdjacentElement("afterend", formElement);




  formElement.addEventListener('submit', (e) => {
    e.preventDefault();

    const input = document.querySelector("input[name=title]");
    const textarea = document.querySelector("textarea[name=content]");
    const inputDate = document.querySelector("input[name=date]");

    const title = escapeOutput(input.value);
    const content = escapeOutput(textarea.value);
    const timeUp = escapeOutput(inputDate.value);

    console.log(timeUp);

    postBlog({ title, content, timeUp }).then(() => {
      render();
    });
  });

}

async function renderHome() {

  const userInfo = await getProfile();
  // const userInfo = { name: "ha", };
  console.log(userInfo);

  const welcomeHTML = `<div class="container py-3">
      <ul class = "profile list-unstyled d-flex gap-2">
          <li> <span>Chào bạn:</span> ${userInfo.name} </li>
          <li><a href="#" class="logout">Đăng xuất</a></li>
      </ul>
      </div>`;

  root.innerHTML = welcomeHTML;
  const logout = root.querySelector(".profile .logout");
  await renderBlogsData();

  // if(calculateSelectedDate())
  // console.log(root);

  logout?.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    render();
  })

  if (await checkLogin()) {
    renderForm();
  }


  // console.log(checkLogin());


};

function renderLoginPage() {

  const loginHTML = `<div class="container py-3">
    <h2 class="text-center btn-click__login">Đăng nhập</h2>
    <hr />
    <div class="login-group" style="display:none">
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
    <div class="d-grid">
    <button class="btn btn-Register-form">Đăng Kí</button>
</div>
    </div>
   
    </div>`;

  root.innerHTML = loginHTML;

  const loginForm = document.querySelector(".login");
  loginForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const emailEl = e.target.querySelector(".email");
    const passEl = e.target.querySelector(".password");
    const email = emailEl.value;
    const password = passEl.value;
    //   console.log(email, pass);

    if (await handleLogin({ email, password })) {
      render();
    } else {
      alert("Login failed");
    }
    // emailEl.value = "";
    // passEl.value = "";
  });

  const btnRegister = document.querySelector(".btn-Register-form");
  btnRegister?.addEventListener("click", (e) => {
    const container = document.querySelector('.container');
    container.style.display = "none";
    renderRegisterPage();

  });

  const btnClickLogin = document.querySelector(".btn-click__login");
  const loginGroup = document.querySelector('.login-group');

  btnClickLogin?.addEventListener("click", (e) => {

    if (loginGroup.style.display === "none") {
      loginGroup.style.display = "block";
    } else {
      loginGroup.style.display = "none";
    }
  });

  renderBlogsData();


}

function renderRegisterPage() {
  // console.log(1111);
  const registerHTML = `<div class="container py-3">
      <h2 class="text-center text-center-register">Đăng ký</h2>
      <hr />
      <form action="" class="register">
        <div class="mb-3">
          <label for="">Họ và tên</label>
          <input
            type="text"
            class="form-control full-name"
          />
        </div>
        <div class="mb-3">
          <label for="">Email</label>
          <input
            type="email"
            class="form-control email"
          />
        </div>
        <div class="mb-3">
          <label for="">Password</label>
          <input
            type="password"
            class="form-control password"
          />
        </div>
        <div class="d-grid">
          <button class="btn btn-create-account">Submit</button>
        </div>
      </form>
      <div class="d-grid">
        <button class="btn btn-Login-page">Đăng nhập</button>
      </div>
    </div>`;

  root.innerHTML = registerHTML;

  const registerForm = document.querySelector(".register");
  registerForm?.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullNameEl = e.target.querySelector(".full-name");
    const emailEl = e.target.querySelector(".email");
    const passEl = e.target.querySelector(".password");
    const fullName = fullNameEl.value;
    const email = emailEl.value;
    const password = passEl.value;



    handleRegister({ fullName, email, password });
    fullNameEl.value = "";
    emailEl.value = "";
    passEl.value = "";
  });

  const btnLoginPage = document.querySelector(".btn-Login-page");
  btnLoginPage?.addEventListener("click", (e) => {
    const container = document.querySelector('.container');
    container.style.display = "none";
    renderLoginPage();

  })

}
