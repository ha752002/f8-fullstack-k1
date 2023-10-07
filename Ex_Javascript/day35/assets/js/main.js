import { render } from "./ui.js";
import { client } from "./client.js";

const loading = document.getElementById("loading");
const postEl = document.querySelector(".grid__row");
const section = document.querySelector("section");

let loadingData = false;
let page = 1;
let limit = 6;


const getPortfolio = async (query = {}) => {
    if (!loadingData) {
        loadingData = true;
        loading.style.display = "block";

        client.get(`/Portfolio` + `?_limit=${limit}&_start=${(page - 1) * limit}`).then(({ response, data }) => {
            // let data = response.data;
            if (response.status === 200) {
                if (data !== '') {
                    page++;
                }
                // console.log(response);
                render(data);
            }
            loadingData = false;

        });

    }

}
getPortfolio();

function handleScroll(e) {
    getPortfolio();
}
window.addEventListener("scrollend", handleScroll);

