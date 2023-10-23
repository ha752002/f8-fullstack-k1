import { config } from "./config.js";
import { client } from "./client.js";
import { getBlogsData, getBlogsDataById, postBlog } from "./blogProvider.js";
import {
  formatDate,
  escapeOutput,
  removeExtraSpaces,
  calculateSelectedDate,
  extractAndReplaceLinks,
  extractAndReplaceYouTubes,
  extractAndReplaceEmails,
  extractAndReplacePhones,
  notifyResponse
} from "./util.js";
import {
  checkLogin,
  handleLogin,
  handleRegister,
  getProfile,
  getInfo,
  logOut
} from "./authProvider.js";



const { SERVER_AUTH_API } = config;
client.setUrl(SERVER_AUTH_API);
const loading = document.querySelector(".loading");

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
  loading.classList.remove("d-none")
  checkLogin().then((check) => {
    if (check) {
      renderHome().then(() => {
        loading.classList.add("d-none")
      });
    } else {
      loading.classList.add("d-none")
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
  const container = document.querySelector('.container');

  blogsData.forEach(blog => {
    let date = formatDate(blog.createdAt);

    const section = document.createElement('section');
    section.classList.add('blog-section');

    const blogGroup = document.createElement('div');
    blogGroup.classList.add('blog__group');

    const dateDiv = document.createElement('div');
    dateDiv.classList.add('date');
    const dateParagraph = document.createElement('p');
    dateParagraph.textContent = `Date: ${date}`;
    dateDiv.appendChild(dateParagraph);

    const authorInfo = document.createElement('div');
    authorInfo.classList.add('author-info');

    const nameParagraph = document.createElement('p');
    nameParagraph.classList.add('author-info__name');
    nameParagraph.innerHTML = ` <a>${blog.userId.name}</a>`;

    const titleParagraph = document.createElement('p');
    titleParagraph.classList.add('author-info__title');
    titleParagraph.innerHTML = `Title: <span>${blog.title}</span>`;

    const contentParagraph = document.createElement('p');
    contentParagraph.classList.add('author-info__content');
    contentParagraph.innerHTML = `Content: `;

    const contentSpan = document.createElement('span');
    contentSpan.innerHTML = removeExtraSpaces(contentSpan.innerHTML);
    contentSpan.innerHTML = extractAndReplaceLinks(blog.content);
    contentSpan.innerHTML = extractAndReplaceYouTubes(contentSpan.innerHTML);
    contentSpan.innerHTML = extractAndReplaceEmails(contentSpan.innerHTML);
    contentSpan.innerHTML = extractAndReplacePhones(contentSpan.innerHTML);
    contentParagraph.appendChild(contentSpan);

    const linkParagraph = document.createElement('p');
    linkParagraph.classList.add('author-info__link');
    const linkAnchor = document.createElement('a');
    linkAnchor.href = '';
    linkAnchor.target = '';
    linkAnchor.textContent = 'view more...';
    linkParagraph.appendChild(linkAnchor);

    authorInfo.appendChild(nameParagraph);
    authorInfo.appendChild(titleParagraph);
    authorInfo.appendChild(contentParagraph);
    authorInfo.appendChild(linkParagraph);

    blogGroup.appendChild(dateDiv);
    blogGroup.appendChild(authorInfo);
    section.appendChild(blogGroup);

    container.appendChild(section);

    linkAnchor.addEventListener('click', (e) => {
      e.preventDefault();
      const container = document.querySelector('.container');
      if (container.style.display === "none") {
        container.style.display = "block";
      } else {
        container.style.display = "none";
      }
      // console.log(blog._id);
      loading.classList.remove("d-none");
      renderBlogDetailPage(blog._id).then(() => {
        loading.classList.add("d-none");
      });
    });
  });
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



  // const imgElement = document.createElement('img');
  // imgElement.src = 'https://i.pinimg.com/originals/47/97/b0/4797b05c719a01b177114e93c177d960.gif';

  divElement.appendChild(labelElement);
  divElement.appendChild(inputElement);
  formElement.appendChild(divElement);
  formElement.appendChild(titleTextareaElement);

  formElement.appendChild(textareaElement);
  formElement.appendChild(pElementDate);
  formElement.appendChild(inputDateElement);
  formElement.appendChild(buttonElement);

  // formElement.appendChild(imgElement);

  const profile = document.querySelector('.profile ');
  // console.log(profile);
  profile.insertAdjacentElement("afterend", formElement);




  formElement.addEventListener('submit', async (e) => {
    e.preventDefault();

    const input = document.querySelector("input[name=title]");
    const textarea = document.querySelector("textarea[name=content]");
    const inputDate = document.querySelector("input[name=date]");

    const title = escapeOutput(input.value);
    const content = escapeOutput(textarea.value);
    const timeUp = escapeOutput(inputDate.value);

    // console.log(timeUp);

    // postBlog({ title, content, timeUp }).then(() => {
    //   render();
    // });

    if (!timeUp) {
      loading.classList.remove("d-none")
      if (await checkLogin()) {
        postBlog({ title, content }).then(() => {
          render();
        });
      } else {
        render();
        notifyResponse('hết hạn đăng nhập');
      }

    } else {
      let SelectedDate = calculateSelectedDate(timeUp);
      console.log(SelectedDate);
      pElementDate.innerText = SelectedDate;
    }


  });

}

async function renderHome() {
  const userInfo = await getInfo();
  // const userInfo = { name: "ha", };
  // console.log(userInfo);

  const welcomeHTML = `<div class="container py-3">
      <ul class = "profile list-unstyled d-flex gap-2">
          <li> <span>Chào bạn:</span> ${userInfo.data.name} </li>
          <li><a href="#" class="logout">Đăng xuất</a></li>
      </ul>
      </div>`;

  root.innerHTML = welcomeHTML;
  const logout = root.querySelector(".profile .logout");
  await renderBlogsData();

  logout?.addEventListener("click", (e) => {
    e.preventDefault();
    // localStorage.removeItem("access_token");
    // localStorage.removeItem("refresh_token");
    // localStorage.removeItem("email");
    // localStorage.removeItem("name");
    logOut();
    render();
  })

  if (await checkLogin()) {
    renderForm();
  }
};

function renderLoginPage() {
  const loginHTML = `
  <div class="container py-3">
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
    loading.classList.remove("d-none")

    if (await handleLogin({ email, password })) {
      render();

    } else {
      alert("Login failed");
    }
    // emailEl.value = "";
    // passEl.value = "";
    // loading.classList.add("d-none")
  });

  const btnRegister = document.querySelector(".btn-Register-form");
  btnRegister?.addEventListener("click", (e) => {
    const container = document.querySelector('.container');

    if (container.style.display === "none") {
      container.style.display = "block";
    } else {
      container.style.display = "none";
    }

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
    loading.classList.remove("d-none");

    const fullNameEl = e.target.querySelector(".full-name");
    const emailEl = e.target.querySelector(".email");
    const passEl = e.target.querySelector(".password");
    const fullName = fullNameEl.value;
    const email = emailEl.value;
    const password = passEl.value;

    loading.classList.remove("d-none");
    handleRegister({ fullName, email, password })
      .then(() => {
        loading.classList.add("d-none");
      })
      .catch(() => {
        loading.classList.add("d-none");
      })
      .finally(() => {
        loading.classList.add("d-none");
      })

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

async function renderBlogDetailPage(id) {
  // console.log(id);

  const DataDetail = await getBlogsDataById(id);
  // loading.classList.add("d-none");

  const blogDataDetail = DataDetail.data.data;
  // console.log(blogDataDetail);

  let date = formatDate(blogDataDetail.createdAt);
  // console.log(dateBlogDataDetail);

  const detailDiv = document.createElement("div");
  detailDiv.classList.add('blog-detail');

  const section = document.createElement('section');
  section.classList.add('blog-section');

  const blogDetailHeader = document.createElement("div");
  blogDetailHeader.classList.add('blog-detail__header');

  const linkHome = document.createElement('a');
  linkHome.textContent = 'Go Home';
  blogDetailHeader.appendChild(linkHome);

  const blogGroup = document.createElement('div');
  blogGroup.classList.add('blog__group');

  const dateDiv = document.createElement('div');
  dateDiv.classList.add('date');
  const dateParagraph = document.createElement('p');
  dateParagraph.textContent = `Date: ${date}`;
  dateDiv.appendChild(dateParagraph);

  const authorInfoDiv = document.createElement('div');
  authorInfoDiv.classList.add('author-info');
  const nameParagraph = document.createElement('p');
  nameParagraph.innerHTML = `Name: <a>${blogDataDetail.userId.name}</a>`;
  const titleParagraph = document.createElement('p');
  titleParagraph.textContent = `Title: ${blogDataDetail.title}`;

  const contentParagraph = document.createElement('p');
  contentParagraph.classList.add('author-info__content');
  contentParagraph.textContent = `Content:`;

  const contentSpan = document.createElement('span');
  contentSpan.innerHTML = removeExtraSpaces(contentSpan.innerHTML);
  contentSpan.innerHTML = extractAndReplaceLinks(blogDataDetail.content);
  contentSpan.innerHTML = extractAndReplaceYouTubes(contentSpan.innerHTML);
  contentSpan.innerHTML = extractAndReplaceEmails(contentSpan.innerHTML);
  contentSpan.innerHTML = extractAndReplacePhones(contentSpan.innerHTML);
  contentParagraph.appendChild(contentSpan);

  const linkInfo = document.createElement('p');
  linkInfo.classList.add('author-info__link');
  const linkAnchor = document.createElement('a');
  linkAnchor.href = '';
  linkAnchor.target = '';
  linkAnchor.textContent = '#Ha';
  linkInfo.appendChild(linkAnchor);

  detailDiv.appendChild(section);
  section.appendChild(blogDetailHeader);
  section.appendChild(blogGroup);
  blogGroup.appendChild(dateDiv);
  blogGroup.appendChild(authorInfoDiv);
  authorInfoDiv.appendChild(nameParagraph);
  authorInfoDiv.appendChild(titleParagraph);
  authorInfoDiv.appendChild(contentParagraph);
  authorInfoDiv.appendChild(linkInfo);

  // const rootElement = document.getElementById('root'); 
  root.appendChild(detailDiv);


  blogDetailHeader.addEventListener('click', (e) => {
    e.preventDefault();

    const blogDetail = document.querySelector('.blog-detail');
    if (blogDetail.style.display === "none") {
      blogDetail.style.display = "block";
    } else {
      blogDetail.style.display = "none";
    }

    loading.classList.remove("d-none");
    render().then(() => {
      loading.classList.add("d-none");
    });
  })
}