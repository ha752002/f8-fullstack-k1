import { Footer } from '../Footer';
import { Header } from '../Header';
import './LayoutDefault.scss';

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
                            <a href="/Home">Trang chủ</a>
                        </li>
                        <li>
                            <a href="/About">About</a>
                        </li>
                        <li>
                            <a href="/Product">Sản phẩm</a>
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
