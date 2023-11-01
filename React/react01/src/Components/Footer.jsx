import React from 'react';

const Footer = (props) => {
    console.log(props);
    return (
        <div>
            <h2>Footer</h2>
            {props.children}
        </div>
    );
};

export default Footer;
