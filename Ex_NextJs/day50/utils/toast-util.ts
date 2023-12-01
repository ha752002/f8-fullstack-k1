import {toast} from 'react-toastify';

export const customToast = (text: string) => {
    toast(` 🦄 ${text}`, {
        position: 'top-right',
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'light',
        style: {
            marginTop: '30px'
        },
    })
};
