import { fetchApiKey } from '../../services/AuthService.js';

export const handleLogin = async (email) => {
    try {
        const dataResponse = await fetchApiKey(email);

        if (dataResponse.code === 200) {
            const apikey = dataResponse.data.apiKey;
            alert(dataResponse.message);
            localStorage.setItem("apikey", apikey);
            return true;
        } else {
            alert(dataResponse.message);
            return false;
        }
    } catch (error) {
        console.error("Xảy ra lỗi trong quá trình xử lý đăng nhập:", error);
        return false;
    }
}