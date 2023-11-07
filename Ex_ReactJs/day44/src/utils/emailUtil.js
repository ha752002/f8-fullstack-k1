
import emailjs from '@emailjs/browser';
const emailServiceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
const emailTemplateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
const emailPublicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;
import { toast } from 'react-toastify';

export const sendEmail = async (form) => {


    await emailjs.send(emailServiceId, emailTemplateId, form, emailPublicKey).then(
        (result) => {
            toast.success('Gửi Email thành công!');
        },
        (error) => {
            console.log(error.text);
        },
    );
}