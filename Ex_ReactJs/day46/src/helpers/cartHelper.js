import {getProductDetail, getProducts} from "../services/cartServices.js";
import {customToast} from "../utils/toastUtil.js";

const handleGetProducts =async  (requestParam) => {
    try {
        return await getProducts(requestParam)
    }catch (err) {
        customToast(`🙂 ${err.message}`)
    }
}

const handleGetProductDetail = async  (idProduct) => {
    try {
        return await getProductDetail(idProduct)
    }catch (err) {
        customToast(`🙂 ${err.message}`)
    }
}


export {handleGetProducts,handleGetProductDetail}
