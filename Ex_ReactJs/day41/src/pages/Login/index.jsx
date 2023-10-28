import React, { useState } from 'react';
import { handleLogin } from './Login';
import { useNavigate } from 'react-router-dom';
// import Style from '../../assets/loading/loading.module.scss/';

import Styles from './Login.module.scss/';
import clsx from 'clsx';

function Login() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        const emailValue = email;

        // console.log(emailValue);
        await handleLogin(emailValue).then((check) => {
            if (check) {
                setIsLoading(false);
                // console.log(11);
                navigate('/home');
            } else {
                setIsLoading(false);
            }
        });
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    return (
        <>
            <div className={clsx(Styles.form_login)}>
                <form onSubmit={handleSubmit} className={clsx(Styles.form_login_wrapper)}>
                    <input type="text" placeholder="Vui lòng nhập Email" value={email} onChange={handleEmailChange} />
                    <button type="submit" className={clsx(Styles.btn_submit)}>
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
}

export default Login;
