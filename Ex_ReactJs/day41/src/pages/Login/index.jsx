import React, { useState, useEffect } from 'react';
import { handleLogin } from './Login';
import { useNavigate } from 'react-router-dom';
import { checkLogin } from '../../services/AuthService';

import Styles from './Login.module.scss/';
import clsx from 'clsx';

function Login({ toggleLoading }) {
    const [formState, setFormState] = useState({
        email: '',
    });
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const emailValue = formState.email;

        // console.log(emailValue);
        toggleLoading(true);
        handleLogin(emailValue).then((check) => {
            if (check) {
                // console.log(11);
                navigate('/home');
            } else {
                toggleLoading(false);
            }
        });
    };

    const handleEmailChange = (event) => {
        setFormState({
            ...formState,
            email: event.target.value,
        });
    };

    useEffect(() => {
        checkLogin().then((check) => {
            if (check) {
                navigate('/home');
            }
        });

        setTimeout(() => {
            toggleLoading(false);
        }, 2000);
        console.log(111);
    }, []);

    return (
        <>
            <div className={clsx(Styles.form_login)}>
                <form onSubmit={handleSubmit} className={clsx(Styles.form_login_wrapper)}>
                    <input
                        type="text"
                        placeholder="Vui lòng nhập Email"
                        value={formState.email}
                        onChange={handleEmailChange}
                    />
                    <button type="submit" className={clsx(Styles.btn_submit)}>
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
}

export default Login;
