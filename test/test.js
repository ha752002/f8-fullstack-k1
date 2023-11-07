const axios = require("axios");

const axiosClient = axios.create({
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});
axiosClient.post("https://tech-lab-project-caef7808b8e6.herokuapp.com/api/v1/auth/register", JSON.stringify({
    email: "bach@gmail.com",
    password: "Bach@1312",
    reEnterPassword: "Bach@1312"
})).then(result => {
    console.log(result);
})