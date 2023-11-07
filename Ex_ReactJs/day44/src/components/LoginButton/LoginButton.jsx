import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
    const { loginWithPopup, isAuthenticated } = useAuth0();

    const handleLogin = () => {
        loginWithPopup();
    };

    return (
        <button
            style={{
                backgroundColor: '#4274cf',
                color: 'white',
                width: '100%',
                padding: '10px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
            }}
            className="btn btn-secondary btn-lg"
            type="button"
            onClick={handleLogin}
        >
            Log In
        </button>
    );
};

export default LoginButton;
