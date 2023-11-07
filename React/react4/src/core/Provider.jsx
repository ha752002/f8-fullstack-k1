import React, { createContext, useReducer } from 'react';
import { rootReducer } from './rootReducer';

export const ProviderContext = createContext();
const Provider = ({ children }) => {
    const initialState = {
        count: 0,
        msg: [],

    };
    
    const [state, dispatch] = useReducer(rootReducer, initialState);

    const addMsg = (msg) => {
        dispatch({
            type: 'message/sent',
            msg,
        });
    };
    
    return <ProviderContext.Provider value={{ state, dispatch, addMsg }}>{children}</ProviderContext.Provider>;
};

export default Provider;
