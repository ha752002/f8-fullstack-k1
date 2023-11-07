import React, { useReducer } from 'react';

const Counter = () => {
    /**
     * action: object
     * - type: Tên hành động: add, update, delete, increment, ...
     * - payload: dữ liệu của hành động
     */
    const reducer = (state, action = {}) => {
        switch (action.type) {
            case 'counter/add': {
                return { ...state, count: state.count + 1 };
            }
            case 'counter/desc': {
                return { ...state, count: state.count - 1 };
            }
            default: {
                return state;
            }
        }

        console.log(prev, current);
        return current;
    };

    const [state, dispatch] = useReducer(reducer, {
        count: 0,
    });

    const handleIncrement = () => {
        dispatch({
            type: 'counter/add',
        });
    };
    return (
        <div>
            <h1>Counter: {state.count}</h1>
            <button onClick={handleIncrement}>+</button>
            <button>-</button>
        </div>
    );
};

export default Counter;
