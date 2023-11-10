import React, { createContext, useReducer } from 'react';
export const ProviderContext = createContext();
import { rootReducer } from './rootReducer';

export default function Provider({ children }) {
    const initialState = {};
    const [state, dispatch] = useReducer(rootReducer, initialState);
    //   console.log(children);
    return <ProviderContext.Provider value={{ state, dispatch }}>{children}</ProviderContext.Provider>;
}
