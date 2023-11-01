// import Header from './Components/Header';
import React, { Fragment } from 'react';

function App() {
    // const h1 = React.createElement(
    //     'h1',
    //     {
    //         id: 'title',
    //         className: 'title',
    //         style: {
    //             color: 'red',
    //             fontStyle: 'italic',
    //         },
    //         onClick: () => {
    //             console.log('click me');
    //         },
    //     },
    //     'hello F8',
    // );

    // const number = 10;
    // const range = [...Array(number).keys()];
    // const li = range.map((index) => React.createElement('li', {}, `Item ${index + 1}`));

    // const ul = React.createElement(
    //     'ul',
    //     {
    //         className: 'menu',
    //     },
    //     ...li,
    // );

    // const h2 = React.createElement('h2', {}, 'Học React');
    // const div = React.createElement(
    //     'div',
    //     {
    //         className: 'container',
    //     },
    //     h1,
    //     ul,
    //     h2,
    // );
    const Product = () => {
        return <h2>Danh sách sản phẩm</h2>;
    };

    const title = 'xin chao f8';
    const isPrimary = false;

    const handleClick = (text) => {
        console.log(`hi`, text);
    };

    const isLogin = false;

    //Render 1 danh sách phải chuyyenr về array
    const lists = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

    const a = undefined;
    const div2 = (
        <Fragment>
            <Product />
            <h1>{title}</h1>
            {a.get()}
            {lists.map((item, index) => (
                <h3 key={index}>{item}</h3>
            ))}
            {isLogin ? <h2>Chào mừng bạn đã quay trở lại</h2> : <h3>Vui lòng đăng nhập </h3>}
            {isLogin && (
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                    <li>Item 5</li>
                    <li>Item 6</li>
                </ul>
            )}
            <button
                className={`btn ${isPrimary ? 'btn-primary' : ''}`}
                onClick={() => {
                    handleClick('f8');
                }}
            >
                Click me
            </button>
            <div>
                {
                    // <iframe
                    //     width={560}
                    //     height={315}
                    //     src="https://www.youtube.com/embed/v3GvWkhsvUs?si=gLrId7_oy2l2DSnR"
                    //     title="YouTube video player"
                    //     // frameBorder={0}
                    //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    //     allowFullScreen=""
                    // />
                }
            </div>
        </Fragment>
    );
    return div2;
}

export default App;
