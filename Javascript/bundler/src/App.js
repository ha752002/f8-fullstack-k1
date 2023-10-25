
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";

//Import từ src
import "./Assets/Styles.css";
import "./Assets/Footer.scss"
import { Header } from "./Components/header";
import { Footer } from "./Components/footer";
import config from "../Config.json";
const { SERVER_API } = config;



export const App = () => {
    return `<div>
    ${Header()}
    <main>
     <h1> Trang chu F8</h1>
     <a href="" class="btn btn-primary" > Vao he thong</a>
     <hr />
     ${moment().format('DD/MM/YYYY HH:mm:ss')}
     <hr/>
     Server API: ${SERVER_API}
    </main>
    ${Footer()}
    </div>`;
};