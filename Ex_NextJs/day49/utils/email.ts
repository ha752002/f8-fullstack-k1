import emailjs from '@emailjs/browser';
import {toast} from "react-toastify";

export const sendEmail = (form: HTMLFormElement) => {
    console.log(form)
    emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID ?? "", process.env.NEXT_PUBLIC_TEMPLATE_ID ?? "", form, process.env.NEXT_PUBLIC_PUBLIC_KEY ?? "")
        .then((result) => {
            console.log(result.text);
            toast("Thanh toán thành công")
        }, (error) => {
            console.log(error.text);
        });
};