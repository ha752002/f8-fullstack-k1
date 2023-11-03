import { postOrder } from "../services/cartServices";
import { toast } from 'react-toastify';


export const handleCheckout = async (body) => {
    try {
        if (body.length > 0) {
            const responseResult = await postOrder(body)
            toast.success(`bạn đã thanh toán ${responseResult.message}`);
            return true;
        }
        toast.warning('Bạn chưa thêm gì vào giỏ hàng');

    } catch (error) {
        toast.error(error.message);
    }
}

export const handleUpdateCart = (arr) => {
    localStorage.setItem('cart', JSON.stringify(arr));
}

export const handleGetCart = () => {
    // console.log(111);
    const data = localStorage.getItem('cart');
    // console.log(data);
    if (!data) {
        return [];
    }
    return JSON.parse(data);
}