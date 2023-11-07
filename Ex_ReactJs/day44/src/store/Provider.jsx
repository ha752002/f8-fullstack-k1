import React, { createContext, useReducer } from 'react';
export const ProviderContext = createContext();
import { rootReducer } from './rootReducer';
import { Auth0Provider } from '@auth0/auth0-react';
const auth0Domain = import.meta.env.VITE_AUTH0_DOMAIN;
const auth0ClientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

export default function Provider({ children }) {
    const initialState = {
        visible: true,
    };
    const [state, dispatch] = useReducer(rootReducer, initialState);
    //   console.log(children);
    return (
        <ProviderContext.Provider value={{ state, dispatch }}>
            <Auth0Provider
                domain={auth0Domain}
                clientId={auth0ClientId}
                authorizationParams={{
                    redirect_uri: window.location.origin,
                }}
            >
                {children}
            </Auth0Provider>
        </ProviderContext.Provider>
    );
}
