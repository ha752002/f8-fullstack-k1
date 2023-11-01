import React from 'react';
import { useState } from 'react';

export default function App() {
    // const [count, setCount] = useState(0);
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
    });

    // const handleClick = () => {
    //     setCount(count + 1);
    // };
    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, phone } = form;
        console.log(name, email, phone);
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    return (
        <div>
            {/* <h1>Count:{count}</h1>
            <button onClick={handleClick}>+</button> */}
            <hr />
            <form action="">
                <div>
                    <input type="text" name="name" placeholder="Name..." onChange={handleChange} />
                </div>
                <div>
                    <input type="email" name="email" placeholder="Email..." onChange={handleChange} />
                </div>
                <div>
                    <input type="tel" name="phone" placeholder="Phone..." onChange={handleChange} />
                </div>
                <button onClick={handleSubmit}>hehe</button>
            </form>
        </div>
    );
}

/*
Class
-render()-> khi bị re-render -> Gọi lại hàm này

-Class React.component:
+Lifecycle
+State

Function-> không có state, lifecycle-> Hook

Hook là gì
-Function đặc biệt
- chỉ được gọi ở cấp đầu tiên trong functional component
-Function bắt đầu bằng chữ use
*/
