// Chat.js
import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelect } from '../core/useSelector';
import { ProviderContext } from '../core/Provider';

export default function Chat() {
    const [msg, setStateMsg] = useState();
    const { state, addMsg } = useContext(ProviderContext);

    const handleAddItem = (e) => {
        e.preventDefault();
        if (msg.trim() !== '') {
            addMsg(msg);
            setStateMsg('');
        }
        
        console.log(msg);
    };

    return (
        <div className="container" style={{ margin: '50px' }}>
            <div className="chat my-3">
                <div className="message" style={{ border: '1px solid black', padding: '10px' }}>
                    {state.msg.map((item, index) => (
                        <div className="mb-2" key={index}>
                            {item}
                        </div>
                    ))}
                    <div className="mb-2">
                        <h1>Hi</h1>
                    </div>
                </div>
                <form action="" className="mt-3">
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Sản phẩm..."
                            value={msg}
                            onChange={(e) => setStateMsg(e.target.value)}
                        />
                        <button className="btn btn-primary" type="button" onClick={handleAddItem}>
                            Thêm vào giỏ hàng
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
