import React, { useState, useContext } from 'react';
import HomePage from './pages/HomePage/HomePage';
import Toast from './components/Toast/Toast';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

function App() {
    const colors = {
        brand: {
            900: '#1a365d',
            800: '#153e75',
            700: '#2a69ac',
        },
    };
    const theme = extendTheme({ colors });

    return (
        <>
            <ChakraProvider theme={theme}>
                <Toast />
                <HomePage />
            </ChakraProvider>
        </>
    );
}

export default App;
