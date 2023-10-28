import React, { Component } from 'react';
// import { client } from './services/API.js';
import Login from './pages/Login/index.jsx';
import Home from './pages/Home/index.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// const query = 'ha.nth.838@aptechlearning.edu.vn';

export default class App extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </Router>
        );
    }
}
