import moment from "moment/moment";

export const Home = () => {
    const today = moment().format("YYYY-MM-DD");
    return `<h1>Home</h1>
    <h2>${today}</h2>
    `;
}