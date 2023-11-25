// file color.jsx
import React from 'react';

const Color = (Component) => {
    const color = '#' + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, '0');
    // kế thừa logic
    return function MyComponent() {
        console.log(color);
        return (
            <div className="color" style={{ color }}>
                <Component />
            </div>
        );
    };
};

export default Color;
