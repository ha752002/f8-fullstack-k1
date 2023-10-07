import { render } from "./ui.js";
import { client } from "./client.js";

const loading = document.getElementById("loading");
const postEl = document.querySelector(".grid__row");
const section = document.querySelector("section");

let loadingData = true;
let page = 1;
let limit = 5;


const getPortfolio = async (query = {}) => {
    loading.style.display = "block";

    const { response, data } = await client.get(`/Portfolio` + `?_limit=${limit}&_start=${(page - 1) * limit}`);
    if (data !== '') {
        page++;
    }
    render(data);
}
getPortfolio();

function handleScroll(e) {
    getPortfolio();
}
window.addEventListener("scrollend", handleScroll);

