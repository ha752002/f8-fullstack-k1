import React from 'react';

export default function ProgressBar(props) {
    return (
        <>
            <div
                className="h-3"
                style={{ width: `${props.rate}%`, background: 'rgb(48 211 208)', height: '10px', marginBottom: '20px' }}
            ></div>
        </>
    );
}
