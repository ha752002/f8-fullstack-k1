import React, { useState } from 'react';
import { handleLogin } from './Login';
import { useNavigate } from 'react-router-dom';
// import Style from '../../assets/loading/loading.module.scss/';
// import { ThreeDots } from 'react-loader-spinner';

import Styles from './Login.module.scss/';
import clsx from 'clsx';
import loading from '../../components/Loading/loading';

function Login() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const [visible, setIsVisible] = useState(false);

    // let [color, setColor] = useState('#00e5ff');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const emailValue = email;

        // console.log(emailValue);
        setIsVisible(true);
        await handleLogin(emailValue).then((check) => {
            if (check) {
                // console.log(11);
                navigate('/home');
            } else {
                setIsVisible(false);
            }
        });
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    // useEffect(() => {
    //     setIsLoading(false);
    // });
    return (
        <>
            {loading(visible)}
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
