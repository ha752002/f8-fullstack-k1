import { fetchApiKey } from '../../services/AuthService.js';
import { toast } from 'react-toastify';

export const handleLogin = async (email) => {
    try {
        const dataResponse = await fetchApiKey(email);

        if (dataResponse.code === 200) {
            const apikey = dataResponse.data.apiKey;

            // alert(dataResponse.message);
            toast.success('Đăng nhập thành công');
            localStorage.setItem("apikey", apikey);
            return true;
        } else {
            toast.success(dataResponse.message);
            return false;
        }
    } catch (error) {
        toast.error("Xảy ra lỗi trong quá trình xử lý đăng nhập:", error)
        // console.error("Xảy ra lỗi trong quá trình xử lý đăng nhập:", error);
        return false;
    }
}