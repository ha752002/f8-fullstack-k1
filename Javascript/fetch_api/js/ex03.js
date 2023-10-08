import { config } from "./config.js";
import { client } from "./client.js";
// import { PAGE_LIMIT } from "./config.js";

const { PAGE_LIMIT } = config;
const renderPaginate = (totalPage) => {
  const paginateEl = document.querySelector(".paginate");

  paginateEl.innerText = "";
  if (totalPage > 1) {
    const spanPrev = document.createElement("span");

    if (currentPage > 1) {
      const aPrev = document.createElement("a");
      aPrev.href = "#";
      aPrev.addEventListener("click", (e) => {
        e.preventDefault();
        goPage(--currentPage);
      });
      aPrev.innerText = "Prev";
      spanPrev.append(aPrev);
      paginateEl.append(spanPrev);
    }

    for (let page = 1; page <= totalPage; page++) {
      // console.log(currentPage);
      const span = document.createElement("span");
      if (+page === +currentPage) {
        span.classList.add("active");
      }
      const a = document.createElement("a");
      a.href = "#";
      a.innerText = page;
      a.addEventListener("click", (e) => {
        e.preventDefault();
        goPage(page);
      });
      span.append(a);
      paginateEl.append(span);
    }

    if (currentPage < totalPage) {
      const spanNext = document.createElement("span");
      const aNext = document.createElement("a");
      aNext.href = "#";
      aNext.addEventListener("click", (e) => {
        e.preventDefault();
        goPage(++currentPage);
      });
      aNext.innerText = "Next";
      spanNext.append(aNext);
      paginateEl.append(spanNext);
    }
  }
};
const goPage = (page) => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });

  currentPage = page;

  getPosts({
    _sort: sort,
    _order: order,
    _limit: limit,
    _page: currentPage,
    q: keyWord,
  });
};

const render = (posts) => {
  const postsEl = document.querySelector(".posts");
  postsEl.innerText = ``;
  if (posts.length) {
    posts.forEach(({ id, title, excerpt }) => {
      const postsItem = document.createElement("div");
      postsItem.classList.add("post-item");
      const h2 = document.createElement("h2");
      const a = document.createElement("a");
      a.innerText = title;
      a.href = "#";
      h2.append(a);
      postsItem.append(h2);

      const p = document.createElement("p");
      p.innerText = excerpt;
      postsItem.append(p);
      postsEl.append(postsItem);
    });
  }
};

const getPosts = async (query = {}) => {
  const queryString = new URLSearchParams(query).toString();
  const { response, data } = await client.get(`/posts?${queryString}`);

  const total = response.headers.get("x-total-count");

  const totalPage = Math.ceil(total / PAGE_LIMIT);
  renderPaginate(totalPage);

  render(data);
};

let sort = "id";
let order = "desc";
let keyWord = "";
let limit = PAGE_LIMIT;
let currentPage = 1;

getPosts({
  _sort: sort,
  _order: order,
  _limit: limit,
  _page: currentPage,
});

const searchForm = document.querySelector(".search");
