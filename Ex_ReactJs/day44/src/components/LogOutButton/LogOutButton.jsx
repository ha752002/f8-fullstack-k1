import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button
                className="btn btn-secondary btn-block mt-3"
                style={{ background: '#2612ffa6' }}
                onClick={() => logout({ returnTo: window.location.origin })}
            >
                Log Out
            </button>
        </div>
    );
};

export default LogoutButton;
