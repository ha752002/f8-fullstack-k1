import { render } from "./ui.js";
import { client } from "./client.js";

const loading = document.getElementById("loading");
const postEl = document.querySelector(".grid__row");
const section = document.querySelector("section");

let loadingData = false;
let page = 1;
let limit = 6;

var viewportHeight = window.innerHeight;
document.body.style.minHeight = (viewportHeight + 0.1) + 'px';

// for (let index = 100; index < 200; index++) {
//     await client.post(`/Portfolio`, {
//         id: index,
//         image: "https://i.pinimg.com/564x/87/4f/55/874f55c0064535be4c35f322eb8bb510.jpg",
//         title: "Doddy App" + index,
//         desc: "Mobile app ui kit design" + index + "."
//     });
// }
const getPortfolio = async (query = {}) => {
    if (!loadingData) {
        loadingData = true;
        loading.style.display = "block";

        client.get(`/Portfolio` + `?_limit=${limit}&_start=${(page - 1) * limit}`).then(({ response, data }) => {
            // let data = response.data;
            if (response.status === 200) {
                if (data.length !== 0) {
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

