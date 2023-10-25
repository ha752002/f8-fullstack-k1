import { Footer } from '../Footer';
import { Header } from '../Header';
import './LayoutDefault.scss';
import { NavLink } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const LayoutDefault = ({ children }) => {
    return (
        <>
            <Header></Header>
            <hr />
            <main className="main">
                <div>
                    <ul>
                        <li>
                            <NavLink to="/Home">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/About">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Product">Product</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="container">{children}</div>
            </main>
            <hr />
            <Footer></Footer>
        </>
    );
};

export default LayoutDefault;
