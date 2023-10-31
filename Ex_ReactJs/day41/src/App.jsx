import React, { useState } from 'react';
import Login from './pages/Login/index.jsx';
import Home from './pages/Home/index.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import loading from './components/Loading/loading.jsx';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
    const [visible, setIsVisible] = useState(true);

    return (
        <>
            {loading(visible)}
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
            {/* Same as */}
            <ToastContainer />
            <Router>
                <Routes>
                    <Route path="/" element={<Home toggleLoading={setIsVisible} />} />
                    <Route path="/home" element={<Home toggleLoading={setIsVisible} />} />
                    <Route path="/login" element={<Login toggleLoading={setIsVisible} />} />
                </Routes>
            </Router>
        </>
    );
}
