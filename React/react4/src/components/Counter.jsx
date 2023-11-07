import React from 'react';
import { useSelect } from '../core/useSelector';
export default function Counter() {
    const { state, dispatch } = useSelect();
    const handleIncrement = () => {
        dispatch({ type: 'counter/increment' });
    };
    const handleDecrement = () => {
        dispatch({ type: 'counter/decrement' });
    };

    
    return (
        <div>
            <h1>count: {state.count}</h1>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleIncrement}>+</button>
        </div>
    );
}
