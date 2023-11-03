import { login, getUserProfile } from "../services/AuthService";
import { toast } from 'react-toastify';

export const handleLogin = async (requestParam) => {
    try {
        const responseResult = await login(requestParam);
        // console.log(responseResult);
        localStorage.setItem('API_Key', responseResult.data.apiKey);
        // console.log(localStorage.getItem('API_Key'));
        toast.success(responseResult.message);
        return true;
    } catch (error) {
        toast.error(error.message);

    }
}

export const checkLogin = async () => {
    try {
        const responseResult = await getUserProfile();
        // console.log(responseResult);

        if (responseResult.data) {
            return responseResult.data;
        }

    } catch (error) {
        toast.error(error.message);

    }
}

