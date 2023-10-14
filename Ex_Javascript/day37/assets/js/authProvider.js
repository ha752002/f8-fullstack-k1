// chuứa những cái lq đến  Authentication
import { client } from './client.js';

export async function checkLogin() {
    var accessToken = localStorage.getItem("access_token");

    if (checkExpired(accessToken)) {
        // khi hết hạn rồi 
        // gọi hàm để freshToken 
        return await doRefreshToken();
    }
    return true;
}

export const handleLogin = async (data) => {
    const { data: dataResponse, response: response } = await client.post("/auth/login", data);

    if (response.status === 200) {
        const { accessToken, refreshToken, name, email } = dataResponse.data;
        localStorage.setItem("access_token", accessToken);
        localStorage.setItem("refresh_token", refreshToken);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);

        return true;

    } else {
        return false;
    }
}


export function handleRegister({ fullName, email, password }) {
    const registerData = {
        email: email,
        password: password,
        name: fullName
    };

    client.post('/auth/register', registerData)
        .then(({ response, data }) => {
            if (response.status === 201) {
                alert(data.message);
                console.log(1111);
            } else {
                alert(data.message);
            }
        })
        .catch(error => {
            console.error('Lỗi trong quá trình đăng ký:', error);
        });
}

// checkExpired check xem còn hạn hay k 
// nó true là hết hạn
function checkExpired(token) {
    // const token = localStorage.getItem("access_token");
    // console.log(token);
    try {
        if (token) {
            const jsonDecode = parseJwt(token);
            const currentDate = new Date();
            const expiredDate = new Date(jsonDecode.exp * 1000);

            if (expiredDate <= currentDate.getTime()) {
                return true;
            }

            return false;
        }

        return true;
    } catch (error) {
        console.log(error);
        return true;

    }
}


async function doRefreshToken() {
    var refreshToken = localStorage.getItem("refresh_token");
    // console.log(parseJwt(refreshToken));
    try {
        if (!checkExpired(refreshToken)) {
            const { response, data } = await client.post('/auth/refresh-token', { refreshToken })
            if (response.status === 200) {
                // console.log(data);
                localStorage.setItem("access_token", data.data.token.accessToken);

                return true;
            }
            return false;
        }
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