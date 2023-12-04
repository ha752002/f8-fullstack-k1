import React from 'react';
import Products from './components/Products/Products.jsx';
import Home from './pages/Home/Home.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx';
import MainLayout from './layout/MainLayout/MainLayout.jsx';
import CartPage from './pages/CartPage/CartPage.jsx';
import Loading from './components/Loading/Loading.jsx';
import Toast from './components/Toast/Toast.jsx';
import ProductDetail from './components/Products/component/ProductDetail.jsx';

function App(props) {
    return (
        <>
            <Toast />
            <Loading />
            <Router>
                <Routes>
                    <Route path="" exact={true} element={<MainLayout />}>
                        <Route path="*" exact={true} element={<NotFoundPage />} />
                        <Route path="/home/:page" exact={true} element={<Home />} />
                        <Route path="/home" exact={true} element={<Home />} />
                        <Route path="" exact={true} element={<Home />} />
                        <Route path="/cart" exact={true} element={<CartPage />} />
                        <Route path="/detail/:name/:id" exact={true} element={<ProductDetail />} />
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
