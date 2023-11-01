import React from 'react';

const Menu = (props) => {
    const { menu, onReceiveData } = props;
    const handleClick = () => {
        onReceiveData('Hello F8');
        props.name = '123';
        console.log(props.name);
    };
    return (
        <>
            <nav className="menu">
                {menu?.length &&
                    menu?.map(({ id, link, title }) => (
                        <li key={id}>
                            <a href={link}>{title}</a>
                        </li>
                    ))}
            </nav>
            <hr />
            <button onClick={handleClick}>Click me</button>
        </>
    );
};

export default Menu;
