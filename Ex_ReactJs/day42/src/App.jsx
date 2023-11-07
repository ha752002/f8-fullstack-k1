import React, { useReducer } from 'react';
import Cart from './pages/Cart/Cart';
import Loading from './components/Loading/Loading';
// notifications
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AppContext = React.createContext();

export default function App() {
    const reduce = (prev, action = {}) => {
        switch (action.type) {
            case 'loading/toggle': {
                return {
                    ...prev,
                    visible: action.payload,
                };
            }

            default:
                return prev;
        }
    };
    const [appState, dispatch] = useReducer(reduce, {
        visible: false,
    });

    const handleToggleLoading = (isVisible) => {
        dispatch({
            type: 'loading/toggle',
            payload: isVisible,
        });
    };
    return (
        <>
            <AppContext.Provider value={{ handleToggleLoading }}>
                {/* {loading(appState.visible)} */}
                <Loading visible={appState.visible} />
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />

                <div className="container  mt-3 mb-5">
                    <div className="row ">
                        <Cart />
                    </div>
                </div>
            </AppContext.Provider>
        </>
    );
}
