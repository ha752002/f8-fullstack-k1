import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { toast } from 'react-toastify';

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    useEffect(() => {
        toast.success(`Xin Chào ${user.name}`);
    }, []);

    return (
        isAuthenticated && (
            <div>
                <div className="d-flex justify-content-center">
                    <img src={user.picture} className="rounded-circle" alt={user.name} style={{ width: '96px' }} />
                </div>
                <h6 className="card-title text-center">Xin Chào {user.name}</h6>
                <p className="card-text" style={{ fontSize: '1.1rem', marginBottom: '10px' }}>
                    <span style={{ fontWeight: ' 600' }}> Email</span> :{user.email}
                </p>
            </div>
        )
    );
};

export default Profile;
