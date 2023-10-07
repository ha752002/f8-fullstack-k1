import { config } from "./config.js";
import { client } from "./client.js";

// const { SERVER_API } = config;

const render = (posts) => {
    const postEl = document.querySelector(".posts");

    postEl.innerText = '';
    if (posts.length) {
        posts.forEach(({ id, title, excerpt }) => {
            const postItem = document.createElement("div");
            postItem.classList.add('post-item');

            const h2 = document.createElement("h2");
            const a = document.createElement("a");

            a.innerText = title;
            a.href = "#";
            h2.append(a);
            postItem.append(h2);


            const p = document.createElement("p");
            p.innerText = excerpt;
            postItem.append(p);


            postEl.append(postItem);
        })
    }



}

const getPost = async (query = {}) => {

    const queryString = new URLSearchParams(query).toString();

    const { response, data } = await client.get(`/posts?${queryString}`);
    // console.log(data);
    render(data);
}
let sort = "id";
let order = "desc";
let keyword = "";


getPost({
    _sort: sort,
    _order: order,
});

const searchForm = document.querySelector('.search');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    keyword = e.target.children[0].value;
    getPost({
        q: keyword,
        _sort: sort,
        _order: order
    })
})


const sortByEl = document.querySelector('.sort-by');
sortByEl.addEventListener('change', (e) => {
    order = e.target.value === "latest" ? "desc" : "asc";

    getPost({
        q: keyword,
        __sort: 'sort',
        _order: 'order',
    })
})
















/* <div class="post-item">
          <h2><a href="#">Tiêu đề bài viết</a></h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            nihil error voluptatibus natus obcaecati at, minima quisquam dolores
            quidem rerum.
          </p>
        </div>
        <div class="post-item">
          <h2><a href="#">Tiêu đề bài viết</a></h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            nihil error voluptatibus natus obcaecati at, minima quisquam dolores
            quidem rerum.
          </p>
        </div>
        <div class="post-item">
          <h2><a href="#">Tiêu đề bài viết</a></h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            nihil error voluptatibus natus obcaecati at, minima quisquam dolores
            quidem rerum.
          </p>
        </div> */