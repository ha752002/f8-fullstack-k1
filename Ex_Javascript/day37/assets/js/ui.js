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