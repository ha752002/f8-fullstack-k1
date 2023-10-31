import React, { useState, useEffect } from 'react';
// import { client } from './services/API.js';
import Login from './pages/Login/index.jsx';
import Home from './pages/Home/index.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import loading from './components/Loading/loading.jsx';

export default function App() {
    const [visible, setIsVisible] = useState(true);

    return (
        <>
            {loading(visible)}
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
