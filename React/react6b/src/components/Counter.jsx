import {useDispatch, useSelector} from "react-redux";

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.count);
    return (
        <div>
            <h1>Count: {count}</h1>
            <button
                onClick={() => {
                    dispatch({type: "counter/decrement", payload: 10});
                }}
            >-
            </button>
            <button
                onClick={() => {
                    dispatch({type: "counter/increment", payload: 10});
                }}
            >
                +
            </button>
        </div>
    );
};

export default Counter;

/*
useDispatch() --> Trả về hàm dispatch
useSelector() --> Get State Global
*/