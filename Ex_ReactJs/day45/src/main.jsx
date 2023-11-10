import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'typeface-inter';

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <div
            style={{
                fontFamily: 'Inter, sans-serif',
                width: '60%',
                margin: '20px auto',
                color: '#319795',
                fontWeight: '700',
            }}
        >
            <App />
        </div>
    </StrictMode>,
);
