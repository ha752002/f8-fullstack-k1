import Home from '../pages/Home';
import About from '../pages/About';
import Product from '../pages/Products';
import ProductDetail from '../pages/ProductDetail';

const publicRoutes = [
    { path: '/Home', component: Home },
    { path: '/About', component: About },
    { path: '/Product', component: Product },
    { path: '/Product/:id', component: ProductDetail },
    { path: '', component: Home },
];

export { publicRoutes };
