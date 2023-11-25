import React, { useCallback, useMemo, useState } from 'react';
import MoneyHistory from './MoneyHistory';

const MoneyTransfer = () => {
    const [histories, setHistories] = useState([]);
    const [cost, setCost] = useState(0);
    const handleChange = (e) => {
        setCost(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setHistories([...histories, +cost]);
        setCost('');
    };
    const total = useMemo(
        () =>
            histories.reduce((acc, cur) => {
                console.log('total');
                return acc + cur;
            }, 0),
        [histories],
    );
    const handleReset = useCallback((e) => {
        setHistories([]);
    }, []);
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="number" placeholder="Số tiền ..." onChange={handleChange} value={cost} />
                <button>Add</button>
            </form>
            <MoneyHistory histories={histories} total={total} handleReset={handleReset} />
        </div>
    );
};
export default MoneyTransfer;
