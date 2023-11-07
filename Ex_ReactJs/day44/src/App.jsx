import React, { useEffect } from 'react';
import WelCome from './pages/WelcomeMessage/WelcomeMessage';
import { useAuth0 } from '@auth0/auth0-react';
import HomePage from './pages/HomePage/HomePage';
import Loading from './components/Loading/Loading';
import { useSelector } from './store/useContext';
import Toast from './components/Toast/Toast';

export default function App() {
    const { isAuthenticated } = useAuth0();

    const { state, dispatch } = useSelector();

    const handleToggleLoading = (isVisible) => {
        dispatch({
            type: 'loading/toggle',
            payload: isVisible,
        });
    };

    useEffect(() => {
        setTimeout(() => {
            handleToggleLoading(false);
        }, 1000);
    }, []);

    return (
        <div>
            <Toast />
            <Loading visible={state.visible} />
            {!isAuthenticated ? <WelCome /> : <HomePage />}
        </div>
    );
}
