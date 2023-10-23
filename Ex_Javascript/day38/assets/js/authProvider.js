// chuứa những cái lq đến  Authentication
import { client } from './client.js';
import { notifyResponse } from './util.js';

export const getProfile = async () => {
    const { data: dataResponse, response: response } = await client.get("/users/profile");
    console.log(response);
    return response;
};

export const getInfo = async () => {
    const { data: dataResponse, response: response } = await client.get("/users/profile");
    // console.log(response);
    return dataResponse;
};

export const checkLogin = async () => {
    const isLogin = await client.get("/auth");
    console.log(isLogin);
    if (isLogin.status === 200) {
        return true;
    } else {
        return await doRefreshToken();
    }
}

export const logOut = async () => {
    const isLogOut = await client.post("/auth/logout");

    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("email");
    localStorage.removeItem("name");

}



export const handleLogin = async (data) => {
    const { data: dataResponse, response: response } = await client.post("/auth/login", data);
    console.log(dataResponse.data);

    if (response.status === 200) {
        // console.log(dataResponse);
        notifyResponse(dataResponse.message);
        const { accessToken, refreshToken, name, email } = dataResponse.data;
        localStorage.setItem("access_token", accessToken);
        localStorage.setItem("refresh_token", refreshToken);
        return true;
    } else {
        notifyResponse(dataResponse.message);
        return dataResponse
    }
}


export async function handleRegister({ fullName, email, password }) {
    const registerData = {
        email: email,
        password: password,
        name: fullName
    };

    // console.log(registerData);
    await client.post('/auth/register', registerData)
        .then(({ response, data }) => {
            // console.log(response)
            // loading.classList.add("d-none");
            if (response.status === 201) {
                notifyResponse(data.message)
                // alert(data.message);
            } else {
                notifyResponse(data.message)

                // alert(data.message);
            }
        })
        .catch(error => {
            notifyResponse(error)
            // console.error('Lỗi trong quá trình đăng ký:', error);
        });
}

async function doRefreshToken() {
    var refreshToken = localStorage.getItem("refresh_token");
    // console.log(parseJwt(refreshToken));
    try {
        if (refreshToken) {
            const { response, data } = await client.post('/auth/refresh-token', { refreshToken })
            if (response.status === 200) {
                localStorage.setItem("access_token", data.data.token.accessToken);
                localStorage.setItem("refresh_token", data.data.token.refreshToken);
                return true;
            }

        }
        logOut();

        return false;

    } catch (error) {
        return false;
    }
}

function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

function makeFunc() {
    const name = "Mozilla";
    function displayName() {
        console.log(name);
    }
    return displayName(    // console.log(displayName);
    );
}

// makeFunc();