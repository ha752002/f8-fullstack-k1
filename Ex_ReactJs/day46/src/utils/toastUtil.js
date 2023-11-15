import { toast } from 'react-toastify';

export const customToast = (text) => {
    toast(` 🦄 ${text}`, {
        position: 'top-right',
        autoClose: 700,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'light',
        style: {
            marginTop: '70px'
        },
    })
};
